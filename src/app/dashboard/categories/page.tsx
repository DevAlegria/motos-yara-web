import { ListCategories } from "./ListCategories";
import { NewCategory } from "./NewCategory";
import { api, HydrateClient } from "@/trpc/server";

export default function CategoriesPage() {
  void api.category.getAll.prefetch();

  return (
    <HydrateClient>
      <main className="p-4 space-y-6">
        <NewCategory />
        <ListCategories />
      </main>
    </HydrateClient>
  );
}
