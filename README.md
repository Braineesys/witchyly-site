# WitchyLy — Mobile Game Landing Website

Official landing website for **WitchyLy**, a whimsical casual mobile potion-making game developed by **Vespera**, available on iOS and Android.

- **Website Domain**: [witchyly.com](https://witchyly.com)
- **Company**: Vespera
- **Stack**: HTML5, Modern Vanilla CSS3, Vanilla JavaScript (ES6+) — Zero external runtime dependencies or heavy frameworks.

---

## 🪄 Game Description

> "Welcome to the enchanting world of WitchyLy!  
> Ly, a curious and endearing young witch, needs your help to fill her grimoire with potions. Slip under the rain of falling ingredients, move your cauldron and catch the right elements to brew magical concoctions… without letting it all overflow!"

---

## 📱 Download Store Links

- **iOS (Apple TestFlight Beta)**: [https://testflight.apple.com/join/3hP99ee9](https://testflight.apple.com/join/3hP99ee9)
- **Android (Google Play Store)**: [https://play.google.com/store/apps/details?id=com.vespera.witchyly](https://play.google.com/store/apps/details?id=com.vespera.witchyly)

---

## ✨ Features & Architecture

1. **Faithful Game Artwork Integration**:
   - Built directly around the original game assets: Ly character portrait, official 3D WitchyLy logo, Living Room arched window, potion bottles, in-game spellbooks, coins, and crystal shards.
   - Storybook aesthetic with rich mystical purples, potion greens, celestial cyans, and warm amber gold.

2. **Tri-Lingual Localization System (`js/i18n.js`)**:
   - 🇬🇧 **English** (Default)
   - 🇫🇷 **Français**
   - 🇸🇦 **العربية** (Full RTL layout with `dir="rtl"`, mirrored controls, and Arabic typography)
   - Persistent language choice saved in `localStorage`.

3. **Sections Implemented**:
   - **Hero Section**: 3D logo, Ly portrait, animated magical particles, TestFlight & Google Play download buttons, feature status pills.
   - **Catch. Match. Brew.**: 3-step narrative flow with an interactive visual marketing animation of falling ingredients and movable cauldron.
   - **6-Pillar Features**: Simple Addictive Gameplay, 8 Magical Rooms, 80 Levels, 6 Ingredient Families, Lilly's Grimoire, and Apprentice Leaderboards.
   - **8 Rooms Explorer**: Interactive room tab switcher and carousel showcasing Living Room, Kitchen, Greenhouse, Laboratory, Library, Attic, and upcoming locked chambers.
   - **Lilly's Grimoire**: Interactive potion catalog featuring all 6 potion families (Dark Magic, Creature, Arcane, Nature, Ethereal, Sweets) with instant stat inspection.
   - **Ingredient Families**: Collectible item cards with elemental affinities.
   - **Progression Roadmap**: 80 levels breakdown with milestone rewards (Witch coins, crystals, and grand master hat).
   - **Apprentice Leaderboard**: Stylized in-game leaderboard preview with ranks, scores, and Grimoire completion rates.
   - **Screenshot Gallery**: Responsive showcase with full-screen lightbox modal and keyboard navigation.
   - **Download CTA**: Final conversion block with direct store buttons.
   - **Compliant Legal Pages**: Tri-lingual `/privacy-policy.html` and `/terms.html` dated September 2026.

4. **Performance & Accessibility**:
   - Native `IntersectionObserver` scroll reveals.
   - Canvas particle engine that auto-pauses when off-screen.
   - Full support for `@media (prefers-reduced-motion: reduce)`.
   - Semantic HTML5, ARIA roles, and keyboard navigation.
   - SEO metadata, Open Graph preview tags, and Schema.org `SoftwareApplication` JSON-LD.

---

## 📂 Project Structure

```
witchyly-landing/
├── index.html                   # Main creative landing page
├── privacy-policy.html          # Privacy policy (EN, FR, AR)
├── terms.html                   # Terms & Conditions (EN, FR, AR)
├── README.md                    # Project documentation
├── css/
│   ├── style.css                # Design system, layout, and component styles
│   ├── responsive.css           # Breakpoints (320px to 1920px) & RTL rules
│   └── legal.css                # Typography & layout for legal documentation
├── js/
│   ├── i18n.js                  # Tri-lingual translation dictionary & RTL switcher
│   ├── animations.js            # Particle canvas, scroll reveals & cauldron demo
│   └── main.js                  # Navigation, room explorer, grimoire & lightbox
└── assets/
    ├── logo/                    # Official 3D logo, favicons
    ├── characters/              # Ly portrait & cauldron sprite
    ├── screenshots/             # Original high-res game screenshots
    ├── rooms/                   # Living Room window artwork
    ├── grimoire/                # Grimoire book mascot & badges
    ├── potions/                 # 6 potion family cards & showcase bottle
    ├── ingredients/             # Falling skull, spellbook, crystal orb, rose bubble
    └── icons/                   # Store badges, coins, crystal shards
```

---

## 🚀 Running Locally

You can serve the static files with any standard HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Or using npx serve
npx -y serve .
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

---

© 2026 Vespera. All rights reserved.
