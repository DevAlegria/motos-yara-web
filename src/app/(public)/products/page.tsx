import { Suspense } from "react";
import { ListProducts } from "./ListProducts";
export default function ProductsPage() {
  return (
    <main className="w-full flex flex-col items-center gap-6 p-4 min-h-screen">
      <Suspense fallback={<p>Cargando productos...</p>}>
        <ListProducts />
      </Suspense>
    </main>
  );
}
