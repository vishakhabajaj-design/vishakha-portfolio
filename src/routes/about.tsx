import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FadeIn } from "@/components/site/FadeIn";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Vishakha Bajaj" },
      {
        name: "description",
        content:
          "Experience Design and Service Design consulting leader with 20+ years across India, Australia, South Africa and global teams. BFSI expertise, systems thinking and organisational transformation.",
      },
      { property: "og:title", content: "About — Vishakha Bajaj" },
      { property: "og:description", content: "Experience strategy, service design and enterprise transformation leadership." },
    ],
  }),
});

const shapingCards = [
  {
    title: "Cross-Cultural Design",
    body: "Designed experiences across India, Australia, South Africa and global consulting engagements, adapting solutions to different markets, cultures and levels of digital maturity.",
  },
  {
    title: "Deep BFSI Expertise",
    body: "Nearly two decades across banking and financial services, designing experiences that balance customer needs with regulation, governance, operational complexity and business outcomes.",
  },
  {
    title: "Research Before Assumptions",
    body: "From executive interviews to large-scale research programmes, every recommendation begins with understanding people before designing solutions.",
  },
  {
    title: "Collaborative Leadership",
    body: "I enjoy bringing together business, technology and design teams to create shared understanding, align priorities and move complex initiatives forward.",
  },
  {
    title: "Systems Thinking",
    body: "I design beyond individual screens—considering journeys, governance, operating models, reusable frameworks and the organisational systems that support long-term transformation.",
  },
];

const capabilities = [
  "Experience Strategy",
  "Service Design",
  "Enterprise Transformation",
  "Customer Lifecycle Design",
  "Research & Insights",
  "Journey Mapping",
  "UX Leadership",
  "Design Governance",
  "Design Systems",
  "AI-enabled Experience Design",
];

const metrics = [
  "20+ Years Experience",
  "5 Countries",
  "Banking, Finance & Insurance",
  "Research across 16 states",
  "2000+ Survey Participants",
  "58 Qualitative Interviews",
  "Enterprise UX & Service Design",
  "Leadership & People Development",
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            Designing clarity in{" "}
            <em className="italic text-accent">complex organisations.</em>
          </>
        }
        lede="For more than two decades, I've partnered with organisations across India, Australia, South Africa, the UK and global teams to simplify complex customer and enterprise experiences."
      />

      <section className="container-editorial py-8 md:py-12">
        <FadeIn>
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] border-t border-b border-rule py-12 md:py-16">
            <div>
              <p className="eyebrow">Introduction</p>
            </div>
            <div className="max-w-3xl space-y-6 text-ink-soft leading-relaxed">
              <p>
                My work sits at the intersection of experience strategy, service design, UX leadership and organisational transformation—bringing together business goals, customer needs and operational realities to create solutions that scale.
              </p>
              <p>
                Whether leading research, shaping future-state services or building design capability, I focus on creating clarity that delivers lasting business and customer value.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="container-editorial py-8 md:py-12">
        <FadeIn>
          <p className="eyebrow">What shapes my work</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight max-w-3xl">
            Five principles that guide every engagement.
          </h2>
        </FadeIn>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shapingCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.05}>
              <Card className="h-full border border-rule bg-paper shadow-none hover:border-ink-soft transition-colors">
                <CardHeader className="p-6 pb-0">
                  <p className="text-xs tabular-nums text-ink-mute">0{i + 1}</p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">{card.title}</h3>
                </CardHeader>
                <CardContent className="p-6 pt-4">
                  <p className="text-sm text-ink-soft leading-relaxed">{card.body}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-rule bg-secondary/40">
        <div className="container-editorial py-8 md:py-12">
          <FadeIn>
            <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="eyebrow">What I help organisations do</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="border-b border-rule pb-4"
                  >
                    <p className="font-serif text-xl md:text-2xl leading-tight">{cap}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-editorial py-8 md:py-12">
        <FadeIn>
          <p className="eyebrow">Experience at a glance</p>
          <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight max-w-3xl">
            A measure of depth, range and consistency.
          </h2>
        </FadeIn>
        <div className="mt-6 grid gap-px bg-rule border border-rule md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <FadeIn key={m} delay={i * 0.03}>
              <div className="bg-paper p-8 md:p-10 h-full flex items-center">
                <p className="font-serif text-2xl md:text-3xl leading-tight">{m}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="container-editorial py-8 md:py-12">
          <FadeIn>
            <p className="eyebrow">Closing thought</p>
            <p className="mt-6 font-serif text-3xl md:text-5xl leading-[1.12] max-w-wmax">
              Design is most valuable when it helps organisations make better decisions—not just better interfaces.
            </p>
            <p className="mt-8 text-ink-soft max-w-2xl leading-relaxed">
              That's the kind of work I enjoy doing.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
