import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/products";
import type { Product } from "@/types/product";

const sortProducts = (products: Product[]): Product[] => {
  return products.map((item) => ({
    ...item,
    skus: [...item.skus]
      .sort((a, b) => a.order - b.order)
      .map((sku) => ({
        ...sku,
        images: [...sku.images].sort((a, b) => a.order - b.order),
      })),
  }));
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    select: (response) => sortProducts(response.data),
  });
};
