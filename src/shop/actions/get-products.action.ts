import { BASE_URL, tesloApi } from "@/api/tesloApi";
import type { ProductsResponse } from "@/interfaces/products.interface";

export const getProductsAction = async (): Promise<ProductsResponse> => {
  const { data } = await tesloApi.get<ProductsResponse>("/products");
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
