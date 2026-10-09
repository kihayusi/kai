import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { invitation } from "@/config/invitation";
import { InvitationPage } from "@/components/InvitationPage";
import { InvitationIntro } from "@/components/InvitationIntro";

const title = `${invitation.childName}'s Wild One — Safari First Birthday`;
const description = `Join us on ${invitation.dateLabel} at ${invitation.venue} to celebrate ${invitation.childName}'s safari birthday.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div inert={!opened} aria-hidden={!opened}>
        <InvitationPage />
      </div>
      <AnimatePresence
        onExitComplete={() => document.getElementById("hero-title")?.focus({ preventScroll: true })}
      >
        {!opened && <InvitationIntro onOpen={() => setOpened(true)} />}
      </AnimatePresence>
    </>
  );
}
