# Nouvelles pages pour le référencement Google

## Objectif
Passer d'une seule page indexée à 7 pages, chacune ciblée sur une recherche précise, sans toucher à la page d'accueil actuelle (sauf des liens vers ces pages).

## Pages proposées

### 1. Pages par type de client (4 pages)
- **Site web pour école** (/site-web-ecole) — vitrine pour écoles privées, associations de parents, établissements : présenter l'équipe pédagogique, les inscriptions, les actualités.
- **Site web pour avocat et cabinet** (/site-web-avocat) — sobriété, confiance, domaines d'intervention, respect des règles de la profession.
- **Site web pour artisan** (/site-web-artisan) — galerie de chantiers, zone d'intervention, demande de devis.
- **Site web pour indépendant** (/site-web-independant) — thérapeutes, consultants, coachs : présentation, prise de contact.

Chaque page contient :
- un titre et une introduction propres au métier ;
- les besoins typiques de ce métier et ce que le site y répond ;
- l'offre conseillée avec le prix « à partir de » (1 000 € / 1 800 € / 40 €/mois, identiques à l'accueil) ;
- la réalisation correspondante quand elle existe (école → École du Vieux Château, avocat → Aetius) ;
- 2 ou 3 questions fréquentes propres au métier ;
- un bouton « Demander un devis gratuit » vers le formulaire de l'accueil.

### 2. Pages réalisations (2 pages)
- **Réalisation : École du Vieux Château** (/realisations/ecole-du-vieux-chateau)
- **Réalisation : Aetius Avocat** (/realisations/aetius-avocat)

Chacune : le contexte du client, la demande, ce qui a été fait, la capture d'écran, le lien vers le site en ligne.

## Liens depuis l'accueil
- Section « Ce que je fais » ou nouvelle ligne « Pour qui ? » : 4 liens vers les pages métier.
- Cartes « Réalisations » : un lien « Voir le projet » vers chaque page réalisation.
- Pied de page : liste des pages métier.

## Ce qu'il me faut de votre part
- Pour les deux réalisations : 2 ou 3 phrases sur chaque projet (demande du client, ce qui comptait pour lui, durée). Sans cela, je rédige un texte général et vous le relisez.
- Accord pour citer ces deux clients par leur nom sur des pages dédiées.

## Détails techniques
- Une route TanStack par page (fichiers dans src/routes/), mise en page partagée avec l'en-tête et le pied de page de l'accueil, extraits dans des composants communs.
- head() par page : title, meta description, og:title/og:description, og:url et canonical absolus sur https://georgette-atelier-web.fr/<chemin>.
- JSON-LD : Service sur les pages métier, BreadcrumbList sur toutes.
- sitemap.xml mis à jour avec les 6 nouvelles adresses ; les pages légales restent exclues.
- Contenu entièrement en français, aucun nouveau service extérieur, aucun cookie.
- Mise en ligne effective après publication.

## Idées optionnelles
- Une page « Tarifs » détaillée.
- Un petit carnet de conseils (articles) plus tard, une fois les pages métier en place.
