# Willkommen bei Gutti's Hausmeisterservice

**Gutti's** ist eine statische Website mit Suchmaschinenoptimierung (SEO).

Diese Optimierung umfasst:

## SEO

- **Meta-Tags** wie `title` und `description` zur besseren Auffindbarkeit in Suchmaschinen. Der title sowie die h1 und die description sind für Suchanfragen sehr wichtig. Hier sollen keywords enthalten sein. Das ist auch der Teil der bei den Suchmaschinentreffern angezeigt wird. Darum wurde auch eine hidden h1 verwendet da der Slogan im header für die Suchmaschine keinen Sinn macht.
  
- Eine **Sitemap**, die in der [Google Search Console](https://search.google.com/search-console/about) und beim [Bing Webmaster Tool](https://www.bing.com/webmasters) eingereicht werden kann. Ein `link`-Tag zur Sitemap ist ebenfalls enthalten, was ohne Einreichung sinnvoll ist. Natürlich gibt es weitere Suchmaschinen. DuckDuckGo verwendet bspw. für die Suche Bing mit Ergänzungen und anonymisiert die Anfragen.

- **Open Graph**- und **Twitter Meta-Tags**, die die Darstellung auf Social Media verbessern.
- Ein **canonical Meta-Tag**, das auf die korrekte URL verweist – in diesem Fall `https://guttis-hausmeisterservice.at`.
- Ein **robots**-Meta-Tag, der Suchmaschinen anweist, die Seite zu indexieren und Links zu folgen. Eine `robots.txt`-Datei wäre zusätzlich eine Option.
- Der **keywords Meta-Tag** ist zwar veraltet, wurde aber dennoch angegeben, da er keinen negativen Einfluss hat.
- Ein Inline-Skript vom Typ `application/ld+json` unterstützt Suchmaschinen bei der strukturierten Einordnung der Inhalte.

## Weitere Features

- **Responsive Design**, vollständig eigenständig umgesetzt. Obwohl Bootstrap eingebunden ist, wurde es für das Responsive Design nicht verwendet. Bootstrap könnte sogar entfernt werden, da es kaum genutzt wird.
- **Ladezeitoptimierung** durch z. B. Bildkomprimierung mit verschiedenen Tools, die `.png`-Dateien verkleinern, oder durch die Verwendung von `.jpg`, die bereits komprimiert sind. **Lazy Loading** sorgt dafür, dass die Website unabhängig von ihrer Größe schnell lädt.
- **HTTPS/SSL-Verschlüsselung**, da sichere Verbindungen ein SEO-Rankingfaktor sind. Viele Nutzer und Browser blockieren mittlerweile unsichere `http`-Verbindungen.
- Eine **.vcf** Datei ermöglicht ein schnelles Speichern des Kontaktes auf jedem Gerät.

---

**Link zur Website:**  
[https://guttis-hausmeisterservice.at](https://guttis-hausmeisterservice.at)
