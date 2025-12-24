# Font Options for Header

To change the header font, you need to:

## Step 1: Add the font to `index.html`

Open `index.html` and find the `<link>` tag for fonts (around line 25). Replace or add fonts from the options below.

## Step 2: Update `tailwind.config.ts`

Open `tailwind.config.ts` and find the `fontFamily` section. Update the `'sans'` font to use your chosen font.

## Step 3: The header already uses `font-sans`, so it will automatically pick up the new font!

---

## Font Options

### Option 1: **Inter** (Current - slightly bolder weights)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```
In `tailwind.config.ts`: Keep `'sans': ['Inter', 'sans-serif']`

### Option 2: **Space Grotesk** (Modern, clean, slightly bolder)
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```
In `tailwind.config.ts`: Change to `'sans': ['Space Grotesk', 'sans-serif']`

### Option 3: **DM Sans** (Professional, readable)
```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```
In `tailwind.config.ts`: Change to `'sans': ['DM Sans', 'sans-serif']`

### Option 4: **Work Sans** (Clean, geometric)
```html
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```
In `tailwind.config.ts`: Change to `'sans': ['Work Sans', 'sans-serif']`

### Option 5: **Poppins** (Modern, friendly)
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```
In `tailwind.config.ts`: Change to `'sans': ['Poppins', 'sans-serif']`

### Option 6: **Plus Jakarta Sans** (Contemporary)
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```
In `tailwind.config.ts`: Change to `'sans': ['Plus Jakarta Sans', 'sans-serif']`

### Option 7: **Manrope** (Modern, rounded)
```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```
In `tailwind.config.ts`: Change to `'sans': ['Manrope', 'sans-serif']`

### Option 8: **Outfit** (Bold, contemporary)
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet">
```
In `tailwind.config.ts`: Change to `'sans': ['Outfit', 'sans-serif']`

---

## Quick Example:

**If you choose Space Grotesk:**

1. In `index.html` (line ~25), replace the font link with:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. In `tailwind.config.ts`, find the `extend.fontFamily` section and change:
```typescript
'sans': ['Space Grotesk', 'sans-serif'],
```

That's it! The header uses `font-sans`, so it will automatically use your new font.
