import { MotionConfig, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Baby,
  BookOpen,
  Clock3,
  Compass,
  Gift,
  Heart,
  MapPin,
  PawPrint,
  Shirt,
  Sparkles,
  ToyBrick,
} from "lucide-react";
import safariMap from "@/assets/backgrounds/safari-map.jpg";
import elephant from "@/assets/storybook/elephant.webp";
import {
  closing,
  dressCode,
  giftGuide,
  invitation,
  mapsUrl,
  monthlyPhotos,
  reminders,
} from "@/config/invitation";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "./ui/dialog";
import { Reveal, ParallaxLayer } from "./animations/Reveal";
import { AnimalFriend, Foliage } from "./SafariArtwork";

const giftIcons = [BookOpen, Shirt, ToyBrick, Baby, Gift];
const phoneLink = `tel:${invitation.contact.phone.replace(/[^+\d]/g, "")}`;

function ChapterHeading({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <>
      <p className="safari-eyebrow chapter-label">
        <span>{number}</span>
        {label}
      </p>
      <h2 className="chapter-title">{children}</h2>
    </>
  );
}

function CountdownBoard() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);
  const remaining =
    now === null ? null : Math.max(0, new Date(invitation.eventDateTime).getTime() - now);
  const values =
    remaining === null
      ? null
      : [
          Math.floor(remaining / 86_400_000),
          Math.floor(remaining / 3_600_000) % 24,
          Math.floor(remaining / 60_000) % 60,
          Math.floor(remaining / 1000) % 60,
        ];
  return (
    <div className="safari-countdown" aria-label="Countdown to the celebration">
      <p className="safari-eyebrow">Counting down to the good stuff</p>
      <div className="countdown-digits" role="timer" aria-live="off">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <div key={label}>
            <strong>{values ? String(values[index]).padStart(2, "0") : "—"}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <p className="countdown-note">
        {remaining === 0 ? "Our adventure day is here!" : "We can hardly wait to see you."}
      </p>
    </div>
  );
}

