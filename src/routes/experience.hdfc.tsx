import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { CaseStudyDisclaimer } from "@/components/site/CaseStudyDisclaimer";
import { ExpandableImage } from "@/components/site/ExpandableImage";
import mobileBanking from "@/assets/hdfc/mobile-banking.png";
import mycards from "@/assets/hdfc/mycards.png";
import smartpay from "@/assets/hdfc/smartpay.png";

export const Route = createFileRoute("/experience/hdfc")({
  component: HdfcPage,
  head: () => ({
    meta: [
      { title: "HDFC Bank — Leading Digital Banking Experiences at Scale" },
      {
        name: "description",
        content:
          "AVP UXD at HDFC Bank — multi-product experience leadership across PayZapp, Cards, SmartBuy, Mobile Banking and NetBanking.",
      },
      {
        property: "og:title",
        content: "HDFC Bank — Leading Digital Banking Experiences at Scale",
      },
      {
        property: "og:description",
        content:
          "UX strategy, research and governance across HDFC Bank's flagship digital products.",
      },
    ],
  }),
});

function Section({
  id,
  eyebrow,
  heading,
  children,
}: {
  id?: string;
  eyebrow?: string;
  heading?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="container-editorial py-16 md:py-16 border-t border-rule">
      <FadeIn>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        {heading && (
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] max-w-wmax">
            {heading}
          </h2>
        )}
        <div className="mt-8 md:mt-8">{children}</div>
      </FadeIn>
    </section>
  );
}

const products = [
  { name: "SmartPay", tag: "Payments", image: smartpay},
  { name: "MyCards", tag: "Cards Management" , image: mycards},
  { name: "Mobile Banking", tag: "Revamp Retail Banking App" ,image: mobileBanking},
];

const contributions = [
  {
    t: "Experience Strategy",
    d: "Defined experience principles across products, aligned teams around a shared UX direction, and ensured clarity, usability and consistency in every major journey.",
  },
  {
    t: "Experience Architecture",
    d: "Shaped core flows including money movement, bill payments, card controls, EMI and spends, and high-volume Mobile Banking and NetBanking interactions.",
  },
  {
    t: "Research & Validation",
    d: "Led usability testing and behavioural analysis across payments, cards, servicing, onboarding and banking tasks. Presented insights and recommendations to senior stakeholders.",
  },
  {
    t: "UX Governance",
    d: "Established shared patterns, reviewed designs across teams, and enabled faster, more consistent delivery through reusable components.",
  },
  {
    t: "Cross-functional Leadership",
    d: "Partnered with product, tech, risk and business stakeholders to hold one coherent UX direction across the digital portfolio.",
  },
];

