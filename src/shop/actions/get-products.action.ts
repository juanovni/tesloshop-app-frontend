import { BASE_URL, tesloApi } from "@/api/tesloApi";
import type { ProductsResponse } from "@/interfaces/products.interface";

interface Options {
  limit?: number | string;
  offset?: number | string;
  gender?: string;
  sizes?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}

export const getProductsAction = async (
  options: Options
): Promise<ProductsResponse> => {
  const { limit, offset, gender, sizes, minPrice, maxPrice, query } = options;

  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: { limit, offset, gender, sizes, minPrice, maxPrice, q: query },
  });
  const productWithImageUrl = data.products.map((product) => {
    return {
      ...product,
      images: product.images.map(
        (image) => `${BASE_URL}/api/files/product/${image}`
      ),
    };
  });

  return { ...data, products: productWithImageUrl };
};
