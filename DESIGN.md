# Identité visuelle & structure — Portfolio Arielle Noutais

## Concept retenu

**Terminal × Glass × Mobile DNA** : une landing inspirée des outils dev (lignes de commande, monospace) avec des couches de verre (glassmorphism radical), des références au design mobile (bottom nav, pull-to-refresh) et une palette sombre sans noir pur ni violet néon.

---

## Palette

| Rôle | Couleur | Usage |
|------|---------|--------|
| **Fond principal** | `#0a0e17` (bleu minuit) | Body, arrière-plan |
| **Surface** | `#0d1321` | Panneaux, zones surélevées |
| **Élevé** | `#151c2c` (gris obsidienne bleuté) | Cartes, inputs |
| **Accent 1** | `#c9a227` (cuivré) | CTA, labels, highlights |
| **Accent 2** | `#7dd3c0` (bleu glacier) | Liens, titres de section, 3D |
| **Texte** | `#e8e6e3` (ink) | Corps de texte |
| **Texte atténué** | `#8b95a5` (ink-muted) | Labels, métadonnées |

Interdictions : pas de `#000`, pas de violet néon.

---

## Typographie

- **Monospace (terminal / code)** : JetBrains Mono — lignes type `> Arielle.run()`, labels de section `/ about`, `/ projects`, footer.
- **Sans** : DM Sans — titres et paragraphes pour la lisibilité.

---

## Texture & profondeur

- **Grain** : overlay fixe en `::after` sur le body (SVG fractalNoise), opacité ~3.5 %.
- **Glass** : `backdrop-blur` 12px, fond semi-transparent, bordure `white/6%`, ombre portée douce + inner highlight.
- **Ombres** : `shadow-glass`, `shadow-glass-lg` pour les cartes ; pas de glow violet.

---

## Structure de la page

1. **Indicateur pull-to-refresh** (haut) : barre fine qui s’anime (scaleX) quand le scroll est proche de 0 — rappel mobile.
2. **Nav**  
   - Desktop : barre top glass, liens texte, logo `arielle.dev` en mono.  
   - Mobile : même top + **bottom tab bar** (Accueil, Projets, Contact) en glass.
3. **Hero**  
   - Ligne terminal : `> Arielle.run()` + curseur clignotant.  
   - Carte glass avec titre, sous-titre, 2 CTA (Voir les projets, Contact).  
   - Fond 3D : grille wireframe + orbes cuivré/glacier.
4. **About** : titre `/ about`, une carte glass avec texte.
5. **Projects** : titre `/ projects`, grille de cartes glass (image + tags + lien Play Store).
6. **Skills** : titre `/ skills`, grille de chips glass.
7. **Contact** : titre `/ contact`, formulaire dans une carte glass.
8. **Footer** : mono, liens projects / contact.

---

## Animations

- **Framer Motion** : entrées au scroll (`useInView`), `whileHover` / `whileTap` sur boutons et cartes.
- **Three.js** : grille plane wireframe (léger wave), 2 orbes flottantes (cuivré, glacier), pas de particules violettes.
- **Pull** : `useScroll` + `useSpring` pour la barre du haut.

---

## Composants mobile

- **Bottom nav** : 3 onglets (Accueil, Projets, Contact), style app native.
- **Touch** : `min-h-[48px]` sur les cibles tactiles, `touch-manipulation` où utile.
- **Safe area** : `safe-top`, `safe-bottom`, `pb-20` sur `main` pour ne pas cacher le contenu sous la bottom bar.

---

## Fichiers clés

- `tailwind.config.js` : couleurs, fonts, `glass-panel`, grain.
- `src/index.css` : `.grain`, `.glass-panel`, variables, scrollbar.
- `src/components/ThreeScene.jsx` : grille + orbes.
- `src/App.jsx` : grain, barre pull, structure.

Pour aller plus loin : micro-interactions (swipe sur une carte projet), curseur personnalisé, ou mode “terminal” avec plus de lignes de code dans le Hero.
