import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { FadeIn } from "@/components/site/FadeIn";
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Vishakha Bajaj" },
      {
        name: "description",
        content:
          "Get in touch with Vishakha Bajaj — Experience Design Leader based in Mumbai, India.",
      },
      { property: "og:title", content: "Contact — Vishakha Bajaj" },
      { property: "og:description", content: "Let's continue the conversation." },
    ],
  }),
});

const items = [
  {
    icon: Mail,
    label: "Email",
    value: "vishakha.bajaj@ibm.com",
    href: "mailto:vishakha.bajaj@ibm.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vishakhabajaj",
    href: "https://www.linkedin.com/in/vishakhabajaj",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99206 79217",
    href: "tel:+919920679217",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Mumbai, India",
    href: null,
  },
];

function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let's continue the <em className="italic text-accent">conversation.</em>
          </>
        }
        lede="I enjoy connecting with people who care about clarity, meaningful impact and thoughtful design. If you'd like to explore my work further or discuss how we can shape better experiences together, I'd love to connect."
      />

      <section className="container-editorial pb-20 md:pb-16">
        <FadeIn>
          <ul className="border-t border-rule">
            {items.map((it) => {
              const Icon = it.icon;
              const inner = (
                <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 py-6 md:py-8">
                  <div className="grid size-10 place-items-center border border-rule text-ink-soft shrink-0">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="eyebrow">{it.label}</p>
                    <p className="mt-1.5 font-serif text-xl md:text-2xl truncate">{it.value}</p>
                  </div>
                  {it.href && (
                    <ArrowUpRight className="size-5 text-ink-mute shrink-0" />
                  )}
                </div>
              );
              return (
                <li key={it.label} className="border-b border-rule">
                  {it.href ? (
                    <a
                      href={it.href}
                      target={it.href.startsWith("http") ? "_blank" : undefined}
                      rel={it.href.startsWith("http") ? "noreferrer" : undefined}
                      className="block hover:bg-secondary/40 transition-colors px-1"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="px-1">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </section>
    </>
  );
}
