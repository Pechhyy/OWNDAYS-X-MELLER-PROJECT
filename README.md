# OWNDAYS x MELLER — Product Listing

A responsive product listing page for the **OWNDAYS x MELLER** sunglasses collaboration. Products are loaded from a REST API and displayed in a grid. Selecting a product opens a detail panel with color variants, specs, pricing, and a link to the store.

## Tech Stack

| Area          | Technology                            |
| ------------- | ------------------------------------- |
| Framework     | React 19                              |
| Language      | TypeScript (strict mode)              |
| Build tool    | Vite                                  |
| Styling       | Tailwind CSS v4                       |
| UI components | shadcn/ui (Button, Sheet) on Radix UI |
| Data fetching | TanStack Query + Axios                |
| Icons         | lucide-react                          |

## Features

- Product grid with loading skeletons and an error state with retry
- Product detail side panel (Sheet) with SKU / color switching and image gallery
- Price formatting, stock status, and frame specifications
- "How to Style Them" horizontally scrolling lifestyle gallery that links to products
- Sticky header that changes from transparent to brand color on scroll
- Mobile navigation menu
- Responsive layout with a desktop breakpoint at `1024px`
- Lazy-loaded images and cached API responses

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm (or yarn)

### Installation

```bash
git clone https://github.com/Pechhyy/OWNDAYS-X-MELLER-PROJECT.git
cd OWNDAYS-X-MELLER-PROJECT
npm install
```

### Environment Variables

Copy the example file and fill in the values:

```bash
cp .env.excemple .env
```

| Variable              | Description                                  |
| --------------------- | -------------------------------------------- |
| `VITE_API_BASE_URL`   | Base URL of the products API                 |
| `VITE_IMAGE_BASE_URL` | Base URL used to resolve product image paths |

### Run

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Scripts

| Command           | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start the development server                        |
| `npm run build`   | Type-check and create a production build in `dist/` |
| `npm run preview` | Preview the production build locally                |

## API

The app consumes a single endpoint:

```
GET {VITE_API_BASE_URL}/meller/products.json
```

The response contains the product list, each with its SKUs, colors, images, tags, materials, and pricing. SKUs and images are sorted by their `order` field on the client. Full typings are in `src/types/product.ts`.

## Project Structure

```
src/
├── api/            # Axios client and API request functions
├── components/     # Page sections (Header, ProductGrid, ProductModal, Footer, ...)
│   └── ui/         # shadcn/ui primitives (Button, Sheet)
├── constants/      # Endpoints, links, and image paths
├── hooks/          # Custom hooks (useProducts)
├── lib/            # Helpers (price formatting, image URLs, class merging)
├── types/          # TypeScript types for API data
├── App.tsx         # Page composition and shared state
├── main.tsx        # Entry point and React Query provider
└── index.css       # Tailwind setup, theme tokens, and font faces
public/
└── images/         # Logo, hero, and lifestyle photos
```

## Design Notes

- Brand color: `#F26A2F`
- Typography: Favorit, GT America Trial Cm, and Noto Sans JP
- Path alias: `@/` maps to `src/`

## Deployment

The project builds to static files and can be deployed to any static host (e.g. Vercel, Netlify).

```bash
npm run build
```

Set `VITE_API_BASE_URL` and `VITE_IMAGE_BASE_URL` in your hosting provider's environment settings before building.
