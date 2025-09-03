import { useParams } from "react-router";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/products.mock";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductGrid } from "@/shop/components/ProductGrid";

export const GenderPage = () => {
  const { gender } = useParams();

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
      <ProductGrid products={products} />
      <CustomPagination totalPages={7} />
    </>
  );
};
