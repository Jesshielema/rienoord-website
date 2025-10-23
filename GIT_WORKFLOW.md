# Git + GitHub + Netlify Workflow

## ✅ Wat is al gedaan:
- Git repository is geïnitialiseerd in je website folder
- Alle bestanden zijn toegevoegd en gecommit
- `.gitignore` bestand is aangemaakt

## 🚀 Stap voor stap: Koppelen met GitHub en Netlify

### Stap 1: GitHub Repository Aanmaken
1. Ga naar [github.com](https://github.com) en log in (of maak een account)
2. Klik rechtsboven op het **+** icoon → **New repository**
3. Vul in:
   - Repository name: `rienoord-website`
   - Description: `RI&E Noord - Risico Inventarisatie & Evaluatie website`
   - **Public** of **Private** (jouw keuze)
   - **NIET** aanvinken: Add README, .gitignore, of license (hebben we al)
4. Klik **Create repository**

### Stap 2: Push naar GitHub
Kopieer de volgende commando's en voer ze uit in VS Code terminal:

```powershell
# Voeg GitHub als remote toe (vervang USERNAME met jouw GitHub username)
git remote add origin https://github.com/USERNAME/rienoord-website.git

# Push alle bestanden naar GitHub
git branch -M main
git push -u origin main
```

**Let op:** Vervang `USERNAME` met je eigen GitHub gebruikersnaam!

### Stap 3: Netlify Koppelen aan GitHub
1. Ga naar [app.netlify.com](https://app.netlify.com) en log in
2. Klik **Add new site** → **Import an existing project**
3. Kies **Deploy with GitHub**
4. Autoriseer Netlify om toegang te krijgen tot je GitHub
5. Selecteer de repository: `rienoord-website`
6. Build settings:
   - **Build command:** (leeg laten)
   - **Publish directory:** (leeg laten of `.`)
7. Klik **Deploy site**

✨ **Je site is nu live!** Netlify geeft je een URL zoals `random-name-123.netlify.app`

### Stap 4: Custom Domain Instellen (optioneel)
1. Ga naar **Site settings** → **Domain management**
2. Klik **Add custom domain**
3. Voer je domeinnaam in (bijv. `rienoord.nl`)
4. Volg de DNS instructies van Netlify
5. SSL certificaat wordt automatisch aangemaakt

---

## 🔄 Vanaf nu: Werken met Git

### Wijzigingen maken en uploaden:

```powershell
# 1. Bekijk wat je hebt aangepast
git status

# 2. Voeg gewijzigde bestanden toe
git add .

# 3. Maak een commit met beschrijving
git commit -m "Beschrijving van je wijzigingen"

# 4. Push naar GitHub (triggert automatisch Netlify deployment)
git push
```

**Binnen 30 seconden staat je update live op Netlify!** 🚀

### Handige Git commando's:

```powershell
# Bekijk geschiedenis
git log --oneline

# Wijzigingen ongedaan maken (voor commit)
git restore bestandsnaam.html

# Laatste commit ongedaan maken
git reset HEAD~1

# Alle wijzigingen bekijken
git diff
```

---

## 📝 Voorbeelden van commits:

```powershell
# Styling aangepast
git add styles.css
git commit -m "Update kleurenschema en button styling"
git push

# Tekst aangepast op homepage
git add index.html
git commit -m "Update hero tekst en call-to-action"
git push

# Contactformulier uitgebreid
git add contact.html java.js
git commit -m "Voeg extra velden toe aan contactformulier"
git push

# Meerdere pagina's aangepast
git add .
git commit -m "Update team pagina en voeg nieuwe FAQ toe"
git push
```

---

## 🔔 Netlify Notificaties instellen:

Na deployment kun je email notificaties instellen:

1. Ga naar **Site settings** → **Build & deploy** → **Deploy notifications**
2. Klik **Add notification** → **Email notification**
3. Kies trigger: **Deploy succeeded** of **Deploy failed**
4. Voer je email in

Zo weet je altijd wanneer je wijzigingen live staan!

---

## ⚙️ Netlify Formulier Configuratie:

Het contactformulier werkt automatisch na deployment. Om notificaties te ontvangen:

1. Ga naar **Site settings** → **Forms**
2. Je ziet het formulier: **contact**
3. Klik **Form notifications** → **Add notification**
4. Kies **Email notification**
5. Voer je email in (bijv. info@rienoord.nl)

Nu krijg je een email bij elke inzending!

---

## 🎯 Workflow samenvatting:

```
Wijzigingen in VS Code
        ↓
git add . && git commit -m "..."
        ↓
git push
        ↓
GitHub ontvangt update
        ↓
Netlify detecteert wijziging
        ↓
Automatische deployment (30 sec)
        ↓
✅ Live op je website!
```

---

## 🆘 Hulp nodig?

**Git commando werkt niet?**
- Check of je in de juiste folder zit: `cd "c:\Users\jesse\OneDrive\Bureaublad\AA RIENOORD\website"`
- Controleer Git status: `git status`

**Push naar GitHub lukt niet?**
- Controleer of remote correct is: `git remote -v`
- Mogelijk moet je inloggen via GitHub Desktop of Git credential manager

**Netlify deployment faalt?**
- Check de build logs in Netlify dashboard
- Controleer of alle bestanden correct zijn gepusht naar GitHub

**Formulier werkt niet?**
- Controleer of `data-netlify="true"` in het form staat
- Test eerst op de live Netlify URL (niet localhost)
