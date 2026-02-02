# Anderson's Dragon Adventure - Project Guide

## Project Overview
A How to Train Your Dragon themed birthday party website for Anderson's 6th birthday on March 7, 2026.

**Live Site:** https://sorendeorlow.github.io/andersonsbirthday/

## Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **RSVP:** Formspree (endpoint: `https://formspree.io/f/mbdkkozb`)
- **Hosting:** GitHub Pages
- **Fonts:** Google Fonts (Pirata One, Nunito)

## File Structure
```
AndersonsBirthday/
├── index.html          # Main single-page website
├── styles.css          # All styling with Viking/dragon theme
├── script.js           # Countdown timer, navigation, form handling
├── images/
│   ├── hero-background.jpg    # Desktop hero image
│   ├── hero-mobile.jpg        # Mobile hero image
│   ├── dragon-icon-v2.png     # Navbar icon
│   ├── dragon-adventure.mp4   # Gallery video
│   └── ...
├── CLAUDE.md           # This file
├── PRD.md              # Product requirements document
└── README.md           # Deployment instructions
```

## Key Features
- Countdown timer to March 7, 2026 2:00 PM PST
- Mobile-responsive design with separate mobile hero image
- RSVP form with dragon customization fields (child name, dragon name, dragon color)
- Smooth scroll navigation
- Scroll animations using Intersection Observer

## Party Details
- **Date:** March 7, 2026 (Saturday) - Anderson turns 6 on March 5th
- **Time:** 2:00 PM - 5:00 PM PST
- **Location:** 7301 Sitio Salvia, Carlsbad, CA 92009
- **Contact:** 415-298-5431
- **RSVP Deadline:** February 20, 2026

## Color Palette
- Primary Green: `#228B22`
- Viking Red: `#C41E3A`
- Brown: `#8B4513`
- Gold: `#FFD700`
- Parchment: `#F5E6C8`
- Dark: `#1a1a1a`

## Common Tasks

### Updating Party Details
Edit `index.html` - search for the specific text to change (date, time, address, phone)

### Changing Images
1. Add images to `images/` folder
2. Update references in `index.html` or `styles.css`

### Modifying Styles
All styles are in `styles.css` with CSS custom properties at the top for easy theming

### Deploying Changes
```bash
git add .
git commit -m "Description of changes"
git push
```
GitHub Pages auto-deploys from main branch.

## Dragon Customization Feature
RSVPs include fields for kids to design their own dragon:
- Child's Name
- Dragon's Name
- Dragon Color (8 options: Night Black, Ocean Blue, Fireball Red, Forest Green, Royal Purple, Viking Gold, Storm Silver, Sunset Orange)

This data is sent via Formspree and can be used to generate custom dragon images with AI tools like Grok.
