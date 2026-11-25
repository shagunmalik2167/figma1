# Rayan Adlrdard - Front-end Developer Portfolio

A pixel-perfect, responsive implementation of the Figma portfolio webpage design matching every visual section, typography, color palette, and asset from the reference design.

---

## 🎯 Target Canvas Dimensions (From Figma)

The source Figma frame has exact layout specifications:
- **Canvas Width**: `1,440px`
- **Canvas Height**: `3,977px`
- **Container Margins**: `96px` left and right (`1,248px` content grid)

---

## 🔍 How to Test Pixel-Perfect Precision with Pixel Perfect Pro Extension

If you are using the **Pixel Perfect Pro** Chrome/Brave extension:
1. Load your Figma image export (or `images/figma-overlay.png`) into the extension.
2. In the extension toolbar, enter these exact settings:
   - **Width**: `1440`
   - **Scale**: `1.0`
   - **Position**: `Auto` (or click `→|←` Center)
   - **Top**: `0`
   - **Left**: `Center / Auto`
3. Refresh the page with `Ctrl + F5` to ensure the updated [`style.css`](style.css) is loaded.

---

## 📁 File Structure

```text
figma 1/
├── index.html                  # Main semantic HTML5 webpage with calibrated 1440px frame
├── style.css                   # Complete CSS styles, design tokens & 1440px pixel-perfect rules
├── script.js                   # Interactive client script for navigation & forms
├── images/
│   ├── figma-overlay.png       # 1440×3977 calibrated Figma design overlay
│   ├── hero-illustration.png   # Original vector illustration uploaded by user
│   ├── exact-project-1.png ~ exact-project-6.png # Project cards
│   ├── exact-avatar-1.png ~ exact-avatar-3.png   # Client avatars
│   ├── exact-brands-strip.png  # Partner brand logos
│   └── footer-badges.png
└── README.md
```
