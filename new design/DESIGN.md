---
name: Monochrome Gallery
colors:
  surface: '#fbf9f9'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e3e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#fbf9f9'
  on-background: '#1b1c1c'
  surface-variant: '#e3e2e2'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style

This design system is built for high-end creative portfolios, architectural firms, and editorial platforms that require a "gallery-like" presence. The brand personality is authoritative yet invisible, allowing the content to serve as the primary visual driver. 

The aesthetic draws heavily from **Minimalism** and **Modernism**, utilizing a strict binary color palette to create tension and focus. By stripping away rounded corners, shadows, and decorative flourishes, the UI achieves a "brutalist-lite" sophistication—bold and unapologetic, but remains professionally polished. The emotional response is one of clarity, precision, and timelessness.

## Colors

The palette is strictly achromatic. 
- **Primary Black (#000000):** Used for all high-impact elements, primary text, and heavy borders.
- **Pure White (#FFFFFF):** The foundation for all backgrounds to maximize whitespace and "breathability."
- **Functional Grays:** 
    - `#F5F5F5` (Light Gray) is used for subtle background differentiation in sections or "off-white" canvas areas.
    - `#E5E5E5` (Mid Gray) is reserved for structural lines, dividers, and disabled states.

Interactive elements use a simple inversion logic: black backgrounds with white text for primary actions, and white backgrounds with black borders for secondary actions.

## Typography

The typographic strategy pairs a sharp, contemporary neo-grotesk with a technical monospaced font to create an "archival" feel.

- **Headlines:** Hanken Grotesk provides a clean, neutral, but impactful weight. Large display sizes should use tight tracking to emphasize the geometric nature of the letterforms.
- **Body:** JetBrains Mono is used for all long-form text and metadata. This introduces a subtle "work-in-progress" or "blueprint" aesthetic that balances the polish of the headlines.
- **Labels:** Small caps with generous letter spacing are used for navigation items and categories to ensure clear hierarchy without needing large font sizes.

## Layout & Spacing

The layout follows a **Fixed Grid** system centered on the page. 
- **Desktop (12 Columns):** 1440px max width with 24px gutters and 64px outer margins.
- **Tablet (8 Columns):** Fluid width with 24px gutters and 40px outer margins.
- **Mobile (4 Columns):** Fluid width with 16px gutters and 20px outer margins.

Spacing follows a strict 4px base unit. To maintain the "high whitespace" aesthetic, vertical section padding should be aggressive (e.g., 120px to 160px between major blocks). Elements should be aligned to the grid with a preference for "asymmetric balance"—placing large imagery against minimal text blocks to create visual interest.

## Elevation & Depth

This design system rejects all shadows. Depth is achieved exclusively through **Tonal Layers** and **Bold Outlines**.

1.  **Level 0 (Background):** Pure White (#FFFFFF).
2.  **Level 1 (Structural):** 1px solid borders using Primary Black (#000000) for active elements or Mid Gray (#E5E5E5) for containment.
3.  **Level 2 (Interaction):** Solid black fills that "pop" against the white background.

To simulate depth without gradients, use overlapping elements. For example, a card might overlap a section boundary by 24px to indicate its position in the foreground.

## Shapes

The shape language is strictly **Sharp**. All corners must be 0px. This applies to:
- Buttons and CTA containers.
- Form inputs and checkboxes.
- Cards, modals, and image thumbnails.
- Decorative "accents" or line-endings.

The rejection of curves reinforces the professional, architectural tone of the design system and ensures that the UI does not compete with the organic shapes found in photography or portfolio content.

## Components

### Buttons
- **Primary:** Solid Black (#000000) background, White (#FFFFFF) text. 0px radius. No border.
- **Secondary:** White (#FFFFFF) background, Black (#000000) text, 1px solid Black border. 0px radius.
- **Hover State:** Invert colors (Primary becomes White with Black border; Secondary becomes Solid Black).

### Cards
- No shadows. Use a 1px solid Gray (#E5E5E5) border or no border at all with heavy margin-bottom for a "floating" editorial look.
- Images within cards should be flush to the top and sides, with text content separated by a clear 1px horizontal divider.

### Input Fields
- 1px solid Black (#000000) bottom-border only (minimalist style) or full 1px box. 
- Placeholder text in JetBrains Mono at 60% opacity. 
- Focused state increases border weight to 2px.

### Lists
- Use thin horizontal dividers (#E5E5E5) between items.
- Bullet points should be replaced with small 4px x 4px black squares to maintain the geometric theme.

### Navigational Elements
- Navigation links use the `label-caps` style. 
- Active states are indicated by a simple underline or a "strike-through" to remain consistent with the brutalist influence.