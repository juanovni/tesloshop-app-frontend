import { useParams } from "react-router";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductGrid } from "@/shop/components/ProductGrid";
import { useProducts } from "@/shop/hooks/useProducts";

export const GenderPage = () => {
  const { gender } = useParams();
  const { data: productsResponse } = useProducts();
  const _renderGenderLabel = (title: string) => {
    let label = "";
    switch (title) {
      case "men":
        label = "Hombres";
        break;
      case "women":
        label = "Mujeres";
        break;
      default:
        label = "Niños";
        break;
    }
    return label;
  };
  return (
    <>
      <CustomJumbotron
        tittle={`Productos para ${_renderGenderLabel(gender || "")}`}
      />
      <ProductGrid products={productsResponse?.products || []} />
      <CustomPagination totalPages={productsResponse?.pages || 1} />
    </>
  );
};
