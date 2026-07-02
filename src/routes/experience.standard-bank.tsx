import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/site/FadeIn";
import { ExpandableImage } from "@/components/site/ExpandableImage";
import { CaseStudyDisclaimer } from "@/components/site/CaseStudyDisclaimer";
import sbsaFraudReferral from "@/assets/sbsa/sbsa-fraud-referral.png";

export const Route = createFileRoute("/experience/standard-bank")({
  component: StandardBankPage,
  head: () => ({
    meta: [
      { title: "Standard Bank — Designing Future-State Banking Operations" },
      {
        name: "description",
        content:
          "Enterprise service transformation for Standard Bank South Africa via Human Factors International — simplifying complex banking operations through service design and future-state process design.",
      },
      {
        property: "og:title",
        content: "Standard Bank — Designing Future-State Banking Operations",
      },
      {
        property: "og:description",
        content:
          "Simplifying complex operational workflows and redesigning future-state banking processes.",
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
    <section id={id} className="container-editorial py-8 md:py-16mt-8 md:mt-10 border-t border-rule">
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

function StandardBankPage() {
  return (
    <article>
      {/* Hero */}
      <header className="container-editorial pt-16 md:pt-16 pb-16 md:pb-16">
        <FadeIn>
          <p className="eyebrow mb-6">Standard Bank South Africa</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-5xl">
            Designing Future-State Banking Operations
          </h1>
          <p className="mt-6 md:mt-8 font-serif text-2xl md:text-3xl text-ink-soft max-w-3xl leading-snug">
            Enterprise Service Transformation
          </p>
          <div className="mt-10 md:mt-14 grid gap-8 md:grid-cols-3 max-w-4xl">
            <div>
              <p className="eyebrow mb-2">Delivered while at</p>
              <p className="text-ink">Human Factors International</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Role</p>
              <p className="text-ink">Centre of Excellence Lead</p>
            </div>
            <div>
              <p className="eyebrow mb-2">Capabilities</p>
              <p className="text-ink">
                Service Design · Business Process Transformation · Experience
                Strategy
              </p>
            </div>
          </div>
        </FadeIn>
      </header>

      {/* 1. Business Context */}
      <Section id="context" eyebrow="01 — Business Context" heading="Banking operations built in silos over time.">
        <div className="grid gap-10 md:grid-cols-2 max-w-5xl">
          <p className="text-lg text-ink-soft leading-relaxed">
            To keep pace with growing business demand and rapid digital
            adoption, Standard Bank had built applications and internal tools
            in silos. Operations teams navigated fragmented workflows,
            duplicated effort across systems, and interfaces that no longer
            matched the way work actually happened.
          </p>
          <p className="text-lg text-ink-soft leading-relaxed">
            The result was inconsistent internal experiences, slower
            servicing, manual workarounds and handoffs between teams that
            introduced delay and error. The bank needed a coherent
            future-state operating model that simplified complexity without
            disrupting the core business.
          </p>
        </div>
      </Section>

      {/* 2. My Contribution */}
      <Section id="contribution" eyebrow="02 — My Contribution" heading="Leading the BPM and Customer Due Diligence workstreams.">
        <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2 max-w-4xl text-ink-soft leading-relaxed">
          {[
            "Led the UX audit and process redesign for BPM and CDDS",
            "Mapped current-state workflows and identified inefficiencies",
            "Directed cross-functional alignment across operations, business and tech",
            "Defined the streamlined future-state workflow and UI model",
            "Facilitated stakeholder workshops and validation sessions",
            "Established a reusable framework for further core banking processes",
          ].map((item, i) => (
            <li key={i} className="pl-6 relative">
              <span className="absolute left-0 top-[0.65em] w-3 h-px bg-ink-mute" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* 3. Key Insights */}
      <Section id="insights" eyebrow="03 — Key Insights" heading="What research surfaced.">
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
          {[
            {
              t: "Fragmented workflows",
              d: "Core processes were split across multiple systems with duplicated steps and no single source of truth.",
            },
            {
              t: "Manual workarounds",
              d: "Staff relied on informal shortcuts and offline records to complete routine tasks.",
            },
            {
              t: "Interfaces misaligned with work",
              d: "Screens reflected system structure rather than the tasks operations teams actually performed.",
            },
            {
              t: "Costly handoffs",
              d: "Movement between teams introduced delay, rework and inconsistency in decision-making.",
            },
          ].map((it) => (
            <div key={it.t} className="border border-rule p-6 md:p-8 bg-secondary/30">
              <p className="font-serif text-xl md:text-2xl">{it.t}</p>
              <p className="mt-3 text-ink-soft leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20">
          <p className="eyebrow mb-4">Before / After</p>
          <h3 className="font-serif text-2xl md:text-3xl max-w-3xl leading-tight">
            From 35 disjointed screens to a single task-based view.
          </h3>
          <div className="mt-2">
            <p className="text-ink-soft leading-relaxed max-w-wmax text-lg">Information is now organised under intuitive tabs for quick access, reducing search effort and cognitive load.</p>
          </div>
          <div className=" md:mt-6">
          
          <ExpandableImage
            src={sbsaFraudReferral}
            alt="Design challenge"
            caption="Workflow consolidation — 35+ screens mapped into a single task-based interface."
          />
        
          
           
        </div>
          
        </div>
      </Section>

      {/* 4. Solution */}
      <Section id="solution" eyebrow="04 — Solution" heading="A future-state operating model built around the task, not the system.">
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl">
          {[
            {
              t: "Workflow simplification",
              d: "Redundant steps removed; each process reduced to the decisions that actually move work forward.",
            },
            {
              t: "Task-based interface",
              d: "One consolidated view replacing 35+ screens, presenting the right information at the right moment.",
            },
            {
              t: "Reduced handoffs",
              d: "Clearer ownership and fewer transitions between teams, cutting delay and rework.",
            },
            {
              t: "Scalable operating model",
              d: "A reusable framework applicable to further core banking processes beyond BPM and CDDS.",
            },
          ].map((it) => (
            <div key={it.t}>
              <p className="font-serif text-xl md:text-2xl">{it.t}</p>
              <p className="mt-3 text-ink-soft leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Outcomes */}
      <Section id="outcomes" eyebrow="05 — Outcomes" heading="Operational improvements at scale.">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow mb-3">Operational</p>
            <ul className="space-y-3 text-ink-soft">
              <li>47% reduction in workflow time</li>
              <li>Fewer handoffs and improved task accuracy</li>
              <li>Clearer decision paths, reduced errors</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Business</p>
            <ul className="space-y-3 text-ink-soft">
              <li>Faster servicing across BPM and CDDS journeys</li>
              <li>Lower cost-to-serve on high-volume processes</li>
              <li>Input to the broader core banking transformation programme</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Organisational</p>
            <ul className="space-y-3 text-ink-soft">
              <li>Future-state models adopted across workflow streams</li>
              <li>Stronger collaboration between business, ops and tech</li>
              <li>A shift toward more consistent internal systems</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 6. Reflection */}
      <Section id="reflection" eyebrow="06 — Reflection" heading="Simplifying complexity is its own design discipline.">
        <p className="max-w-wmax text-lg text-ink-soft leading-relaxed">
          Enterprise operations rarely fail from a lack of features — they
          fail from accumulated complexity. This engagement reinforced that
          service design and operational transformation, done together, can
          collapse years of layered process into a single coherent
          experience. The value was not in adding, but in the disciplined act
          of taking away.
        </p>
      </Section>

      <section className="border-t border-rule">
        <div className="container-editorial py-10 md:py-14 grid gap-6 md:grid-cols-2">
          <Link
            to="/experience/ibm"
            className="group block border border-rule p-6 hover:border-ink transition-colors"
          >
            <p className="eyebrow flex items-center gap-2 text-ink-mute">
              <ArrowLeft className="size-3.5" /> Previous Project
            </p>
            <p className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
              Barclays
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Business Banking Transformation
            </p>
          </Link>
          <Link
            to="/experience/hdfc"
            className="group block border border-rule p-6 hover:border-ink transition-colors md:text-right"
          >
            <p className="eyebrow flex items-center gap-2 text-ink-mute md:justify-end">
              Next Project <ArrowRight className="size-3.5" />
            </p>
            <p className="mt-3 font-serif text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
              HDFC Bank
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Digital Banking Experiences
            </p>
          </Link>
        </div>
      </section>

      <CaseStudyDisclaimer />
    </article>
  );
}
