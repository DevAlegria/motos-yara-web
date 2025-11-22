"use client";

import Button from "@/app/_components/atoms/Button";
import { IconButton } from "@/app/_components/atoms/icons";
import Input from "@/app/_components/atoms/Input";
import TextArea from "@/app/_components/atoms/TextArea";
import { api } from "@/trpc/react";
import { useState } from "react";

type CategoryProps = {
  name: string,
  description?: string
}

interface NewCategoryProps extends CategoryProps {
  parentId: number | undefined;
}

const initialCategory: NewCategoryProps = {
  name: "",
  description: "",
  parentId: undefined
}

export function NewCategory() {
  const [category, setCategory] = useState<NewCategoryProps>(initialCategory);
  const [categories] = api.category.getAll.useSuspenseQuery();
  const utils = api.useUtils();
  const createCategory = api.category.create.useMutation({
    onSuccess: async () => {
      await utils.category.invalidate();
      setCategory(initialCategory);
    }
  });

  function handleCategory(name: string, value: string | number | undefined) {
    setCategory((prevCategory) => ({ ...prevCategory, [name]: value }));
  }

  return <form className="shadow-md rounded p-4 flex flex-col gap-4"
    onSubmit={(e) => {
      e.preventDefault();
      if (category.name.length === 0) return;
      createCategory.mutate(category)
    }}>
    <Input
      name="name"
      label="Nombre"
      placeholder="Nueva categoria"
      type="text"
      value={category.name}
      onChange={(e) => handleCategory(e.target.name, e.target.value)} />
    {Number.isInteger(category.parentId) ? <div className="flex gap-4">
      <select onChange={(e) => handleCategory("parentId", Number(e.target.value))} className="flex-1" name="parentCategory" id="parentCategory" defaultValue={0} value={category.parentId ?? 0 }>
        <option value="0" >No Seleccionado</option>
        {categories && categories.map(cat => {
          if (cat.id === 1) return null;
          return <option key={cat.id} value={cat.id}>{cat.name}</option>
        })}
      </select>
      <IconButton name="close" onClick={() => handleCategory("parentId", undefined)} />
    </div> : <Button onClick={() => handleCategory("parentId", 0)} variant="tertiary" className="self-end">
      Seleccionar categoria principal
    </Button>}
    <TextArea
      name="description"
      label="Descripcion (opcional)"
      placeholder="Descripcion de uso"
      value={category.description}
      onChange={(e) => handleCategory(e.target.name, e.target.value)} />
    <Button
      type="submit"
      disabled={createCategory.isPending || category.name.length === 0}>
      {createCategory.isPending ? "Creando..." : "Crear Categoria"}
    </Button>
  </form>
}

