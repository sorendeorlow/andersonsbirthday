# Anderson's Dragon Adventure - 6th Birthday Party Website

A How to Train Your Dragon themed birthday party website for Anderson's 6th birthday on March 5, 2026.

## Quick Start

### View Locally
Simply open `index.html` in your web browser:
```bash
open index.html
```

Or use a local server for best results:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have npx)
npx serve
```

Then visit `http://localhost:8000`

## Setup RSVP Form (Required)

The RSVP form uses [Formspree](https://formspree.io) to send submissions to your email.

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form endpoint (looks like `https://formspree.io/f/xyzabc123`)
4. Open `index.html` and find this line:
   ```html
   <form class="rsvp-form" id="rsvpForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Replace `YOUR_FORM_ID` with your actual form ID

## Deploy to GitHub Pages

1. Create a new GitHub repository

2. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Anderson's birthday website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/andersons-birthday.git
   git push -u origin main
   ```

3. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under "Source", select **main** branch
   - Click **Save**

4. Your site will be live at: `https://YOUR_USERNAME.github.io/andersons-birthday/`

## Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://www.netlify.com)
2. Drag and drop the entire project folder onto the Netlify dashboard
3. Your site is live instantly!

## Customization

### Add Your Own Images

1. Add images to the `images/` folder
2. Update `index.html` to reference them:
   ```html
   <img src="images/your-photo.jpg" alt="Description">
   ```

### Update Gallery

Replace the placeholder gallery items in `index.html`:
```html
<div class="gallery-item">
    <img src="images/party-photo-1.jpg" alt="Party photo">
</div>
```

### Change Colors

Edit the CSS custom properties in `styles.css`:
```css
:root {
    --color-primary: #228B22;      /* Forest Green */
    --color-secondary: #C41E3A;    /* Viking Red */
    --color-brown: #8B4513;        /* Saddle Brown */
    --color-gold: #FFD700;         /* Gold */
    --color-parchment: #F5E6C8;    /* Parchment */
}
```

### Update Party Details

All party information is in `index.html`. Search for and update:
- Date and time
- Address
- Phone number
- Schedule times
- Food menu

## Features

- Countdown timer to the party
- Mobile-responsive design
- Smooth scroll navigation
- Animated sections on scroll
- RSVP form with email delivery
- Share link functionality
- Viking/Dragon themed design

## File Structure

```
AndersonsBirthday/
├── index.html      # Main website
├── styles.css      # All styling
├── script.js       # Interactivity
├── images/         # Photo folder
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)
- Mobile browsers

## Questions?

Contact: 310-301-8700

---

Made with love for Anderson's special day!
