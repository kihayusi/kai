// Single source of truth for all invitation content. Edit here — no component changes needed.
import childPhoto from "@/assets/photos/child.jpg";
import month1Photo from "@/assets/bday-date-pic/1months.jpg";
import month2Photo from "@/assets/bday-date-pic/2months.jpg";
import month3Photo from "@/assets/bday-date-pic/3months.jpg";
import month4Photo from "@/assets/bday-date-pic/4monts.jpg";
import month5Photo from "@/assets/bday-date-pic/5months.jpg";
import month6Photo from "@/assets/bday-date-pic/6monts.jpg";
import month7Photo from "@/assets/bday-date-pic/7monts.jpg";
import month8Photo from "@/assets/bday-date-pic/8m,onths.jpg";
import month9Photo from "@/assets/bday-date-pic/9monts.jpg";
import month10Photo from "@/assets/bday-date-pic/10months.jpg";

export const invitation = {
  childName: "Kai Dane Banaag Tanjoco",
  nickname: "Kai",
  age: 1,
  childPhoto: month3Photo,
  // ISO date-time with timezone offset of the venue
  eventDateTime: "2026-12-05T16:00:00+08:00",
  dayLabel: "Saturday",
  day: "05",
  monthYear: "December 2026",
  dateLabel: "December 5, 2026",
  time: "4:00 PM",
  durationHours: 4,
  venue: "Baldog",
  address: "San Carlos City, Pangasinan",
  latitude: 15.9094307,
  longitude: 120.3264824,
  rsvpDeadline: "November 23, 2026",
  contact: { name: "Mommy & Daddy", phone: "+63 912 345 6789" },
  theme: "Safari",
};

export const mapsUrl = "https://maps.app.goo.gl/tCC3TYwvEnf3JcS27";

export const mapLandmarks = [
  { label: "Entrance", x: 52, y: 88 },
  { label: "Parking", x: 22, y: 78 },
  { label: "Reception", x: 64, y: 18 },
  { label: "Photo Area", x: 66, y: 50 },
  { label: "Activity Area", x: 38, y: 64 },
  { label: "Campfire", x: 28, y: 16 },
];

export const giftGuide = {
  message:
    "Having you celebrate with us is already the greatest gift. If you would like to bring something for our little explorer, here are a few ideas.",
  items: [
    { label: "Books", icon: "book" },
    { label: "Clothes", icon: "shirt" },
    { label: "Educational Toys", icon: "puzzle" },
    { label: "Baby Essentials", icon: "baby" },
    { label: "Cash Gift", icon: "gift" },
  ],
} as const;

export const reminders = [
  { text: "Please arrive on time.", icon: "clock" },
  { text: "Parents, kindly supervise your little ones.", icon: "users" },
  { text: `RSVP before ${invitation.rsvpDeadline}.`, icon: "mail" },
  { text: "Bring your invitation or QR code at the gate.", icon: "ticket" },
  { text: "Please follow the venue rules.", icon: "trees" },
] as const;

export const dressCode = {
  title: "Dress Code",
  subtitle: "For the Wild Ones",
  colors: [
    { name: "Cream", value: "oklch(0.95 0.025 85)" },
    { name: "Beige", value: "oklch(0.86 0.045 80)" },
    { name: "Khaki", value: "oklch(0.76 0.07 85)" },
    { name: "Brown", value: "oklch(0.48 0.07 55)" },
    { name: "Olive", value: "oklch(0.55 0.08 115)" },
    { name: "Forest", value: "oklch(0.38 0.07 150)" },
  ],
  note: "Safari prints are welcome!",
};

const months = ["Newborn", ...Array.from({ length: 11 }, (_, i) => `${i + 1} Month${i ? "s" : ""}`), "1 Year"];
// Replace `photo` per milestone with your own imports.
export const milestones = months.map((label) => ({ label, photo: childPhoto }));

export const monthlyPhotos = [
  month1Photo,
  month2Photo,
  month3Photo,
  month4Photo,
  month5Photo,
  month6Photo,
  month7Photo,
  month8Photo,
  month9Photo,
  month10Photo,
  // Keep placeholders until the month 11 and 12 photos are available.
  childPhoto,
  childPhoto,
].map((photo, index) => ({
  month: index + 1,
  photo,
}));

export const closing = {
  message: "Can't wait to celebrate with you!",
};
