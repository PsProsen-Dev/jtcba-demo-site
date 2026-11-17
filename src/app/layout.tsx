import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jalpaiguri Town Club Badminton Academy — Sample demo site by We Digital Mitra",
  description:
    "Sample / demo website for Jalpaiguri Town Club Badminton Academy (Est. 2010) — medals, story, online audit and a social media growth proposal by We Digital Mitra.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/wdm-logo-primary.png"
                alt="We Digital Mitra"
                width={150}
                height={40}
                className="h-9 w-auto"
                priority
              />
              <span className="hidden text-sm text-muted sm:block">
                Sample demo for JTC Badminton Academy
              </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm font-medium sm:gap-6">
              <Link href="#story" className="hidden text-ink hover:text-brand sm:block">
                Story
              </Link>
              <Link href="#medals" className="hidden text-ink hover:text-brand sm:block">
                Medals
              </Link>
              <Link href="#proposal" className="text-ink hover:text-brand">
                Proposal
              </Link>
              <Link
                href="#contact"
                className="rounded-md bg-brand px-4 py-2 text-white transition-colors hover:bg-brand-dark"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
