import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FadeIn } from "@/components/site/FadeIn";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/experience/")({
  component: ExperienceIndex,
  head: () => ({
    meta: [
      { title: "Work — Vishakha Bajaj" },
      {
        name: "description",
        content:
          "Selected consulting engagements across Mahindra Finance, Barclays, Standard Bank South Africa and HDFC Bank — experience strategy, service design, UX leadership and research.",
      },
      { property: "og:title", content: "Work — Vishakha Bajaj" },
      {
        property: "og:description",
        content:
          "Case studies in experience strategy, service design, UX leadership and research.",
      },
    ],
  }),
});

const orgs = [
  {
    to: "/experience/mahindra-finance" as const,
    tag: "Case study",
    name: "Mahindra Finance",
    role: "Unified Financial Super App · Client: Mahindra Finance · While at IBM",
    summary:
      "UX strategy, research and experience architecture for a multilingual Super App unifying loans, investments, insurance, payments and servicing across India.",
    tags: ["Experience Strategy", "User Research", "Service Design"],
  },
  {
    to: "/experience/ibm" as const,
    tag: "Case study",
    name: "Barclays",
    role: "Business Banking Transformation · Client: Barclays · While at IBM",
    summary:
      "Service design across Barclays Business Banking's Customer Lifecycle Management programme — customer targeting, ad-hoc contact requests and introducer referral experience.",
    tags: ["Service Design", "Customer Lifecycle", "UX Leadership"],
  },
  {
    to: "/experience/standard-bank" as const,
    tag: "Case study",
    name: "Standard Bank South Africa",
    role: "Enterprise Workflow Transformation · Client: Standard Bank · While at Human Factors International",
    summary:
      "Simplified fragmented internal workflows, consolidating 35+ screens into a single task-based view and defining future-state banking processes.",
    tags: ["Service Design", "Workflow Transformation", "Business Process Design"],
  },
  {
    to: "/experience/hdfc" as const,
    tag: "Case study",
    name: "HDFC Bank",
    role: "Digital Banking Experiences · While at HDFC Bank",
    summary:
      "UX strategy, research and governance across PayZapp, MyCards, SmartBuy, Mobile Banking and NetBanking as part of the UXD Studio.",
    tags: ["Digital Banking", "Payments & Cards", "Product Design"],
  },
  {
    to: "/experience/previous" as const,
    tag: "Archive",
    name: "Other engagements",
    role: "Morgan Stanley · Equitas SFB · KPMG UK · NASCO · Abbott · Britannia · and more",
    summary:
      "A snapshot of additional work across BFSI, healthcare, media, FMCG and lifestyle — spanning enterprise UX, product strategy and research.",
    tags: ["Enterprise UX", "Research", "Strategy"],
  },
];

function ExperienceIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title={
          <>
            Selected work in <em className="italic text-accent">experience strategy, service design</em> and UX leadership.
          </>
        }
        lede="A curated selection of consulting engagements across banking and financial services — each case study covering context, methods and outcomes in depth."
      />
      <section className="container-editorial pb-24">
        <ul className="border-t border-rule">
          {orgs.map((o, i) => (
            <FadeIn key={o.name} delay={i * 0.05}>
              <li className="border-b border-rule">
                <Link
                  to={o.to}
                  className="group grid gap-6 md:grid-cols-[auto_1fr_auto] md:gap-10 py-10 md:py-14 items-start"
                >
                  <p className="eyebrow md:pt-2 min-w-[7ch]">{o.tag}</p>
                  <div className="min-w-0">
                    <h2 className="font-serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
                      {o.name}
                    </h2>
                    <p className="mt-3 text-sm text-ink-soft">{o.role}</p>
                    <p className="mt-5 max-w-2xl text-ink-soft leading-relaxed">
                      {o.summary}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {o.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 border border-rule text-ink-soft"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="size-6 text-ink-mute group-hover:text-ink transition-colors shrink-0" />
                </Link>
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>
    </>
  );
}
