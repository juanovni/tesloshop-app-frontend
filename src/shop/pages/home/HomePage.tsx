import { CustomPagination } from "@/components/custom/CustomPagination";
import { products } from "@/mocks/products.mock";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductGrid } from "@/shop/components/ProductGrid";

export const HomePage = () => {
  return (
    <div>
      <CustomJumbotron tittle="Todos los productos" />
      <ProductGrid products={products} />

      <CustomPagination totalPages={7} />
    </div>
  );
};
