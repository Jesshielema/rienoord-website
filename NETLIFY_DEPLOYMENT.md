# RI&E Noord Website - Netlify Deployment Instructies

## 🚀 Netlify Deployment Stappen

### 1. Netlify Account & Site Setup
1. Ga naar [netlify.com](https://www.netlify.com) en log in
2. Klik op "Add new site" > "Deploy manually"
3. Sleep de hele website folder naar het upload gebied
4. Of verbind met Git repository voor automatische deployments

### 2. Netlify Forms Configuratie

Het contactformulier is al geconfigureerd met:
- `data-netlify="true"` attribuut
- Spam protection (honeypot)
- Form name: "contact"

**Email Notificaties instellen:**
1. Ga naar Site Settings > Forms
2. Klik op "Form notifications"
3. Voeg toe: **Email notification**
   - Email to notify: `rienoord@gmail.com`
   - Event to listen for: "New form submission"
4. Optioneel: Stel Slack/Zapier integraties in

### 3. Automatische Email Bevestiging (via Zapier/Make)

Netlify Forms ondersteunt geen directe auto-reply emails. Hiervoor heb je een externe service nodig:

**Optie A: Zapier (Aanbevolen)**
1. Maak gratis Zapier account
2. Maak nieuwe Zap:
   - **Trigger**: Netlify Forms > New Form Submission
   - **Action**: Gmail/SendGrid > Send Email
   - Email template:
     ```
     Onderwerp: Bevestiging - Uw aanvraag bij RI&E Noord
     
     Beste [naam],
     
     Bedankt voor uw interesse in RI&E Noord!
     
     We hebben uw aanvraag succesvol ontvangen en nemen binnen 24 uur contact met u op.
     
     Uw gegevens:
     - Bedrijf: [bedrijfsnaam]
     - Telefoon: [telefoonnummer]
     - Onderwerp: [onderwerp]
     
     Met vriendelijke groet,
     RI&E Noord Team
     
     ---
     KVK: 91018358
     Email: rienoord@gmail.com
     ```

**Optie B: Netlify Functions (Geavanceerd)**
Voor eigen serverless functie - zie `functions/` directory

**Optie C: Email service met API**
- SendGrid
- Mailgun
- AWS SES

### 4. Custom Domain Instellen
1. In Netlify: Site Settings > Domain Management
2. Voeg custom domain toe: `rienoord.nl` en `www.rienoord.nl`
3. Update DNS records bij je domain provider:
   ```
   A Record: @ -> 75.2.60.5
   CNAME: www -> [your-site].netlify.app
   ```
4. SSL certificaat wordt automatisch gegenereerd

### 5. SEO & Analytics

**Google Search Console:**
1. Voeg site toe aan [Google Search Console](https://search.google.com/search-console)
2. Verifieer ownership via DNS of HTML tag
3. Submit sitemap: `https://rienoord.nl/sitemap.xml`

**Google Analytics (optioneel):**
1. Maak GA4 property
2. Voeg tracking code toe aan `<head>` van alle pagina's

**Google My Business:**
- Registreer bedrijf voor lokale SEO
- Voeg NAP (Naam, Adres, Telefoonnummer) toe

### 6. Performance Optimalisatie

✅ Al ingebouwd:
- Semantic HTML5
- Optimized CSS (CSS variables)
- Responsive design
- Lazy loading ready
- Minification door Netlify

### 7. Testen na Deployment

Checklist:
- [ ] Alle pagina's laden correct
- [ ] Contactformulier werkt
- [ ] Email notificaties ontvangen op rienoord@gmail.com
- [ ] Mobile responsive test
- [ ] SSL certificaat actief
- [ ] Sitemap beschikbaar op /sitemap.xml
- [ ] robots.txt beschikbaar
- [ ] Meta tags correct in browser en social media
- [ ] Google Search Console verifieerd

### 8. SEO Keywords Targeting

Hoofdzoekwoorden:
- RI&E Noord-Nederland
- Risico Inventarisatie Evaluatie Groningen
- RI&E verplicht
- Arbowet advies
- Veiligheid werk
- RI&E rapport maken
- Arbeidsomstandigheden advies

Locatie-specifiek:
- RI&E Groningen
- RI&E Friesland  
- RI&E Drenthe
- Arbo advies Noord-Nederland

## 📧 Contact voor Support

Voor vragen over de website of deployment:
- Email: rienoord@gmail.com
- KVK: 91018358

## 🔄 Updates

Bij updates:
1. Wijzig bestanden lokaal
2. Deploy via Netlify (drag & drop of Git push)
3. Update sitemap.xml lastmod datum
4. Test alle functionaliteit

---
Laatste update: 23 oktober 2025
