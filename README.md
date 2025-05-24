# Willkommen bei Gutti's Hausmeisterservice

Gutti's ist eine statische Website mit Suchmaschinenoptimierung (SEO).

## Diese Optimierung umfasst:

### SEO

- **Meta-Tags** wie `title` und `description` zur besseren Auffindbarkeit in Suchmaschinen. Der `title` sowie die `h1` und die `description` sind für Suchanfragen sehr wichtig. Hier sollen Keywords enthalten sein. Das ist auch der Teil, der bei den Suchmaschinentreffern angezeigt wird. Darum wurde auch eine versteckte (`hidden`) `h1` verwendet, da der Slogan im Header für Suchmaschinen keinen Sinn macht.

- Eine **Sitemap**, die in der [Google Search Console](https://search.google.com/search-console/about) und beim [Bing Webmaster Tool](https://www.bing.com/webmasters) eingereicht werden kann. Ein `link`-Tag zur Sitemap ist im Head enthalten, was speziell ohne Einreichung bei den Suchmaschinen sinnvoll ist. Natürlich gibt es weitere Suchmaschinen als die zwei genannten. DuckDuckGo verwendet zum Beispiel für die Suche Bing mit Ergänzungen und anonymisiert die Anfragen.

- **Open Graph-** und **Twitter Meta-Tags**, die die Darstellung auf Social Media verbessern.

- Ein **canonical Meta-Tag**, der auf die korrekte URL der Website verweist – in diesem Fall `https://guttis-hausmeisterservice.at`.

- Ein **robots-Meta-Tag**, der Suchmaschinen anweist, die Seite zu indexieren und Links zu folgen. Eine zusätzliche `robots.txt`-Datei wäre ebenfalls eine Option.

- Der **keywords Meta-Tag** ist veraltet, wurde aber dennoch angegeben, da er keinen negativen Einfluss hat.

- Ein Inline-Skript vom Typ `application/ld+json` unterstützt Suchmaschinen bei der strukturierten Einordnung der Inhalte.

### Weitere Features

- **Responsive Design**, vollständig eigenständig umgesetzt. Obwohl Bootstrap eingebunden ist, wurde es für das Responsive Design nicht verwendet. Bootstrap könnte sogar entfernt werden, da es kaum genutzt wird.

- **Ladezeitoptimierung** durch z. B. Bildkomprimierung mit verschiedenen Tools, die `.png`-Dateien verkleinern, oder durch die Verwendung von `.jpg`, die bereits komprimiert sind. **Lazy Loading** sorgt zusätzlich dafür, dass die Website unabhängig von ihrer Größe schnell lädt. Allerdings ist das Lazy Loading unvollständig, was bei den Bildinhalten im Carousel-Container aber nicht weiter ins Gewicht fällt.

- **HTTPS/SSL-Verschlüsselung**, da sichere Verbindungen ein SEO-Rankingfaktor sind. Viele Nutzer und Browser blockieren mittlerweile unsichere `http`-Verbindungen.

- Eine **.vcf-Datei** ermöglicht ein schnelles Speichern des Kontakts auf jedem Gerät.

> Die Kombination all dieser Punkte beeinflusst das Ranking bei den Crawler-Programmen und damit das Suchergebnis. Außerdem sollte immer ein 301-Redirect auf die HTTPS-Seite in einer `.htaccess`-Datei oder auf andere Weise eingerichtet werden. Dasselbe gilt für die Weiterleitung der `www`-Subdomain auf die Hauptdomain — in diesem Fall also von  
> `https://www.guttis-hausmeisterservice.at` per 301-Redirect auf  
> `https://guttis-hausmeisterservice.at`.  
>  
> Auf dieser Website wurde das mit dem CDN von Cloudflare umgesetzt. Cloudflare arbeitet hier als Proxy, der alles zwischenspeichert, auch HTML, durch selbst eingetragene Regeln. Außerdem sind dort HTTPS-only und der angesprochene Redirect konfiguriert.

## Link zur Website

[https://guttis-hausmeisterservice.at](https://guttis-hausmeisterservice.at)
