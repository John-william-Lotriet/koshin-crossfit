# ⚡ Koshin CrossFit — Digital Design System & Brand Guidelines
**Theme**: *"Miami Vice Synthwave × Underground High-Performance CrossFit Box"*

---

## 1. The Official Logo & Mascot System

### 1.1 The Gorilla Emblem ("The Spirit of the Box")
The Koshin CrossFit brand identity is anchored by the **Fierce Silverback Gorilla Mascot**.
* **Visual Characteristics**: Stylized, high-contrast black & white comic/stencil graphic of an aggressive gorilla head with furrowed brow, fierce bared fangs, sharp ears, and dynamic neon rim stroke.
* **Symbolism**: Raw primal strength, fierce loyalty to the gym family/pack, relentless athletic work ethic, and zero ego.
* **Color Adaptations**:
  * **Cyber Neon Pink** (`#FF007F` rim outline) — *Primary Web & Social Media Brand Badge*
  * **Miami Electric Cyan** (`#00F0FF` rim outline) — *Secondary Accents & Dark Surface Watermarks*
  * **Original Electric Lime** (`#39FF14` rim outline) — *Box Heritage & Original Brand Badge*
* **Assets Available**:
  * [`koshin-gorilla-mascot-pink.png`](file:///Users/john-williamlotriet/Desktop/Koshin/assets/koshin-gorilla-mascot-pink.png)
  * [`koshin-gorilla-mascot-cyan.png`](file:///Users/john-williamlotriet/Desktop/Koshin/assets/koshin-gorilla-mascot-cyan.png)
  * [`koshin-gorilla-mascot-lime.png`](file:///Users/john-williamlotriet/Desktop/Koshin/assets/koshin-gorilla-mascot-lime.png)

```
       ▲  (Ears & Crest)
     /   \
   [ ಠ 益 ಠ ]  <-- Koshin Gorilla Mascot
     \___/
     KOSHIN
   C R O S S F I T
```

---

### 1.2 Exact Logo Typography ("KOSHIN CROSSFIT")

From the WhatsApp posters and gym materials, the official wordmark uses a dual-tiered typography structure:

#### A. The Primary Wordmark ("KOSHIN")
* **Exact Font Identity**: **`Capture it`** (by Magique Fonts) / **`Black Ops One`** / **`Teko 700` (with concrete distress)** / **`Industry Inc Grunge / Stencil`** (Fort Foundry) / **`Rubik Wet Paint`**.
* **Visual Characteristics**:
  * Heavy condensed bold block uppercase.
  * Stenciled/eroded concrete grunge texture overlay.
  * Sharp apex geometry on 'K', 'S', and 'N'.
  * Symmetrical 'H' crossbar and tall rectangular 'O'.
* **Web Implementation**:
  ```css
  font-family: 'Black Ops One', 'Teko', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #FF007F; /* or #FFFFFF with neon drop-shadow */
  text-shadow: 0 0 15px rgba(255, 0, 127, 0.8);
  ```

#### B. The Sub-Brand ("C R O S S F I T")
* **Exact Font Identity**: **`Montserrat Bold (800)`** or **`Barlow Bold (700)`** / **`Gotham Bold`**.
* **Visual Characteristics**:
  * Geometric modern sans-serif.
  * Ultra-wide tracking (`letter-spacing: 0.38em` to `0.45em`).
  * Always rendered in **Electric Miami Cyan (`#00F0FF`)** or Crisp Off-White (`#FFFFFF`).
* **Web Implementation**:
  ```css
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.38em;
  color: #00F0FF;
  text-shadow: 0 0 8px rgba(0, 240, 255, 0.7);
  ```

#### C. The Tagline ("FORGING ELITE FITNESS")
* **Exact Font Identity**: **`Barlow Condensed (700 SemiBold)`** / **`Oswald`**.
* **Visual Characteristics**: Uppercase, tracking `0.25em`, crisp off-white or muted cyan.

---

## 2. Color Palette & Token Architecture

| Token Name | Role / Usage | HEX | RGB | HSL | Preview |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--neon-pink-500` | **Primary Brand Neon / Core Actions** | `#FF007F` | `rgb(255, 0, 127)` | `hsl(330, 100%, 50%)` | `■ #FF007F` |
| `--neon-pink-400` | Neon Glow Highlight / Active State | `#FF2E93` | `rgb(255, 46, 147)` | `hsl(331, 100%, 59%)` | `■ #FF2E93` |
| `--neon-pink-600` | Deep Pink Gradient Base / Border | `#D6006B` | `rgb(214, 0, 107)` | `hsl(330, 100%, 42%)` | `■ #D6006B` |
| `--neon-cyan-500` | **Secondary Brand Neon / Secondary CTAs / Badges** | `#00F0FF` | `rgb(0, 240, 255)` | `hsl(184, 100%, 50%)` | `■ #00F0FF` |
| `--neon-cyan-400` | Cyan Glow Highlight / Accent | `#38F3FF` | `rgb(56, 243, 255)` | `hsl(184, 100%, 61%)` | `■ #38F3FF` |
| `--synthwave-purple`| Miami Skyline Atmosphere / Ambient Glow | `#7B2CBF` | `rgb(123, 44, 191)` | `hsl(272, 63%, 46%)` | `■ #7B2CBF` |
| `--canvas-black` | Deepest Background (Page Canvas) | `#08080D` | `rgb(8, 8, 13)` | `hsl(240, 24%, 4%)` | `■ #08080D` |
| `--surface-card` | Glassmorphism Card Surface (with blur) | `#141422` | `rgb(20, 20, 34)` | `hsl(240, 26%, 11%)` | `■ #141422` |

---

## 3. Typography Hierarchy & Font Pairings

```html
<!-- Google Fonts CDN Import String -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;0,800;0,900;1,700&family=Bebas+Neue&family=Black+Ops+One&family=Caveat:wght@500;700&family=Montserrat:wght@700;800;900&family=Mr+Dafoe&family=Permanent+Marker&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Rubik+Wet+Paint&family=Teko:wght@600;700&display=swap">
```

| Typographic Role | Recommended Font | Weight | Matched Poster Elements |
| :--- | :--- | :--- | :--- |
| **1. Logo Distressed Wordmark** | **`Black Ops One`** / **`Capture it`** / **`Teko`** | `700 - 900` | `"KOSHIN"` eroded stencil header |
| **2. Logo Geometric Subtitle** | **`Montserrat`** / **`Barlow`** | `800 Bold` | `"C R O S S F I T"` wide tracked |
| **3. Gritty Brush & Graffiti Script** | **`Permanent Marker`** | `400` | `"HAPPY BIRTHDAY"`, `"BUILT DIFFERENT"`, `"MISS BARTLE"` |
| **4. Neon Tube Cursive** | **`Mr Dafoe`** / **`Satisfy`** | `400` | `"Guru"`, `"Miami Vibes"` neon signs |
| **5. Chalkboard / Whiteboard** | **`Caveat`** | `700 Bold` | `"Teach Lift Inspire Repeat ♡"`, `"Same girl... higher standards"` |
| **6. Body Text & UI** | **`Plus Jakarta Sans`** / **`Inter`** | `400 - 600` | Paragraphs, class timetables, forms, navigation |

---

## 4. UI Component Specifications

1. **Gorilla Mascot Badges**: High-contrast icon badge with glowing neon outline and drop shadow.
2. **Neon Schedule Pills** (*First Friday*): Dark frosted glass pills with glowing borders (⏰ 5:30PM, 🔥 Bonfire, 🥤 Bring Drinks).
3. **Athlete / Coach Spotlight Cards**: Gym portraits with magenta/cyan rim lighting, trait bullets (🧠 Mind, 🏋️ Body, 💖 Heart), and handwritten chalkboard quotes.
4. **Miami Sunset Buttons**: Primary CTA with pink-to-purple gradient and dynamic hover bloom.
5. **Brand Ticker Bar**: Scrolling marquee with brand mantras (`DISCIPLINE BUILDS FREEDOM | BUILT DIFFERENT | KOSHIN FAMILY`).
