import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import {
  Baby,
  BookOpen,
  CalendarPlus,
  Clock,
  Compass,
  Gift,
  Heart,
  Mail,
  MapPin,
  Puzzle,
  Shirt,
  Sparkles,
  Ticket,
  Trees,
  Users,
} from "lucide-react";
import animals from "@/assets/animals/animals-group.png";
import leaves from "@/assets/leaves/leaves-corner.png";
import safariMap from "@/assets/backgrounds/safari-map.jpg";
import childPhoto from "@/assets/photos/child.jpg";
import {
  closing,
  dressCode,
  giftGuide,
  invitation,
  mapLandmarks,
  mapsUrl,
  milestones,
  reminders,
} from "@/config/invitation";
import { JungleCanopyMorph, LeafDivider, MorphDivider, ParallaxLayer, Reveal } from "./animations/Reveal";
import {
  CartoonMonkey,
  ExplorerBinoculars,
  HangingVines,
  PawPrintIcon,
  RibbonBanner,
  SafariHatIcon,
  SafariShirtIcon,
  TropicalToucan,
  TwigBorderFrame,
  VintageCompass,
  WoodenSignPost,
} from "./SafariDecorations";

const iconMap = {
  book: BookOpen,
  shirt: Shirt,
  puzzle: Puzzle,
  baby: Baby,
  gift: Gift,
  clock: Clock,
  users: Users,
  mail: Mail,
  ticket: Ticket,
  trees: Trees,
  heart: Heart,
};

function Section({
  children,
  id,
  className = "",
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden px-5 sm:px-6 py-12 sm:py-16 text-center ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ eyebrow, script, subtitle }: { eyebrow: string; script: string; subtitle?: string }) {
  return (
    <Reveal>
      <div className="mb-2 flex items-center justify-center gap-2">
        <span className="h-px w-6 bg-[#A07844]/40" />
        <p className="eyebrow text-[#8B6B38] font-sans text-[11px] font-bold tracking-[0.3em] uppercase">
          {eyebrow}
        </p>
        <span className="h-px w-6 bg-[#A07844]/40" />
      </div>
      <h2 className="font-script text-4xl sm:text-5xl text-[#234932] leading-tight drop-shadow-sm font-normal">
        {script}
      </h2>
      {subtitle && <p className="mt-1 font-serif italic text-xs sm:text-sm text-[#7A5B35]">{subtitle}</p>}
      <LeafDivider />
    </Reveal>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D5A38]";
const btnPrimary = `${btnBase} bg-gradient-to-r from-[#2B5438] to-[#1F3F2A] text-[#FAF5ED] shadow-md hover:shadow-lg hover:from-[#356745] hover:to-[#264D34]`;
const btnGhost = `${btnBase} bg-[#FAF5ED]/90 border-2 border-[#8B6538]/50 text-[#5C3F20] shadow-sm hover:bg-[#FAF5ED] hover:border-[#8B6538]`;

/* ─────────────────────────────────────────────────────────────
   1. HERO SECTION (SafariHero)
   ───────────────────────────────────────────────────────────── */
export function SafariHero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 pt-1 pb-12 text-center">
      {/* Hanging Vines from Top Rim */}
      <div className="relative -mx-6 -mt-1">
        <HangingVines />
      </div>

      {/* Hero Typography: LET'S GET WILD Birthday */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-2"
      >
        <p className="font-serif text-xs sm:text-sm font-bold tracking-[0.4em] text-[#7A552C] uppercase">
          LET'S GET
        </p>
        <h1 className="font-serif text-7xl sm:text-8xl font-black leading-none tracking-tight text-[#22442A] drop-shadow-sm">
          WILD
        </h1>
        <p className="mt-1 font-script text-3xl sm:text-4xl text-[#A66E2E]">
          Birthday
        </p>
      </motion.div>

      {/* Arched Child Portrait with Gold Border & Animals Nestled at Base */}
      <div className="relative mx-auto mt-5 w-64 sm:w-72">
        {/* Soft Golden Sunbeam Halo */}
        <div className="absolute inset-0 -top-6 rounded-full bg-gradient-to-b from-[#E9C46A]/25 to-transparent blur-xl pointer-events-none" />

        {/* Arch Frame */}
        <motion.div
          className="relative mx-auto w-52 sm:w-60 overflow-hidden rounded-t-full border-[5px] border-[#D4AF37] shadow-xl bg-[#FAF5EC]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={invitation.childPhoto}
            alt={invitation.childName}
            width={832}
            height={1024}
            className="aspect-[4/5] w-full object-cover rounded-t-full"
          />
        </motion.div>

        {/* Safari Animals Group Clustered Around Base */}
        <ParallaxLayer speed={0.15} className="relative z-10 mx-auto -mt-16 sm:-mt-20 w-72 sm:w-80">
          <img
            src={animals}
            alt="Safari animal friends"
            width={1280}
            height={832}
            className="drop-shadow-lg"
          />
        </ParallaxLayer>
      </div>

      {/* Forest Green Ribbon Banner with Child Name */}
      <Reveal delay={0.3} className="relative z-20 -mt-2">
        <RibbonBanner text={invitation.childName} />
      </Reveal>

      {/* First Birthday Calligraphy Script */}
      <Reveal delay={0.4} className="mt-2.5">
        <p className="font-script text-4xl sm:text-5xl text-[#6B4B27] drop-shadow-sm">
          {invitation.age === 1 ? "First Birthday" : `${invitation.age}th Birthday`}
        </p>
      </Reveal>
    </section>
  );
}
export { SafariHero as InvitationHero };

