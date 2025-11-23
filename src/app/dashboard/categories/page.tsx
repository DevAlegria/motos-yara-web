import { ListCategories } from "./ListCategories";
import { NewCategory } from "./NewCategory";

export default function CategoriesPage() {
  return (

      <main className="p-4 space-y-6">
        <NewCategory />
        <ListCategories />
      </main>

  );
}
