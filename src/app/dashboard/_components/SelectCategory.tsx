"use client";
import { api } from "@/trpc/react";

export function SelectCategory({name, value, onChange, viewChildren = false}: {name?: string, value?: string, onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void ,viewChildren?: boolean}) {
  const { data: categories } = api.category.getAll.useQuery();

  return <select className="flex-1" name={name} id={name} value={value} onChange={onChange}>
    <option value="0">No Seleccionado</option>

      {!viewChildren &&
        categories?.map((cat) => {
          if (cat.id === 1) return null;
          return (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          );
        })}

      {viewChildren &&
        categories?.map((cat) => {
          if (cat.id === 1) return null;

          // Tiene hijos?
          if (cat.children && cat.children.length > 0) {
            return (
              <optgroup key={cat.id} label={cat.name}>
                {cat.children.map((child) => (
                  <option key={child.id} value={child.id}>
                    {child.name}
                  </option>
                ))}
              </optgroup>
            );
          }

          // No tiene hijos → opción normal
          return (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          );
        })}
  </select>
}