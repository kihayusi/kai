import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { useReducedMotion } from "framer-motion";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { InvitationIntro } from "@/components/InvitationIntro";

vi.mock("framer-motion", async (getOriginal) => ({
  ...(await getOriginal<typeof import("framer-motion")>()),
  useReducedMotion: vi.fn(() => false),
}));

beforeEach(() => vi.mocked(useReducedMotion).mockReturnValue(false));
afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("Invitation opening", () => {
  it("opens only once when the envelope is clicked repeatedly", () => {
    vi.useFakeTimers();
    const onOpen = vi.fn();
    render(<InvitationIntro onOpen={onOpen} />);
    const start = screen.getByRole("button", { name: "Open the invitation" });
    fireEvent.click(start);
    fireEvent.click(start);
    act(() => vi.advanceTimersByTime(2599));
    expect(onOpen).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(1));
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it.each([false, true])("lets guests skip immediately with reduced motion %s", (reduce) => {
    vi.mocked(useReducedMotion).mockReturnValue(reduce);
    const onOpen = vi.fn();
    render(<InvitationIntro onOpen={onOpen} />);
    fireEvent.click(screen.getByRole("button", { name: "Skip to the invitation" }));
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it("shows a brief opening before continuing with reduced motion", () => {
    vi.useFakeTimers();
    vi.mocked(useReducedMotion).mockReturnValue(true);
    const onOpen = vi.fn();
    render(<InvitationIntro onOpen={onOpen} />);
    const start = screen.getByRole("button", { name: "Open the invitation" });
    fireEvent.click(start);
    expect(start).toBeDisabled();
    expect(
      screen.getByRole("region", { name: "Welcome to the safari invitation" }),
    ).toHaveAttribute("data-opening", "true");
    act(() => vi.advanceTimersByTime(649));
    expect(onOpen).not.toHaveBeenCalled();
    act(() => vi.advanceTimersByTime(1));
    expect(onOpen).toHaveBeenCalledTimes(1);
  });

  it.each([false, true])("cleans up a pending opening with reduced motion %s", (reduce) => {
    vi.mocked(useReducedMotion).mockReturnValue(reduce);
    vi.useFakeTimers();
    document.body.style.overflow = "auto";
    const onOpen = vi.fn();
    const { unmount } = render(<InvitationIntro onOpen={onOpen} />);
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.click(screen.getByRole("button", { name: "Open the invitation" }));
    unmount();
    act(() => vi.advanceTimersByTime(3000));
    expect(onOpen).not.toHaveBeenCalled();
    expect(document.body.style.overflow).toBe("auto");
    document.body.style.overflow = "";
  });
});
