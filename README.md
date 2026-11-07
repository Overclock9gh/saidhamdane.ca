# saidhamdane.com

Personal website of Saïd Hamdane, cybersecurity teacher, department coordinator
and computer trainer based in Montréal. Bilingual (French and English), with a
dark mode and a training section. Updated November 2026.

Live site: https://saidhamdane.com

## Structure

```
index.html        home page: about, training, tools, courses, path
html/work.html    projects page
css/styles.css    styles for the home page
css/work.css      styles for the projects page
js/site.js        FR / EN switch, dark mode and scroll animations
images/           illustrations, favicon, portrait and og-image.png
robots.txt        allows indexing and points to the sitemap
sitemap.xml       site map for search engines
```

## Features

- **Bilingual.** Every translatable element has `data-fr` and `data-en`
  attributes. The visible text in the HTML is the French version. The default
  language follows the browser, and `?lang=en` or `?lang=fr` forces one.
- **Dark mode.** Follows the system setting on the first visit. The moon or
  sun button forces light or dark mode, and the choice is remembered. All
  colours are CSS variables at the top of each stylesheet.
- **Training section.** `#formations` on the home page lists four offers
  (`.offer-card`), three steps (`.steps`) and a button that opens an email with
  a ready subject line. The link changes with the language through
  `data-href-fr` and `data-href-en`.
- **LinkedIn preview.** Open Graph tags in the `<head>` and
  `images/og-image.png` (1200 x 627) control the preview card on LinkedIn,
  Teams and Facebook. A JSON-LD `Person` block describes the profile for
  search engines.
- **Accessible motion.** Blocks with `data-reveal` slide in on scroll. The
  effect is disabled when the visitor asks for reduced motion, and nothing
  stays hidden if JavaScript fails to load.

## Editing

- **Text:** change the visible text and the `data-fr` attribute, then the
  `data-en` attribute for the English version.
- **Portrait:** drop a square photo in `images/` and update the `said-img`
  image source in `index.html`.
- **CV:** add the PDF at the root, then a button in the `contact-actions`
  block: `<a class="btn" href="cv-said-hamdane.pdf" download>CV</a>`.
- **LinkedIn cache:** after an update, paste the URL in
  linkedin.com/post-inspector to refresh the preview.

## Hosting

Static site, nothing to build or install. It is hosted on cPanel: upload the
files to `public_html`, keeping `.htaccess` and `.well-known` in place. This
repository is the source copy.

## Credits

Illustrations by Flat Icons and Freepik from Flaticon. Icons by Font Awesome.
Built with Bootstrap 4.

## License

© 2026 Saïd Hamdane. All rights reserved.

This repository is public so the code can be read, but it is not open source.
The text, portrait, preview image and design of this site may not be reused
without permission. Third-party illustrations, icons and libraries remain
under their own licenses.
