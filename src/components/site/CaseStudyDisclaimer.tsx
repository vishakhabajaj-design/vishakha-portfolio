import { FadeIn } from "./FadeIn";

export function CaseStudyDisclaimer() {
  return (
    <div className="container-editorial py-4 md:py-4">
      <FadeIn>
        <p className="text-sm font-medium text-ink">Confidentiality Notice</p>
        <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-4xl">
          Selected project details have been adapted to respect client confidentiality and non-disclosure agreements.
        </p>
      </FadeIn>
    </div>
  );
}
