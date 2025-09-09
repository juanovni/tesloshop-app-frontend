// https://github.com/Klerith/bolt-product-editor
import { Navigate, useNavigate, useParams } from "react-router";
import { ProductForm } from "./ui/ProductForm";
import { useProduct } from "@/admin/hooks/useProduct";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import type { Product } from "@/interfaces/product.interface";
import { toast } from "sonner";

export const AdminProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: product,
    //handleSubmitForm,
    mutation,
  } = useProduct(id || "");

  const title = id === "new" ? "Nuevo producto" : "Editar producto";
  const subtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";

  const handleSubmitForm = async (
    productLike: Partial<Product> & { files?: File[] }
  ) => {
    const {} = await mutation.mutateAsync(productLike, {
      onSuccess(data) {
        toast.success("Producto actualizado con exito", {
          position: "top-right",
        });
        navigate(`/admin/products/${data.id}`);
      },
      onError(error) {
        console.log(error);
        toast.error("Error al actualizar el producto");
      },
    });
  };

  if (isError) {
    return <Navigate to="/admin/products" />;
  }

  if (isLoading) {
    return <CustomFullScreenLoading />;
  }

  if (!product) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <ProductForm
      title={title}
      subTitle={subtitle}
      product={product}
      onSubmit={handleSubmitForm}
      isPending={mutation.isPending}
    />
  );
};
