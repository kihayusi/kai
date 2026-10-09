import type { ReactNode } from "react";
import { Binoculars, Bird, Compass, HatGlasses, PawPrint, Shirt } from "lucide-react";

type IconProps = { size?: number; className?: string };

export function HangingVines() {
  return (
    <div className="relative h-16 overflow-hidden text-[#315b37]" aria-hidden="true">
      <svg viewBox="0 0 400 70" preserveAspectRatio="none" className="absolute inset-0 h-full w-full fill-none stroke-current stroke-[2]">
        <path d="M0 0c35 5 43 31 70 28S98 0 130 0m140 0c31 4 40 31 66 28s32-25 64-28" />
        <path d="M30 4c-13 21-11 39-2 52m75-52c13 20 12 37 4 51m180-51c-13 21-11 39-2 52m76-52c13 20 12 37 4 51" />
        <path d="M24 24c-16-4-20-14-16-17 12-1 18 5 16 17Zm7 12c15-5 21-15 16-19-13 0-19 7-16 19Zm71-11c-15-4-19-14-15-18 12 0 18 6 15 18Zm9 11c15-5 20-16 15-19-12 0-18 7-15 19Zm173-12c-16-4-20-14-16-17 12-1 18 5 16 17Zm7 12c15-5 21-15 16-19-13 0-19 7-16 19Zm71-11c-15-4-19-14-15-18 12 0 18 6 15 18Zm9 11c15-5 20-16 15-19-12 0-18 7-15 19Z" className="fill-[#548145]" />
      </svg>
    </div>
  );
}

export function RibbonBanner({ text }: { text: string }) {
  return (
    <div className="relative mx-auto w-fit max-w-[90%] px-8 py-2.5 bg-[#285137] text-[#fff8df] shadow-md">
      <span className="absolute right-full top-2 h-full w-7 bg-[#1e3f2a] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,25%_50%)]" aria-hidden="true" />
      <span className="absolute left-full top-2 h-full w-7 bg-[#1e3f2a] [clip-path:polygon(0_0,100%_0,100%_100%,0_100%,75%_50%)]" aria-hidden="true" />
      <span className="relative font-serif text-xl font-bold tracking-widest uppercase sm:text-2xl">{text}</span>
    </div>
  );
}

export function TwigBorderFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative rounded-2xl border-2 border-[#9a7047] bg-[#faf5ec] px-6 py-6 shadow-sm">
      <span className="absolute -left-1 -top-1 h-5 w-5 rounded-tl-xl border-l-4 border-t-4 border-[#704d2e]" aria-hidden="true" />
      <span className="absolute -right-1 -top-1 h-5 w-5 rounded-tr-xl border-r-4 border-t-4 border-[#704d2e]" aria-hidden="true" />
      <span className="absolute -bottom-1 -left-1 h-5 w-5 rounded-bl-xl border-b-4 border-l-4 border-[#704d2e]" aria-hidden="true" />
      <span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-br-xl border-b-4 border-r-4 border-[#704d2e]" aria-hidden="true" />
      <h3 className="mb-5 font-script text-3xl text-[#285137]">{title}</h3>
      {children}
    </div>
  );
}

export function PawPrintIcon({ size = 24, className }: IconProps) {
  return <PawPrint size={size} className={`shrink-0 text-[#8b6538] ${className ?? ""}`} aria-hidden="true" />;
}

export function ExplorerBinoculars({ size = 40, className }: IconProps) {
  return <Binoculars size={size} className={`text-[#6c4b28] ${className ?? ""}`} strokeWidth={1.7} aria-hidden="true" />;
}

export function VintageCompass({ size = 48, className }: IconProps) {
  return <Compass size={size} className={`text-[#8b6538] ${className ?? ""}`} strokeWidth={1.4} aria-hidden="true" />;
}

export function SafariHatIcon({ size = 48, className }: IconProps) {
  return <HatGlasses size={size} className={className} strokeWidth={1.6} aria-hidden="true" />;
}

export function SafariShirtIcon({ size = 48, className }: IconProps) {
  return <Shirt size={size} className={className} strokeWidth={1.6} aria-hidden="true" />;
}

export function TropicalToucan({ size = 48, className }: IconProps) {
  return <Bird size={size} className={`text-[#2e5939] ${className ?? ""}`} fill="#d7a950" strokeWidth={1.7} aria-hidden="true" />;
}

export function CartoonMonkey({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="10" cy="26" r="9" fill="#87542e" /><circle cx="54" cy="26" r="9" fill="#87542e" />
      <circle cx="10" cy="26" r="5" fill="#c99764" /><circle cx="54" cy="26" r="5" fill="#c99764" />
      <circle cx="32" cy="31" r="25" fill="#87542e" />
      <ellipse cx="32" cy="41" rx="17" ry="15" fill="#d8aa76" />
      <ellipse cx="24" cy="27" rx="6" ry="8" fill="#d8aa76" /><ellipse cx="40" cy="27" rx="6" ry="8" fill="#d8aa76" />
      <circle cx="25" cy="29" r="2" fill="#2d2118" /><circle cx="39" cy="29" r="2" fill="#2d2118" />
      <ellipse cx="32" cy="39" rx="3" ry="2" fill="#59351e" />
      <path d="M26 46q6 6 12 0" fill="none" stroke="#59351e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WoodenSignPost({ text }: { text?: string }) {
  return (
    <div className="inline-flex flex-col items-center text-[#fff8e8]" aria-hidden={!text}>
      <div className="rounded-md border-2 border-[#543419] bg-[#80532b] px-5 py-2 font-serif font-bold shadow-md">{text}</div>
      <div className="h-8 w-3 bg-[#684020]" />
    </div>
  );
}
