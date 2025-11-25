"use client";

import { api } from "@/trpc/react";
import Image from "next/image";
import { useState } from "react";

export function ListProducts() {
  const { data: products } = api.product.getList.useQuery();
  return <ul >
    {products?.map(product => (
      <li key={product.id} className="border-b last:border-0 py-2">
        <CardProduct {...product} />
      </li>
    ))}
  </ul>;
}

type CardProductProps = {
  id: number;
  name: string;
  description: string | null;
  imageUrl: string;
  price: number;
  inStock: boolean;
  category: { name: string; id: number; };
};

function CardProduct({
  id,
  name,
  description,
  price,
  imageUrl,
  inStock }: CardProductProps) {
  const [currentInStock, setCurrentInStock] = useState(inStock);
  const inStockMutation = api.product.setStockStatus.useMutation({
    onSuccess: () => {
      setCurrentInStock(!currentInStock);
    }
  });
  function toggleStock() {
    inStockMutation.mutate({ productId: id, inStock: !currentInStock });
  }

  return (
    <div className="rounded shadow p-2 flex md:flex-row gap-4 items-center">
      <Image src={imageUrl} alt={name} className="w-24 h-24 border object-cover rounded" width={128} height={128} />
      <div className="flex-1">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-lg font-semibold mt-2">${price.toFixed(2)}</p>
      </div>
      <button disabled={inStockMutation.isPending} onClick={toggleStock} className={"transition-colors ease-in-out border rounded p-2 disabled:opacity-50 " + (currentInStock ? "border-green-600 text-green-600 hover:bg-green-100" : "border-red-600 text-red-600 hover:bg-red-100")}>
        {currentInStock ? 'Disponible' : 'Agotado'}
      </button>
    </div>
  );
}