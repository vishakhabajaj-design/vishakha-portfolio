import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/site/FadeIn";
import { Bullets, Prose } from "@/components/site/CaseStudy";
import { CaseStudyDisclaimer } from "@/components/site/CaseStudyDisclaimer";
import referralFindings from "@/assets/barclays/referral-findings.png";
import asIsAdhocJourney from "@/assets/barclays/as-is-adhoc-journey.png";
import adhocHighlights from "@/assets/barclays/adhoc-highlights.png";
import adhocFutureState from "@/assets/barclays/adhoc-future-state.png";
import ctFutureStateModel from "@/assets/barclays/ct-future-state-model.png";


export const Route = createFileRoute("/experience/ibm")({
  component: BarclaysPage,
  head: () => ({
    meta: [
      { title: "Barclays Business Banking · Vishakha Bajaj" },
      {
        name: "description",
        content:
          "Three service design engagements for Barclays Business Banking delivered through IBM Consulting — Customer Targeting, Ad Hoc Contact Requests and Introducer Referral.",
      },
      { property: "og:title", content: "Barclays Business Banking" },
      {
        property: "og:description",
        content:
          "Service design and experience strategy across Barclays Business Banking — customer targeting, ad hoc contact and introducer referral engagements.",
      },
    ],
  }),
});

const metadata = [
  { label: "Client", value: "Barclays" },
  { label: "Delivered", value: "IBM Consulting" },
  { label: "Discipline", value: "Service Design" },
  { label: "Focus", value: "Experience Strategy" },
  { label: "Methods", value: "Journey Mapping" },
];

function BarclaysPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-editorial pt-16 md:pt-24 pb-12 md:pb-16">
        <FadeIn>
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 eyebrow mb-8 text-ink-mute hover:text-ink transition-colors"
          >
            <ArrowLeft className="size-3.5" /> All experience
          </Link>
          <p className="eyebrow mb-5">Barclays Business Banking</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] tracking-tight max-w-max">
            Designing services that simplify{" "}
            <em className="italic text-accent">
              customer acquisition and retention
            </em>
            .
          </h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <dl className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-8 border-t border-b border-rule py-8">
            {metadata.map((m) => (
              <div key={m.label}>
                <dt className="eyebrow mb-2">{m.label}</dt>
                <dd className="text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </section>

      {/* SECTION 1 — INTRODUCTION */}
      <Section eyebrow="Overview" heading="Barclays Business Banking.">
        <div className="space-y-5 max-w-3xl text-ink-soft leading-relaxed">
          <p>
            This engagement consisted of multiple service design initiatives
            delivered through IBM Consulting across Barclays Business Banking.
          </p>
          <p>
            The work focused on improving customer acquisition, colleague
            experiences and operational workflows through research, journey
            mapping, service blueprinting, governance design and validation.
          </p>
        </div>
      </Section>

      {/* SECTION 2 — CUSTOMER TARGETING SERVICE */}
      <Engagement
        number="01"
        eyebrow="Engagement One"
        title="Customer Targeting Service"
        summary="Reimagining how Relationship Managers identify, prioritise and engage business banking prospects across the customer lifecycle."
        blocks={[
          {
            label: "Business Challenge",
            body: (
              <Prose>
                Relationship Managers lacked a consistent view of which
                prospects to target and when. Data, insight and outreach were
                fragmented across systems, slowing acquisition and diluting the
                quality of customer conversations.
              </Prose>
            ),
          },
          {
            label: "My Contribution",
            body: (
              <Bullets
                items={[
                  "Led discovery research with Relationship Managers and business leaders",
                  "Mapped the current-state acquisition journey end-to-end",
                  "Designed a target-state service model connecting insight, outreach and follow-up",
                  "Facilitated cross-functional alignment workshops",
                ]}
              />
            ),
          },
          {
            label: "Outcome",
            body: (
              <Prose>
                A future-state customer targeting service defined shared
                vocabulary, colleague-facing moments and supporting data flows —
                giving product, operations and frontline teams a common
                blueprint to build against.
              </Prose>
            ),
          },
          {
            label: "Methods",
            body: (
              <Bullets
                items={[
                  "Stakeholder & colleague interviews",
                  "Current-state journey mapping",
                  "Target-state service modelling",
                  "Co-design workshops",
                ]}
              />
            ),
          },
        ]}
        artefacts={[
          
          {
            caption:
              "Target-state service model — connected targeting and engagement.",size: "medium",
            media: (
      <img
        src={ctFutureStateModel}
        alt="customer Targeting Future State Service Model"
        className="w-full h-auto"
      />
    ), 
          },
        ]}
      />

      {/* SECTION 3 — AD HOC CONTACT REQUESTS */}
      <Engagement
        number="02"
        eyebrow="Engagement Two"
        title="Ad Hoc Contact Requests"
        summary="Redesigning how unplanned customer contact requests are captured, routed and executed across Business Banking operations."
        blocks={[
          {
            label: "Business Challenge",
            body: (
              <Prose>
                Ad hoc contact requests were handled through inconsistent,
                manual routes. Colleagues lacked visibility of status and
                ownership, creating operational risk and a fragmented customer
                experience.
              </Prose>
            ),
          },
          {
            label: "My Contribution",
            body: (
              <Bullets
                items={[
                  "Mapped current-state operational workflows and handoffs",
                  "Designed a future-state service model with clear intake, execution and closure",
                  "Produced a transformation summary aligning operations, product and technology",
                  "Ran alignment sessions with business and delivery leadership",
                ]}
              />
            ),
          },
          {
            label: "Outcome",
            body: (
              <Prose>
                A future-state operating model for ad hoc contact requests with
                defined roles, routing logic and colleague-facing touchpoints —
                supported by a transformation summary that framed the shift for
                delivery teams.
              </Prose>
            ),
          },
          {
            label: "Methods",
            body: (
              <Bullets
                items={[
                  "Process mapping",
                  "Service blueprinting",
                  "Future-state design",
                  "Transformation framing",
                ]}
              />
            ),
          },
        ]}
        artefacts={[
          { caption: "Current-state process map for ad hoc contact requests.",size: "medium",
    media: (
      <img
        src={asIsAdhocJourney }
        alt="As-is Ad Hoc Contact Request Journey"
        className="w-full h-auto"
      />
    ), },
          { caption: "Future-state service model with clear intake and routing." ,size: "medium",
            media: (
      <img
        src={adhocFutureState}
        alt="As-is Ad Hoc Contact Request Journey"
        className="w-full h-auto"
      />
    ), },
          { caption: "Transformation summary — from current to future state." ,size: "medium",
            media: (
      <img
        src={adhocHighlights }
        alt="As-is Ad Hoc Contact Request Journey"
        className="w-full h-auto"
      />
    ), },
        ]}
      />

      {/* SECTION 4 — INTRODUCER REFERRAL EXPERIENCE */}
      <Engagement
        number="03"
        eyebrow="Engagement Three"
        title="Introducer Referral Experience"
        summary="Redesigning the internal referral experience used by introducers to route business banking opportunities into Barclays."
        blocks={[
          {
            label: "Business Challenge",
            body: (
              <Prose>
                The existing introducer referral process was slow, opaque and
                effortful. Introducers were unclear on required information and
                status, and internal teams struggled to progress referrals
                efficiently.
              </Prose>
            ),
          },
          {
            label: "My Role",
            body: (
              <Bullets
                items={[
                  "Led research with introducers and internal referral teams",
                  "Reframed the end-to-end referral experience",
                  "Designed an interactive prototype of the future-state journey",
                  "Planned and facilitated usability testing sessions",
                ]}
              />
            ),
          },
          {
            label: "Research",
            body: (
              <Prose>
                Qualitative research surfaced friction points across submission,
                progress visibility and handover. Findings informed the
                information architecture, task flow and content model of the
                prototype.
              </Prose>
            ),
          },
          {
            label: "Validation Outcomes",
            body: (
              <Prose>
                Usability testing validated the redesigned flow — introducers
                reported a clearer submission path, better visibility of status
                and reduced effort compared with the current experience. The
                prototype and findings shaped the downstream build roadmap.
              </Prose>
            ),
          },
        ]}
        artefacts={[
  {
    caption: "Interactive prototype walkthrough of the redesigned introducer referral experience.",
    size: "medium",
    media: (
      <div className="mx-auto max-w-4xl">
        <video
          className="w-full rounded-xl border border-rule shadow-lg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls
        >
          <source src="/videos/barclays-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ),
  },
  {
    caption: " ",
    size: "medium",
    media: (
      <img
        src={referralFindings}
        alt="Usability testing findings"
        className="w-full h-auto"
      />
    ),
  },
]}
      />

      {/* SECTION 5 — REFLECTION */}
      <Section eyebrow="Reflection" heading="Service design across a business banking portfolio.">
        <Prose>
          Delivered together, these engagements strengthened service design
          capability across Barclays Business Banking — combining research-led
          transformation, operational alignment and experience strategy to move
          the organisation from disconnected processes toward a coherent,
          colleague- and customer-centred way of working.
        </Prose>
      </Section>

      {/* PROJECT NAV */}
      <section className="border-t border-rule">
        <div className="container-editorial py-10 md:py-14 grid gap-6 md:grid-cols-2">
          <Link
            to="/experience/mahindra-finance"
            className="group block border border-rule p-6 hover:border-ink transition-colors"
          >
            <p className="eyebrow flex items-center gap-2 text-ink-mute">
              <ArrowLeft className="size-3.5" /> Previous Project
            </p>
            <p className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
              Mahindra Finance
            </p>
            <p className="mt-1 text-sm text-ink-soft">Unified Financial Super App</p>
          </Link>
          <Link
            to="/experience/standard-bank"
            className="group block border border-rule p-6 hover:border-ink transition-colors md:text-right"
          >
            <p className="eyebrow flex items-center gap-2 text-ink-mute md:justify-end">
              Next Project <ArrowRight className="size-3.5" />
            </p>
            <p className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
              Standard Bank South Africa
            </p>
            <p className="mt-1 text-sm text-ink-soft">Enterprise Workflow Transformation</p>
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
  children: ReactNode;
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
              <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-2xl">
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

type Block = { label: string; body: ReactNode };
type Artefact = { caption: string; media?: ReactNode; size?: "small" | "medium" | "large"; };

function Engagement({
  number,
  eyebrow,
  title,
  summary,
  blocks,
  artefacts,
}: {
  number: string;
  eyebrow: string;
  title: string;
  summary: string;
  blocks: Block[];
  artefacts: Artefact[];
}) {
  return (
    <section className="border-t border-rule">
      <div className="container-editorial py-16 md:py-16">
        <FadeIn>
          <div className="grid gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-16">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <p className="mt-3 text-xs tabular-nums text-ink-mute">{number}</p>
            </div>
            <div className="min-w-0">
              <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] max-w-3xl">
                {title}
              </h2>
              <p className="mt-2 max-w-max text-lg text-ink-soft leading-relaxed">
                {summary}
              </p>

              <div className="mt-6 grid gap-10 md:grid-cols-2">
                {blocks.map((b) => (
                  <div key={b.label} className="border-t border-rule pt-5">
                    <p className="eyebrow mb-3">{b.label}</p>
                    <div>{b.body}</div>
                  </div>
                ))}
              </div>

              {artefacts.length > 0 && (
                <div className="mt-14 space-y-10">
                  {artefacts.map((a, i) => (
                    <figure key={i}>
                      <figcaption className="mt-3 text-sm text-ink-mute">
                        {a.caption}
                      </figcaption>
                      <div className="border border-rule overflow-hidden rounded-xl">
  {a.media ? (
    a.media
  ) : (
    <div className="bg-secondary/40 aspect-[16/9] flex items-center justify-center text-sm text-ink-mute px-6 text-center">
      Artefact placeholder — high-resolution visual to be added
    </div>
  )}
</div>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
