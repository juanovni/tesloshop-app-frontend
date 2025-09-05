import { BASE_URL, tesloApi } from "@/api/tesloApi";
import type { ProductsResponse } from "@/interfaces/products.interface";

interface Options {
  limit?: number | string;
  offset?: number | string;
}

export const getProductsAction = async (
  options: Options
): Promise<ProductsResponse> => {
  const { limit, offset } = options;

  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: { limit, offset },
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
