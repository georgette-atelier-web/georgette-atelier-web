import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SiteLayout, SectionTitle, pageHead, Portrait, ContactForm, Faq, btn } from "@/components/site";

const TITLE = "Contact et devis gratuit | Georgette, atelier web";
const DESC = "Contactez Anna Bruyère, développeuse web freelance en France depuis 2020, pour un devis gratuit de site vitrine. Réponse sous 48 h.";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("/contact", TITLE, DESC),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <section className="px-5 pb-24 pt-36 sm:pt-44">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[2fr_3fr]">
          <Reveal><Portrait /></Reveal>
          <Reveal delay={120}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">À propos et contact</p>
            <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">Bonjour, je suis Anna Bruyère</h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>Développeuse web depuis 2020, j'ai fondé Georgette, un atelier web qui accompagne les petites structures — écoles, cabinets, artisans et indépendants — qui veulent un site sérieux sans se perdre dans la technique.</p>
              <p>Mon approche : écouter, simplifier, livrer un site rapide et facile à comprendre pour vos visiteurs. Vous avez une seule interlocutrice du premier échange à la mise en ligne, et après.</p>
            </div>
            <a href="#devis" className={`${btn} mt-8`}>Demander un devis gratuit</a>
          </Reveal>
        </div>
      </section>
      <section id="devis" className="scroll-mt-28 bg-card px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="Contact" title="Demandez votre devis gratuit" intro="Décrivez votre projet en quelques lignes, je vous réponds sous 48 h." />
          <Reveal><ContactForm /></Reveal>
          <p className="mt-6 text-center text-sm text-muted-foreground">Pas encore sûr de l'offre ? <Link to="/creation-site-vitrine" className="font-semibold text-primary hover:underline">Comparer les offres</Link></p>
        </div>
      </section>
      <section className="px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionTitle kicker="Questions fréquentes" title="Vos questions, mes réponses" />
          <Faq />
        </div>
      </section>
    </SiteLayout>
  );
}
