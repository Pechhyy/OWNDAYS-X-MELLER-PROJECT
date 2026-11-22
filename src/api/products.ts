import { apiClient } from "@/api/client";
import { PRODUCTS_PATH } from "@/constants/endpoints";
import type { ProductsResponse } from "@/types/product";

export async function fetchProducts(): Promise<ProductsResponse> {
  const response = await apiClient.get<ProductsResponse>(PRODUCTS_PATH);

  const json = response.data;

  if (!json.success) {
    throw new Error(json.message || "Failed to load products");
  }

  return json;
}
