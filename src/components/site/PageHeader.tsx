import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
};

export function PageHeader({ eyebrow, title, lede }: Props) {
  return (
    <section className="container-editorial pt-20 md:pt-28 pb-12 md:pb-16">
      <FadeIn>
        {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight max-w-4xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl text-ink-soft leading-relaxed">
            {lede}
          </p>
        )}
      </FadeIn>
    </section>
  );
}
