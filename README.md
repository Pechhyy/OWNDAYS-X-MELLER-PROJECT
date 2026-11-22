# OWNDAYS x MELLER - Product Listing

Vite + React + TypeScript + Tailwind CSS v4 + shadcn/ui (Button, Sheet) + TanStack Query.

## Run
```bash
npm install
npm run dev
```

## Structure
- `src/api/products.ts` - fetch `products.json`
- `src/hooks/useProducts.ts` - `useQuery` (sorts SKUs/images by `order`)
- `src/lib/format.ts` - price, image URL, color label helpers
- `src/types/product.ts` - types from PRODUCTS_README.md
- `src/components/` - Header, MobileMenu, Hero, ProductGrid/Card, ProductModal, StyleThem, Footer

## Still needed (assets from Figma)
- Logo (Header, MobileMenu, Footer), hero photo (`Hero.tsx`), 11 lifestyle photos (`styleItems` in `App.tsx`)

## Notes
- Added `HANDOFF_PROMPT.md` - paste it into any AI chat to continue building.
- Photos live in `public/images/` (hero.jpg, style-1.jpg, style-2.jpg). Add more and raise `STYLE_IMAGE_COUNT` in `src/lib/constants.ts`.
