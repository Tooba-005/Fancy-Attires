# Fancy Attires

A responsive React + Vite storefront for a premium Pakistani clothing brand.

## Run locally

```bash
npm install
npm run dev
```

Create a production bundle with:

```bash
npm run build
```

## Store settings

Edit `src/config/store.ts` to change:

- WhatsApp number (international digits only, for example `923001234567`)
- Display phone number
- City
- Instagram, Facebook, and TikTok links

All WhatsApp order buttons use this single number and automatically prepare the relevant message.

## Add your dress images

1. Place optimized JPG or WebP files in the relevant folder under `public/images/`.
2. Update the matching image path:
   - Products and prices: `src/data/products.ts`
   - Hero slides: `src/data/heroSlides.ts`
   - Categories: `src/data/categories.ts`
   - About image: `src/pages/About.tsx`
3. Keep product photography close to a 3:4 portrait ratio for the best crop.

The project includes editable starter photography matched to every product name. If an image
cannot load, the site automatically displays `public/images/image-fallback.svg`.

To add another dress, copy a product object in `src/data/products.ts`, give it a unique `id`,
and update its content. The grids and sliders update automatically.

## Deploy to Vercel

1. Push the project to a Git provider.
2. Import the repository into Vercel.
3. Keep the detected framework preset as **Vite**.
4. Use `npm run build` as the build command and `dist` as the output directory.
5. Deploy.

`vercel.json` includes the rewrite required for direct visits to React Router pages such as
`/about` and `/contact`.
