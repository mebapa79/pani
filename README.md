# PaNi gmbh – Website

Professionelle Website für PaNi gmbh - Hauswartung, Reinigung, Entsorgung und Gartenarbeiten.

## Projektstruktur

```
pani-gmbh/
├── index.html           # Hauptseite (HTML)
├── css/
│   └── style.css        # Styling
├── js/
│   └── script.js        # Interaktivität (Quiz, Formulare)
└── images/              # Bilder (SVG Platzhalter, bitte ersetzen)
    ├── hero.svg
    ├── service-hauswartung.svg
    ├── service-reinigung.svg
    ├── service-entsorgung.svg
    └── service-garten.svg
```

## Features

✓ Responsive Design (Mobile, Tablet, Desktop)
✓ Hero Section mit Call-to-Action
✓ Interaktives Quiz (Typeform-Style)
  - 3 Fragen zu Diensten, Häufigkeit und Objektgröße
  - Personalisierte Preisempfehlung basierend auf Auswahl
✓ 4 Service-Sektionen mit realistischen Preisen
✓ Über uns / About Section
✓ Vollständiges Kontaktformular mit Validierung
✓ Impressum Modal
✓ Premium-Design ohne generische AI-Elemente
✓ Vanilla JavaScript (kein Framework)
✓ Performance-optimiert

## Installation & Nutzung

1. Öffne `index.html` in einem modernen Browser
2. Keine Installation oder Build-Prozess nötig
3. Vollständig funktional als Static Site

## Bilder ersetzen

Die Website wird mit SVG-Platzhaltern geliefert. Ersetze diese mit echten Bildern:

- **`images/hero.svg`** → Hero/Banner-Bild (1200x600px empfohlen)
  - Zeigt die Unternehmen und den Servicegedanken

- **`images/service-hauswartung.svg`** → Hauswartung/Instandhaltung
  - Handwerker, Reparaturen, Wartung
  
- **`images/service-reinigung.svg`** → Professionelle Reinigung
  - Gebäudereinigung, saubere Flächen
  
- **`images/service-entsorgung.svg`** → Entsorgung/Entrümpelung
  - Abfallwirtschaft, Entsorgtation
  
- **`images/service-garten.svg`** → Gartenarbeiten
  - Rasenpflege, Gartenpflanzung, Grünflächenunterhalt

### Bilder einfügen

1. Ersetze die SVG-Dateien in `images/` mit deinen echten Bildern
2. Bildformat: JPG/PNG/WebP (600x400px für Service-Cards, 1200x600px für Hero)
3. Update falls nötig: Bildpfade in `index.html` (falls Dateityp wechselt, z.B. .jpg)

## Kontakt & Daten anpassen

Bearbeite diese Kontaktdaten in `index.html`:

```html
<!-- Navigation -->
<p class="navbar__subtitle">Hauswartung • Reinigung • Entsorgung • Gartenarbeiten</p>

<!-- Contact Section -->
<p>Musterstrasse 123, 8000 Zürich</p>
<p><a href="tel:+41441234567">+41 44 123 45 67</a></p>
<p><a href="mailto:info@pani-gmbh.ch">info@pani-gmbh.ch</a></p>

<!-- Impressum -->
<p><strong>Firmenname:</strong> PaNi gmbh</p>
<!-- ... weitere Daten -->
```

## Quiz & Preise anpassen

Bearbeite Service-Daten in `js/script.js`:

```javascript
const serviceData = {
    hauswartung: {
        name: 'Hauswartung',
        prices: [
            { description: 'Einfache Reparatur', price: 'CHF 150–300' },
            // ... weitere Preise
        ]
    },
    // ... weitere Services
};
```

## Design-Details

- **Primärfarbe (Grün):** #2B5F3F – Natur, Zuverlässigkeit
- **Sekundärfarbe (Grau):** #4A4A4A – Professionell
- **Akzentfarbe (Ocker):** #C9A66B – Wärme, Premium
- **Hintergrund:** #F8F8F8 – Sauberes, modernes Design

### CSS Custom Properties
Alle Farben, Abstände und Schriftarten sind als CSS-Variablen definiert. Diese kannst du in `:root` in `css/style.css` anpassen.

## Browser-Unterstützung

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Browsereigenschaften (responsive Design)

## Performance

- Keine externen Dependencies
- Lightweight SVG-Bilder
- ~50KB HTML+CSS+JS
- Einzeilige Ladezeit auf modernen Verbindungen

## Form-Handling

Das Kontaktformular wird derzeit lokal validiert. Für echte E-Mail-Versand:

1. Backend-Integration (PHP, Node, Python)
2. Oder E-Mail-Service (Formspree, EmailJS, Basin)
3. Code-Anpassung in `js/script.js` (handleSubmit)

Beispiel mit **Formspree**:
```javascript
// In js/script.js
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
})
```

## SEO & Meta-Tags

Update diese Meta-Tags in `index.html`:
```html
<title>PaNi gmbh – Hauswartung, Reinigung, Entsorgung & Gartenarbeiten</title>
```

Füge weitere Tags hinzu (bei Bedarf):
```html
<meta name="description" content="...">
<meta name="keywords" content="Hauswartung, Reinigung, Entsorgung, Gartenarbeiten, Zürich">
<meta name="author" content="PaNi gmbh">
```

## Customization

Die Website ist vollständig in HTML, CSS und Vanilla JavaScript geschrieben – einfach zu customizen:

- **Farben:** `css/style.css` – CSS Root Variables
- **Layout:** `css/style.css` – CSS Grid/Flexbox
- **Funktionen:** `js/script.js` – Event Listeners, Form Handling
- **Inhalte:** `index.html` – HTML Structure

Keine Build-Tools oder Abhängigkeiten erforderlich.

---

**Version:** 1.0  
**Erstellt:** 2026  
**Lizenz:** Private (für PaNi gmbh)
