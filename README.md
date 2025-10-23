# RI&E Noord — statische website

Kleine, strakke en responsive statische website met 4 pagina's (Home, RI&E, Over ons, Contact).

Kenmerken:
- Semantische HTML
- Modern CSS met CSS-variables
- Kleine vanilla JavaScript voor navigation en formulierverwerking
- Geen frameworks — puur statisch

Bestanden:
- `index.html` — Home
- `rie.html` — Uitleg over RI&E
- `over-ons.html` — Team en missie
- `contact.html` — Contactformulier met client-side validatie
- `styles.css` — centrale styling
- `java.js` — kleine interacties
- `logo.svg` — eenvoudige logo placeholder

Lokale test:
Open `index.html` in uw browser (dubbelklik of gebruik een simpele HTTP-server). Voor een eenvoudige server met PowerShell en Python 3:

```powershell
# vanuit deze map uitvoeren
python -m http.server 8000; Start-Process "http://localhost:8000"
```

Uitbreidingen (suggesties):
- Voeg echte afbeeldingen en content toe
- Maak een echte contact-backend of gebruik een service
- Verbeter toegankelijkheid en contrast op basis van gebruikersfeedback
