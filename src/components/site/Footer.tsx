import { Link } from "@tanstack/react-router";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className=" border-t border-rule bg-paper">
      <div className="container-editorial py-16 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl leading-tight max-w-md">
            Let's continue the conversation.
          </p>
          <p className="mt-4 text-ink-soft max-w-md">
            I enjoy connecting with people who care about clarity, meaningful
            impact and thoughtful design.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 decoration-ink-mute hover:decoration-ink"
          >
            Get in touch <span aria-hidden>→</span>
          </Link>
        </div>
        <div>
          <p className="eyebrow mb-4">Connect</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="https://www.linkedin.com/in/vishakhabajaj"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-ink-soft hover:text-ink"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:vishakha.bajaj@ibm.com"
                className="inline-flex items-center gap-2 text-ink-soft hover:text-ink"
              >
                <Mail className="size-4" /> vishakha.bajaj@ibm.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/experience" className="text-ink-soft hover:text-ink">Work</Link></li>
            <li><Link to="/about" className="text-ink-soft hover:text-ink">About</Link></li>
            <li><Link to="/contact" className="text-ink-soft hover:text-ink">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="container-editorial py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-mute">
          <p>© {new Date().getFullYear()} Vishakha Bajaj. All rights reserved.</p>
          <p>Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}
