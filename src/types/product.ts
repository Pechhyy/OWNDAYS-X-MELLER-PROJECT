// Types based on PRODUCTS_README.md (GET /meller/products.json)

export type ColorLocalization = {
  language_code: "ja" | "en" | "zh_cn" | "zh_tw" | "th" | "vi" | string
  name: string
}

export type SkuColor = {
  id: number
  code: string
  name: string
  path: string | null // swatch image path (when no hex_code)
  hex_code: string | null
  localizations: ColorLocalization[]
}

export type SkuImage = {
  id: number
  path: string
  path_webp: string | null
  order: number
}

export type Sku = {
  id: number
  code: string
  jan_code: string
  try_on_code: string
  order: number
  size: string | null
  is_default_display: number
  is_online_exclusive: boolean
  colors: SkuColor[]
  images: SkuImage[]
  sizes: unknown[]
}

export type ProductInfo = {
  id: number
  code: string
  name: string | null
  model_name: string
  lens_width: string
  lens_height: string
  bridge_width: string
  temple_depth: string
  frame_weight: string
  is_made_in_japan: boolean
  is_free: boolean
  size_frame: string
  size_range: string
}

export type SellingSetting = {
  id: number
  country_code: string
  price: number // tax included
  raw_price: number // before tax
  code: string | null
  is_published: boolean
  status: number
  in_stock: number // 0 = out of stock
}

export type Product = {
  product: ProductInfo
  product_line: { id: number; name: string; slug: string }
  product_type: { id: number; name: string }
  localization: {
    id: number
    language_code: string
    name: string | null
    description: string
  }
  nose_pad_type: { id: number; name: string }
  frame_types: { id: number; code: string }[]
  materials: { id: number; name: string | null }[]
  tags: { id: number; name: string; icon: string | null }[]
  selling_setting: SellingSetting
  skus: Sku[]
}

export type ProductsResponse = {
  success: boolean
  message: string
  total: number
  not_found: string[]
  data: Product[]
}
