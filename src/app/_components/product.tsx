"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { api } from "@/trpc/react";
import { supabase } from "@/lib/supabaseClient";

export function NewProduct() {
  const utils = api.useUtils();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const [categories] = api.category.getAll.useSuspenseQuery();

  const createProduct = api.product.create.useMutation({
    onSuccess: async () => {
      await utils.product.invalidate();
      setName("");
      setDescription("");
      setImageUrl("");
      setPrice("");
      setCategory("");
    },
  });
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile ?? null);
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return alert("Por favor selecciona una imagen.");

    try {
      setUploading(true);

      // Creamos un nombre único para evitar conflictos
      const filePath = "" + Date.now() + "_" + file.name;
      console.log("Subiendo archivo a:", file);
      const { data, error } = await supabase.storage
        .from("images") // 👈 Nombre del bucket
        .upload(filePath, file);

      if (error) throw error;

      // ✅ Obtener URL pública del archivo
      const { data: publicUrlData } = supabase.storage
        .from("images")
        .getPublicUrl(filePath);

      setImageUrl(publicUrlData.publicUrl);
      alert("✅ Imagen subida correctamente");
    } catch (error) {
      console.error("Error subiendo archivo:", error);
      alert("❌ Error al subir la imagen");
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createProduct.mutate({
            name,
            description,
            imageUrl,
            price: parseFloat(price) || 0,
            categoryId: parseInt(category),
          });
        }}
        className="flex flex-col gap-2 text-lg"
      >
        <h1 className="text-blue-500 font-medium">Nuevo producto</h1>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="col-span-3 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="col-span-3 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        />
        <input
          type="file"
          placeholder="Image URL"
          onChange={(e) => console.log("File upload not implemented")}
          className="col-span-3 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        />
        {/* Image upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-md 
                     file:border-0 file:text-sm file:font-semibold 
                     file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
          onClick={handleUpload}
        >
          {uploading ? "Subiendo..." : "Subir Imagen"}
        </button>
        {imageUrl && (
          <div className="mt-6">
            <p className="text-sm text-gray-500 mb-2">Vista previa:</p>
            <img
              src={imageUrl}
              alt="Imagen subida"
              className="w-full rounded-lg border"
            />
            <p className="text-xs mt-2 break-all text-gray-500">{imageUrl}</p>
          </div>
        )}

        <input
          type="number"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="col-span-3 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        />
        <select onChange={(e) => setCategory(e.target.value)} className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" name="categories" id="categories">
          {categories.map((category) => <option key={category.name} value={category.id}>{category.name}</option>)}
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 p-2"
          disabled={createProduct.isPending}
        >
          {createProduct.isPending ? "Submitting..." : "Add product"}
        </button>
      </form>
    </div>
  );
}
