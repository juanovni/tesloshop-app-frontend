// https://github.com/Klerith/bolt-product-editor
import { Navigate, useParams } from "react-router";
import { ProductForm } from "./ui/ProductForm";
import { useProduct } from "@/admin/hooks/useProduct";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";

export const AdminProductPage = () => {
  const { id } = useParams();

  const {
    isLoading,
    isError,
    data: product,
    handleSubmitForm,
  } = useProduct(id || "");

  const title = id === "new" ? "Nuevo producto" : "Editar producto";
  const subtitle =
    id === "new"
      ? "Aquí puedes crear un nuevo producto."
      : "Aquí puedes editar el producto.";

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
    />
  );
};
