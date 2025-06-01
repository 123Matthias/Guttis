# Willkommen bei Gutti's Hausmeisterservice

Gutti's ist eine statische Website mit Suchmaschinenoptimierung (SEO) einfachen Animationen und Dark-Mode.

### SEO

- **Meta-Tags** wie `title` und `description` verbessern die Auffindbarkeit in Suchmaschinen. Der `title`, der `h1`-Header und die `description` sind am wichtigsten für Suchanfragen. Keywords sollten hier enthalten sein, wobei sich **wiederholende Keywords** stärker gewichtet werden. Sind Title und Description korrekt als Meta-Tags gesetzt, werden sie in den Suchergebnissen angezeigt.

- Eine **Sitemap** hilft Suchmaschinen, den Aufbau der Website zu verstehen. Sie sollte mindestens bei der [Google Search Console](https://search.google.com/search-console/about) und dem [Bing Webmaster Tool](https://www.bing.com/webmasters) eingereicht werden.  
- Ein `link`-Tag zur Sitemap im `<head>` ist besonders nützlich, wenn keine direkte Einreichung erfolgt.  
- Weitere Suchmaschinen:  
  - **DuckDuckGo** und **Ecosia** nutzen Bing mit Ergänzungen und anonymisieren die Anfragen teilweise.  
  - **StartPage** nutzt Google und anonymisiert diese Anfragen vollständig.

- **Open Graph-** und **Twitter Meta-Tags** verbessern die Darstellung auf Social Media. Diese Tags können mit Online-Generatoren erzeugt werden.

- Ein **canonical Meta-Tag** verweist auf die korrekte URL der Website, z.B. `https://guttis-hausmeisterservice.at`.  
- Zusätzlich sollten im CDN oder in der `.htaccess` 301-Redirects bzw. HTTPS-only Regeln eingerichtet werden, um Duplicate Content zu vermeiden und sichere Verbindungen zu gewährleisten.

- Ein **robots-Meta-Tag** gibt Suchmaschinen Hinweise, ob Seiten indexiert und Links verfolgt werden sollen.  
- Eine separate `robots.txt`-Datei ermöglicht detailliertere Steuerung und sollte ebenfalls erstellt werden.  
- Suchmaschinen prüfen oft zuerst die `robots.txt`, bevor sie Meta-Tags beachten.

- Der **keywords Meta-Tag** ist veraltet, wird aber gelegentlich noch angegeben, da er keinen negativen Einfluss hat.

- Ein Inline-Skript vom Typ `application/ld+json` unterstützt Suchmaschinen bei der strukturierten Einordnung der Inhalte (Schema.org, Rich Snippets).

- **Mobile Optimierung:** Google bewertet vor allem die mobile Version. Die Seite muss schnell und sauber auf Smartphones laden und für diese Geräte optimiert sein.

- **Ladezeit/Performance:** Schnelle Ladezeiten verbessern das Ranking. Bilder mit WebP, JPG oder TinyPNG optimieren, CSS und JS minimieren und sinnvolles Caching einsetzen.

- **URL-Struktur & interne Verlinkung:** Klare, sprechende URLs und sinnvolle interne Links helfen Suchmaschinen beim Crawlen und Nutzern bei der Orientierung.

- Auch die **Struktur der Website** spielt eine große Rolle. HTML-Tags wie `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`, `<h1>`, `<h2>` usw. sollten sinnvoll eingesetzt werden, damit Crawler die Website schneller verstehen.


### Weitere Features

- **Responsive Design**, vollständig eigenständig umgesetzt. Obwohl Bootstrap eingebunden ist, wurde es für das Responsive Design nicht verwendet. Bootstrap könnte sogar entfernt werden, da es kaum genutzt wird.

- **Dark Mode**, der im CSS mit Media Queries sehr leicht umsetzbar ist. CSS-Variablen und Filter-Attribute vereinfachen das zusätzlich.

- **Ladezeitoptimierung** durch z. B. Bildkomprimierung mit verschiedenen Tools, die `.png`-Dateien verkleinern, oder durch die Verwendung von `.jpg`, die bereits komprimiert sind. **Lazy Loading** ist für die Bilder im Carousel Container implementiert.

- **HTTPS/SSL-Verschlüsselung**, Eigentlich heute TLS ist Pflicht, da sichere Verbindungen ein SEO-Rankingfaktor sind. Moderne Browser und Nutzer meiden unsichere `http`-Verbindungen.

- Eine **.vcf-Datei** ermöglicht ein schnelles Speichern des Kontakts auf jedem Gerät.

> Die Kombination all dieser Punkte beeinflusst das Ranking bei den Crawler-Programmen und damit das Suchergebnis.  
> Ein 301-Redirect auf die HTTPS-Seite in einer `.htaccess`-Datei oder auf andere Weise muss eingerichtet werden.  
> Dasselbe gilt für die Weiterleitung der `www`-Subdomain auf die Hauptdomain — in diesem Fall also von  
> `https://www.guttis-hausmeisterservice.at` per 301-Redirect auf  
> `https://guttis-hausmeisterservice.at`.  
>
> Auf dieser Website wurde das mit dem CDN von Cloudflare umgesetzt. Cloudflare arbeitet hier als Proxy, der alles zwischenspeichert, auch HTML, durch selbst eingetragene Regeln. Außerdem sind dort HTTPS-only und der angesprochene Redirect konfiguriert.

## Link zur Website

[https://guttis-hausmeisterservice.at](https://guttis-hausmeisterservice.at)

