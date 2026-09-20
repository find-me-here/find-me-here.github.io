# Resume templates

Each `.html` file in this folder is one resume template. A template is an ordinary, self-contained HTML page: its own `<style>`, a few `data-*` attributes that say where the resume goes, and no content of its own. The renderer (`src/lib/resume/render.ts`) fills it in.

The same output is used everywhere — the gallery thumbnail, the editing canvas, the PDF preview, the shared page and the printed PDF — so a template only has to be written once.

## Adding a template

1. Create `<id>.html` in this folder. The id is lowercase with no spaces (`executive`, `timeline`), because it is the file name, part of the URL (`/resume-templates/<id>.html`) and what a saved resume stores.
2. Add the id to `TEMPLATE_IDS` in `src/lib/resume/templates.ts`. The list order is the gallery order.
3. Fill in `<title>` and `<meta name="description">` (see below). No other code changes.

Don't rename or delete an id that has shipped. Saved resumes store only the id; a resume whose template is gone silently falls back to `modern`.

## Skeleton

Copy this to start.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example</title>
  <meta name="description" content="One short line: what makes this layout different.">
  <style>
    :root { --accent: #0f766e; --page: #ffffff; }
    body { padding: 56px 64px 48px; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
    header { padding-bottom: 16px; border-bottom: 2px solid var(--accent); }
    h1 { font-size: 32px; line-height: 1.2; color: #0f172a; }
    .role { margin-top: 4px; font-size: 15px; color: var(--accent); }
    .contact { display: flex; flex-wrap: wrap; gap: 4px 0; margin-top: 10px; font-size: 12px; color: #64748b; }
    .contact span + span::before { content: "·"; margin: 0 8px; }
    .photo { width: 80px; height: 80px; border-radius: 50%; background: #f4f6f8; }
  </style>
</head>
<body>
  <header data-section="personal">
    <div class="photo" data-slot="avatar"></div>
    <h1 data-slot="name"></h1>
    <p class="role" data-slot="title"></p>
    <p class="contact" data-group>
      <span data-slot="location"></span><span data-slot="email"></span><span data-slot="phone"></span><span data-slot="website"></span><span data-slot="linkedin"></span>
    </p>
  </header>
  <main data-sections="*"></main>
</body>
</html>
```

## Metadata

- `<title>` is the name shown in the gallery. One word or two.
- `<meta name="description">` is the line under it. One sentence.

## Where the resume goes

Two attributes. Everything else is plain HTML and CSS.

### `data-slot` — one personal detail

| Value | Shows |
| --- | --- |
| `name` | Full name |
| `title` | Headline / role |
| `location` | Location |
| `email` | Email (printed as a `mailto:` link) |
| `phone` | Phone (printed as a `tel:` link) |
| `website` | Website (printed as a link) |
| `linkedin` | LinkedIn (printed as a link) |
| `avatar` | The photo |

Rules:

- **Leave slot elements empty.** The renderer replaces their content. On the canvas they become editable text, so don't nest markup inside one (the exception is `avatar`, which receives an `<img>`).
- **A slot with no value is removed from the printed page.** So don't put separators in the markup between slots. Draw them in CSS with `span + span::before`, as the bundled templates do, and a missing phone number never leaves a dangling `·`.
- **`data-group`** goes on a wrapper around slots (a contact line, a contact block with a heading). When every slot inside it is empty, the printed page drops the whole wrapper, heading included.
- **`avatar`** — you set its size and shape (`border-radius: 50%` for a circle). The image fills it (`object-fit: cover`) and the element clips it. With no photo it is removed from the printed page, but it stays on the canvas as a "click to add a photo" target, so give it a visible background and explicit width and height.
- Slots may hold long values. Add `min-width: 0` on flex children and `word-break: break-word` where the column is narrow.

### `data-sections` — where the sections go

An element with `data-sections` is filled with resume sections, in the order the person arranged them.

- `data-sections="skills education certifications interests"` takes exactly those sections.
- `data-sections="*"` takes every section no other container claimed.
- **Every template needs exactly one `*` container.** Without one, any section not named elsewhere (custom sections, sections a person turns back on) has nowhere to print. Two would each print every leftover section, so they would appear twice.
- Put the sections that belong in a side column (skills, education…) in a named container and let `*` take the rest, as `sidebar.html` and `creative.html` do. A section listed by name never also appears in the `*` container.
- Use a block element (`<main>`, `<div>`) and leave it empty.

## Section markup you can style

Sections are generated. You don't write them, you style them. `src/lib/resume/baseStyles.ts` gives every class a default look before your `<style>` loads, so restyle only what is different.

```html
<section class="rs rs-experience" data-section="experience">
  <h2 class="rs-title">Experience</h2>
  <div class="rs-entry">
    <div class="rs-row"><span class="rs-head">Company</span><span class="rs-date">2021 – Present</span></div>
    <div class="rs-row"><span class="rs-sub">Position</span><span class="rs-meta">Location</span></div>
    <ul class="rs-list"><li>…</li></ul>
    <p class="rs-stack">Stack: A · B · C</p>
  </div>
</section>
```

| Section (`.rs-<key>`) | Contents |
| --- | --- |
| `summary` | `p.rs-text` |
| `skills` | `.rs-skill` → `.rs-skill-label` + `.rs-skill-items` → `.rs-chip` × n |
| `experience` | `.rs-entry` → `.rs-row` (`.rs-head` company, `.rs-date`), `.rs-row` (`.rs-sub` position, `.rs-meta` location), `ul.rs-list`, `p.rs-stack` |
| `education` | `.rs-entry` → `.rs-row` (`.rs-head` degree, `.rs-date` year), `.rs-row` (`.rs-sub` institution) |
| `projects` | `.rs-entry` → `.rs-row` (`.rs-head` name), `p.rs-text`, `ul.rs-list`, `p.rs-stack` |
| `certifications` | `.rs-entry` → `.rs-row` (`.rs-head` name, `.rs-date` year), `.rs-row` (`.rs-sub` issuer) |
| `achievements` | `ul.rs-list` |
| `interests` | `p.rs-text` |
| `custom` (person-made) | `ul.rs-list` |

Things to know:

- A part with no value isn't written: no date means no `.rs-date`, no position or location means no second `.rs-row`. Don't rely on a class being present.
- `.rs-head` may contain an `<a>` in the printed page when the person gave a link. The base style makes links inherit colour with no underline.
- `.rs-chip` gets a trailing `, ` from the base style. Turn it off (`content: none`) if you restyle chips as pills or tags, as `creative.html` does.
- `.rs-skill-label` gets a trailing `: `; turn it off the same way if the label sits on its own line.
- `.rs-empty` only exists on the canvas (a "click to add…" prompt for a section with no content). The printed page omits empty sections entirely.
- Scope side-column rules with the container (`aside .rs-title`) so they don't leak into the main column.

## The page

- **Width is 794px** (A4 at 96dpi). Lay out for that exact width. There is no responsive design here.
- **Height is at least 1123px** on screen (`body { min-height: 1123px }`), and it grows with the content. Printing sets `@page { size: A4; margin: 0 }`, so a page has **no margin**. Your template supplies the padding.
- **Multi-page resumes.** Pad with `box-decoration-break: clone` (plus the `-webkit-` prefix) on the element that carries the padding, so every printed page repeats the top and bottom padding instead of running to the paper edge. Every bundled template does this on `body`, `main` or `aside`.
- **Full-bleed backgrounds** (a side column that spans the page, a colour band) go on `html`, not `body`, so they repeat on every printed page. See how `sidebar.html` paints its column with a `linear-gradient` on `html`. Print colours are already forced on (`print-color-adjust: exact`).
- **Page breaks.** Base styles already keep an `.rs-entry` together and keep an `.rs-title` with the entry after it. Don't fight them; don't add `break-inside: avoid` to whole sections, which leaves large gaps.

## Colours

The person picks two colours. The renderer sets them as CSS variables on `:root`, after your styles:

- `--accent` — headings, rules, highlights.
- `--page` — the page fill (usually white).

Rules:

- Use them; don't hard-code a colour where the accent should show. The `:root { --accent: …; --page: … }` line at the top of each template is only a fallback so the file looks right on its own; the person's choice overrides it.
- Derive tints with `color-mix(in srgb, var(--accent) 25%, var(--page))` so they follow the theme, including a tinted page.
- Neutral text colours (`#0f172a`, `#475569`, `#64748b`) are fine to hard-code.
- Text on an accent fill: pick white or dark deliberately. The accent can be any hex the person chooses.

## Clickable areas on the canvas

Add `data-section="personal"` to the header (or any element that shows personal details) so a click on it opens the personal details editor. The sections you don't write already have it. It can appear on more than one element (`sidebar.html` puts it on the photo, the contact block and the header). A template without it leaves the header unclickable on the canvas.

Hover outlines are drawn 6px outside the element, so `overflow: hidden` on an ancestor clips them. Avoid it where you can.

## Constraints

- **Self-contained.** No `<script>`, no `<link>`, no `@import`, no remote fonts, images or stylesheets. Scripts never run (templates render inside sandboxed frames), and the PDF has to look the same offline. Use system font stacks (`system-ui`, `Georgia, "Times New Roman", serif`, `ui-monospace`…). Small decorative shapes are done in CSS.
- **Styles stay in the template.** Frames isolate them from the app, so global selectors (`h1`, `body`) are safe.
- **No fixed content.** Don't type sample text into the template. Anything static prints on every resume.
- **Small.** Keep the file to a few KB; every template is fetched to build the gallery.

## Testing a template

1. Add the id to `TEMPLATE_IDS` and run the frontend (`npm run dev`).
2. Open the resume builder, choose the template in the gallery, and check the thumbnail, the canvas and the PDF preview.
3. Check these cases:
   - **Full resume.** All sections, several jobs, long bullet lists: spills onto a second page, and entries don't split across pages.
   - **Sparse resume.** Only a name: no stray separators, empty boxes or headings with nothing under them.
   - **Long values.** A long name, a long email, a long company name: nothing overflows or gets clipped.
   - **No photo, and with a photo.** Layout holds either way.
   - **Theme.** A dark accent, a light accent, a tinted page colour.
   - **Reordered and custom sections.** Move sections around, hide some, add a custom one.
4. Print (`Cmd/Ctrl+P` → Save as PDF) and check every page, especially the top and bottom padding on page 2 and beyond, and full-bleed backgrounds.

The gallery thumbnails use `SAMPLE_RESUME` from `src/lib/resume/sample.ts`, which is a convenient full-content case.

## Checklist

- [ ] `<id>.html` in this folder, id added to `TEMPLATE_IDS`
- [ ] `<title>` and `<meta name="description">` set
- [ ] One `data-sections="*"` container
- [ ] Slots left empty, separators drawn in CSS, `data-group` around contact blocks
- [ ] `data-section="personal"` on the header
- [ ] Laid out at 794px, own padding with `box-decoration-break: clone`
- [ ] Colours from `--accent` / `--page`
- [ ] No scripts, links or remote resources
- [ ] Checked with full, sparse and multi-page content, and in print
