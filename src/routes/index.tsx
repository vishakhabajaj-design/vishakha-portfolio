import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/vishakha-portrait.png";
import { FadeIn } from "@/components/site/FadeIn";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Vishakha Bajaj — Experience Design Leader" },
      {
        name: "description",
        content:
          "Enterprise UX, service design, research and strategy. 20+ years across BFSI, media and healthcare.",
      },
    ],
  }),
});

const projects = [
  {
    to: "/experience/mahindra-finance" as const,
    title: "Mahindra Finance",
    subtitle: "Unified Financial Super App",
    client: "Mahindra Finance",
    employer: "IBM",
    tags: ["User Research", "Strategy", "Experience Design"],
    
  },
  {
    to: "/experience/ibm" as const,
    title: "Barclays",
    subtitle: "Business Banking Transformation",
    client: "Barclays",
    employer: "IBM",
    tags: ["Service Design", "Journey Orchestration", "Experience Strategy"],
    workstreams: ["Customer Lifecycle Management", "Introducer Referral Experience"],
  },
  {
    to: "/experience/standard-bank" as const,
    title: "Standard Bank South Africa",
    subtitle: "Enterprise Workflow Transformation",
    client: "Standard Bank",
    employer: "Human Factors International",
    tags: ["Enterprise UX", "Workflow Transformation", "Business Process Design"],
  },
  {
    to: "/experience/hdfc" as const,
    title: "HDFC Bank",
    subtitle: "Digital Banking Experiences",
    employer: "HDFC Bank",
    tags: ["Product Design", "Experience Design", "Customer Journeys"],
  },
];

const highlights = [
  {
    title: "Cross-cultural design fluency",
    body: "Designed across India, Australia and South Africa — for first-time digital adopters and tech-savvy professionals alike.",
  },
  {
    title: "Deep BFSI domain expertise",
    body: "Two decades in banking, finance and insurance — fluent in regulation, legacy systems and trust requirements.",
  },
  {
    title: "Research-driven, pragmatic",
    body: "200+ interviews, thousands of survey respondents — balanced with business timelines.",
  },
  {
    title: "Systems thinker",
    body: "Design systems, governance frameworks and experience foundations that scale with the organisation.",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-editorial pt-20 md:pt-20 pb-12 md:pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16 items-start">
          <FadeIn>
            <p className="eyebrow mb-8">Vishakha Bajaj · Experience Design Leader</p>
            <h1 className="font-serif text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.98] tracking-tight">
              Transforming <br />
              <em className="italic text-accent">complexity</em>&nbsp;into experiences people understand and trust.
            </h1>
          
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-none">
              <img
                src={portrait}
                alt="Portrait of Vishakha Bajaj"
                className="w-full h-auto aspect-[4/5] object-cover border border-rule grayscale-[15%]"
              />
              <div className="absolute -bottom-4 -left-4 bg-paper border border-rule px-4 py-3 hidden md:block">
                <p className="eyebrow">Based in</p>
                <p className="font-serif text-lg mt-1">Mumbai, India</p>
              </div>
            </div>
          </FadeIn>
        </div>
        <p className="mt-8 max-w-wmax text-lg text-ink-soft leading-relaxed">
              I help organisations simplify complex financial and enterprise ecosystems through research, service design and product strategy. Over 20 years across India, Australia and South Africa, I've partnered with global organisations to transform complexity into intuitive, trustworthy experiences.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-ink-soft transition-colors"
              >
                Explore my work <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium underline underline-offset-4 decoration-ink-mute hover:decoration-ink"
              >
                Get in touch
              </Link>
            </div>
      </section>

      {/* SELECTED WORK */}
      <section className="border-t border-rule">
        <div className="container-editorial py-16 md:py-16">
          <FadeIn>
            <p className="eyebrow">Work</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight">
              Selected Work
            </h2>
            <p className="mt-4 max-w-wmax text-ink-soft leading-relaxed">
              A curated selection of enterprise consulting engagements demonstrating
              experience strategy, service design, UX leadership and product design.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.05}>
                <Link to={p.to} className="group block h-full">
                  <Card className="h-full flex flex-col">
                    <CardHeader className="p-6 pb-0">
                      <div className="space-y-1">
                        
                        <p className="text-xs text-ink-mute">While at&nbsp;{p.employer}</p>
                      </div>
                      <h3 className="mt-2 font-serif text-2xl md:text-3xl leading-tight">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm text-ink-soft">{p.subtitle}</p>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2.5 py-1 border border-rule text-ink-soft"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {p.workstreams && (
                        <ul className="space-y-1 text-xs text-ink-mute">
                          {p.workstreams.map((w) => (
                            <li key={w} className="pl-4 relative">
                              <span className="absolute left-0 top-[0.65em] w-2 h-px bg-ink-mute" />
                              {w}
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                    <CardFooter className="p-6 pt-0 mt-auto">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-ink group-hover:text-accent transition-colors">
                        View Case Study <ArrowRight className="size-4" />
                      </span>
                    </CardFooter>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-t border-rule bg-secondary/40">
        <div className="container-editorial py-20 md:py-16">
          <FadeIn>
            <p className="eyebrow">Design philosophy</p>
            <p className="mt-6 font-serif text-3xl md:text-5xl leading-[1.12] max-w-wmax">
              I don't just design screens — I build scalable systems,
              governance frameworks and foundations that grow with
              organisations. My work is grounded in research, shaped by
              cross-cultural empathy, and measured by the clarity it brings to
              people making high-stakes decisions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* LEADERSHIP HIGHLIGHTS */}
      <section className="border-t border-rule">
        <div className="container-editorial py-20 md:py-16">
          <FadeIn>
            <p className="eyebrow">Leadership highlights</p>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight max-w-2xl">
              What makes my approach different.
            </h2>
          </FadeIn>
          <div className="mt-6 grid gap-x-12 gap-y-14 md:grid-cols-2">
            {highlights.map((h, i) => (
              <FadeIn key={h.title} delay={i * 0.05}>
                <div className="border-t border-rule pt-6">
                  <p className="text-xs tabular-nums text-ink-mute">0{i + 1}</p>
                  <h3 className="mt-3 font-serif text-2xl md:text-3xl leading-tight">
                    {h.title}
                  </h3>
                  <p className="mt-4 text-ink-soft leading-relaxed max-w-md">
                    {h.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-rule bg-secondary/40">
        <div className="container-editorial py-20 md:py-16 text-center">
          <FadeIn>
            <p className="eyebrow">Explore</p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl leading-tight">
              See the work in depth.
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-ink-soft">
              Case studies from Mahindra Finance, Barclays, Standard Bank South Africa
              and HDFC Bank — with a broader footprint across BFSI, media and healthcare.
            </p>
            <Link
              to="/experience"
              className="mt-8 inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-ink-soft transition-colors"
            >
              View all work <ArrowRight className="size-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
