# Design System Specification

## 1. Overview & Creative North Star: "The Underground Editorial"
This design system is a rejection of the soft, rounded, and polite "SaaS-standard" aesthetic. Our Creative North Star is **The Underground Editorial**. It draws inspiration from the high-contrast grit of 1970s fanzines, the architectural precision of vinyl sleeve typography, and the dark, immersive atmosphere of a concrete basement club.

The experience must feel intentional and "expensive" through its restraint. We break the template by utilizing **extreme typographic scale**, **intentional asymmetry**, and a **radical "no-border" philosophy**. We do not guide the user with shadows and lines; we guide them with light, negative space, and raw typographic hierarchy.

---

## 2. Colors: High-Contrast Monochromatism
The palette is rooted in the "Near-Black" void, punctuated by a singular, violent Crimson.

### The Palette
- **Surface/Background (`#0a0a0a` / `surface`):** The foundation. Everything emerges from this darkness.
- **Primary (`#c0392b` / `primary_container`):** Deep Crimson. Used sparingly for high-impact calls to action and critical status.
- **On-Surface (`#e5e2e1` / `on_surface`):** An off-white "bone" tone that cuts through the black without the eye-strain of pure `#FFFFFF`.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning or containment. Traditional borders feel "contained" and "safe." This system is neither.
- Boundaries must be defined solely through background color shifts.
- Use `surface_container_lowest` (`#0e0e0e`) against `surface` (`#131313`) to create a subtle "cut-out" effect.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of heavy cardstock.
- **Tier 1 (Base):** `surface` (`#131313`)
- **Tier 2 (Nesting):** `surface_container_low` (`#1c1b1b`) for secondary modules.
- **Tier 3 (Highlight):** `surface_container_highest` (`#353534`) for active states or urgent overlays.

### Signature Textures
While the user requested "no gradients," we apply a **"Faded Ink" transition** for large hero areas. Use a strictly linear, non-vibrant transition from `primary_container` (`#c0392b`) to `on_primary_fixed_variant` (`#8e130c`) to mimic the look of red ink on dark paper.

---

## 3. Typography: The Brutalist Masthead
Typography is the primary UI element. The contrast between the serif’s elegance and the monospace’s utilitarian grit is the system’s signature.

- **Display & Headlines (Newsreader):** Used for artist names, track titles, and editorial headers. Large-scale, high-contrast. This is our "Masthead" font.
- **Body & UI (Space Grotesk):** A tight, monospace-leaning sans-serif used for metadata, timestamps, and technical data. It feels like a tracklist on the back of a record.

**Hierarchy Strategy:**
- **Display-LG (3.5rem):** Set with `letter-spacing: -0.05em`. This should feel massive and authoritative.
- **Label-SM (0.6875rem):** All-caps for metadata. This provides a "technical" counterpoint to the large editorial headlines.

---

## 4. Elevation & Depth: Tonal Layering
We reject "drop shadows." In a dark room, shadows don't define objects; light does.

- **The Layering Principle:** Depth is achieved by "stacking" surface tiers. To "lift" a card, do not add a shadow; change the background to `surface_bright` (`#3a3939`).
- **The "Ghost Border" Fallback:** If a divider is functionally required (e.g., dense data tables), use the `outline_variant` (`#59413d`) at **15% opacity**. It should be felt, not seen.
- **Zero-Radius Mandate:** Every container, button, and image must use `0px` border-radius. Sharp edges convey the "gritty" and "raw" nature of the underground music scene.

---

## 5. Components

### Buttons: The "Block" Trigger
- **Primary:** Background `primary_container` (`#c0392b`), text `on_primary_container` (`#ffe5e1`). Sharp edges. Hover state: `primary_fixed` (`#ffdad5`) with no transition time (instant snap).
- **Secondary:** Background `transparent`, border `outline` (`#a88a85`) at 20% opacity. Text `on_surface`.
- **Tertiary:** Text only, underlined with a 2px offset.

### Input Fields: The "Underline" Aesthetic
- No boxes. Text inputs are a single bottom-stroke using `outline`.
- Label sits in `label-sm` (Space Grotesk) directly above the input, always visible.
- Error states shift the bottom-stroke to `error` (`#ffb4ab`) and the text to a high-contrast white.

### Cards & Lists: The "Invisible" Grid
- **Forbid Dividers:** Use the Spacing Scale `8` (1.75rem) to separate list items.
- Separation is achieved by shifting the background of the entire list item to `surface_container_low` on hover.

### Progress Bars (Music Player)
- **Track:** `surface_container_highest`.
- **Progress:** `primary_container`.
- **Height:** 2px. Sharp, no rounded caps.

### Additional Signature Component: "The Metadata Tag"
- Small, rectangular blocks with `surface_variant` background and `on_surface_variant` text. Used for genres (e.g., "INDUSTRIAL," "POST-PUNK"). These should look like labels on a physical archive folder.

---

## 6. Do’s and Don’ts

### Do:
- **Use "Illegal" Alignments:** Align large headlines to the right while body text stays left-aligned to create editorial tension.
- **Embrace the Dark:** Use `surface_container_lowest` for the majority of the UI to make the Crimson accent feel like a warning or a highlight.
- **Instant States:** Interactions should be "snappy." Avoid 300ms eases; use 0ms or 50ms for a "mechanical" feel.

### Don’t:
- **No Curves:** Never use a border-radius. If it's not a 90-degree angle, it doesn't belong.
- **No Generic Blue:** Avoid the "SaaS blue" for links. Use the `secondary` (`#c6c6c7`) or `primary` for all interactive elements.
- **No Softness:** Avoid "Bouncy" or "Spring" animations. If an element moves, it should move linearly and with purpose.
- **No Icon Overload:** Let the typography speak. Only use icons (sharp, 2px stroke) when text would be cumbersome.