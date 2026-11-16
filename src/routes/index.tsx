import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import { SiteLayout, SectionTitle, pageHead, btn, SERVICES, PROJECTS, Steps, Portrait, CtaBand, EMAIL, LINKEDIN, SITE } from "@/components/site";

const TITLE = "Création de site vitrine | Georgette, atelier web";
const DESC = "Georgette, atelier web en France : création de sites vitrine clairs et rapides pour écoles, cabinets, artisans et indépendants, à prix fixe. Devis gratuit.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Georgette — atelier web",
  alternateName: "Georgette atelier web",
  description: DESC,
  email: EMAIL,
  url: `${SITE}/`,
  image: `${SITE}/apple-touch-icon.png`,
  logo: `${SITE}/apple-touch-icon.png`,
  priceRange: "À partir de 1 000 €",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Ardèche" },
    { "@type": "Country", name: "France" },
  ],
  founder: { "@type": "Person", name: "Anna Bruyère", jobTitle: "Développeuse web, fondatrice de Georgette" },
  sameAs: [LINKEDIN],
  knowsAbout: ["Création de site vitrine", "Référencement local", "Google Business Profile", "Maintenance de site web"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    ...pageHead("/", TITLE, DESC),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: Index,
});

const OLD_ANCHORS: Record<string, string> = {
  services: "/creation-site-vitrine", offres: "/creation-site-vitrine",
  realisations: "/realisations", methode: "/", "a-propos": "/contact", faq: "/contact", contact: "/contact",
};

function Index() {
  const navigate = useNavigate();
  useEffect(() => {
    const target = OLD_ANCHORS[window.location.hash.slice(1)];
    if (target && target !== "/") void navigate({ to: target, replace: true });
  }, [navigate]);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden px-5 pb-24 pt-36 sm:pt-44">
        <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Atelier web en France</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-6xl">Votre site web clair, rapide et prêt à convaincre vos clients</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Création de sites vitrine pour écoles, cabinets, artisans et indépendants, à prix fixe.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className={btn}>Demander un devis gratuit</Link>
            <Link to="/realisations" className="font-semibold text-primary underline-offset-4 hover:underline">Voir mes réalisations →</Link>
          </div>
        </div>
      </section>

      <section className="bg-card px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Ce que je fais" title="Un accompagnement complet, de la page blanche à Google" />
          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.t} delay={i * 100} className="h-full">
                <article className="flex h-full flex-col rounded-2xl border bg-background p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                  <span className="font-display text-3xl text-accent">{s.n}</span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{s.t}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.d}</p>
                  <Link to={s.to} className="mt-6 font-semibold text-primary hover:underline">En savoir plus →</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Réalisations" title="Quelques sites mis en ligne" />
          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((r, i) => (
              <Reveal key={r.id} delay={i * 120}>
                <Link to="/realisations" hash={r.id} className="group block overflow-hidden rounded-2xl border bg-card transition hover:shadow-xl hover:shadow-primary/10">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img src={r.img} alt={`Capture d'écran de la page d'accueil du site ${r.n}`} width={1280} height={800} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-foreground">{r.n}</h3>
                    <p className="mt-2 text-muted-foreground">{r.short}</p>
                    <span className="mt-4 inline-block font-semibold text-primary">Voir l'étude de cas →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle kicker="Comment ça se passe" title="Quatre étapes, une seule interlocutrice" />
          <Steps />
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[2fr_3fr]">
          <Reveal><Portrait /></Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">À propos</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">Bonjour, je suis Anna Bruyère</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">Développeuse web depuis 2020, j'ai fondé Georgette, un atelier web qui accompagne les petites structures — écoles, cabinets, artisans et indépendants — qui veulent un site sérieux sans se perdre dans la technique.</p>
            <Link to="/contact" className="mt-6 inline-block font-semibold text-primary hover:underline">En savoir plus sur moi →</Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
