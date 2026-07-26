---
name: Cinematic Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#d9c2b0'
  on-secondary: '#3c2e21'
  secondary-container: '#564638'
  on-secondary-container: '#cab4a2'
  tertiary: '#ffffff'
  on-tertiary: '#303030'
  tertiary-container: '#e4e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#f6decb'
  secondary-fixed-dim: '#d9c2b0'
  on-secondary-fixed: '#25190d'
  on-secondary-fixed-variant: '#534436'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Anton
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Anybody
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Anybody
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  panel-gap: 32px
---

## Brand & Style

This design system embodies a premium, futuristic luxury aesthetic tailored for high-end grooming experiences. The brand personality is sophisticated, mysterious, and cinematic, evoking the atmosphere of a dimly lit, high-tech lounge. 

The visual style is rooted in **Glassmorphism**, utilizing frosted surfaces, translucent layers, and vibrant background blurs to create a sense of deep, layered space. The UI should feel like a series of floating instruments and panels hovering over a rich, textured void. Motion is essential: use soft, foggy transitions and subtle parallax effects to mimic slow-moving smoke or lens flares. The overall emotional response should be one of exclusive calm and technical precision.

## Colors

The palette is anchored in a "Matte Black" void, providing the canvas for luxury. 

- **Primary (White - #F5F5F5):** Used sparingly for high-contrast typography and critical calls to action. It represents surgical precision.
- **Secondary (Foggy Brown - #6B5A4B):** An organic, muted tone used for accents, active states, and to bring warmth to the cold digital glass surfaces.
- **Tertiary (Graphite Gray - #2A2A2A):** Used for structural borders and subtle surface differentiation within the glass layers.
- **Neutral (Matte Black - #0D0D0D):** The foundation. It should be used for the static background to ensure the glass panels above it have maximum depth.

Gradient applications should use a blend of Graphite Gray and Foggy Brown with high-radius blurs to create "atmospheric lighting" behind floating panels.

## Typography

Typography focuses on the tension between bold, cinematic presence and flexible technical utility. 

- **Headlines:** Use **Anton**. Its condensed, heavy forms provide an impactful, editorial feel reminiscent of classic film posters. Headlines should use expanded letter spacing to maintain a premium, branded look despite the font's narrow proportions.
- **Body:** Use **Anybody** for its unique, adaptive character that bridges the gap between technical and expressive, ensuring legibility even when placed over complex glass backgrounds or blurred images.
- **Labels/Technical:** Use **JetBrains Mono** for small labels, prices, or timestamps to reinforce the "high-tech instrument" aesthetic.

All text placed over glass surfaces should utilize a slight text-shadow or a "glow" effect in the primary color at low opacity to ensure legibility against background noise.

## Layout & Spacing

The layout philosophy utilizes a **static background with scrolling glass content**. The background should feel infinite, while content is contained within "floating" modules.

- **Grid:** Use a 12-column grid for desktop. Elements should span 4, 6, or 8 columns to maintain generous whitespace.
- **Margins:** Desktop margins are wide (64px) to emphasize the premium nature of the brand.
- **Breakpoints:** 
    - Mobile (<768px): Single column, reduced horizontal padding.
    - Tablet (768px - 1024px): 8-column grid.
    - Desktop (>1024px): 12-column grid.
- **Flow:** Sections should not be hard-cut. Instead, glass panels should overlap slightly or fade out, creating a continuous vertical journey.

## Elevation & Depth

Depth is the defining characteristic of this design system. It is achieved through three layers:

1.  **The Void (Background):** A matte #0D0D0D base, occasionally broken by extremely soft, large radial gradients of #6B5A4B at 10% opacity.
2.  **The Glass (Panels):** Background blur (backdrop-filter: blur(20px)) with a semi-transparent fill (rgba(42, 42, 42, 0.4)). 
3.  **The Highlight (Interactions):** Each glass panel must have a 1px solid border at the top and left (rgba(245, 245, 245, 0.15)) to simulate a light source hitting the edge of the glass.

Shadows should be "Ambient Shadows"—extremely soft, using the Graphite Gray color rather than pure black, with a spread of 40px+ to make the panels feel like they are truly floating.

## Shapes

The shape language is sophisticated and modern, avoiding both "childish" overly rounded corners and "aggressive" sharp edges. 

Standard components use a **0.5rem (8px)** radius. Larger glass cards and containers use **1rem (16px)** to create a softer, more inviting appearance. Buttons and input fields should follow the standard 8px radius to maintain a sleek, uniform look.

## Components

- **Buttons:** Primary buttons are solid White (#F5F5F5) with Black text. Secondary buttons are "Glass Buttons"—transparent with a 1px white border and a blur effect that intensifies on hover.
- **Glass Cards:** The centerpiece of the UI. Must feature backdrop-blur, a subtle inner glow, and a "specular highlight" on the top-left edge.
- **Input Fields:** Dark, recessed wells with a 1px Graphite Gray border. On focus, the border glows with a soft Foggy Brown light.
- **Chips/Status:** Small, pill-shaped elements with JetBrains Mono text. Use low-opacity Foggy Brown backgrounds for active states.
- **Navigation:** Merged into the hero. Use a horizontal layout with wide letter spacing. The navigation bar should become a more opaque glass strip only upon scrolling.
- **Service Lists:** Use thin Graphite Gray dividers. Hovering over a service should trigger a soft "spotlight" effect that follows the cursor within the glass panel.