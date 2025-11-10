import { NewCategory } from "../_components/newCategory";
import { NewProduct } from "../_components/product";

export default function Admin() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>
      <p>Welcome to the admin dashboard.</p>
      <NewCategory />
      <NewProduct />
    </div>
  );
}