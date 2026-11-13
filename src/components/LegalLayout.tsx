import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto max-w-3xl px-5 py-5">
          <Link to="/" className="font-display text-lg font-semibold text-primary">← Anna Bruyère</Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="text-4xl font-semibold text-foreground">{title}</h1>
        <div className="mt-10 space-y-8 leading-relaxed text-foreground [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:text-muted-foreground">
          {children}
        </div>
      </main>
    </div>
  );
}
