"use client";
import { api } from "@/trpc/react";

export function ListCategories() {
  const [ categories ] =  api.category.getAll.useSuspenseQuery();
console.log(categories);
  return <ul className="shadow-md rounded p-4">
    {categories && categories.map(category => (
      <li key={category.id} className="border-b last:border-0 py-2">
        {category.name}
        {category.description && <p className="text-sm text-gray-600">{category.description}</p>}
        {category.children && <ul className="pl-4 mt-2">
          {category.children.map(subcategory => (
            <li key={subcategory.id} className="border-b last:border-0 py-1">
              {subcategory.name}
              {subcategory.description && <p className="text-sm text-gray-600">{subcategory.description}</p>}
            </li>
          ))}
        </ul>}
      </li>
    ))}
  </ul>;
}