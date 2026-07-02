import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center container-editorial">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-5xl">Page not found</h1>
        <p className="mt-3 text-ink-soft">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="min-h-[70vh] flex items-center justify-center container-editorial">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-4xl">This page didn't load</h1>
        <p className="mt-3 text-ink-soft">
          Something went wrong. Try refreshing or head home.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="text-sm font-medium underline underline-offset-4"
          >
            Try again
          </button>
          <a href="/" className="text-sm font-medium underline underline-offset-4">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vishakha Bajaj — Experience Design Leader" },
      {
        name: "description",
        content:
          "Vishakha Bajaj is an Experience Design Leader specialising in enterprise UX, service design, research and strategy — with 20+ years across India, Australia and South Africa.",
      },
      { name: "author", content: "Vishakha Bajaj" },
      { property: "og:title", content: "Vishakha Bajaj — Experience Design Leader" },
      {
        property: "og:description",
        content:
          "Enterprise UX, service design, research and strategy. Turning complexity into clarity through system-led design.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vishakha Bajaj — Experience Design Leader" },
      { name: "twitter:description", content: "Enterprise UX, service design, research and strategy. Turning complexity into clarity through system-led design." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4ddc825b-9ae3-4a17-bf50-e6310eec47d6/id-preview-b90ca313--30f06d46-9df7-4786-8733-099843fdb7dd.lovable.app-1782970084436.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4ddc825b-9ae3-4a17-bf50-e6310eec47d6/id-preview-b90ca313--30f06d46-9df7-4786-8733-099843fdb7dd.lovable.app-1782970084436.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
