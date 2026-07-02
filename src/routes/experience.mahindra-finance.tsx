import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, PlayCircle } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { ExpandableImage } from "@/components/site/ExpandableImage";
import { CaseStudyDisclaimer } from "@/components/site/CaseStudyDisclaimer";
import researchAsset from "@/assets/mahindra/mahindra-research.png";
import challenge from "@/assets/mahindra/challenge.png";
import impactAsset from "@/assets/mahindra/mahindra-impact.png";

export const Route = createFileRoute("/experience/mahindra-finance")({
  component: MahindraPage,
  head: () => ({
    meta: [
      { title: "Mahindra Finance — Unified Financial Super App · Vishakha Bajaj" },
      {
        name: "description",
        content:
          "Case study: a unified, multilingual financial Super App for Mahindra Finance — UX strategy, research and experience architecture led at IBM Consulting.",
      },
      { property: "og:title", content: "Mahindra Finance — Unified Financial Super App" },
      {
        property: "og:description",
        content:
          "UX strategy, research and experience architecture for a multilingual financial Super App.",
      },
    ],
  }),
});

const metadata = [
  { label: "Client", value: "Mahindra Finance" },
  { label: "Delivered while at", value: "IBM Consulting" },
  { label: "Role", value: "Design Lead" },
  { label: "Focus", value: "Research · Strategy · Experience Architecture" },
];

const challenges = [
  "Fragmented journeys across products & channels",
  "Low financial literacy & a high need for guidance",
  "Support for 10+ regional languages",
  "Complex rules across lending, insurance & investments",
  "Alignment across business, tech & compliance",
];

const roleItems = [
  "Led UX strategy end-to-end",
  "Directed a team of 6 across UX, visual and research",
  "Led research and translated insights into journeys",
  "Collaborated with product, tech and business stakeholders",
  "Created scalable experience foundations for the ecosystem",
];

const researchActivities = [
  { stat: "58", label: "In-depth qualitative interviews across 16 states" },
  { stat: "2,000+", label: "Survey respondents across segments" },
  { stat: "10+", label: "Regional languages considered in the experience" },
  { stat: "Cross-functional", label: "Stakeholder interviews, benchmarking & heuristic reviews" },
];

const insights = [
  {
    n: "01",
    title: "Users want guidance, not options",
    body: "Nudges and contextual help increased confidence and task completion.",
  },
  {
    n: "02",
    title: "Fragmented experiences create stress",
    body: "Users struggled when switching between multiple products and channels.",
  },
  {
    n: "03",
    title: "Simplicity equals trust",
    body: "Predictable steps and clear hierarchy were essential to confidence.",
  },
  {
    n: "04",
    title: "Language is a barrier",
    body: "Multilingual UX was critical for accessibility and inclusion.",
  },
];

const strategy = [
  "Guided, not transactional experiences",
  "Unified patterns across product lines",
  "Multilingual-first content and layout system",
  "Scalable design system for rapid delivery",
  "Predictable, low-effort navigation",
];

const solutions = [
  "Unified dashboard for loans, dues, investments and insurance",
  "Nudge framework for reminders, suggestions and alerts",
  "Simplified onboarding and KYC",
  "Cross-product consistency through reusable components",
  "Modular design system to support future expansion",
];

const impact = [
  {
    label: "User Experience",
    items: [
      "Increased clarity and confidence in managing financial products",
      "Reduced friction across servicing and onboarding",
      "Inclusive access through multilingual UX",
    ],
  },
  {
    label: "Business",
    items: [
      "Unified UX vision adopted across product lines",
      "Scalable design system improved delivery speed",
    ],
  },
  {
    label: "Organisation",
    items: [
      "Cross-functional alignment on UX standards",
      "Research insights embedded into product strategy",
    ],
  },
];

function MahindraPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-editorial pt-16 md:pt-16 pb-8 md:pb-12">
        <FadeIn>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 eyebrow mb-8 text-ink-mute hover:text-ink transition-colors"
          >
            <ArrowLeft className="size-3.5" /> All work
          </Link>
          <p className="eyebrow mb-5">Mahindra Finance</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight max-w-4xl">
            Unified Financial <em className="italic text-accent">Super App</em>
          </h1>
          <p className="mt-6 md:mt-8 max-w-wmax text-lg md:text-xl text-ink-soft leading-relaxed">
            Mahindra Finance needed a unified digital experience that could bring
            loans, investments, insurance, payments and servicing into one
            simple, multilingual Super App. I led the UX strategy, research and
            experience architecture across states and segments — turning
            complex financial journeys into intuitive, guided experiences.
          </p>
        </FadeIn>
      </section>

      {/* DEMO / HERO MEDIA PLACEHOLDER */}
      <section className="container-editorial pb-10 md:pb-16">
        

        <FadeIn delay={0.1}>
          <dl className="mt-10 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-8 border-t border-b border-rule py-8">
            {metadata.map((m) => (
              <div key={m.label}>
                <dt className="eyebrow mb-2">{m.label}</dt>
                <dd className="text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </section>

      {/* THE ASK / CHALLENGE */}
      <Section eyebrow="The Challenge" heading="From fragmented to unified.">
        <div className=" md:mt-8">
          
          <ExpandableImage
            src={challenge}
            alt="Design challenge"
            caption="Mahindra served millions of customers across products and channels, but the experience was fragmented and inconsistent. "
          />
        
          
           
        </div>
      </Section>

      {/* MY ROLE */}
      <Section eyebrow="My Role" heading="Design Lead — Research, Strategy, Experience Architecture.">
        <ul className="grid gap-0">
          {roleItems.map((r, i) => (
            <li
              key={r}
              className="flex items-baseline gap-6 border-b border-rule py-5 last:border-b-0"
            >
              <span className="text-xs tabular-nums text-ink-mute w-8 shrink-0">
                0{i + 1}
              </span>
              <span className="font-serif text-xl md:text-2xl text-ink-soft leading-snug">
                {r}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* RESEARCH */}
      <Section eyebrow="Research" heading="Listening across states, segments and languages.">
        <div className="grid gap-10 md:grid-cols-4">
          {researchActivities.map((r) => (
            <div key={r.label} className="border-t border-rule pt-6">
              <p className="font-serif text-4xl md:text-5xl leading-none">
                {r.stat}
              </p>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                {r.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-20">
          <ExpandableImage
            src={researchAsset}
            alt="Research fieldwork across states and customer segments for Mahindra Finance"
            caption="Fieldwork spanned 16 states, blending qualitative depth interviews with quantitative surveys across segments."
          />
        </div>

        <div className="mt-16 md:mt-20">
          <p className="eyebrow mb-6">Key Insights</p>
          <div className="grid gap-8 md:grid-cols-2">
            {insights.map((it) => (
              <div key={it.n} className="border-t border-rule pt-6">
                <p className="text-xs tabular-nums text-ink-mute">{it.n}</p>
                <p className="mt-3 font-serif text-2xl md:text-3xl leading-tight">
                  {it.title}
                </p>
                <p className="mt-3 text-ink-soft leading-relaxed">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* STRATEGY & SOLUTION */}
      <Section eyebrow="Strategy & Solution" heading="A guided, multilingual experience unified across product lines.">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20 items-start">
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-4">UX Strategy</p>
              <ul className="space-y-3 text-ink-soft leading-relaxed">
                {strategy.map((s) => (
                  <li key={s} className="pl-5 relative">
                    <span className="absolute left-0 top-[0.65em] w-2 h-px bg-ink-mute" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Key Experience Solutions</p>
              <ul className="space-y-3 text-ink-soft leading-relaxed">
                {solutions.map((s) => (
                  <li key={s} className="pl-5 relative">
                    <span className="absolute left-0 top-[0.65em] w-2 h-px bg-ink-mute" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-5xl">
  <video
    className="w-fit max-h-[480px] object-contain rounded-xl border border-rule shadow-lg"
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    controls
  >
    <source
      src="/videos/guided-journey.mp4"
      type="video/mp4"
    />
  </video>

  <p className="mt-4 text-sm text-ink-mute">
    Guided conversational journey demonstrating how contextual guidance and multilingual interactions help customers navigate complex financial journeys with greater confidence and clarity.
  </p>
</div>
          
        </div>

    
      </Section>

      {/* IMPACT */}
      <Section eyebrow="Impact" heading="A UX blueprint for Mahindra Finance's digital ecosystem.">
        <div className="grid gap-10 md:grid-cols-3">
          {impact.map((group) => (
            <div key={group.label} className="border-t border-rule pt-6">
              <p className="eyebrow mb-4">{group.label}</p>
              <ul className="space-y-3 text-ink-soft leading-relaxed">
                {group.items.map((it) => (
                  <li key={it} className="pl-5 relative">
                    <span className="absolute left-0 top-[0.65em] w-2 h-px bg-ink-mute" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-12">
          <ExpandableImage
            src={impactAsset}
            alt="Cross-product surfaces of the Mahindra Finance Super App"
            caption="Cross-product consistency, powered by a modular design system, made the ecosystem quicker to extend."
          />
        </div>

        <p className="mt-14 md:mt-12 font-serif text-2xl md:text-3xl leading-snug max-w-wmax text-ink">
          This work became the UX blueprint for Mahindra Finance's digital
          ecosystem.
        </p>
      </Section>

      {/* REFLECTION */}
      <Section eyebrow="Reflection" heading="Complex financial journeys, made calm and confident.">
        <p className="text-ink-soft leading-relaxed max-w-3xl text-lg">
          Leading this engagement reinforced that scale in financial services
          is earned through restraint — fewer options, clearer guidance and
          patterns that hold across products and languages. The most
          meaningful outcome was cultural: research became a shared vocabulary
          across product, tech and business, and UX moved from a downstream
          craft to a strategic instrument in how Mahindra Finance defines its
          digital future.
        </p>
      </Section>

      {/* PROJECT NAV */}
      <section className="border-t border-rule">
        <div className="container-editorial py-10 md:py-14 grid gap-6 md:grid-cols-2">
          <Link
            to="/experience/hdfc"
            className="group block border border-rule p-6 hover:border-ink transition-colors"
          >
            <p className="eyebrow flex items-center gap-2 text-ink-mute">
              <ArrowLeft className="size-3.5" /> Previous Project
            </p>
            <p className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
              HDFC Bank
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Digital Banking Experiences
            </p>
          </Link>
          <Link
            to="/experience/ibm"
            className="group block border border-rule p-6 hover:border-ink transition-colors md:text-right"
          >
            <p className="eyebrow flex items-center gap-2 text-ink-mute md:justify-end">
              Next Project <ArrowRight className="size-3.5" />
            </p>
            <p className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
              Barclays
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Business Banking Transformation
            </p>
          </Link>
        </div>
      </section>

      <CaseStudyDisclaimer />
    </>
  );
}

function Section({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-rule">
      <div className="container-editorial py-16 md:py-16">
        <FadeIn>
          <div className="grid gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-16">
            <div>
              <p className="eyebrow">{eyebrow}</p>
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-wmax">
                {heading}
              </h2>
              <div className="mt-8">{children}</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
