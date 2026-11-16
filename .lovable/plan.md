# Refonte commerciale du site Georgette (sans repartir de zéro)

## Objectif
Rendre le site plus convaincant pour artisans, commerçants, indépendants et petites entreprises, en gardant le logo, les couleurs, les polices, le ton et les 5 pages actuelles. Aucun tarif modifié.

## Page d'accueil
Ordre des sections, en réutilisant les blocs existants :
1. **Ouverture** : nouveau titre « Un site professionnel pour développer votre activité, attirer de nouveaux clients et inspirer confiance. », le texte secondaire demandé, trois boutons : « Discutons de votre projet » (contact), « Découvrir les offres » (offres), et le lien réalisations. Petite ligne de repères : « À partir de 1 000 € · Interlocutrice unique · Devis gratuit ».
2. **Ce que vous y gagnez** (nouveau) : 5 bénéfices — présence professionnelle, visibilité locale, site rapide et mobile, services mieux présentés, contact et devis simplifiés.
3. **Pour qui ?** (nouveau) : 4 profils — artisans et bâtiment, commerçants et restaurateurs, indépendants et professions libérales, petites entreprises et associations.
4. **Ce que je fais** : les 3 cartes services actuelles, textes réécrits en bénéfices.
5. **Pourquoi travailler avec Georgette ?** (nouveau) : interlocutrice unique, relation directe, solutions adaptées au budget, approche technique sérieuse (performance, mobile, référencement), accompagnement humain, transparence des tarifs ; comparaison sobre avec agence et outil de création, sans dénigrement. Expérience : développeuse web depuis 2020, rien d'autre.
6. Réalisations, étapes, à propos : conservés, puis bandeau final « Demander un devis gratuit ».

## Page Offres (/creation-site-vitrine)
- Renommage : **Essentielle** (dès 1 000 €), **Visibilité** (dès 1 800 €, « Le plus demandé »), **Maintenance** (dès 40 €/mois), avec les listes exactes de votre demande.
- Mention sous Visibilité : aucun positionnement garanti sur Google.
- Maintenance : « petites modifications de contenu, dans une limite définie au devis ».
- Encart « Chaque projet est différent » avec bouton devis personnalisé. Paiement en 2 ou 3 fois et délai conservés.

## Référencement & maintenance
Textes alignés sur les nouvelles offres, même mention « pas de garantie de positionnement », zone : Valence, Drôme, Ardèche et partout en France à distance.

## Réalisations — point important
Les deux témoignages actuels ont été inventés à votre demande. Votre nouvelle consigne interdit les témoignages inventés : **je les retire** et ne laisse ni citation ni emplacement vide. Les deux études de cas restent.

## Contact et conversion
- Formulaire : nom, e-mail, **activité** (remplace « structure »), description du projet ; nom, e-mail et projet obligatoires. Mention « gratuit et sans engagement, réponse sous 48 h ».
- Bouton « Devis gratuit » toujours visible dans le menu, y compris sur mobile ; sur mobile, une barre fine en bas d'écran avec « Écrire un e-mail » et « Demander un devis ».
- FAQ conservée, avec 1 question ajoutée : « Dois-je m'y connaître en technique ? ».

## Référencement
- Titles et descriptions réécrits pour : création de site internet pour artisan, site vitrine pour indépendant, développeuse web freelance, Valence, Drôme et Ardèche — un sujet principal par page, sans surcharge.
- Un seul H1 par page, H2 par section, alt sur toutes les images, liens internes entre pages.
- Données structurées : zone desservie ajoutée (Valence, Drôme, Ardèche, France), offres avec prix.
- Le travail se fait à distance : pas d'adresse physique affichée ni de fiche Google Business promise pour vous-même.

## Ce qui ne change pas
Logo, palette, polices, photo, mise en page générale, 5 pages et adresses, pages légales, sitemap (mêmes adresses), aucune nouvelle dépendance.

## Détails techniques
- Composants partagés dans src/components/site.tsx : ajout de BENEFITS, AUDIENCES, WHY + composants de grille réutilisant le style des cartes existantes ; suppression des champs quote/author de PROJECTS et du bloc témoignage dans realisations.tsx.
- ContactForm : champ structure → activite (zod + corps du mail).
- MobileContactBar dans SiteLayout (md:hidden), avec marge basse pour ne pas masquer le pied de page.
- index.tsx : JSON-LD ProfessionalService enrichi (areaServed City Valence, Drôme, Ardèche ; makesOffer avec les 3 prix).
- pageHead() inchangé ; nouveaux TITLE/DESC par route.
- Mémoire : enregistrer zone ciblée (Valence/Drôme/Ardèche), noms d'offres, et interdiction des témoignages inventés.
- Vérification : Playwright à 1280 et 390 px de large, un H1 par page, build sans erreur.
