import Image from "next/image";
import Link from "next/link";

const tiers = [
  {
    name: "Growth",
    price: "₹5,000",
    unit: "/month",
    tagline: "For regular growth, reels and enquiries.",
    features: [
      "Facebook revival and new Instagram setup",
      "8 posts per month",
      "Stories",
      "Captions and hashtags",
      "WhatsApp enquiry call to action",
      "4 reels per month",
      "Review drive",
      "Local hashtags and location tags",
      "Monthly one-page report",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    price: "₹8,000",
    unit: "/month",
    tagline: "For maximum visibility and growth.",
    features: [
      "Everything in Growth",
      "8 reels per month",
      "YouTube Shorts",
      "School and club cross-posts",
      "Enquiry tracking",
    ],
    recommended: false,
  },
  {
    name: "Elite",
    price: "₹12,000",
    unit: "/month",
    tagline: "For full-channel growth with a monthly review.",
    features: [
      "Everything in Premium",
      "12 reels per month",
      "YouTube channel management",
      "Ad creatives (ad spend extra, client's)",
      "Dedicated monthly review call",
    ],
    recommended: false,
  },
];

const services = [
  { name: "Website development", note: "Fast, modern websites for local businesses." },
  { name: "WhatsApp automation", note: "Official WhatsApp API only — no unofficial tools." },
  { name: "Google Business Profile / Google Maps", note: "Stronger local search and map presence." },
  { name: "Facebook–Instagram setup", note: "Profiles, content and consistent posting." },
  { name: "Lead generation", note: "Enquiries from people already searching nearby." },
  { name: "AI automation", note: "Systems that handle follow-ups while you coach." },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b-4 border-brand bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-block rounded-full border border-brand bg-brand-light px-4 py-1.5 text-sm font-semibold text-brand">
              Sample / demo website — not the academy&apos;s official site
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
              Jalpaiguri Town Club Badminton Academy
            </h1>
            <p lang="bn" className="mt-3 text-xl text-muted">
              জলপাইগুড়ি টাউন ক্লাব ব্যাডমিন্টন একাডেমি
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              From champions on court to champions online. Est. 2010, under
              Jalpaiguri Town Club — 10 medals at the West Bengal state
              championship in August 2026, the highest tally in the state.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#proposal"
                className="rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                See the proposal
              </Link>
              <Link
                href="/jtc-badminton-academy-presentation-v2.pptx"
                className="rounded-md border-2 border-brand px-6 py-3 font-semibold text-brand transition-colors hover:bg-brand-light"
              >
                Download the presentation
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              Jalpaiguri, West Bengal · Monday to Saturday, 6:00 AM – 9:00 PM ·
              Call the academy:{" "}
              <a href="tel:+919434012020" className="font-semibold text-ink underline decoration-brand underline-offset-2">
                +91 94340 12020
              </a>
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-line">
            <Image
              src="/hero-badminton.jpg"
              alt="Badminton player in a red and white kit smashing a shuttlecock on an indoor court"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              15 years of badminton in Jalpaiguri
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              The academy started in 2010, under the trusted name of Jalpaiguri
              Town Club. Training runs every day, Monday to Saturday, from
              6:00 AM to 9:00 PM — in the academy&apos;s red and white, bold,
              sporty and instantly recognisable.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              One goal: to make Jalpaiguri a name in West Bengal badminton.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                <span><strong>Est. 2010</strong> — under Jalpaiguri Town Club.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                <span><strong>Coaches Ahad, Dibakar and Atasi</strong> — guiding the next generation, on court and off it.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
                <span><strong>Training hours</strong> — Monday to Saturday, 6:00 AM – 9:00 PM.</span>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-xl border border-line">
            <Image
              src="/training-badminton.jpg"
              alt="Young badminton players training with their coach on an indoor court in Jalpaiguri"
              width={1200}
              height={800}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Medals */}
      <section id="medals" className="scroll-mt-24 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Medals speak — the highest tally in West Bengal
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            This is not just an academy. This is a winning academy.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-xl border border-line border-t-4 border-t-brand bg-white p-8 text-center">
              <p className="text-6xl font-extrabold text-brand">5</p>
              <p className="mt-2 font-semibold">Gold medals</p>
              <p className="mt-1 text-sm text-muted">August 2026, WB U-17 / U-19 state championship</p>
            </div>
            <div className="rounded-xl border border-line border-t-4 border-t-brand bg-white p-8 text-center">
              <p className="text-6xl font-extrabold text-brand">2</p>
              <p className="mt-2 font-semibold">Silver medals</p>
              <p className="mt-1 text-sm text-muted">August 2026, WB U-17 / U-19 state championship</p>
            </div>
            <div className="rounded-xl border border-line border-t-4 border-t-brand bg-white p-8 text-center">
              <p className="text-6xl font-extrabold text-brand">3</p>
              <p className="mt-2 font-semibold">Bronze medals</p>
              <p className="mt-1 text-sm text-muted">August 2026, WB U-17 / U-19 state championship</p>
            </div>
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-line bg-white p-6">
              <p className="text-2xl font-extrabold text-brand">10 medals in August 2026</p>
              <p className="mt-2 leading-relaxed text-muted">
                5 gold, 2 silver and 3 bronze at the West Bengal U-17 / U-19
                state championship — the highest medal tally in the whole state.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-6">
              <p className="text-2xl font-extrabold text-brand">More wins through 2026</p>
              <p className="mt-2 leading-relaxed text-muted">
                9 medals in May 2026, and medals at the School Games in
                September 2026.
              </p>
            </div>
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-line">
            <Image
              src="/medals-badminton.jpg"
              alt="Young badminton champions holding medals and a trophy on court"
              width={1600}
              height={900}
              className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Audit snapshot */}
      <section id="audit" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Champions on court. Silent online.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Where the academy stands online today — checked in November 2026.
            The results are big. The online story is small.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-bold text-ink">Google Maps: number 1 in Jalpaiguri</p>
              <p className="mt-2 leading-relaxed text-muted">
                The first place result for badminton searches in Jalpaiguri.
                Parents already find the academy — but the Google Business
                Profile is thin: a single category, no website, no description
                and no photos.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-bold text-ink">Facebook: 126 followers, silent since 31 August 2026</p>
              <p className="mt-2 leading-relaxed text-muted">
                The page exists, but nothing has been posted for months. The
                medal posts are there — admission, fee, timing and contact
                details are not.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-bold text-ink">No Instagram. No YouTube. No website.</p>
              <p className="mt-2 leading-relaxed text-muted">
                The two places parents check after Google are empty, and there
                is no website for search to point to at all.
              </p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="font-bold text-ink">The opportunity</p>
              <p className="mt-2 leading-relaxed text-muted">
                Parents search first, then they decide. Medals, coaches and
                training videos are the academy&apos;s best marketing — they
                are just not posted. Social media can turn those wins into
                enquiries, every week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proposal */}
      <section id="proposal" className="scroll-mt-24 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Choose your plan — social media growth
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            A simple social media package from We Digital Mitra: set up, show
            the wins, grow enquiries. We handle the posting — the academy
            focuses on coaching.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={`flex flex-col rounded-xl border bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5 ${
                  tier.recommended
                    ? "border-2 border-brand shadow-lg"
                    : "border-line"
                }`}
              >
                {tier.recommended && (
                  <p className="mb-3 inline-block self-start rounded-md bg-brand px-3 py-1 text-sm font-bold text-white">
                    Recommended
                  </p>
                )}
                <h3 className="text-xl font-extrabold text-ink">{tier.name}</h3>
                <p className="mt-2">
                  <span className="text-4xl font-extrabold text-brand">{tier.price}</span>
                  <span className="text-muted">{tier.unit}</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tier.tagline}</p>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm leading-relaxed">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center leading-relaxed text-muted">
            One-time setup ₹5,000 · 50% advance · Monthly billing · No lock-in
          </p>
          <p className="mx-auto mt-3 max-w-3xl rounded-lg border border-brand bg-brand-light px-5 py-4 text-center leading-relaxed">
            <strong>Please note:</strong> website, Google Business Profile and
            directory listings are <strong>not included</strong> in this social
            media price. They can be added separately when the academy is ready.
          </p>
          <div className="mt-8 text-center">
            <Link
              href="/jtc-badminton-academy-presentation-v2.pptx"
              className="inline-block rounded-md bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Download the full presentation
            </Link>
          </div>
        </div>
      </section>

      {/* WDM services */}
      <section id="services" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            One partner for all your digital growth
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Start with social media today. Add the rest when you are ready.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl border border-line bg-surface p-6 transition-transform duration-200 hover:-translate-y-0.5">
                <h3 className="text-lg font-bold text-ink">{s.name}</h3>
                <p className="mt-2 leading-relaxed text-muted">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl leading-relaxed text-muted">
            We Digital Mitra is an AI-powered digital marketing agency from
            Maynaguri, Jalpaiguri, working with local businesses across North
            Bengal. Founder: Prosenjit Paul.{" "}
            <strong className="text-ink">Your Growth, Our Responsibility.</strong>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-brand text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Talk to the academy
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              Jalpaiguri Town Club Badminton Academy, Jalpaiguri, West Bengal.
            </p>
            <p className="mt-4 leading-relaxed">
              Phone:{" "}
              <a href="tel:+919434012020" className="font-bold underline underline-offset-2">
                +91 94340 12020
              </a>
            </p>
            <p className="mt-2 leading-relaxed text-white/90">
              Monday to Saturday, 6:00 AM – 9:00 PM
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Talk to We Digital Mitra
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              About this demo, the proposal, or your own business.
            </p>
            <p className="mt-4 leading-relaxed">
              Phone:{" "}
              <a href="tel:+917872423473" className="font-bold underline underline-offset-2">
                +91 78724 23473
              </a>
            </p>
            <p className="mt-2 leading-relaxed">
              WhatsApp Business:{" "}
              <a href="https://wa.me/918942963453" className="font-bold underline underline-offset-2">
                +91 89429 63453
              </a>
            </p>
            <p className="mt-2 leading-relaxed">
              Email:{" "}
              <a href="mailto:contact@wedigitalmitra.com" className="font-bold underline underline-offset-2">
                contact@wedigitalmitra.com
              </a>
            </p>
            <p className="mt-2 leading-relaxed">
              Website:{" "}
              <a href="https://wedigitalmitra.com" className="font-bold underline underline-offset-2">
                wedigitalmitra.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white/80">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Image
                src="/wdm-logo-dark.png"
                alt="We Digital Mitra"
                width={150}
                height={40}
                className="h-9 w-auto"
              />
              <p className="mt-4 max-w-xl text-sm leading-relaxed">
                Sample / demo website made by We Digital Mitra for Jalpaiguri
                Town Club Badminton Academy. The academy has not bought a
                website — this page only shows what their story could look
                like online.
              </p>
            </div>
            <div className="text-sm leading-relaxed">
              <p className="font-bold text-white">Jalpaiguri Town Club Badminton Academy</p>
              <p className="mt-1">Est. 2010 · Jalpaiguri, West Bengal</p>
              <p className="mt-1">+91 94340 12020</p>
            </div>
          </div>
          <p className="mt-8 border-t border-white/15 pt-5 text-xs leading-relaxed text-white/60">
            Photography on this page is AI-generated imagery made for this demo
            — no real academy photos have been used yet. Proposal prices:
            Growth ₹5,000/month, Premium ₹8,000/month,
            Elite ₹12,000/month, plus one-time setup ₹5,000. Website, Google
            Business Profile and directories are not included in this price.
            © 2026 We Digital Mitra — Your Growth, Our Responsibility.
          </p>
        </div>
      </footer>
    </main>
  );
}