export function InvitationPage() {
  const reduce = useReducedMotion();
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const photoTrigger = useRef<HTMLButtonElement | null>(null);
  const motionEnabled = !reduce;
  const selectedPhoto = monthlyPhotos.find(({ month }) => month === selectedMonth);

  return (
    <MotionConfig reducedMotion={motionEnabled ? "user" : "always"}>
      <div id="home" className="safari-world" data-motion={motionEnabled ? "playing" : "paused"}>
        <a className="safari-skip-link" href="#details">
          Skip to event details
        </a>
        <header className="safari-header">
          <a
            href="#home"
            className="safari-wordmark"
            aria-label={`${invitation.nickname}’s birthday invitation, back to top`}
          >
            <Compass size={29} strokeWidth={1.2} aria-hidden="true" />
            <span>
              {invitation.nickname}’s<span>first adventure</span>
            </span>
          </a>
          <nav className="safari-nav" aria-label="Invitation sections">
            <a href="#details">The celebration</a>
            <a href="#map">Getting there</a>
            <a href="#milestones">His little story</a>
          </nav>
        </header>

        <main>
          <section className="storybook-hero" aria-labelledby="hero-title">
            <div className="hero-landscape" aria-hidden="true" />
            <div className="hero-grid safari-container">
              <div className="hero-copy">
                <p className="safari-eyebrow">
                  <span className="tiny-sun" aria-hidden="true">
                    ✳
                  </span>{" "}
                  A wild one celebration
                </p>
                <h1 id="hero-title" tabIndex={-1}>
                  Small feet.
                  <br />
                  Big <em>adventure.</em>
                </h1>
                <p className="hero-introduction">A whole year of wonder with</p>
                <p className="hero-child-name">{invitation.childName}</p>
                <p className="hero-description">
                  Our little explorer is turning {invitation.age === 1 ? "one" : invitation.age}.
                  <br />
                  Come make a little birthday magic with us.
                </p>
                <a className="safari-button" href="#details">
                  You’re part of the adventure <ArrowDown size={16} aria-hidden="true" />
                </a>
                <p className="hero-date">
                  <span>{invitation.dateLabel}</span>
                  <span aria-hidden="true">✦</span>
                  <span>{invitation.time}</span>
                </p>
              </div>
              <div className="hero-portrait-scene">
                <ParallaxLayer className="portrait-foliage-layer" speed={motionEnabled ? 0.14 : 0}>
                  <Foliage className="portrait-foliage portrait-foliage--left" />
                  <Foliage className="portrait-foliage portrait-foliage--right" />
                </ParallaxLayer>
                <div className="portrait-orbit" aria-hidden="true" />
                <div className="explorer-portrait">
                  <img
                    src={invitation.childPhoto}
                    alt={`${invitation.childName}, our little birthday explorer`}
                    fetchPriority="high"
                  />
                </div>
                <div className="birthday-stamp">
                  <span>Our little</span>
                  <strong>{invitation.age === 1 ? "one" : invitation.age}</strong>
                  <span>wild wonder</span>
                </div>
                <AnimalFriend animal="lion" motionEnabled={motionEnabled} />
                <AnimalFriend animal="elephant" motionEnabled={motionEnabled} />
                <span className="portrait-spark portrait-spark--one" aria-hidden="true">
                  ✧
                </span>
                <span className="portrait-spark portrait-spark--two" aria-hidden="true">
                  ✧
                </span>
                <p className="animal-hint">
                  Psst… tap a safari friend <Heart size={12} aria-hidden="true" />
                </p>
              </div>
            </div>
            <a className="hero-scroll" href="#details">
              <span>Let the story unfold</span>
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </section>

          <section id="details" className="celebration-section safari-section">
            <div className="safari-container">
              <Reveal className="celebration-heading">
                <ChapterHeading number="01" label="Save a little date">
                  One very <em>special day.</em>
                </ChapterHeading>
                <p className="chapter-copy">
                  Good company, tiny adventures, and a whole lot of love.
                  <br />
                  The only thing missing is you.
                </p>
              </Reveal>
              <Reveal className="celebration-layout">
                <div className="expedition-ticket">
                  <div className="ticket-date">
                    <span>{invitation.dayLabel}</span>
                    <strong>{invitation.day}</strong>
                    <span>{invitation.monthYear}</span>
                    <PawPrint size={20} strokeWidth={1.2} aria-hidden="true" />
                  </div>
                  <div className="ticket-details">
                    <span className="safari-eyebrow">Your invitation to explore</span>
                    <h3>
                      Let’s celebrate
                      <br />
                      our little wild one.
                    </h3>
                    <p>
                      <Clock3 size={16} aria-hidden="true" />
                      {invitation.time}
                    </p>
                    <p>
                      <MapPin size={16} aria-hidden="true" />
                      {invitation.venue}
                    </p>
                    <a className="safari-text-link" href="#map">
                      Find our little gathering <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  </div>
                  <span className="ticket-edge" aria-hidden="true">
                    ADMIT ALL OUR FAVORITE PEOPLE
                  </span>
                </div>
                <CountdownBoard />
              </Reveal>
            </div>
          </section>

          <section id="map" className="map-chapter safari-section">
            <div className="safari-container map-layout">
              <Reveal className="storybook-map">
                <div className="map-paper">
                  <img
                    src={safariMap}
                    alt="Watercolor illustration of a safari garden, with winding paths, huts, and a pond"
                    loading="lazy"
                    width={1024}
                    height={1024}
                  />
                  <span className="map-paper-note">
                    <Compass size={16} strokeWidth={1.2} aria-hidden="true" /> Adventure is this way
                  </span>
                </div>
                <span className="map-corner-note">x marks the happy place</span>
              </Reveal>
              <Reveal className="map-copy" delay={0.1}>
                <ChapterHeading number="02" label="Follow the little footprints">
                  Meet us in
                  <br />
                  <em>the wild.</em>
                </ChapterHeading>
                <p className="chapter-copy">
                  A lovely little place for a very big milestone. Follow the trail and we’ll meet
                  you there.
                </p>
                <div className="venue-address-block">
                  <MapPin size={22} strokeWidth={1.3} aria-hidden="true" />
                  <div>
                    <h3>{invitation.venue}</h3>
                    <p>{invitation.address}</p>
                  </div>
                </div>
                <a className="safari-button" href={mapsUrl} target="_blank" rel="noreferrer">
                  Get directions <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <p className="map-note">
                  The map is a little illustration. Use the directions link for your journey.
                </p>
                <div className="little-paw-trail" aria-hidden="true">
                  <PawPrint />
                  <PawPrint />
                  <PawPrint />
                </div>
              </Reveal>
            </div>
          </section>

          <section id="milestones" className="milestones-chapter safari-section">
            <Foliage className="milestone-canopy" />
            <div className="safari-container">
              <Reveal className="milestones-heading">
                <ChapterHeading number="03" label="The adventure so far">
                  Twelve months.
                  <br />
                  <em>A world of firsts.</em>
                </ChapterHeading>
                <p className="chapter-copy">
                  From the tiniest hello to our biggest little love.
                  <br />A few pages from {invitation.nickname}’s first chapter.
                </p>
                <p className="gallery-hint">
                  <Sparkles size={14} aria-hidden="true" /> Tap a memory for a closer look
                </p>
              </Reveal>
              <div className="memory-grid">
                {monthlyPhotos.map(({ month, photo }) => (
                  <Reveal key={month} delay={(month % 4) * 0.035}>
                    <button
                      className="memory-card"
                      onClick={(event) => {
                        photoTrigger.current = event.currentTarget;
                        setSelectedMonth(month);
                      }}
                      aria-label={`View ${invitation.nickname}’s month ${month} photo`}
                    >
                      <span className="memory-tape" aria-hidden="true" />
                      <span className="memory-photo">
                        <img
                          src={photo}
                          alt={`${invitation.nickname} at ${month} ${month === 1 ? "month" : "months"}`}
                          loading="lazy"
                        />
                        <span className="memory-number">{String(month).padStart(2, "0")}</span>
                      </span>
                      <span className="memory-caption">
                        {month === 12
                          ? "One wild year"
                          : `${month} ${month === 1 ? "month" : "months"}`}
                        <Heart size={12} strokeWidth={1} aria-hidden="true" />
                      </span>
                    </button>
                  </Reveal>
                ))}
              </div>
              <p className="chapter-endnote">And the best adventures are still to come.</p>
            </div>
          </section>

          <section className="fieldnotes-section safari-section">
            <div className="safari-container">
              <Reveal className="fieldnotes-heading">
                <ChapterHeading number="04" label="A few field notes">
                  Little details.
                  <br />
                  <em>Lots of love.</em>
                </ChapterHeading>
              </Reveal>
              <div className="fieldnotes-grid">
                <Reveal className="dress-note">
                  <section id="dress">
                    <span className="note-icon">
                      <Shirt size={25} strokeWidth={1.1} aria-hidden="true" />
                    </span>
                    <h3>Come a little wild.</h3>
                    <p>
                      {dressCode.subtitle}. Think earthy shades, comfy clothes, and little explorer
                      energy.
                    </p>
                    <div className="safari-swatches">
                      {dressCode.colors.map((color) => (
                        <div key={color.name}>
                          <span style={{ backgroundColor: color.value }} />
                          <small>{color.name}</small>
                        </div>
                      ))}
                    </div>
                    <p className="handwritten-note">{dressCode.note}</p>
                  </section>
                </Reveal>
                <Reveal className="gift-note" delay={0.08}>
                  <section id="gifts">
                    <span className="note-icon">
                      <Gift size={25} strokeWidth={1.1} aria-hidden="true" />
                    </span>
                    <h3>Your presence is the present.</h3>
                    <p>{giftGuide.message}</p>
                    <ul className="safari-gift-list">
                      {giftGuide.items.map((item, index) => {
                        const Icon = giftIcons[index] ?? Gift;
                        return (
                          <li key={item.label}>
                            <Icon size={18} strokeWidth={1.3} aria-hidden="true" />
                            {item.label}
                          </li>
                        );
                      })}
                    </ul>
                  </section>
                </Reveal>
              </div>
              <Reveal>
                <section id="reminders" className="explorer-notes">
                  <div>
                    <Compass size={27} strokeWidth={1} aria-hidden="true" />
                    <h3>
                      A happy little adventure
                      <br />
                      for everyone.
                    </h3>
                    <p>
                      Little explorers are welcome. Please keep them close and enjoy the adventure
                      together.
                    </p>
                  </div>
                  <ul>
                    {reminders.map((reminder) => (
                      <li key={reminder.text}>
                        <PawPrint size={14} aria-hidden="true" />
                        <span>{reminder.text}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            </div>
          </section>
        </main>

        <footer id="rsvp" className="safari-footer">
          <Foliage className="footer-foliage footer-foliage--left" />
          <Foliage className="footer-foliage footer-foliage--right" />
          <Reveal className="footer-copy">
            <p className="safari-eyebrow">The best adventures are shared</p>
            <h2>
              Come for the cake.
              <br />
              <em>Stay for the memories.</em>
            </h2>
            <p>{closing.message}</p>
            <span className="footer-deadline">Kindly let us know by {invitation.rsvpDeadline}</span>
            <a className="footer-phone" href={phoneLink}>
              {invitation.contact.phone}
            </a>
          </Reveal>
          <div className="footer-signoff">
            <img src={elephant} alt="" aria-hidden="true" loading="lazy" />
            <p>
              With love, <span>{invitation.childName} & family</span>
            </p>
          </div>
          <div className="footer-bottom">
            <span>{invitation.nickname}’s first adventure</span>
            <span>
              {invitation.dateLabel} <span aria-hidden="true">✦</span> {invitation.time}
            </span>
            <a href="#home">
              Back to the treetops <ArrowRight size={13} aria-hidden="true" />
            </a>
          </div>
        </footer>

        <Dialog
          open={selectedMonth !== null}
          onOpenChange={(open) => {
            if (!open) setSelectedMonth(null);
          }}
        >
          <DialogContent
            className="memory-dialog"
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              photoTrigger.current?.focus();
            }}
          >
            <DialogTitle>{invitation.nickname}’s little adventures</DialogTitle>
            <DialogDescription>
              {selectedMonth === 12 ? "One wild year" : `Month ${selectedMonth ?? 1}`} · A memory to
              keep
            </DialogDescription>
            {selectedPhoto && (
              <img
                src={selectedPhoto.photo}
                alt={`${invitation.nickname}, month ${selectedPhoto.month}`}
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </MotionConfig>
  );
}
