# Tailwind CSS Print Styles

> Adds variant to TailwindCSS to handle printable styles

## Installation

Add this plugin to your project

```bash
# Install using pnpm
pnpm install --save-dev tailwindcss-print-styles

# Install using npm
npm install --save-dev tailwindcss-print-styles

# Install using yarn
yarn install -D tailwindcss-print-styles
```

## Usage

```js
// tailwind.config.js

{
  ...
  plugins: {
    require('tailwindcss-print-styles')
  },

  variants: {
    margin: ['print'], // add the print variant to enable where needed
    display: ['print']
  }
}
```


## Example

```html
<div class="print:hidden" />
<div class="print:mb-0" />
```
