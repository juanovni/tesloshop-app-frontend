import { useMutation, useQuery } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";
import type { Product } from "@/interfaces/product.interface";
import { createUpdateProductAction } from "../actions/create-update-product.action";

export const useProduct = (id: string) => {
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutos
    // enabled: !!id
  });

  //  Mutacion
  // Mas de una mutacion 
  // const productMutation =
  const mutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess: (productLike: Product) => {
      console.log("Todo salio bien", productLike);
    },
  });
  // Methods - Esto se cambia por una mutacion
  /* const handleSubmitForm = async (productLike: Partial<Product>) => {
    console.log({ productLike });
  }; */

  return {
    ...query,
    mutation,
    // handleSubmitForm,
  };
};
