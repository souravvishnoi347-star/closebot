---
name: Velocity Gradient
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#3e3fcc'
  on-tertiary: '#ffffff'
  tertiary-container: '#585be6'
  on-tertiary-container: '#f1eeff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-x: 2rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style
The design system is engineered for a high-growth SaaS environment, blending **Corporate Modern** reliability with **Glassmorphic** accents. The brand personality is "Expertly Automated"—it feels fast, intelligent, and impeccably organized. The target audience consists of sales teams and business owners who require a CRM that feels more like a proactive assistant than a static database.

The visual style prioritizes clarity and momentum. We use a crisp, light-mode foundation to instill a sense of transparency and trustworthiness, while utilizing high-energy electric blue gradients to draw the eye toward conversion points and AI-driven insights.

## Colors
The palette is rooted in the "Slate" family to provide a sophisticated, neutral backdrop that allows the AI features to stand out. 

- **Primary Gradient:** A linear transition from `blue-600` (#2563eb) to `sky-500` (#0ea5e9). This is reserved for primary actions, progress indicators, and AI status states.
- **Background:** `slate-50` (#f8fafc) is used for the main application canvas to differentiate from white surface cards.
- **Surface:** Pure white (#ffffff) is used for content containers to create a "floating" effect.
- **Text:** The primary body text uses `slate-600` (#475569) to reduce eye strain while maintaining high legibility against the light background.

## Typography
The design system utilizes **Plus Jakarta Sans** exclusively to maintain a modern, geometric, and friendly aesthetic. 

Headings are set with **ExtraBold (800)** weight and **Tight tracking** to create a sense of authority and "compact" professionalism. Body text is prioritized for readability using a balanced line height (1.6) and a slightly softened slate color. For data-heavy CRM views, use `label-sm` for metadata and timestamps to maintain a clean hierarchy.

## Layout & Spacing
This design system follows a **Fluid Grid** model with a hard constraint on the maximum width for desktop readability. 

- **Containers:** All main content is wrapped in a `max-w-7xl` (1280px) container, centered with `mx-auto`.
- **Rhythm:** We use an 8px spacing scale. Vertical stack spacing typically follows 16px (md) or 32px (lg) increments to maintain "breathability."
- **Mobile:** On mobile devices, margins shrink to 16px, and multi-column card layouts reflow into a single-column stack.

## Elevation & Depth
Depth is created through **Tonal Layering** and soft, ambient shadows rather than harsh borders.

- **Low Elevation:** Surface cards use a very subtle `shadow-sm` and a border of `slate-200` at 60% opacity. This makes the UI feel light and airy.
- **Interactive Elevation:** On hover, cards transition to `shadow-md`, providing immediate tactile feedback that the element is actionable.
- **Overlays:** Modals and dropdowns use a "Glassmorphism" approach with a `backdrop-blur-md` effect on the background and a more pronounced shadow to signify they are at the top of the Z-index.

## Shapes
The design system employs a **Pill-shaped (3)** rounding philosophy for interactive elements. This choice offsets the technical nature of a CRM with a welcoming, approachable feel. 

- **Buttons:** Always use `rounded-full`.
- **Cards:** Use `rounded-2xl` (1rem) to maintain a soft but structured appearance.
- **Inputs:** Use `rounded-xl` (0.75rem) for a modern, nested look within cards.

## Components
### Buttons
- **Primary:** Rounded-full, featuring the Electric Blue gradient. Text is white, semi-bold.
- **Secondary:** White background with the subtle `slate-200/60` border. Text in `slate-600`.
- **Ghost:** No background or border; used for secondary navigation or "Cancel" actions.

### Cards
- Standard containers for CRM data. Background: `bg-white`. Border: `border-slate-200/60`. Shadow: `shadow-sm`. On hover, the shadow deepens to `shadow-md`.

### Input Fields
- High-affordance design. Background: `bg-slate-50` when nested in a white card, or `bg-white` on the slate background. Focus state: 2px border using the `primary` blue color.

### WhatsApp-Specific Elements
- **Chat Bubbles:** Incoming messages use `bg-slate-100`; Outgoing AI-generated messages use a light version of the blue gradient (10% opacity) with a blue border to signify "Closebot" intervention.
- **Status Chips:** Rounded-full badges for "Lead," "Hot," or "Closed," using high-contrast background colors with 10% opacity and 100% opacity text.

### Navigation
- A clean, top-fixed navigation bar using `backdrop-blur-lg` and a `bg-white/80` finish to maintain context of the content scrolling underneath.