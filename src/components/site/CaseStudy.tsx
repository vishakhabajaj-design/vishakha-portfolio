import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";
import { StickyNav } from "./StickyNav";

export type CaseSection = {
  id: string;
  label: string;
  heading: string;
  body: ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  role: string;
  summary: string;
  sections: CaseSection[];
};

export function CaseStudy({ eyebrow, title, role, summary, sections }: Props) {
  return (
    <article className="container-editorial pt-16 md:pt-24 pb-20">
      <FadeIn>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] max-w-4xl">
          {title}
        </h1>
        <p className="mt-5 text-sm md:text-base text-ink-soft">{role}</p>
        <p className="mt-6 md:mt-8 max-w-3xl text-lg text-ink-soft leading-relaxed">
          {summary}
        </p>
      </FadeIn>

      <div className="mt-16 md:mt-20 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <StickyNav items={sections.map((s) => ({ id: s.id, label: s.label }))} />
        <div className="space-y-16 md:space-y-24 min-w-0">
          {sections.map((s) => (
            <FadeIn key={s.id}>
              <section id={s.id} className="scroll-mt-28">
                <p className="eyebrow mb-3">{s.label}</p>
                <h2 className="font-serif text-3xl md:text-4xl leading-tight max-w-2xl">
                  {s.heading}
                </h2>
                <div className="mt-6 prose-editorial">{s.body}</div>
              </section>
            </FadeIn>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-ink-soft leading-relaxed">
      {items.map((it, i) => (
        <li key={i} className="pl-5 relative">
          <span className="absolute left-0 top-[0.65em] w-2 h-px bg-ink-mute" />
          {it}
        </li>
      ))}
    </ul>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className="text-ink-soft leading-relaxed max-w-3xl">{children}</p>;
}

export function Chips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((c) => (
        <span
          key={c}
          className="text-xs tracking-wide px-2.5 py-1 border border-rule text-ink-soft"
        >
          {c}
        </span>
      ))}
    </div>
  );
}
