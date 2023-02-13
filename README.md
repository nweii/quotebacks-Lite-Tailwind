# Quotebacks Lite (with Tailwind CSS)

A version of [Quotebacks](https://github.com/Blogger-Peer-Review/quotebacks) (Made by [Tom Critchlow](https://twitter.com/tomcritchlow) and [Toby Shorin](https://twitter.com/tobyshorin)) simplified for those who only want the cosmetic style of the Quoteback cards applied to `<blockquote>s`, and none of the other Quotebacks features. This version uses [Tailwind CSS](https://tailwindcss.com/) to apply the styling.

## Changes made to original
- Updated styling with Tailwind colors and classes — softer overall appearance.
- Automatic dark mode based on system appearance.
- Subtle shadows (which are darker in dark mode for added visibility) and card hover animation.
- Smaller favicon style. Even smaller favicon on very small window widths. Hidden favicon on the smallest widths.
- Replaced "Go to Text" label with → arrow to save space.

## How to use
1. Copy `quotebackLite.js` and `quoteCard.css` into your project.
2. In `quotebackLite.js`, update the `css` variable with the path to the stylesheet. 
```
const css = "{{path/to/quoteCard.css}}"
```
3. Add `quotebackLite.js` to your HTML `<head>` or the end of `<body>`:
 ```
 <script src="{{path/to/quotebackLite.js}}"></script>
 ```

## How to customize
To customize using Tailwind's CSS utility classes, refer to the [Tailwind  documentation](https://tailwindcss.com/docs/). Otherwise, you can use your own CSS stylesheet in #2 of the previous section.
1. Follow Tailwind's [installation steps](https://tailwindcss.com/docs/installation).
2. Run Tailwind in a local terminal. This will scan the files listed under `content:` in `tailwind.config.js` for Tailwind classes and build a condensed stylesheet at your output (`-o`) path: 
```
npx tailwindcss -i {{path/to/input.css}} -o {{path/to/quoteCard.css}} --minify --watch
```
(The CSS rules in `input.css` are only necessary if you plan to use border styles).  

3. Preview `index.html` in your browser to use the testing page. 
4. Experiment with & preview your Tailwind classes. You can do this two ways:
	-  If you prefer to work within the HTML document: 
		1. Write & modify Tailwind classes within the manual `<div class="quoteback">` inside the first section, which contains a sample quote.
		2. Copy your classes into the corresponding tags within `template.innerHTML` in `quotebackLite.js`, using the tag IDs to help match the tags. These will automatically apply to the sample quotes in the preview page's second section.
	- If you prefer to work directly in the Javascript file: 
		1. In `tailwind.config.js`, direct `content:` to `quotebackLite.js` instead of `index.html`. 
		2. Write & modify Tailwind classes within `template.innerHTML` in `quotebackLite.js`. 

## Original Copyright info

---

Copyright 2020 Tom Critchlow & Toby Shorin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
