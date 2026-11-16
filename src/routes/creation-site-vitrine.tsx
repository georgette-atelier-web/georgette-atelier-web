import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteLayout, SectionTitle, PageHero, pageHead, Steps, CtaBand, btn } from "@/components/site";

const TITLE = "Création de site vitrine à prix fixe | Georgette, atelier web";
const DESC = "Site vitrine pour indépendant, artisan ou commerce : offre Essentielle dès 900 €, Visibilité dès 1 500 €, maintenance dès 40 €/mois. Drôme et Ardèche.";

export const Route = createFileRoute("/creation-site-vitrine")({
  head: () => pageHead("/creation-site-vitrine", TITLE, DESC),
  component: Page,
});

const OFFERS = [
  { t: "Essentielle", p: "900 €", u: "", f: ["3 à 5 pages", "Adapté au mobile et à l'ordinateur", "Formulaire de contact", "Mise en ligne incluse"], hl: false, note: "" },
  { t: "Visibilité", p: "1 500 €", u: "", f: ["Tout le contenu de l'offre Essentielle", "Optimisation pour Google", "Création ou refonte de la fiche Google Business", "Mots-clés locaux"], hl: true, note: "Aucun positionnement sur Google ne peut être garanti." },
  { t: "Maintenance", p: "40 €", u: "/mois", f: ["Hébergement", "Mises à jour", "Petites modifications de contenu, dans une limite définie au devis", "Sauvegardes régulières"], hl: false, note: "" },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero kicker="Offres et services" title="Création de site vitrine à prix fixe" intro="Des tarifs clairs, sans surprise. Chaque projet fait l'objet d'un devis détaillé et gratuit." />
      <section className="px-5 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="sr-only">Nos trois offres</h2>
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {OFFERS.map((o, i) => (
              <Reveal key={o.t} delay={i * 100} className="h-full">
                <article className={`flex h-full flex-col rounded-2xl border p-8 ${o.hl ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/25" : "bg-card"}`}>
                  {o.hl && <span className="mb-4 self-start rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Le plus demandé</span>}
                  <h3 className="text-2xl font-semibold">{o.t}</h3>
                  <p className={`mt-4 text-sm ${o.hl ? "text-primary-foreground/75" : "text-muted-foreground"}`}>à partir de</p>
                  <p className="font-display text-4xl font-semibold">{o.p}<span className="text-lg font-normal">{o.u}</span></p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {o.f.map((x) => <li key={x} className="flex gap-3"><span className="text-accent" aria-hidden>✓</span>{x}</li>)}
                  </ul>
                  {o.note && <p className="mt-4 text-xs text-primary-foreground/75">{o.note}</p>}
                  <Link to="/contact" className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition ${o.hl ? "bg-accent text-accent-foreground hover:bg-accent/90" : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}>Demander un devis</Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-10 max-w-3xl rounded-2xl border bg-card p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground">Chaque projet est différent</h2>
            <p className="mt-3 text-muted-foreground">Besoin d'une page en plus, d'une boutique simple ou d'un accompagnement particulier ? Je vous prépare une proposition adaptée.</p>
            <Link to="/contact" className={`${btn} mt-6`}>Demander un devis personnalisé</Link>
          </Reveal>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">Règlement en 2 ou 3 fois sans frais possible sur les projets de création.</p>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground">
            Envie d'en savoir plus sur le référencement local ou la maintenance ? <Link to="/referencement-maintenance" className="font-semibold text-primary hover:underline">Voir le détail</Link>.
          </p>
        </div>
      </section>
      <section className="bg-card px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Délai</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">2 à 4 semaines en moyenne</h2>
            <p className="mt-4 text-muted-foreground">À partir de la validation du devis et de la réception de vos éléments (textes, photos, logo). Le délai dépend surtout de votre réactivité pour relire et valider les étapes.</p>
          </Reveal>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Comment ça se passe" title="Quatre étapes, une seule interlocutrice" intro="Découvrez aussi les sites déjà livrés." />
          <Steps />
          <p className="mt-8 text-center"><Link to="/realisations" className="font-semibold text-primary hover:underline">Voir mes réalisations →</Link></p>
        </div>
      </section>
      <CtaBand />
    </SiteLayout>
  );
}
