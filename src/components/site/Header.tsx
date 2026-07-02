import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/experience", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-rule">
      <div className="container-editorial flex h-16 items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 min-w-0">
          <span className="font-serif text-xl leading-none">Vishakha Bajaj</span>
          <span className="hidden sm:inline text-[11px] tracking-[0.14em] uppercase text-ink-mute">
            Experience Design Leader
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-sm text-ink-soft transition-colors hover:text-ink data-[status=active]:text-ink data-[status=active]:font-medium"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-rule">
          <div className="container-editorial flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-ink-soft data-[status=active]:text-ink"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
