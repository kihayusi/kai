import { act, cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { InvitationPage } from "@/components/InvitationPage";
import { invitation, mapsUrl, monthlyPhotos } from "@/config/invitation";

vi.mock("framer-motion", async (getOriginal) => ({
  ...(await getOriginal<typeof import("framer-motion")>()),
  useReducedMotion: vi.fn(() => false),
}));
vi.mock("@/components/animations/Reveal", () => ({
  Reveal: ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
  ParallaxLayer: ({ children, className }: { children: ReactNode; className?: string }) => (
    <div className={className}>{children}</div>
  ),
}));
beforeEach(() => vi.mocked(useReducedMotion).mockReturnValue(false));
afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("Storybook invitation", () => {
  it("keeps directions and memories without the RSVP button", () => {
    render(<InvitationPage />);
    expect(screen.getByRole("link", { name: "Get directions" })).toHaveAttribute("href", mapsUrl);
    expect(
      screen.queryByRole("link", { name: `RSVP to ${invitation.contact.name}` }),
    ).not.toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /View .+’s month \d+ photo/ })).toHaveLength(
      monthlyPhotos.length,
    );
  });

  it("greets guests when they tap an animal with reduced motion", () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    render(<InvitationPage />);
    const lion = screen.getByRole("button", { name: "Say hello to the lion" });
    fireEvent.click(lion);
    expect(lion).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("A little roar, a lot of love!")).toBeInTheDocument();
    fireEvent.click(lion);
    expect(lion).toHaveAttribute("aria-pressed", "false");
    fireEvent.click(screen.getByRole("button", { name: "Say hello to the elephant" }));
    expect(screen.getByText("So happy you’re coming!")).toBeInTheDocument();
  });

  it("honors the system reduced-motion preference", () => {
    vi.mocked(useReducedMotion).mockReturnValue(true);
    const { container } = render(<InvitationPage />);
    expect(container.querySelector(".safari-world")).toHaveAttribute("data-motion", "paused");
  });

  it("opens the selected photo and returns focus after closing", async () => {
    render(<InvitationPage />);
    const trigger = screen.getByRole("button", { name: "View Angelo’s month 3 photo" });
    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByRole("img", { name: "Angelo, month 3" })).toHaveAttribute(
      "src",
      monthlyPhotos[2]?.photo,
    );
    fireEvent.click(within(dialog).getByRole("button", { name: "Close" }));
    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });

  it("stops the countdown at zero after the event begins", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(new Date(invitation.eventDateTime).getTime() - 1000));
    render(<InvitationPage />);
    const timer = screen.getByRole("timer");
    expect(within(timer).getByText("01")).toBeInTheDocument();
    act(() => vi.advanceTimersByTime(2000));
    expect(within(timer).getAllByText("00")).toHaveLength(4);
    expect(screen.getByText("Our adventure day is here!")).toBeInTheDocument();
  });
});
