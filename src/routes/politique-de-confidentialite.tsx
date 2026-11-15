import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Georgette, atelier web" },
      { name: "description", content: "Comment Georgette — atelier web collecte et protège les données envoyées via le formulaire de contact." },
      { property: "og:title", content: "Politique de confidentialité — Georgette, atelier web" },
      { property: "og:description", content: "Collecte et protection de vos données personnelles." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalLayout title="Politique de confidentialité">
      <section><h2>Responsable du traitement</h2><p>Anna Bruyère — Georgette, atelier web — Sarras (07370), France — anna.bruyere.zh@gmail.com</p></section>
      <section><h2>Données collectées</h2><p>Le formulaire de contact prépare un e-mail contenant votre nom, votre adresse e-mail, le nom de votre structure et votre message. Ces données ne sont pas enregistrées sur ce site : elles sont transmises uniquement par votre propre messagerie lors de l'envoi.</p></section>
      <section><h2>Finalité</h2><p>Répondre à votre demande de renseignement ou de devis.</p></section>
      <section><h2>Durée de conservation</h2><p>Les échanges sont conservés 3 ans à compter du dernier contact.</p></section>
      <section><h2>Cookies et mesure d'audience</h2><p>Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience ni de suivi publicitaire.</p></section>
      <section><h2>Vos droits</h2><p>Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données. Pour l'exercer, écrivez à anna.bruyere.zh@gmail.com. Vous pouvez aussi adresser une réclamation à la CNIL (www.cnil.fr).</p></section>
    </LegalLayout>
  ),
});
