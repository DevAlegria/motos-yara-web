"use client";
import Button from "@/app/_components/atoms/Button";
import Input from "@/app/_components/atoms/Input";
import { InputImage } from "@/app/_components/atoms/InputImage";
import TextArea from "@/app/_components/atoms/TextArea";
import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { SelectCategory } from "../_components/SelectCategory";
import { api } from "@/trpc/react";

const steps =
  ["Subiendo Imagen", "Creando producto"]

const initialProduct = {
  name: "",
  description: "",
  price: "",
  category: ""
}
export function CreateProduct() {
  const [file, setFile] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState(-1);
  const [product, setProduct] = useState(initialProduct);
  const utils = api.useUtils();
  const createProduct = api.product.create.useMutation({
    onSuccess: async () => {
      await utils.category.invalidate();
      setProduct(initialProduct);
      setCurrentStep(-1);
    }
  });
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  }
  async function uploadFile() {
    if (!file) return undefined;
    setCurrentStep(0);

    try {
      const filePath = file.name;
      const { data, error } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage
        .from("images")
        .getPublicUrl(filePath);
      return publicUrlData.publicUrl;
    } catch (e) {
      alert("❌ Error al subir la imagen");
      console.error("Error subiendo archivo:", e);
    }
  }
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if(!product.name || !product.price || !product.category) return
    const imageUrl = await uploadFile();
    
    if (!imageUrl) return alert("La imagen es requerida");
    setCurrentStep(1);

    createProduct.mutate({ ...product,
      price:Number(product.price), 
      categoryId: Number(product.category), 
      imageUrl });
  }

  return <>
    <form className="shadow-md rounded p-4 flex flex-col gap-4" onSubmit={onSubmit}>
      <Input name="name" onChange={handleChange} value={product.name} label="Nombre" placeholder="Nuevo producto" />
      <TextArea name="description" onChange={handleChange} value={product.description} label="Descripcion (opcional)" placeholder="caracteristicas" />
      <InputImage onSelect={(file) => setFile(file)} />
      <Input name="price" onChange={handleChange} value={product.price} label="Precio" placeholder="99 999" type="number" />
      <SelectCategory name="category" onChange={handleChange} value={product.category} viewChildren={true} />
      <Button type="submit" disabled={!product.name || !product.price || !product.category}>Crear Producto</Button>
    </form>
    {currentStep >= 0 && <p className="absolute bottom-2 right-2 p-2 flex gap-2">
      <span className="w-7 pt-0.5 text-center text-button aspect-square rounded-full bg-background-300">{currentStep + 1}</span>
      {steps[currentStep]}
    </p>}
  </>

}