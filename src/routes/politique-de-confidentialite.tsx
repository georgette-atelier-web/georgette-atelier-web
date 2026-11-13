import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Anna Bruyère" },
      { name: "description", content: "Comment Anna Bruyère, développeuse web freelance, collecte et protège les données envoyées via le formulaire de contact." },
      { property: "og:title", content: "Politique de confidentialité — Anna Bruyère" },
      { property: "og:description", content: "Collecte et protection de vos données personnelles." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <LegalLayout title="Politique de confidentialité">
      <section><h2>Responsable du traitement</h2><p>Anna Bruyère — [adresse postale] — Anna.bruyere.zh@gmail.com</p></section>
      <section><h2>Données collectées</h2><p>Le formulaire de contact prépare un e-mail contenant votre nom, votre adresse e-mail, le nom de votre structure et votre message. Ces données ne sont pas enregistrées sur ce site : elles sont transmises uniquement par votre propre messagerie lors de l'envoi.</p></section>
      <section><h2>Finalité</h2><p>Répondre à votre demande de renseignement ou de devis.</p></section>
      <section><h2>Durée de conservation</h2><p>Les échanges sont conservés [durée, par exemple 3 ans] à compter du dernier contact.</p></section>
      <section><h2>Mesure d'audience</h2><p>[Indiquez ici les outils de mesure d'audience utilisés, le cas échéant.]</p></section>
      <section><h2>Vos droits</h2><p>Vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur vos données. Pour l'exercer, écrivez à Anna.bruyere.zh@gmail.com. Vous pouvez aussi adresser une réclamation à la CNIL (www.cnil.fr).</p></section>
    </LegalLayout>
  ),
});
