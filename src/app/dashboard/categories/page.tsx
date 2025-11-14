import { NewCategory } from "./NewCategory";


export default function CategoriesPage() {
  return (
    <main className="p-4 space-y-6">
      <NewCategory />
      <div className="shadow-md rounded p-4">
       <ul>
        <li>No selecionado</li>
       </ul>
      </div>
    </main>
  );
}
