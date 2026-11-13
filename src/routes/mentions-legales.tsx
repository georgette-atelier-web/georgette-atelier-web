import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Anna Bruyère, développeuse web" },
      { name: "description", content: "Mentions légales du site d'Anna Bruyère, développeuse web freelance : éditeur, hébergeur et propriété intellectuelle." },
      { property: "og:title", content: "Mentions légales — Anna Bruyère" },
      { property: "og:description", content: "Mentions légales du site d'Anna Bruyère, développeuse web freelance." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalLayout title="Mentions légales">
      <section><h2>Éditeur du site</h2><p>Anna Bruyère, entrepreneuse individuelle (micro-entreprise)<br />Adresse : Sarras (07370), France<br />SIRET : en cours d'immatriculation<br />E-mail : anna.bruyere.zh@gmail.com</p></section>
      <section><h2>Directrice de la publication</h2><p>Anna Bruyère</p></section>
      <section><h2>Hébergement</h2><p>Cloudflare, Inc.<br />101 Townsend Street, San Francisco, CA 94107, États-Unis<br />Site : www.cloudflare.com</p></section>
      <section><h2>Propriété intellectuelle</h2><p>L'ensemble des contenus de ce site (textes, images, mise en page) est la propriété d'Anna Bruyère, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.</p></section>
      <section><h2>Responsabilité</h2><p>Les informations publiées sont fournies à titre indicatif. L'éditrice ne saurait être tenue responsable des erreurs ou omissions, ni du contenu des sites vers lesquels pointent des liens externes.</p></section>
    </LegalLayout>
  ),
});
