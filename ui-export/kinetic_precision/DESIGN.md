---
name: Kinetic Precision
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#005a82'
  on-tertiary: '#ffffff'
  tertiary-container: '#0074a6'
  on-tertiary-container: '#e4f2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1440px
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
  stack-xs: 0.25rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

The design system is engineered for high-velocity sales environments where clarity and focus are paramount. It adopts a **Modern Corporate** aesthetic—heavily inspired by the precision of developer tools and the fluid elegance of modern fintech. The personality is authoritative yet unobtrusive, characterized by ample whitespace, a crisp light-mode interface, and deliberate moments of high-energy color.

The emotional response should be one of "effortless control." By utilizing a high-contrast palette against soft, off-white backgrounds, the interface reduces cognitive load and directs the user's eye toward critical CRM data points and conversion actions.

## Colors

The color architecture relies on a "High-Contrast Light" foundation. 

- **Primary & Accent:** The primary Blue-600 is used for core functional elements. Electric gradients from Sky-500 to Blue-600 are reserved for high-impact visual cues, progress indicators, and primary call-to-actions, injecting energy into the data-heavy environment.
- **Neutrals:** Slate-50 serves as the canvas for the entire application, while pure White is used exclusively for elevated surfaces like cards and modals to create distinct depth.
- **Feedback:** Success, Warning, and Error states utilize the standard semantic spectrum but are tuned to match the saturation of the primary blue for visual harmony.

## Typography

This design system uses a dual-font strategy to balance character with utility. 

**Plus Jakarta Sans** is used for headlines and display text. Its slightly wider apertures and modern geometric construction provide a friendly but high-tech feel. 

**Inter** is the workhorse for all UI elements, data tables, and body copy. Its exceptional legibility at small sizes makes it ideal for the dense information displays common in CRM workflows. 

For data-heavy views, use `body-md` as the standard, while `label-md` should be used for table headers and category tags to create a clear typographic hierarchy.

## Layout & Spacing

The system follows a **Fluid Grid** model with a strict 4px/8px baseline rhythm. 

- **Desktop:** A 12-column grid with 24px (1.5rem) gutters. Content is typically centered with a max-width of 1440px. 
- **Navigation:** A persistent side navigation (280px) is recommended for desktop, collapsing into a bottom bar or "hamburger" drawer for mobile.
- **Density:** High density is preferred for data tables (row height ~40px), while marketing and dashboard landing pages should use `stack-lg` to allow the layout to breathe.
- **Safe Areas:** All main content containers should maintain a minimum 24px horizontal padding on tablet and 16px on mobile.

## Elevation & Depth

This design system utilizes a **Tonal Layering** approach combined with **Glassmorphism** for navigational elements.

- **Level 0 (Base):** Slate-50 background. No shadow.
- **Level 1 (Cards/Surfaces):** White background with a `shadow-sm` (subtle 1px blur) and a Slate-200 1px border.
- **Level 2 (Dropdowns/Popovers):** White background with `shadow-xl` (diffused, 20-25px blur) to simulate significant lift.
- **Sticky Elements:** Headers and sidebars use `backdrop-blur-md` with a semi-transparent white tint (rgba(255, 255, 255, 0.8)) to maintain context of the content scrolling beneath them.

## Shapes

The shape language is "Generous and Modern." 

We utilize `rounded-2xl` (1rem / 16px) as the standard for all primary containers, cards, and modal windows. This softening of the frame contrasts beautifully with the sharp, high-contrast typography inside. 

Smaller UI components like buttons and input fields should follow a `rounded-lg` (0.5rem / 8px) rule to maintain a sense of precision and "clickability." Secondary elements like tags or chips may use a full pill-shape for distinct visual categorization.

## Components

- **Buttons:** Primary buttons feature the Sky-500 to Blue-600 gradient with white text. Secondary buttons use a white background with a Slate-200 border and Slate-900 text. Use `transition-all` with a subtle scale-down (98%) on click.
- **Input Fields:** White background, 1px Slate-200 border. On focus, the border transitions to Primary Blue-600 with a 3px soft blue outer glow (ring).
- **Cards:** Defined by `bg-white`, `rounded-2xl`, and `border-slate-200`. For interactive cards, add a hover state that increases elevation to `shadow-md`.
- **Status Chips:** Small, semi-transparent backgrounds with high-saturation text (e.g., Success uses emerald-100 bg and emerald-700 text).
- **Data Tables:** Borderless rows with a 1px Slate-100 bottom divider. Use `hover:bg-slate-50` for row interactivity.
- **Progress Indicators:** Use the electric blue gradient for active progress bars to draw the eye toward completion metrics.