/* ─────────────────────────────────────────────────────────────
   2. WHERE & WHEN (EventDetails)
   ───────────────────────────────────────────────────────────── */
function getGoogleCalendarUrl() {
  const start = new Date(invitation.eventDateTime);
  const end = new Date(start.getTime() + invitation.durationHours * 3600_000);
  const format = (d: Date) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `${invitation.childName}'s ${invitation.theme} First Birthday`,
    dates: `${format(start)}/${format(end)}`,
    location: `${invitation.venue}, ${invitation.address}`,
    details: `Join us for ${invitation.childName}'s Safari 1st Birthday Adventure!`,
  });
  return `https://calendar.google.com/calendar/render?${params}`;
}

export function EventDetails() {
  return (
    <Section id="details" className="relative">
      {/* Decorative Compass Accent */}
      <div className="absolute -top-3 -left-4 pointer-events-none opacity-40 sm:opacity-80">
        <VintageCompass size={54} />
      </div>

      <SectionTitle eyebrow="JOIN THE ADVENTURE" script="Where & When" subtitle="Mark your expedition calendars" />

      {/* 3-Column Date & Time Badge */}
      <Reveal delay={0.1}>
        <div className="mx-auto max-w-sm rounded-2xl bg-[#FAF5ED]/90 p-5 shadow-sm border border-[#DCCBB0]/70">
          <div className="flex items-center justify-between font-serif text-[#5C3E1F]">
            {/* Day of Week */}
            <div className="flex-1 text-center">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8C6D38] block font-sans">
                Day of
              </span>
              <span className="mt-1 block border-y border-[#B89F7D]/50 py-1.5 font-serif text-sm font-semibold tracking-wider">
                {invitation.dayLabel}
              </span>
            </div>

            {/* Big Date Number */}
            <div className="flex-1 px-2 text-center">
              <span className="font-serif text-6xl sm:text-7xl font-bold leading-none text-[#234932] block drop-shadow-sm">
                {invitation.day}
              </span>
              <span className="mt-1 block text-[11px] font-bold uppercase tracking-[0.28em] text-[#8C6D38] font-sans">
                {invitation.monthYear.split(" ")[0]}
              </span>
            </div>

            {/* Time */}
            <div className="flex-1 text-center">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#8C6D38] block font-sans">
                Time
              </span>
              <span className="mt-1 block border-y border-[#B89F7D]/50 py-1.5 font-serif text-sm font-semibold tracking-wider">
                {invitation.time}
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Venue Parchment Card */}
      <Reveal delay={0.2} className="mt-5">
        <div className="relative mx-auto max-w-sm rounded-2xl bg-gradient-to-b from-[#FFFDF9] to-[#F5ECE0] p-6 shadow-md border-2 border-dashed border-[#C5A059]/60 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#E5D7BF] text-[#2B5438] shadow-inner mb-3">
            <MapPin size={24} className="text-[#A44222]" />
          </div>
          <p className="font-serif text-2xl font-bold text-[#234932]">{invitation.venue}</p>
          <p className="mt-1.5 text-xs sm:text-sm text-[#6C5335] leading-relaxed">{invitation.address}</p>

          <div className="mt-4 pt-3 border-t border-[#D6C4A5]/60 flex items-center justify-center gap-2 text-xs font-semibold text-[#8B6538]">
            <Sparkles size={14} className="text-[#C5A059]" />
            <span>Gates open at 3:30 PM for registration</span>
          </div>
        </div>
      </Reveal>

      {/* Action Buttons */}
      <Reveal delay={0.3} className="mt-6 flex flex-wrap justify-center gap-3">
        <a href={mapsUrl} target="_blank" rel="noreferrer" className={btnPrimary}>
          <MapPin size={16} /> View Location
        </a>
        <a href={getGoogleCalendarUrl()} target="_blank" rel="noreferrer" className={btnGhost}>
          <CalendarPlus size={16} /> Add to Calendar
        </a>
      </Reveal>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   3. COUNTDOWN (Countdown)
   ───────────────────────────────────────────────────────────── */
