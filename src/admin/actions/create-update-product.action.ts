import { BASE_URL, tesloApi } from "@/api/tesloApi";
import type { Product } from "@/interfaces/product.interface";
import { sleep } from "@/lib/sleep";

export const createUpdateProductAction = async (
  productLike: Partial<Product>
): Promise<Product> => {
  await sleep(1500);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, user, images = [], ...rest } = productLike; // Una destructuracion de toda la data rest es todo lo demas

  const isCreating = id === "new"; // COn ese id sabemos si el es para craear o actualizar

  // Nos aseguramnos que sean number porque asi lor equiere el backend
  rest.stock = Number(rest.stock || 0);
  rest.price = Number(rest.price || 0);

  // se pude decir url apuntar y metodo llamar porque los cuerpos son los mismos
  const { data } = await tesloApi<Product>({
    url: isCreating ? "/products" : `/products/${id}`,
    method: isCreating ? "POST" : "PATCH",
    data: rest,
  });

  return {
    ...data,
    images: data.images.map((image) => {
      if (image.includes("http")) return image;
      return `${BASE_URL}/api/files/product/${image}`;
    }),
  };
};
