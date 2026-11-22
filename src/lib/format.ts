import { IMAGE_BASE_URL } from "@/constants/constants";
import type { Sku, SkuColor } from "@/types/product";

export const formatPrice = (price: number) => {
  return `¥${price.toLocaleString("ja-JP")}`;
};

export const imageUrl = (path: string) => {
  return IMAGE_BASE_URL + path;
};

export const getColorLabel = (color: SkuColor | undefined) => {
  if (!color) return "";
  const en = color.localizations.find((l) => l.language_code === "en");
  return en?.name ?? color.name;
};

export const getSkuFirstImag = (sku: Sku | undefined) => {
  return sku?.images[0];
};
