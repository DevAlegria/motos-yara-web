import { CreateProduct } from "./CreateProduct";
import { ListProducts } from "./ListProducts";

export default function ProductsPage() {
  return (
    <main className="p-4 space-y-6">
      <CreateProduct />
      <ListProducts />
    </main>
  );
}