function useCountdown(target: string) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  if (now === null) return null;
  const diff = Math.max(0, new Date(target).getTime() - now);
  return {
    done: diff === 0,
    parts: [
      ["Days", Math.floor(diff / 864e5)],
      ["Hours", Math.floor(diff / 36e5) % 24],
      ["Minutes", Math.floor(diff / 6e4) % 60],
      ["Seconds", Math.floor(diff / 1e3) % 60],
    ] as const,
  };
}

export function Countdown() {
  const c = useCountdown(invitation.eventDateTime);

  return (
    <>
      <MorphDivider color="fill-[#EFE8DC]/50" />
      <Section id="countdown" className="bg-[#EFE8DC]/50">
        <SectionTitle eyebrow="THE ADVENTURE BEGINS IN" script="Countdown" />

      <Reveal delay={0.1}>
        <div className="relative mx-auto max-w-sm pt-6 pb-2">
          {/* Hanging Ropes */}
          <div className="mx-auto flex w-[78%] justify-between -mb-2" aria-hidden>
            <div className="flex flex-col items-center">
              <span className="h-6 w-2.5 bg-gradient-to-b from-[#8C6239] to-[#5C3818] rounded-t-sm shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-[#3D2510] -mt-1 shadow-inner" />
            </div>
            <div className="flex flex-col items-center">
              <span className="h-6 w-2.5 bg-gradient-to-b from-[#8C6239] to-[#5C3818] rounded-t-sm shadow-sm" />
              <span className="h-3 w-3 rounded-full bg-[#3D2510] -mt-1 shadow-inner" />
            </div>
          </div>

          {/* Cute Monkey Hanging on Left */}
          <div className="absolute -left-5 top-2 z-20 pointer-events-none drop-shadow-md">
            <CartoonMonkey size={54} />
          </div>

          {/* Tropical Toucan Perched on Right */}
          <div className="absolute -right-3 -top-3 z-20 pointer-events-none drop-shadow-md">
            <TropicalToucan size={48} />
          </div>

          {/* Rustic Wood Plank Board */}
          <div className="relative z-10 rounded-2xl bg-gradient-to-b from-[#8B5A2B] via-[#6E4420] to-[#523014] p-5 sm:p-6 text-[#FAF5ED] shadow-xl border-4 border-[#3D220E]">
            {/* Wood Grain Lines */}
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(0deg,#000_0px,#000_2px,transparent_2px,transparent_10px)] rounded-xl pointer-events-none" />

            {/* Corner Screws */}
            <span className="absolute top-2 left-2 h-2.5 w-2.5 rounded-full bg-[#C5A059] border border-[#3D220E] shadow-inner" />
            <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-[#C5A059] border border-[#3D220E] shadow-inner" />
            <span className="absolute bottom-2 left-2 h-2.5 w-2.5 rounded-full bg-[#C5A059] border border-[#3D220E] shadow-inner" />
            <span className="absolute bottom-2 right-2 h-2.5 w-2.5 rounded-full bg-[#C5A059] border border-[#3D220E] shadow-inner" />

            {c?.done ? (
              <p className="font-script text-3xl sm:text-4xl text-[#FFD166] drop-shadow-md">
                🎉 The Wild Celebration is Today! 🎉
              </p>
            ) : (
              <div className="grid grid-cols-4 gap-2 text-center relative z-10">
                {(c?.parts ?? [["Days", 0], ["Hours", 0], ["Minutes", 0], ["Seconds", 0]]).map(([label, val]) => (
                  <div key={label} className="rounded-lg bg-[#3F230F]/60 p-2 border border-[#9A6D38]/40 shadow-inner">
                    <AnimatePresence mode="popLayout">
                      <motion.p
                        key={val}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0 }}
                        className="font-serif text-3xl sm:text-4xl font-bold tabular-nums text-[#FAF5ED] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                      >
                        {String(val).padStart(2, "0")}
                      </motion.p>
                    </AnimatePresence>
                    <p className="mt-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#E6BA88] font-sans">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tropical foliage at bottom */}
          <img
            src={leaves}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute -bottom-7 -left-8 w-24 -scale-y-100 opacity-90 drop-shadow-sm"
          />
          <img
            src={leaves}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute -bottom-7 -right-8 w-24 -scale-100 opacity-90 drop-shadow-sm"
          />
        </div>
      </Reveal>
      </Section>
      <MorphDivider flip color="fill-[#EFE8DC]/50" />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   4. OUR SAFARI MAP (SafariMap)
   ───────────────────────────────────────────────────────────── */
export function SafariMap() {
  return (
    <Section id="map">
      <SectionTitle eyebrow="FIND YOUR WAY" script="Our Safari Map" subtitle="Expedition trails & key base camps" />

      <Reveal delay={0.15}>
        <div className="relative mx-auto max-w-md">
          {/* Map Frame */}
          <div className="relative overflow-hidden rounded-3xl border-4 border-[#FAF5EC] shadow-2xl bg-[#EBE1D0]">
            <img
              src={safariMap}
              alt="Illustrated map of the safari venue"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full object-cover"
            />

            {/* Landmark Badges */}
            {mapLandmarks.map((landmark, i) => (
              <motion.span
                key={landmark.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#FAF5ED]/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4A3219] shadow-md border border-[#D5C2A5] font-sans"
                style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <MapPin size={10} className="mr-1 inline text-[#C84B31]" />
                {landmark.label}
              </motion.span>
            ))}

            {/* Polaroid photo of smiling boy overlapping map bottom-right */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-28 sm:w-32 bg-[#FAF5EC] p-2 pb-5 shadow-2xl border border-[#D8C7A5] transform rotate-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <img
                src={invitation.childPhoto}
                alt="Explorer"
                className="aspect-square w-full object-cover rounded-sm"
              />
              <span className="mt-1 block text-center font-script text-xs text-[#5C3B1E]">Our Explorer</span>
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3} className="mt-6">
        <a href={mapsUrl} target="_blank" rel="noreferrer" className={btnGhost}>
          <Compass size={16} /> Open in Google Maps
        </a>
      </Reveal>
    </Section>
  );
}

/* ─────────────────────────────────────────────────────────────
   5. GIFT GUIDE (GiftGuide)
   ───────────────────────────────────────────────────────────── */
export function GiftGuide() {
  const guideItems = [
    { label: "Story Books", icon: "book", desc: "Wild safari adventures" },
    { label: "Safari Clothes", icon: "shirt", desc: "Size 12-18 months" },
    { label: "Safari Toys", icon: "puzzle", desc: "Puzzles & discovery" },
    { label: "Baby Essentials", icon: "baby", desc: "Daily care favorites" },
    { label: "Cash Gifts", icon: "gift", desc: "For explorer's fund" },
    { label: "Keepsakes", icon: "heart", desc: "Treasured memories" },
  ];

  return (
    <>
      <MorphDivider color="fill-[#EFE8DC]/50" />
      <Section id="gifts" className="bg-[#EFE8DC]/50">
        <SectionTitle eyebrow="FOR OUR LITTLE EXPLORER" script="Gift Guide" />

        {/* Circular Child Photo Frame at Top */}
        <Reveal delay={0.1} className="mx-auto -mt-2 mb-6 w-24">
          <div className="relative mx-auto h-20 w-20 rounded-full border-4 border-[#D4AF37] p-1 shadow-md bg-[#FAF5EC]">
            <img
              src={invitation.childPhoto}
              alt={invitation.childName}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto max-w-sm font-serif text-base sm:text-lg italic leading-relaxed text-[#5C4325]">
            "{giftGuide.message}"
          </p>
        </Reveal>

        {/* 2x3 Grid of Rounded Item Cards */}
        <div className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-3.5 sm:grid-cols-3">
          {guideItems.map((item, idx) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || Gift;
            return (
              <Reveal key={item.label} delay={idx * 0.07}>
                <div className="group rounded-2xl bg-[#FAF5EC] p-4 text-center shadow-sm border border-[#DECBB3] transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAE0D0] to-[#DFD0BC] text-[#244A2F] shadow-inner">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <p className="mt-2.5 font-serif text-sm font-bold text-[#3B2815]">{item.label}</p>
                  <p className="mt-0.5 text-[10px] text-[#7A6145] leading-tight">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <MorphDivider flip color="fill-[#EFE8DC]/50" />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   6. REMINDERS & GUIDELINES (ReminderCards)
   ───────────────────────────────────────────────────────────── */
export function ReminderCards() {
  return (
    <Section id="reminders">
      <SectionTitle eyebrow="BEFORE THE TREK" script="Reminders & Guidelines" subtitle="Important notes for our expedition guests" />

      <div className="mx-auto max-w-sm space-y-6">
        {/* Twig Border Frame: Reminders */}
        <Reveal delay={0.1}>
          <TwigBorderFrame title="Reminders">
            <ul className="space-y-3.5 text-left text-xs sm:text-sm text-[#4A341E]">
              {reminders.map((r, i) => (
                <li key={i} className="flex items-start gap-3">
                  <PawPrintIcon size={16} className="mt-0.5" />
                  <span className="leading-snug">{r.text}</span>
                </li>
              ))}
            </ul>

            {/* Binoculars Graphic */}
            <div className="mt-4 flex justify-end">
              <ExplorerBinoculars size={44} className="opacity-75" />
            </div>
          </TwigBorderFrame>
        </Reveal>

        {/* Botanical Guidelines Photo Banner */}
        <Reveal delay={0.2}>
          <div className="relative overflow-hidden rounded-2xl bg-[#FAF5EC] p-4 border border-[#DECBB3] shadow-sm text-center">
            <div className="relative mx-auto w-36 overflow-hidden rounded-full border-3 border-[#D4AF37] shadow-md">
              <img
                src={childPhoto}
                alt="Guidelines Explorer"
                className="aspect-square w-full object-cover"
              />
            </div>
            <p className="mt-3 font-script text-2xl text-[#234932]">Explorer Guidelines</p>
            <p className="mt-1 text-xs text-[#6C5335] leading-relaxed">
              Capture wild memories & tag us! Free parking available near entrance gate.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
export { ReminderCards as Reminders };

/* ─────────────────────────────────────────────────────────────
   7. DRESS CODE ("For the Wild Ones")
   ───────────────────────────────────────────────────────────── */
export function DressCode() {
  const dressCodeSwatches = [
    { name: "Cream", color: "#F7F2E7", border: "#D8C7A5" },
    { name: "Sand", color: "#E0D0B6", border: "#C5B293" },
    { name: "Khaki", color: "#C4AC86", border: "#A88E65" },
    { name: "Brown", color: "#7B512C", border: "#5C3B1E" },
    { name: "Olive", color: "#667A4E", border: "#4F613A" },
    { name: "Forest", color: "#25482F", border: "#183320" },
  ];

  return (
    <>
      <MorphDivider color="fill-[#EFE8DC]/50" />
      <Section id="dress" className="bg-[#EFE8DC]/50">
        <SectionTitle eyebrow={dressCode.title} script={dressCode.subtitle} subtitle="Dress comfortably for the safari expedition" />

        {/* Color Palette Chips */}
        <Reveal delay={0.15}>
          <div className="mx-auto flex max-w-sm flex-wrap justify-center gap-4">
            {dressCodeSwatches.map((item) => (
              <div key={item.name} className="flex flex-col items-center gap-1.5">
                <span
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-md transition-transform duration-200 hover:scale-110"
                  style={{ backgroundColor: item.color, border: `3px solid ${item.border}` }}
                />
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C4022] font-sans">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Safari Explorer Outfit Diagrams */}
        <Reveal delay={0.25} className="mt-8">
          <div className="mx-auto flex max-w-xs items-center justify-center gap-8 text-[#5C4022]">
            <div className="flex flex-col items-center">
              <SafariHatIcon size={52} />
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#7A5830] font-sans">
                Safari Hat
              </span>
            </div>
            <div className="flex flex-col items-center">
              <SafariShirtIcon size={50} />
              <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[#7A5830] font-sans">
                Safari Uniform
              </span>
            </div>
          </div>
          <p className="mt-5 font-serif text-sm sm:text-base italic text-[#6B4B27]">
            {dressCode.note}
          </p>
        </Reveal>
      </Section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   8. FOOTER SECTION (SafariFooter)
   ───────────────────────────────────────────────────────────── */
export function SafariFooter() {
  return (
    <div className="relative">
      <JungleCanopyMorph />
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1E3F2B] via-[#173322] to-[#102418] px-6 pt-10 pb-12 text-center text-[#FAF5ED]">
      {/* Top Foliage Arch Border */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-10 opacity-30 bg-[radial-gradient(ellipse_at_top,#FFF_0%,transparent_70%)]" />

      {/* Arched Baby Portrait surrounded by watercolor animals */}
      <Reveal delay={0.1}>
        <div className="relative mx-auto w-52 sm:w-60">
          <div className="mx-auto w-40 sm:w-44 overflow-hidden rounded-t-full border-4 border-[#D4AF37]/90 shadow-2xl bg-[#FAF5EC]">
            <img
              src={invitation.childPhoto}
              alt={invitation.childName}
              className="aspect-[4/5] w-full object-cover rounded-t-full"
            />
          </div>
          <div className="relative z-10 mx-auto -mt-12 w-56 sm:w-64">
            <img src={animals} alt="Safari friends" className="drop-shadow-lg" />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-4">
        <p className="font-script text-4xl sm:text-5xl text-[#FFD166] leading-tight drop-shadow-md">
          {closing.message}
        </p>
        <p className="mt-4 font-serif text-2xl sm:text-3xl font-bold tracking-widest text-[#FAF5ED] uppercase">
          {invitation.childName}
        </p>
        <p className="eyebrow mt-2 text-[#D4AF37]">
          {invitation.dateLabel} · {invitation.time}
        </p>
        <div className="mt-5 inline-block rounded-full bg-[#FAF5ED]/10 backdrop-blur-sm px-6 py-2 border border-[#D4AF37]/30">
          <p className="text-xs sm:text-sm text-[#FAF5ED]/90">
            RSVP to <span className="font-semibold">{invitation.contact.name}</span> · {invitation.contact.phone}
          </p>
        </div>
      </Reveal>

      <p className="mt-10 text-[10px] tracking-widest uppercase text-[#FAF5ED]/40 font-sans">
        Wild One Safari Birthday Expedition · {invitation.monthYear}
      </p>
      </section>
    </div>
  );
}
export { SafariFooter as InvitationFooter };

export function MilestoneGallery() {
  return (
    <Section id="milestones" className="bg-[#FAF5EC]">
      <SectionTitle eyebrow="A YEAR OF ADVENTURES" script="Little Explorer" subtitle="From newborn to one wild year" />
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 sm:-mx-6 sm:px-6">
        {milestones.map(({ label, photo }) => (
          <figure key={label} className="w-36 shrink-0 snap-center overflow-hidden rounded-t-full rounded-b-xl border-2 border-[#D4AF37] bg-white shadow-md sm:w-40">
            <img src={photo} alt={`${invitation.nickname} at ${label}`} className="aspect-[3/4] w-full object-cover" />
            <figcaption className="px-2 py-3 font-serif text-xs font-bold text-[#285137]">{label}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
