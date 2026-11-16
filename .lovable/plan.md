# Illustration sous la ligne « À partir de 900 € » (accueil)

## Ce qui change
- Une nouvelle illustration apparaît sur l'accueil, juste sous « À partir de 900 € · Interlocutrice unique · Devis gratuit », avant la section « Ce que vous y gagnez ».
- La scène : un atelier web chaleureux, avec un bureau en bois clair, un ordinateur portable qui montre une page de site simple, un carnet de croquis, une plante, une tasse et une petite figurine de bouledogue en clin d'œil au logo. Aucune personne, aucun texte.
- Couleurs du site uniquement : crème, vert profond, doré, bois clair.
- Format large et bas (environ 16:9), bords arrondis et ombre légère, comme les cartes du site. Pleine largeur sur téléphone.
- Le texte, les boutons et les tarifs ne changent pas.

## Détails techniques
- Image générée dans src/assets/hero-atelier.jpg, puis convertie en webp (≈1600 px de large), importée dans src/routes/index.tsx.
- Placée dans le bloc du haut, après le paragraphe de la ligne 68 : `mt-12 mx-auto max-w-4xl rounded-2xl shadow`, avec `width`/`height` fixés pour éviter les décalages d'affichage, `fetchpriority="high"` et pas de chargement différé (elle est visible dès l'ouverture).
- Un texte alt descriptif en français.
- Vérification à l'écran sur ordinateur (1280 px) et téléphone (390 px).
