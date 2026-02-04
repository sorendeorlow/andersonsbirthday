# Product Requirements Document
## Anderson's Dragon Adventure - 6th Birthday Party Website

### Overview
A single-page, mobile-responsive website for Anderson's 6th birthday party themed around "How to Train Your Dragon." The site serves as a digital invitation with party details, schedule, and RSVP functionality.

---

## Party Information

| Field | Value |
|-------|-------|
| Birthday Boy | Anderson |
| Age | Turning 6 |
| Birthday Date | March 5, 2026 |
| Party Date | March 7, 2026 (Saturday) |
| Party Time | 2:00 PM - 5:00 PM PST |
| Location | 7301 Sitio Salvia, Carlsbad, CA 92009 |
| Contact | 415-298-5431 |
| RSVP Deadline | February 20, 2026 |
| Theme | How to Train Your Dragon |

---

## Website Sections

### 1. Navigation Bar
- Fixed top navigation with horizontal black-to-grey gradient
- Dragon icon logo (32px)
- Links: Home, Details, Schedule, Games, Food, RSVP
- Mobile hamburger menu

### 2. Hero Section
- Full-viewport height with dragon-themed background
- Desktop: `hero-background.jpg` (cover)
- Mobile: `hero-mobile.jpg` (contain, positioned top)
- Title: "Anderson's Epic Dragon Adventure!"
- Subtitle: "Turning 6 on March 5th, 2026 / Celebrate with us March 7th!"
- Live countdown timer (days, hours, minutes, seconds)
- CTA buttons: "RSVP Now" and "Learn More"

### 3. Party Details Section
- Date, Time, Location cards with icons
- Embedded Google Maps iframe
- Theme description
- Dress code: "Comfy clothes for outdoor games."

### 4. Schedule Section
- Vertical timeline with dragon-themed icons
- Events:
  - 2:00 PM - Arrival & Shield Decorating
  - 2:30 PM - Dragon Training Games
  - 3:30 PM - Snack Break & Wrestlemania Battle
  - 4:00 PM - Cupcakes & Singing
  - 4:30 PM - Free Play
  - 5:00 PM - Wrap Up

### 5. Games Section
- Grid layout of activity cards
- Activities (with dragon-themed names):
  - Fireball Launch (Football Toss)
  - Dragon Flight Course (Soccer Relay)
  - Viking Batting (Baseball)
  - Dragon Warrior Training (Karate)
  - Dragon Rider Rumble (Wrestlemania)

### 6. Food Section
- Anderson's special cupcake highlight (red velvet with Toothless/Hiccup decoration)
- Cupcake selection: Plain Vanilla, Red Velvet, Chocolate
- Dragon Snacks: Fruit Skewers, Refreshments

### 7. RSVP Section
- Formspree-powered form (endpoint: `https://formspree.io/f/mbdkkozb`)
- Fields:
  - Guest Name(s) * (required)
  - Number of Adults (dropdown 0-4)
  - Number of Kids (dropdown 0-4)
  - **Dragon Customization Section:**
    - Child's Name
    - Dragon's Name
    - Dragon Color (dropdown with 8 options)
  - Email or Phone * (required)
  - Special Notes (allergies, dietary needs)
- Success message: "Thanks for RSVPing! See you in Berk, brave Viking!"

### 8. Gallery Section
- Video player with dragon-adventure.mp4
- Placeholder text for post-party photos

### 9. Footer
- Party info summary
- Contact phone number
- Share link button (copy to clipboard)
- Dragon illustration

---

## Design Specifications

### Color Palette
```css
--color-primary: #228B22      /* Forest Green */
--color-secondary: #C41E3A    /* Viking Red */
--color-brown: #8B4513        /* Saddle Brown */
--color-gold: #FFD700         /* Gold */
--color-parchment: #F5E6C8    /* Parchment background */
--color-dark: #1a1a1a         /* Near black */
```

### Typography
- Headers: "Pirata One" (Google Font) - Viking/pirate style
- Body: "Nunito" (Google Font) - readable, friendly

### Responsive Breakpoints
- Mobile: max-width 768px
- Small mobile: max-width 480px

---

## Technical Requirements

### Performance
- No JavaScript frameworks (vanilla JS only)
- Optimized images for web
- Lazy loading for maps iframe

### Browser Support
- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

### Accessibility
- Alt text on all images
- Keyboard navigable
- Sufficient color contrast
- Focus states on interactive elements
- Semantic HTML structure

---

## RSVP Data Collection

Form submissions via Formspree include:
- `guestName` - Guest name(s)
- `adults` - Number of adults
- `kids` - Number of kids
- `childName` - Child's name for dragon customization
- `dragonName` - Custom dragon name
- `dragonColor` - Selected dragon color
- `contact` - Email or phone
- `notes` - Special requirements

---

## Deployment

- **Repository:** https://github.com/sorendeorlow/andersonsbirthday
- **Hosting:** GitHub Pages
- **Live URL:** https://sorendeorlow.github.io/andersonsbirthday/
- **Branch:** main (auto-deploy enabled)

---

## Dragon Gallery Automation

### Architecture
```
RSVP Form → Formspree → Zapier → Grok API → Cloudinary → Gallery
```

### Flow
1. Guest submits RSVP with dragon customization (childName, dragonName, dragonColor)
2. Formspree receives form data and triggers webhook to Zapier
3. Zapier builds a Grok prompt using the dragon data
4. Zapier calls xAI API to generate dragon image
5. Generated image is uploaded to Cloudinary `dragons` folder
6. Gallery on website auto-loads images from Cloudinary

### Services
| Service | Purpose | Cost |
|---------|---------|------|
| Formspree | Form handling | Free tier |
| Zapier | Workflow automation | ~$20/month |
| xAI/Grok API | Image generation | Per-image |
| Cloudinary | Image hosting | Free (25GB) |

### Gallery Features
- Dynamic loading from Cloudinary
- Dragon cards with image, name, and trainer
- Hover animation effects
- Responsive grid layout
- Fade-in animations

---

## Future Enhancements (Optional)

- [x] AI-generated custom dragon images based on RSVP dragon customization data
- [ ] Post-party photo gallery population
- [ ] Thank you page after party
- [ ] Lightbox for full-size dragon viewing
- [ ] Download button for parents
- [ ] Printable dragon certificates

---

## Changelog

| Date | Changes |
|------|---------|
| 2026-02-01 | Initial website creation |
| 2026-02-01 | Changed party date from March 5 to March 7 |
| 2026-02-01 | Added dragon customization to RSVP form |
| 2026-02-01 | Added mobile-specific hero image |
| 2026-02-01 | Updated navbar gradient to horizontal black-to-grey |
| 2026-02-01 | Updated contact phone to 415-298-5431 |
| 2026-02-01 | Removed gifts section |
| 2026-02-02 | Removed costume reference from dress code |
| 2026-02-02 | Added automated dragon gallery (Zapier + Grok + Cloudinary) |
