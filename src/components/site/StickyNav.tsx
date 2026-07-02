import { useEffect, useState } from "react";

type Item = { id: string; label: string };

export function StickyNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(it.id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  return (
    <nav className="hidden lg:block sticky top-24 self-start">
      <p className="eyebrow mb-4">On this page</p>
      <ul className="space-y-2 border-l border-rule">
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              className={`block pl-4 -ml-px border-l text-sm transition-colors ${
                active === it.id
                  ? "border-ink text-ink font-medium"
                  : "border-transparent text-ink-mute hover:text-ink"
              }`}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
