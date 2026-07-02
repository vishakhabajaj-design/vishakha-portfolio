import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export function ExpandableImage({ src, alt, caption, className }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <figure className={className}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full overflow-hidden border border-rule bg-secondary cursor-zoom-in"
          aria-label={`Expand image: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </button>
        {caption && (
          <figcaption className="mt-3 text-sm text-ink-mute">{caption}</figcaption>
        )}
      </figure>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center p-6"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute top-4 right-4 text-paper p-2"
              onClick={() => setOpen(false)}
            >
              <X className="size-6" />
            </button>
            <motion.img
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              src={src}
              alt={alt}
              className="max-h-[92vh] max-w-[92vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
