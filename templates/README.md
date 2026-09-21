# Page templates

Every `.html` file in this folder is a template in the page builder's **Templates** picker. When someone picks one, the file is read and turned into editable blocks (Section, Columns, Heading, Text, Image, Button, Divider, Spacer). Nothing else from the file reaches the page: no CSS, no scripts, no classes.

So a template is not styled HTML. It is the page's **structure**, written with ordinary tags plus a few `data-*` options. The builder supplies the look.

> Everything in `public/` is served as-is, so this file is reachable at `/templates/README.md`. That is harmless, but don't put anything private in here.

## Adding a template

1. Create `<id>.html` in this folder, e.g. `bakery.html`.
2. Add `"bakery"` to `TEMPLATE_IDS` in `src/lib/puck/templates.ts`. The order there is the order in the picker.
3. Open a page in the editor, click **Templates**, and check the thumbnail and the result (see [Checking a template](#checking-a-template)).

## File skeleton

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Bakery</title>
  <meta name="description" content="One sentence shown under the name in the picker.">
</head>
<body>
  <!-- blocks, top to bottom -->
</body>
</html>
```

- `<title>` is the template's name in the picker. `<meta name="description">` is the line under it.
- Save as UTF-8. Curly apostrophes and quotes are fine.

## What each element becomes

Options are `data-*` attributes. A missing or unrecognised value falls back to the block's default.

| Write this | You get | Options |
| --- | --- | --- |
| `<section>` | **Section**, a coloured band that groups blocks | `data-background="none\|soft\|tint\|dark"` or a colour like `#f3e5cf`, `data-color="#rrggbb"` (text), `data-font="sans\|serif\|condensed"`, `data-spacing="sm\|md\|lg"` |
| `<h1>` … `<h6>` | **Heading**. `h4`–`h6` become the smallest size | `data-align="left\|center\|right"`, `data-color`, `data-size="display"` (a poster-sized title) |
| `<p>`, `<blockquote>` | Paragraph of a **Text** block | `data-align="left\|center\|right"`, `data-color` |
| `<ul>`, `<ol>` | Bullet list in a **Text** block | `data-color`. Numbering is not kept |
| `<a href="…">Label</a>` | **Button** | `data-variant="solid\|outline"`, `data-align`, `data-page="slug"`, `data-background`, `data-color` |
| `<img alt="…">` | **Image** placeholder | `data-width="20-100"`, `data-align`, `data-corners="rounded\|square"` |
| `<hr>` | **Divider** | `data-spacing="sm\|md\|lg"`, `data-color` |
| `<div data-spacer="sm\|md\|lg\|xl"></div>` | **Spacer** | |
| `<div data-columns>` with 2–3 child `<div>`s | **Columns**, one child per column | |
| `<div data-menu>` with a heading and a list | **Food menu**: one menu category with its dishes and prices (see [Menus](#menus)) | `data-look="tab\|label\|box\|line"`, `data-prices="right\|dots"`, `data-accent="#rrggbb"` |
| `div`, `header`, `main`, `article`… | nothing: they only group what's inside | |

Things worth knowing:

- **Text blocks are built from runs.** Consecutive `<p>`/`<blockquote>` elements share one Text block. A list ends the block, so anything after it starts a new one. Paragraphs with different `data-align` also start a new block. Text placed directly in a `<div>` or `<section>` (not inside `<p>`, a heading or a list item) is ignored.
- **Lists can't be aligned.** Only paragraphs and headings take `data-align`.
- **Inline formatting is dropped.** Bold, italics and links inside a paragraph become plain text. Put links in a Button.
- **Buttons** are `<a>` tags that sit directly in a section, column or wrapper. An `<a>` inside a `<p>`, heading or list item is just text.
  - `data-page="contact"` links to the site's page with that address, if it has one. It wins over `href`. Only use addresses most sites have, such as `contact` or `about`.
  - `href` is used only when it starts with `https://`, `http://`, `mailto:` or `tel:`. Anything else, including `href="#"`, leaves the button unlinked for the person to set. Never put a made-up address (`example.com`, a fake email) here: it would ship to visitors if they forget to change it.
- **Images have no picture.** The editor only accepts pictures uploaded through it, so `src` is ignored and nothing is fetched. Use `alt` to say what to upload, e.g. `alt="A photo of your team at work"`. An image that is never replaced draws nothing on the published page.
- **Section backgrounds become colours.** `data-background` takes `none`, `soft`, `tint` or `dark`, which mean no fill, `#f4f6f8`, `#ccfbf1` and `#0f172a`, or a colour of your own such as `#f3e5cf`. In the editor the person sees an ordinary colour they can change with the colour picker; there is no preset dropdown any more. Text on a dark fill turns light by itself.
- **Colours are `#rrggbb` (or `#rgb`) and nothing else.** That goes for every `data-color`, `data-background` and `data-accent`: a colour name, `rgb(…)` or a typo is dropped and the block keeps its default. `data-color` is the text colour, and on a Section it reaches every block inside; `data-background` on a Button is its fill.
- **A Section's `data-font` restyles everything in it.** `sans` is the page's own font, `serif` and `condensed` are two display faces. Headings, dish names and prices follow it; descriptions stay in the page font so small print stays readable. Set it on every Section of a template, because a Section doesn't inherit from the one before it.
- **`data-size="display"`** makes a heading the largest size, still an `<h1>` for readers and search engines. Use it once, for the page title.
- **Section and Columns nest one way.** A Section can hold Columns; nothing holds a Section. A `<section>` inside another `<section>` is flattened into its parent. A column holds Heading, Text, Image, Button, Divider, Spacer and Food menu only: nested `data-columns` is dropped. Only the first three children of a `data-columns` element count.
- **Skipped entirely:** `script`, `style`, `form`, `iframe`, `object`, `embed`, `svg`, `canvas`, `template`, `noscript`. So are `class`, `id` and `style` attributes.

## Menus

A menu category is one **Food menu** block: a heading, an optional line about it, and its dishes. In the editor the person changes the dishes in the sidebar (name, price, description; add, remove, reorder), so a template only has to show the layout.

```html
<div data-menu data-look="box" data-prices="dots" data-accent="#262626">
  <h2>Starters</h2>
  <p>All starters come with bread.</p>
  <ul>
    <li>Greek salad <span data-price>5.00</span> <span data-description>Tomato, cucumber, olives and feta.</span></li>
    <li>Soup of the day <span data-price>4.50</span></li>
  </ul>
</div>
```

- The **first heading** is the category, the **first `<p>`** is the line about it, and every **`<li>`** is a dish.
- In a dish, `[data-price]` is the price, `[data-description]` is the small print under it, and whatever text is left is the name. A price is free text: `$5.00`, `5`, `£4.50` and `Market price` all work.
- `data-look` styles the heading: `tab` a rounded tag, `label` a square one, `box` a bordered box with a filled bar across the top, `line` an underline. `data-prices="dots"` draws a dotted line from the name to the price; without it the price sits at the right. `data-accent` colours the tag, bar or underline.
- A menu goes in a Section or a column like any other block, and takes its text colour and font from the Section around it.
- **Menu templates ship with sample dishes and prices**, because a menu with nothing on it doesn't read as one. The restaurant's own details (name, address, phone, opening hours, website) are still bracketed placeholders.

## Limits

Anything over these is cut, and empty blocks (a Heading or Button with no text, a Text with nothing in it) are dropped.

| Thing | Limit |
| --- | --- |
| Blocks per template | **60**, counting every block inside Sections and Columns. Stay under about 55 |
| Heading text | 120 characters |
| Button label | 40 characters |
| Paragraph | 1,000 characters, 6 per Text block |
| List item | 200 characters, 8 per Text block |
| Image `alt` | 200 characters |
| Dishes in a menu category | 40 |
| Dish name, price, description | 100, 20 and 300 characters |
| Menu category heading, line about it | 120 and 300 characters |

Count blocks like this: each Section, Columns, Heading, Text run, Image, Button, Divider, Spacer and Food menu is one, however many dishes the menu holds. `launch.html` has 53.

## Writing a good template

- **One `<h1>`**, at the top. Everything below it is `h2` for sections and `h3` for items inside them.
- **Give it a shape**: a strong top (heading, a line of text, a button), the body in Sections or Columns, and a closing call to action.
- **Alternate backgrounds** (`none`, `soft`, `tint`) so sections read as separate bands. Use `dark` at most once.
- **One primary button per group**, `solid`. Secondary ones are `outline`.
- **Real, specific copy.** No lorem ipsum and no "Welcome to our website". Write what a good page of this kind says.
- **Never invent facts.** Names, prices, addresses, phone numbers, hours, statistics and testimonials get a bracketed placeholder: `[Company name]`, `[opening hours]`, `[Price]`. Generic sample content that isn't a fact (dish names, feature descriptions) is fine. The one exception is the dishes and prices on a menu template (see [Menus](#menus)).
- **Columns of three read best.** Keep each column to a heading and a short paragraph or list, so they stay even on desktop and stack cleanly on mobile.

## Checking a template

1. Open any page in the site editor and click **Templates**.
2. Look at the thumbnail. Grey blocks are stand-ins for pictures; they only appear in the picker. Blocks stacked where you meant them side by side mean the wrapper is missing `data-columns`.
3. Use the template, then check the editor's outline for anything missing. Missing headings or buttons usually mean empty text or a limit above.
4. Click **Preview** and look at it at desktop and phone width.
5. Try it with a page that already has content, in both "Add to the end" and "Replace this page".

The mapping itself lives in `src/lib/puck/htmlBlueprint.ts`; the blocks are built by `src/lib/puck/generate.ts`, which is also where the limits above are set.
