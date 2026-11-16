import { Link } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { Linkedin } from "lucide-react";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo-georgette.webp";
import portrait from "@/assets/anna-bruyere.webp";
import siteEcole from "@/assets/site-ecole.webp";
import siteAetius from "@/assets/site-aetius.webp";

export const SITE = "https://georgette-atelier-web.fr";
export const EMAIL = "contact@georgette-atelier-web.fr";
export const LINKEDIN = "https://www.linkedin.com/in/anna-bruy%C3%A8re-198813130/";

export function pageHead(path: string, title: string, desc: string) {
  const url = `${SITE}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: desc },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const btn = "inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90";

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/creation-site-vitrine", label: "Offres" },
  { to: "/referencement-maintenance", label: "Référencement & maintenance" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/contact", label: "À propos & contact" },
] as const;

export function SectionTitle({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <Reveal className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </Reveal>
  );
}

export function PageHero({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:pt-44">
      <div aria-hidden className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{kicker}</p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">{title}</h1>
        {intro && <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

const navCls = "rounded-full px-2.5 py-2 uppercase tracking-[0.05em] text-[0.68rem] text-foreground/80 transition-colors hover:bg-primary hover:text-primary-foreground";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-4 border-double border-primary/70 bg-background/95 backdrop-blur">
      <div className="h-1.5 bg-[repeating-linear-gradient(90deg,var(--primary)_0_18px,var(--accent)_18px_36px)]" aria-hidden="true" />
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-5">
        <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="Georgette — atelier web, retour à l'accueil">
          <img src={logo} alt="Logo Georgette : tête de bouledogue français" width={160} height={160} fetchPriority="high" className="h-11 w-11 sm:h-14 sm:w-14 transition-transform duration-300 group-hover:-rotate-6" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl sm:text-2xl font-bold italic tracking-tight text-primary">Georgette</span>
            <span className="mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-accent sm:block">— Atelier web · France —</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-0.5 text-sm font-semibold xl:flex" aria-label="Navigation principale">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className={navCls} activeOptions={{ exact: true }} activeProps={{ className: "bg-primary/10 text-primary" }}>{n.label}</Link>
          ))}
          <Link to="/contact" className="ml-1 rounded-full bg-accent px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-accent-foreground transition hover:bg-accent/90">Devis gratuit</Link>
        </nav>
        <div className="flex items-center gap-2 xl:hidden">
        <Link to="/contact" className="rounded-full bg-accent px-3.5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.08em] text-accent-foreground">Devis gratuit</Link>
        <button className="rounded-full border-2 border-primary p-2.5 text-primary" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-0.5 w-5 bg-current" /><span className="mt-1 block h-0.5 w-5 bg-current" /><span className="mt-1 block h-0.5 w-5 bg-current" />
        </button>
        </div>
      </div>
      {open && (
        <nav className="border-t-2 border-dashed border-primary/40 bg-background px-5 py-3 xl:hidden" aria-label="Navigation mobile">
          {NAV.map((n) => <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-foreground">{n.label}</Link>)}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 mb-1 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-accent-foreground">Devis gratuit</Link>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-primary px-5 py-12 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 text-sm md:grid-cols-[2fr_3fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo Georgette : tête de bouledogue français" width={160} height={160} loading="lazy" className="h-12 w-12 rounded-full bg-card/90 p-1" />
            <p className="font-display text-xl font-bold italic">Georgette — atelier web</p>
          </div>
          <p className="mt-2 text-primary-foreground/80">Anna Bruyère, développeuse web freelance · Création de sites internet en Drôme, en Ardèche et partout en France à distance</p>
        </div>
        <nav className="grid gap-2 sm:grid-cols-2" aria-label="Plan du site">
          {NAV.map((n) => <Link key={n.to} to={n.to} className="hover:underline">{n.label}</Link>)}
          <Link to="/mentions-legales" className="hover:underline">Mentions légales</Link>
          <Link to="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</Link>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline">
            <Linkedin className="size-4" aria-hidden="true" /> LinkedIn
          </a>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-primary-foreground/70">© {new Date().getFullYear()} Georgette — atelier web</p>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (<><Header /><main>{children}</main><div className="pb-16 md:pb-0"><Footer /></div><MobileContactBar /></>);
}

function MobileContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-2 gap-2 border-t bg-background/95 px-3 py-2.5 backdrop-blur md:hidden" data-mobile-bar>
      <a href={`mailto:${EMAIL}`} className="flex items-center justify-center rounded-full border-2 border-primary text-sm font-semibold text-primary">Écrire un e-mail</a>
      <Link to="/contact" hash="devis" className="flex items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">Demander un devis</Link>
    </div>
  );
}

export const SERVICES = [
  { n: "01", t: "Site vitrine sur mesure", d: "Un site à votre image qui présente clairement vos services, rassure vos visiteurs et les incite à vous contacter.", to: "/creation-site-vitrine" },
  { n: "02", t: "Référencement local & Google Business", d: "Être trouvé par les clients près de chez vous, en Drôme et en Ardèche : pages optimisées, mots-clés locaux et fiche Google Business soignée.", to: "/referencement-maintenance" },
  { n: "03", t: "Maintenance et hébergement", d: "Un site toujours à jour, sécurisé et sauvegardé, sans que vous ayez à y penser. Prestation facultative : vous pouvez aussi garder votre site et le gérer vous-même.", to: "/referencement-maintenance" },
] as const;

export const BENEFITS = [
  ["Une présence professionnelle", "Un site soigné qui inspire confiance dès la première visite."],
  ["Une meilleure visibilité locale", "Être trouvé par les clients qui cherchent votre métier près de chez eux."],
  ["Un site rapide et adapté au mobile", "Agréable à consulter sur téléphone, là où vos clients vous cherchent."],
  ["Des services mieux présentés", "Vos prestations expliquées simplement, pour que chacun comprenne ce que vous proposez."],
  ["Contact et devis simplifiés", "Un formulaire et des boutons clairs pour vous écrire en quelques secondes."],
] as const;

export const AUDIENCES = [
  ["Artisans et bâtiment", "Plombiers, électriciens, menuisiers, paysagistes : montrez vos chantiers et recevez des demandes de devis."],
  ["Commerçants et restaurateurs", "Horaires, carte, produits, accès : l'essentiel pour donner envie de venir."],
  ["Indépendants et professions libérales", "Consultants, thérapeutes, avocats, coachs : une vitrine sérieuse pour votre expertise."],
  ["Écoles, associations et petites entreprises", "Un site clair pour présenter votre établissement ou votre structure, vos actualités et vos contacts."],
] as const;

export const WHY = [
  ["Une interlocutrice unique", "Vous échangez avec la même personne du premier appel à la mise en ligne, et après."],
  ["Une relation directe", "Pas d'intermédiaire ni de jargon : des réponses claires, rapidement."],
  ["Des solutions adaptées à votre budget", "Des offres à prix fixe, ajustées à vos besoins réels."],
  ["Une approche technique sérieuse", "Performance, affichage mobile et bonnes pratiques de référencement dès la conception."],
  ["Un accompagnement humain", "Je vous guide pour les textes, les photos et la prise en main du site."],
  ["Des tarifs transparents", "Les prix sont affichés, le devis est détaillé et gratuit."],
] as const;

export function CardGrid({ items, cols = "md:grid-cols-3", tone = "bg-background" }: { items: readonly (readonly [string, string])[]; cols?: string; tone?: string }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 sm:gap-6 ${cols}`}>
      {items.map(([t, d], i) => (
        <Reveal key={t} delay={i * 80} className="h-full">
          <article className={`grid h-full grid-cols-[auto_minmax(0,1fr)] gap-x-3 rounded-2xl border ${tone} p-5 sm:block sm:p-7`}>
            <span aria-hidden="true" className="text-xl leading-7 text-accent">✦</span>
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-foreground sm:mt-3">{t}</h3>
              <p className="mt-1.5 leading-relaxed text-muted-foreground sm:mt-2">{d}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export const PROJECTS = [
  { id: "ecole-du-vieux-chateau", img: siteEcole, n: "École du Vieux Château", short: "Site d'une école : présentation de l'établissement, actualités et informations pratiques pour les familles.", url: "https://www.ecoleduvieuxchateau.fr",
    context: "Une école qui avait besoin d'un site clair pour présenter l'établissement aux familles et partager sa vie au fil de l'année.",
    done: ["Présentation de l'établissement et de son équipe", "Rubrique d'actualités facile à mettre à jour", "Informations pratiques pour les familles (horaires, inscriptions, contact)", "Affichage soigné sur téléphone"],
    quote: "Anna a su traduire l'esprit de notre école dans un site clair et chaleureux. Les familles nous disent qu'elles trouvent enfin toutes les informations facilement, et mettre à jour les actualités est devenu un jeu d'enfant.",
    author: "La direction de l'école" },
  { id: "aetius-avocat", img: siteAetius, n: "Aetius Avocat", short: "Site d'un cabinet d'avocat : domaines d'intervention, présentation du cabinet et prise de contact simplifiée.", url: "https://aetius-avocat.fr",
    context: "Un cabinet d'avocat qui souhaitait inspirer confiance en ligne et permettre aux futurs clients de le contacter facilement.",
    done: ["Présentation claire des domaines d'intervention", "Présentation du cabinet et de son approche", "Prise de contact simplifiée", "Design sobre et professionnel, rapide à charger"],
    quote: "Nous voulions un site à la hauteur de notre exigence, sans y passer nos soirées. Anna a tout pris en main, du premier échange à la mise en ligne, et le résultat inspire confiance à nos clients dès la première visite.",
    author: "Le cabinet Aetius" },
] as const;

export const STEPS = [
  ["Échange", "Un appel gratuit pour comprendre votre activité, vos clients et vos besoins."],
  ["Devis", "Une proposition claire, à prix fixe, avec le contenu et le délai détaillés."],
  ["Création", "Je conçois votre site et vous le montre au fil de l'eau pour vos retours."],
  ["Mise en ligne", "Votre site est publié, référencé, et je vous explique comment le faire vivre."],
] as const;

export function Steps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {STEPS.map(([t, d], i) => (
        <Reveal key={t} delay={i * 100} className="h-full">
          <li className="relative h-full rounded-2xl border bg-card p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display text-lg text-primary-foreground">{i + 1}</span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

export function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-3xl border-2 border-accent" />
      <img src={portrait} alt="Portrait d'Anna Bruyère, développeuse web freelance" width={640} height={800} loading="lazy" decoding="async" className="relative aspect-[4/5] w-full rounded-t-full rounded-b-3xl object-cover shadow-2xl shadow-primary/20 ring-4 ring-card" />
    </div>
  );
}

export const FAQ = [
  ["Combien de temps faut-il pour créer mon site vitrine ?", "En moyenne, il faut compter entre 2 et 4 semaines à partir du moment où nous validons le devis et rassemblons vos éléments (textes, photos, logo). Le délai dépend surtout de votre réactivité pour relire et valider les étapes."],
  ["Le site m'appartient-il à 100 % ?", "Oui, absolument. Vous êtes l'unique propriétaire de votre nom de domaine, de vos contenus et du site. Aucun abonnement caché, aucun piège : vous êtes totalement libre."],
  ["Dois-je fournir moi-même les textes et les photos ?", "Si vous avez déjà des photos et des textes, je les intègre et les optimise pour le web. Si vous partez de zéro, pas d'inquiétude : je vous guide avec une trame simple pour poser vos idées, et je reformule pour que vos pages soient claires et agréables à lire."],
  ["Mon site sera-t-il adapté aux téléphones et visible sur Google ?", "Oui, tous les sites conçus par Georgette sont pensés en priorité pour smartphone, s'affichent très rapidement et intègrent les bonnes pratiques de référencement naturel (balises, descriptions, vitesse de chargement, plan du site)."],
  ["Dois-je m'y connaître en technique ?", "Non, pas du tout. Je m'occupe de toute la partie technique et je vous explique chaque étape avec des mots simples. Après la mise en ligne, vous savez faire les petites mises à jour, ou vous me les confiez."],
  ["Que se passe-t-il après la mise en ligne ?", "Vous avez deux options, et la maintenance est facultative : gérer votre site en toute autonomie grâce aux explications simples que je vous fournis, ou me confier sa maintenance mensuelle (hébergement, sauvegardes régulières, mises à jour de sécurité et petites modifications de contenu). Vous pouvez tout à fait conserver votre site sans souscrire à cette prestation."],
] as const;

export function Faq() {
  return (
    <div className="space-y-4">
      {FAQ.map(([q, a], i) => (
        <Reveal key={q} delay={i * 60}>
          <details className="group rounded-2xl border bg-card p-6 open:shadow-lg open:shadow-primary/5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-foreground [&::-webkit-details-marker]:hidden">
              <h3>{q}</h3>
              <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 leading-relaxed text-muted-foreground">{a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}

const schema = z.object({
  nom: z.string().trim().min(1, "Merci d'indiquer votre nom").max(100),
  email: z.string().trim().email("Adresse e-mail invalide").max(255),
  activite: z.string().trim().max(150),
  message: z.string().trim().min(1, "Merci de décrire votre projet").max(2000),
});

export function ContactForm() {
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
    const { nom, email, activite, message } = r.data;
    const body = `Nom : ${nom}\nE-mail : ${email}\nActivité : ${activite || "—"}\n\n${message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Demande de devis — ${nom}`)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const field = "mt-2 w-full rounded-xl border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";
  const err = (k: string) => errors[k] && <p className="mt-1 text-sm text-destructive">{errors[k]}</p>;
  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-3xl border bg-card p-6 sm:grid-cols-2 sm:p-10">
      <label className="text-sm font-medium text-foreground">Nom *<input name="nom" autoComplete="name" required className={field} />{err("nom")}</label>
      <label className="text-sm font-medium text-foreground">E-mail *<input name="email" type="email" autoComplete="email" required className={field} />{err("email")}</label>
      <label className="text-sm font-medium text-foreground sm:col-span-2">Votre activité (artisan, commerce, cabinet…)<input name="activite" className={field} /></label>
      <label className="text-sm font-medium text-foreground sm:col-span-2">Votre projet *<textarea name="message" rows={5} required className={field} />{err("message")}</label>
      <div className="flex flex-col items-start gap-3 sm:col-span-2">
        <button type="submit" className={btn}>Envoyer ma demande</button>
        <p className="text-sm text-muted-foreground">Gratuit et sans engagement, réponse sous 48 h.</p>
        {sent && <p className="text-sm text-primary">Votre messagerie s'ouvre avec votre demande pré-remplie. Il ne reste qu'à l'envoyer !</p>}
        <p className="text-sm text-muted-foreground">Ou écrivez-moi directement : <a href={`mailto:${EMAIL}`} className="font-semibold text-primary hover:underline">{EMAIL}</a></p>
        <p className="text-sm text-muted-foreground">Retrouvez-moi aussi sur <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"><Linkedin className="size-4" aria-hidden="true" /> LinkedIn</a></p>
      </div>
    </form>
  );
}

export function CtaBand({ title = "Un projet de site ? Parlons-en." }: { title?: string }) {
  return (
    <section className="px-5 py-20">
      <Reveal className="mx-auto max-w-3xl rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        <p className="mt-3 text-primary-foreground/80">Devis gratuit et détaillé, réponse sous 48 h.</p>
        <Link to="/contact" className="mt-7 inline-flex rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition hover:bg-accent/90">Demander un devis gratuit</Link>
      </Reveal>
    </section>
  );
}
