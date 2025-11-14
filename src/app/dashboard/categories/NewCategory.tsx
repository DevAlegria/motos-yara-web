"use client";

import Button from "@/app/_components/atoms/Button";
import Input from "@/app/_components/atoms/Input";
import TextArea from "@/app/_components/atoms/TextArea";
import { api } from "@/trpc/react";
import { useState } from "react";

export function NewCategory() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const utils = api.useUtils();
  const createCategory = api.category.create.useMutation({
    onSuccess: async () => {
      await utils.category.invalidate();
      setName("");
      setDescription("");
    }
  });
  return <form className="shadow-md rounded p-4 flex flex-col gap-4"
    onSubmit={(e) => {
      e.preventDefault();
      if (name.length === 0) return;
      createCategory.mutate({ name, description })
    }}>
    <Input
      label="Nombre"
      placeholder="Nueva categoria"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)} />
    <TextArea
      label="Descripcion (opcional)"
      placeholder="Descripcion de uso"
      value={description}
      onChange={(e) => setDescription(e.target.value)} />
    <Button
      type="submit"
      disabled={createCategory.isPending || name.length === 0}>
      {createCategory.isPending ? "Creando..." : "Crear Categoria"}
    </Button>
  </form>
}