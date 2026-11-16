import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteLayout, PageHero, pageHead, PROJECTS, CtaBand } from "@/components/site";

const TITLE = "Réalisations : sites d'école et de cabinet d'avocat | Georgette, atelier web";
const DESC = "Études de cas de Georgette, atelier web en France : le site de l'École du Vieux Château et celui du cabinet Aetius Avocat. Contexte, réalisation, résultat.";

export const Route = createFileRoute("/realisations")({
  head: () => pageHead("/realisations", TITLE, DESC),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero kicker="Réalisations" title="Sites d'école et de cabinet d'avocat" intro="Deux projets livrés, de l'échange à la mise en ligne." />
      {PROJECTS.map((r, i) => (
        <section key={r.id} id={r.id} className={`scroll-mt-28 px-5 py-20 ${i % 2 === 0 ? "bg-card" : ""}`}>
          <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-2">
            <Reveal>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-2xl border shadow-xl shadow-primary/10">
                <img src={r.img} alt={`Capture d'écran de la page d'accueil du site ${r.n}`} width={1280} height={800} loading="lazy" className="w-full object-cover object-top" />
              </a>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="text-3xl font-semibold text-foreground">{r.n}</h2>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Contexte</h3>
              <p className="mt-2 text-muted-foreground">{r.context}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-accent">Ce qui a été fait</h3>
              <ul className="mt-2 space-y-2">
                {r.done.map((d) => <li key={d} className="flex gap-3 text-muted-foreground"><span className="text-accent" aria-hidden>✓</span>{d}</li>)}
              </ul>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-semibold text-primary hover:underline">Voir le site en ligne →</a>
              <figure className="mt-8 rounded-2xl border-l-4 border-accent bg-background p-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Témoignage</h3>
                <blockquote className="mt-2 font-display text-lg italic text-foreground">« {r.quote} »</blockquote>
                <figcaption className="mt-2 text-sm text-muted-foreground">— {r.author}</figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      ))}
      <CtaBand title="Et si le prochain site, c'était le vôtre ?" />
    </SiteLayout>
  );
}
