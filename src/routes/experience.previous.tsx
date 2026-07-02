import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FadeIn } from "@/components/site/FadeIn";

export const Route = createFileRoute("/experience/previous")({
  component: PreviousPage,
  head: () => ({
    meta: [
      { title: "Other Engagements — Vishakha Bajaj" },
      {
        name: "description",
        content:
          "A snapshot of additional consulting engagements across BFSI, healthcare, media, FMCG and lifestyle — spanning enterprise UX, service design, research and strategy.",
      },
      { property: "og:title", content: "Other Engagements — Vishakha Bajaj" },
      {
        property: "og:description",
        content:
          "Additional enterprise UX and service design engagements across industries.",
      },
    ],
  }),
});

const groups = [
  {
    title: "BFSI & Fintech",
    items: [
      "Morgan Stanley — Investment platform",
      "Equitas Small Finance Bank — UX audits, journeys & workshops",
      "KPMG UK — Research & insight study",
    ],
  },
  {
    title: "Healthcare",
    items: [
      "NASCO (U.S.) — Claims workflows & process UX",
      "Abbott — Ways of working & Design Thinking workshop",
      "Merck Sharp & Dohme (Australia)",
    ],
  },
  {
    title: "FMCG & Retail",
    items: [
      "Britannia — D2C journeys & product UX",
      "MTR Foods — Online experience & feature UX",
    ],
  },
  {
    title: "Sports, Media & Lifestyle",
    items: [
      "Royal Challengers Bangalore — Fan engagement journeys",
      "ZEE Media — Digital news experience redesign",
      "Tata Sky",
      "Content platforms — UX audits & journey definition",
    ],
  },
];

function PreviousPage() {
  return (
    <>
      <PageHeader
        eyebrow="Other engagements"
        title={
          <>
            A broader footprint across <em className="italic text-accent">industries and geographies</em>.
          </>
        }
        lede="Beyond the featured case studies, a snapshot of additional work across BFSI, healthcare, media, FMCG and lifestyle — spanning enterprise UX, service design, research and strategy."
      />

      <section className="border-t border-rule">
        <div className="container-editorial py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            {groups.map((g, i) => (
              <FadeIn key={g.title} delay={i * 0.05}>
                <div className="border-t border-rule pt-6">
                  <p className="text-xs tabular-nums text-ink-mute">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl md:text-3xl">
                    {g.title}
                  </h2>
                  <ul className="mt-4 space-y-2 text-ink-soft">
                    {g.items.map((it) => (
                      <li key={it} className="pl-5 relative">
                        <span className="absolute left-0 top-[0.65em] w-2 h-px bg-ink-mute" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-14 text-ink-mute text-sm">
              Plus additional engagements across enterprise UX, product strategy and research.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="container-editorial py-10 flex flex-wrap justify-between gap-4 text-sm">
          <Link to="/experience" className="text-ink-soft hover:text-ink">
            ← All work
          </Link>
          <Link to="/contact" className="text-ink-soft hover:text-ink">
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