function HdfcPage() {
  return (
    <article>
      {/* Hero */}
      <header className="container-editorial pt-16 md:pt-16 pb-16 md:pb-8">
        <FadeIn>
          <p className="eyebrow mb-6">HDFC Bank</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-5xl">
            Leading Digital Banking Experiences at Scale
          </h1>
          <p className="mt-6 md:mt-8 font-serif text-2xl md:text-3xl text-ink-soft max-w-3xl leading-snug">
            Multi-product Experience Leadership
          </p>
          <div className="mt-10 md:mt-14 grid gap-8 md:grid-cols-3 max-w-4xl">
            <div>
              <p className="eyebrow mb-2">Employer</p>
              <p className="text-ink">HDFC Bank</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Role</p>
              <p className="text-ink">AVP — UXD Studio</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Capabilities</p>
              <p className="text-ink">
                UX Strategy · Research · Design Leadership
              </p>
            </div>
          </div>
        </FadeIn>
      </header>

      {/* 1. Portfolio Overview */}
      <Section
        id="overview"
        eyebrow="01 — Portfolio Overview"
        heading="Five flagship products. One coherent experience direction."
      >
        <div className="grid gap-10 md:grid-cols-2 max-w-5xl">
          <p className="text-lg text-ink-soft leading-relaxed">
            As part of the UXD Studio, I led UX strategy, research and
            governance across HDFC Bank's major digital products —
            PayZapp, MyCards, SmartBuy, Mobile Banking and NetBanking —
            bringing clarity, consistency and user-centred decision-making
            to multi-product journeys used by millions of customers.
          </p>
          <p className="text-lg text-ink-soft leading-relaxed">
            The work spanned payments, cards, e-commerce, retail banking
            and a full NetBanking revamp. Each product had its own team,
            velocity and constraints; the challenge was to hold a single
            experience direction across the portfolio without slowing any
            of them down.
          </p>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((p) => (
            <div key={p.name} className="border border-rule p-5 bg-secondary/30">
              <p className="eyebrow mb-2">{p.tag}</p>
              <p className="font-serif text-xl">{p.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 2. My Contribution */}
      <Section
        id="contribution"
        eyebrow="02 — My Contribution"
        heading="Leading UX across product lines."
      >
        <div className="grid gap-10 md:grid-cols-2 max-w-5xl">
          {contributions.map((c) => (
            <div key={c.t}>
              <p className="font-serif text-xl md:text-2xl">{c.t}</p>
              <p className="mt-3 text-ink-soft leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Product Portfolio */}
      <Section
        id="portfolio"
        eyebrow="03 — Product Portfolio"
        heading="Selected product surfaces."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <figure key={p.name} className="border-rule ">
              <ExpandableImage
                src={p.image}
                alt={p.name}
                caption={`${p.name} - ${p.tag}`}
              />
            </figure>
          ))}
        </div>
      </Section>

      {/* 4. Outcomes */}
      <Section
        id="outcomes"
        eyebrow="04 — Outcomes"
        heading="A stronger digital experience across HDFC Bank."
      >
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">Customer</p>
            <ul className="space-y-3 text-ink-soft">
              <li>Faster, clearer journeys across payments, cards and banking</li>
              <li>Reduced cognitive load through consistent patterns</li>
              <li>Improved predictability in Mobile Banking and NetBanking</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Business</p>
            <ul className="space-y-3 text-ink-soft">
              <li>Higher adoption of EMI, card features and key PayZapp flows</li>
              <li>Reduced dependency on support for card queries</li>
              <li>Better navigation and task completion in high-volume journeys</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Organisational</p>
            <ul className="space-y-3 text-ink-soft">
              <li>Strengthened UX decision-making across product lines</li>
              <li>Shared design practices improved delivery speed</li>
              <li>Greater maturity and alignment across teams</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 5. Reflection */}
      <Section
        id="reflection"
        eyebrow="05 — Reflection"
        heading="Shared principles are the real product."
      >
        <p className="max-w-wmax text-lg text-ink-soft leading-relaxed">
          Scale in banking is not solved one screen at a time. Establishing
          shared UX principles, lightweight governance and a library of
          reusable patterns did more for HDFC Bank's digital ecosystem
          than any individual redesign — it gave every team a common
          language for quality and let good decisions compound across the
          portfolio.
        </p>
      </Section>

      <section className="border-t border-rule">
        <div className="container-editorial py-10 md:py-14 grid gap-6 md:grid-cols-2">
          <Link
            to="/experience/standard-bank"
            className="group block border border-rule p-6 hover:border-ink transition-colors"
          >
            <p className="eyebrow flex items-center gap-2 text-ink-mute">
              <ArrowLeft className="size-3.5" /> Previous Project
            </p>
            <p className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
              Standard Bank South Africa
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Enterprise Workflow Transformation
            </p>
          </Link>
          <Link
            to="/experience/mahindra-finance"
            className="group block border border-rule p-6 hover:border-ink transition-colors md:text-right"
          >
            <p className="eyebrow flex items-center gap-2 text-ink-mute md:justify-end">
              Next Project <ArrowRight className="size-3.5" />
            </p>
            <p className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
              Mahindra Finance
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Unified Financial Super App
            </p>
          </Link>
        </div>
      </section>

      <CaseStudyDisclaimer />
    </article>
  );
}
