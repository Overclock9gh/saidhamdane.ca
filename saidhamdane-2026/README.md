# saidhamdane.com

Site portfolio de Saïd Hamdane, enseignant en cybersécurité à Montréal.
Même style qu'à l'origine, contenu mis à jour en 2026, version bilingue
et mode sombre.

## Contenu

```
index.html        page principale, À propos
html/work.html    page Projets
css/styles.css    styles de la page principale
css/work.css      styles de la page Projets
js/site.js        bascule FR / EN, mode sombre et apparition au défilement
images/           illustrations, favicon et portrait
CNAME             domaine personnalisé pour GitHub Pages
```

## Illustrations

Les quatre illustrations de la section « Ce que je fais » sont des SVG faits
sur mesure, dans le même style de fenêtre que les visuels d'origine.
`coordination.svg`, `teaching.svg`, `security.svg` et `network.svg`. Elles
utilisent la palette `#03232e`, `#07485e`, `#fff5f5` et `#efe2dd`, donc une
nouvelle illustration dans ces tons s'intégrera sans retouche.

## Mode sombre

Le site suit le réglage du système au premier passage. Le bouton lune ou
soleil dans la barre du haut force le mode clair ou sombre, et le choix est
retenu d'une visite à l'autre. Toutes les couleurs sont des variables CSS
définies en haut de chaque feuille de style, dans `:root` pour le mode clair
et dans `:root[data-theme="dark"]` pour le mode sombre.

## Animation

Les blocs portant l'attribut `data-reveal` montent doucement quand on les
atteint en défilant. L'effet est désactivé si le visiteur a demandé un
mouvement réduit dans son système, et rien ne disparaît si le JavaScript ne
se charge pas.

## Changer un texte

Chaque élément traduisible porte deux attributs, `data-fr` et `data-en`.
Le texte visible dans le HTML est la version française. Pour modifier une
phrase il faut changer le texte visible et l'attribut `data-fr`, puis
l'attribut `data-en` pour la version anglaise.

La langue par défaut est celle du navigateur, avec le français en repli.
`?lang=en` ou `?lang=fr` force une langue.

## Remplacer le portrait

Dépose ta photo dans `images/` et change la source de l'image portant la
classe `said-img` dans `index.html`. Un format carré donne le meilleur
résultat.

## Ajouter un CV

Dépose le PDF à la racine, puis ajoute un bouton dans le bloc `contact-me` :

```html
<a class="btn" href="cv-said-hamdane.pdf" download>CV</a>
```

## Domaine

Le fichier `CNAME` contient `saidhamdane.com`, le domaine principal servi par
GitHub Pages. Un seul domaine peut y figurer, donc pour que `saidhamdane.ca`
mène au même endroit il faut le configurer chez le registraire, soit une
redirection, soit un CNAME DNS vers le domaine principal. Les balises
`canonical` des deux pages pointent vers le .com, pour que les moteurs de
recherche ne voient qu'une seule adresse.

## Publication

Site statique, rien à installer. Un `git push` sur la branche principale
suffit, GitHub Pages s'occupe du reste.
