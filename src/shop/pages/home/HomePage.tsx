import { useProducts } from "@/shop/hooks/useProducts";
import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductGrid } from "@/shop/components/ProductGrid";

export const HomePage = () => {
  const { data: productsResponse } = useProducts();
  return (
    <div>
      <CustomJumbotron tittle="Todos los productos" />

      <ProductGrid products={productsResponse?.products || []} />

      <CustomPagination totalPages={7} />
    </div>
  );
};
