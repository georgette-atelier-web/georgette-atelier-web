# Référencement : textes du site (C) et profils externes (D)

## C. Renforcer les textes du site
Sans changer le design ni la structure des 5 pages.

1. **Ajouter « création de site internet »** à côté de « site vitrine » dans les endroits clés : sous-titre de l'accueil, introduction de la page Offres, une carte service. Naturellement, sans répétition forcée.
2. **Ancrage régional discret** (Drôme et Ardèche, sans Valence, sans adresse) :
   - une phrase dans le bloc « À propos » de l'accueil et de la page Contact (« basée entre Drôme et Ardèche, je travaille aussi à distance partout en France ») ;
   - une phrase de localisation dans chaque étude de cas, uniquement si vous me confirmez la ville de chaque client.
3. **Une question FAQ en plus** : « Travaillez-vous uniquement en Drôme et en Ardèche ? » (réponse : non, aussi à distance partout en France).
4. **Harmoniser les prix** : l'accueil et les données lues par Google indiquent encore « à partir de 900 € » et 1 500 €, alors que vos offres sont à 1 000 € et 1 800 €. Je les aligne sur 1 000 € / 1 800 € / 40 €/mois.
5. **Titres d'onglet** : vérifier que chaque page garde un sujet principal unique (pas de doublon accueil/offres).

## D. Profils externes (à faire par vous, je prépare tout)
1. **LinkedIn** : texte « À propos » prêt à coller + lien vers le site ; option page entreprise « Georgette — atelier web ».
2. **Malt** : titre de profil, description, compétences et tarifs indicatifs prêts à coller.
3. **PagesJaunes** : fiche gratuite, catégorie « création de sites internet », zone desservie, sans adresse si possible.
4. Partout le **même nom exact** « Georgette — atelier web » et le même lien, comme sur la fiche Google Business.
5. Une fois les profils créés, j'ajoute leurs liens dans les données lues par Google (avec LinkedIn déjà présent).

## Ce que je vous demanderai
- La ville de l'École du Vieux Château et du cabinet Aetius (pour l'étape C2).
- Les liens Malt / PagesJaunes une fois créés.

## Détails techniques
- Fichiers : src/routes/index.tsx (sous-titre, ligne prix, JSON-LD priceRange/makesOffer 1000/1800), src/routes/creation-site-vitrine.tsx, src/components/site.tsx (SERVICES, FAQ, PROJECTS), src/routes/contact.tsx.
- sameAs du JSON-LD complété plus tard avec Malt/PagesJaunes.
- Test : ajouter un test vérifiant 1 000 € et 1 800 € sur l'accueil ; lancer les tests ; vérifier un H1 par page dans Playwright.
- Textes D livrés dans le chat (pas de fichier).
