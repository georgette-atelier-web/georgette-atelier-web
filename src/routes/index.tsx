import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Linkedin } from "lucide-react";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";
import portrait from "@/assets/anna-bruyere.jpg";
import siteEcole from "@/assets/site-ecole.jpg";
import siteAetius from "@/assets/site-aetius.jpg";
import logo from "@/assets/logo-georgette.png";

const EMAIL = "anna.bruyere.zh@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/anna-bruy%C3%A8re-198813130/";
const TITLE = "Création de site vitrine à prix fixe | Georgette, atelier web";
const DESC = "Georgette, atelier web : sites vitrine clairs et rapides pour écoles, cabinets, artisans et indépendants. Développeuse web freelance en France. Devis gratuit, à partir de 1 000 €.";

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Georgette — atelier web",
  alternateName: "Georgette atelier web",
  description: DESC,
  email: EMAIL,
  url: "/",
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
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSON_LD) }],
  }),
  component: Index,
});

const NAV = [
  ["services", "Services"], ["offres", "Offres"], ["realisations", "Réalisations"],
  ["methode", "Méthode"], ["a-propos", "À propos"], ["contact", "Contact"],
] as const;

function SectionTitle({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-double border-primary/70 bg-background/95 backdrop-blur">
      <div className="h-1.5 bg-[repeating-linear-gradient(90deg,var(--primary)_0_18px,var(--accent)_18px_36px)]" aria-hidden="true" />
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <a href="#accueil" className="group flex items-center gap-3" aria-label="Georgette — atelier web, retour à l'accueil">
          <img src={logo} alt="Logo Georgette : tête de bouledogue français" width={256} height={256} className="h-14 w-14 transition-transform duration-300 group-hover:-rotate-6" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-2xl font-bold italic tracking-tight text-primary">Georgette</span>
            <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-accent">— Atelier web · France —</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 text-sm font-semibold lg:flex" aria-label="Navigation principale">
          {NAV.map(([id, l]) => <a key={id} href={`#${id}`} className="rounded-full px-3.5 py-2 uppercase tracking-[0.12em] text-[0.72rem] text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground">{l}</a>)}
        </nav>
        <button className="rounded-full border-2 border-primary p-2.5 text-primary lg:hidden" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-5 bg-current" /><span className="mt-1 block h-0.5 w-5 bg-current" /><span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
      </div>
      {open && (
        <nav className="border-t-2 border-dashed border-primary/40 bg-background px-5 py-3 lg:hidden" aria-label="Navigation mobile">
          {NAV.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">{l}</a>)}
        </nav>
      )}
    </header>
  );
}

const btn = "inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90";

function Index() {
  return (
    <>
      <Header />
      <main>
        {/* Accueil */}
        <section id="accueil" className="relative overflow-hidden px-5 pb-24 pt-36 sm:pt-44">
          <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Atelier web en France</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
              Votre site web clair, rapide et prêt à convaincre vos clients
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Création de sites vitrine pour écoles, cabinets, artisans et indépendants, à prix fixe.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" className={btn}>Demander un devis gratuit</a>
              <a href="#realisations" className="font-semibold text-primary underline-offset-4 hover:underline">Voir mes réalisations →</a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-card px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle kicker="Ce que je fais" title="Un accompagnement complet, de la page blanche à Google" />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["01", "Site vitrine sur mesure", "Un site à votre image, simple à parcourir sur mobile comme sur ordinateur, pensé pour transformer les visiteurs en clients."],
                ["02", "Référencement local & Google Business", "Être trouvé par les gens près de chez vous : optimisation des pages, mots-clés locaux et fiche Google Business soignée."],
                ["03", "Maintenance et hébergement", "Je m'occupe de l'hébergement, des mises à jour et des petites modifications. Vous vous concentrez sur votre métier."],
              ].map(([n, t, d], i) => (
                <Reveal key={t} delay={i * 100} className="h-full">
                  <article className="h-full rounded-2xl border bg-background p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                    <span className="font-display text-3xl text-accent">{n}</span>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">{t}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{d}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Offres */}
        <section id="offres" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle kicker="Offres" title="Des tarifs clairs, sans surprise" intro="Chaque projet fait l'objet d'un devis détaillé et gratuit." />
            <div className="grid items-stretch gap-6 md:grid-cols-3">
              {[
                { t: "Vitrine", p: "1 000 €", u: "", f: ["3 à 5 pages", "Design responsive", "Formulaire de contact", "Mise en ligne incluse"], hl: false },
                { t: "Vitrine + Référencement local", p: "1 800 €", u: "", f: ["Tout le pack Vitrine", "Optimisation pour Google", "Création ou refonte de la fiche Google Business", "Mots-clés locaux"], hl: true },
                { t: "Maintenance", p: "40 €", u: "/mois", f: ["Hébergement", "Mises à jour", "Petites modifications", "Sauvegardes régulières"], hl: false },
              ].map((o, i) => (
                <Reveal key={o.t} delay={i * 100} className="h-full">
                  <article className={`flex h-full flex-col rounded-2xl border p-8 ${o.hl ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/25" : "bg-card"}`}>
                    {o.hl && <span className="mb-4 self-start rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Le plus demandé</span>}
                    <h3 className="text-2xl font-semibold">{o.t}</h3>
                    <p className={`mt-4 text-sm ${o.hl ? "text-primary-foreground/75" : "text-muted-foreground"}`}>à partir de</p>
                    <p className="font-display text-4xl font-semibold">{o.p}<span className="text-lg font-normal">{o.u}</span></p>
                    <ul className="mt-6 flex-1 space-y-3">
                      {o.f.map((x) => <li key={x} className="flex gap-3"><span className="text-accent" aria-hidden>✓</span>{x}</li>)}
                    </ul>
                    <a href="#contact" className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition ${o.hl ? "bg-accent text-accent-foreground hover:bg-accent/90" : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}>Demander un devis</a>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground">
              Règlement en 2 ou 3 fois sans frais possible sur les projets de création.
            </p>
          </div>
        </section>

        {/* Réalisations */}
        <section id="realisations" className="bg-card px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle kicker="Réalisations" title="Quelques sites mis en ligne" />
            <div className="grid gap-8 md:grid-cols-2">
              {[
                { img: siteEcole, n: "École du Vieux Château", d: "Site d'une école : présentation de l'établissement, actualités et informations pratiques pour les familles.", url: "https://www.ecoleduvieuxchateau.fr" },
                { img: siteAetius, n: "Aetius Avocat", d: "Site d'un cabinet d'avocat : domaines d'intervention, présentation du cabinet et prise de contact simplifiée.", url: "https://aetius-avocat.fr" },
              ].map((r, i) => (
                <Reveal key={r.n} delay={i * 120}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-2xl border bg-background transition hover:shadow-xl hover:shadow-primary/10">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img src={r.img} alt={`Capture d'écran de la page d'accueil du site ${r.n}`} width={1280} height={800} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-semibold text-foreground">{r.n}</h3>
                      <p className="mt-2 text-muted-foreground">{r.d}</p>
                      <span className="mt-4 inline-block font-semibold text-primary">Voir le site →</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section id="methode" className="px-5 py-24">
          <div className="mx-auto max-w-6xl">
            <SectionTitle kicker="Comment ça se passe" title="Quatre étapes, une seule interlocutrice" />
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Échange", "Un appel gratuit pour comprendre votre activité, vos clients et vos besoins."],
                ["Devis", "Une proposition claire, à prix fixe, avec le contenu et le délai détaillés."],
                ["Création", "Je conçois votre site et vous le montre au fil de l'eau pour vos retours."],
                ["Mise en ligne", "Votre site est publié, référencé, et je vous explique comment le faire vivre."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 100} className="h-full">
                  <li className="relative h-full rounded-2xl border bg-card p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">{i + 1}</span>
                    <h3 className="mt-5 text-lg font-semibold text-foreground">{t}</h3>
                    <p className="mt-2 text-muted-foreground">{d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* À propos */}
        <section id="a-propos" className="bg-card px-5 py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[2fr_3fr]">
            <Reveal>
              <div className="relative mx-auto w-full max-w-xs">
                <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-3xl border-2 border-accent" />
                <img src={portrait} alt="Portrait d'Anna Bruyère, développeuse web freelance" width={1024} height={1280} loading="lazy" className="relative aspect-[4/5] w-full rounded-t-full rounded-b-3xl object-cover shadow-2xl shadow-primary/20 ring-4 ring-card" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">À propos</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">Bonjour, je suis Anna Bruyère</h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>Développeuse web depuis 2020, j'ai fondé Georgette, un atelier web qui accompagne les petites structures — écoles, cabinets, artisans et indépendants — qui veulent un site sérieux sans se perdre dans la technique.</p>
                <p>Mon approche : écouter, simplifier, livrer un site rapide et facile à comprendre pour vos visiteurs. Vous avez une seule interlocutrice du premier échange à la mise en ligne, et après.</p>
              </div>
              <a href="#contact" className={`${btn} mt-8`}>Parlons de votre projet</a>
            </Reveal>
          </div>
        </section>

        <Contact />
      </main>

      <footer className="border-t bg-primary px-5 py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Georgette — atelier web · Anna Bruyère, développeuse web freelance</p>
          <nav className="flex items-center gap-6" aria-label="Liens légaux et réseaux">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
              <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
            </a>
            <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
            <Link to="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}

const schema = z.object({
  nom: z.string().trim().min(1, "Merci d'indiquer votre nom").max(100),
  email: z.string().trim().email("Adresse e-mail invalide").max(255),
  structure: z.string().trim().max(150),
  message: z.string().trim().min(1, "Merci d'écrire un message").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const r = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const { nom, email, structure, message } = r.data;
    const body = `Nom : ${nom}\nE-mail : ${email}\nStructure : ${structure || "—"}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Demande de devis — ${nom}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = "mt-2 w-full rounded-xl border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
  const err = (k: string) => errors[k] && <p className="mt-1 text-sm text-destructive">{errors[k]}</p>;
  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle kicker="Contact" title="Demandez votre devis gratuit" intro="Décrivez votre projet en quelques lignes, je vous réponds sous 48 h." />
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl border bg-card p-6 sm:grid-cols-2 sm:p-10">
            <label className="text-sm font-medium text-foreground">Nom *<input name="nom" autoComplete="name" className={field} />{err("nom")}</label>
            <label className="text-sm font-medium text-foreground">E-mail *<input name="email" type="email" autoComplete="email" className={field} />{err("email")}</label>
            <label className="text-sm font-medium text-foreground sm:col-span-2">Structure (école, cabinet, entreprise…)<input name="structure" className={field} /></label>
            <label className="text-sm font-medium text-foreground sm:col-span-2">Votre projet *<textarea name="message" rows={5} className={field} />{err("message")}</label>
            <div className="flex flex-col items-start gap-3 sm:col-span-2">
              <button type="submit" className={btn}>Envoyer ma demande</button>
              {sent && <p className="text-sm text-primary">Votre messagerie s'ouvre avec votre demande pré-remplie. Il ne reste qu'à l'envoyer !</p>}
              <p className="text-sm text-muted-foreground">Ou écrivez-moi directement : <a href={`mailto:${EMAIL}`} className="font-semibold text-primary hover:underline">{EMAIL}</a></p>
              <p className="text-sm text-muted-foreground">Retrouvez-moi aussi sur <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"><Linkedin className="size-4" aria-hidden="true" /> LinkedIn</a></p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
