import { CustomPagination } from "@/components/custom/CustomPagination";
import { Button } from "@/components/ui/button";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";

export const HomePage = () => {
  return (
    <div>
      <CustomJumbotron tittle="Todos los productos" />
      <Button>Hola soy un boton</Button>

      <CustomPagination totalPages={7} />
    </div>
  );
};
