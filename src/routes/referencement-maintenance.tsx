import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteLayout, PageHero, pageHead, CtaBand } from "@/components/site";

const TITLE = "Référencement local et maintenance de site web | Georgette";
const DESC = "Référencement local à Valence, en Drôme et en Ardèche (pages optimisées, fiche Google Business) et maintenance de site web dès 40 €/mois, par une développeuse web freelance.";

export const Route = createFileRoute("/referencement-maintenance")({
  head: () => pageHead("/referencement-maintenance", TITLE, DESC),
  component: Page,
});

const SEO = [
  ["Optimisation des pages", "Titres, descriptions, structure des contenus et vitesse d'affichage : chaque page est préparée pour être bien comprise par Google."],
  ["Mots-clés locaux", "Nous identifions ensemble les mots que vos clients tapent vraiment (votre métier + votre ville) et je les intègre naturellement dans vos textes."],
  ["Fiche Google Business", "Création ou refonte de votre fiche : horaires, photos, description, catégories. C'est elle qui vous fait apparaître sur Google Maps."],
];
const MAINT = [
  ["Hébergement", "Votre site est hébergé, rapide et sécurisé. Vous n'avez rien à gérer."],
  ["Mises à jour", "Les mises à jour techniques et de sécurité sont faites pour vous."],
  ["Petites modifications", "Un horaire, une photo, une actualité : envoyez-moi un message, je m'en occupe, dans une limite définie au devis."],
  ["Sauvegardes", "Des sauvegardes régulières pour ne jamais rien perdre."],
];

function Block({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map(([t, d], i) => (
        <Reveal key={t} delay={i * 80} className="h-full">
          <article className="h-full rounded-2xl border bg-background p-7">
            <h3 className="text-lg font-semibold text-foreground">{t}</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{d}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function Page() {
  return (
    <SiteLayout>
      <PageHero kicker="Référencement & maintenance" title="Référencement local et maintenance de site web" intro="Être trouvé par les clients près de chez vous, et garder un site à jour sans y penser." />
      <section className="bg-card px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10">
            <h2 className="text-3xl font-semibold text-foreground">Le référencement local</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">Inclus dans l'<Link to="/creation-site-vitrine" className="font-semibold text-primary hover:underline">offre Visibilité, à partir de 1 800 €</Link>. Pour les entreprises de Valence, de la Drôme, de l'Ardèche et partout en France à distance. Aucun positionnement sur Google ne peut être garanti.</p>
          </Reveal>
          <Block items={SEO} />
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-10">
            <h2 className="text-3xl font-semibold text-foreground">La maintenance mensuelle</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">À partir de 40 €/mois, sans engagement de longue durée. Vous restez propriétaire de votre site.</p>
          </Reveal>
          <Block items={MAINT} />
        </div>
      </section>
      <CtaBand title="Envie d'être mieux trouvé sur Google ?" />
    </SiteLayout>
  );
}
