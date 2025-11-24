"use client";
import Card from "@/app/_components/Card";
import { api } from "@/trpc/react";

export function ListProducts() {
  const { data: products } = api.product.getAll.useQuery();
  return <ul className="shadow-md rounded p-4">
    {products?.map(product => (
      <li key={product.id} className="border-b last:border-0 py-2">
        <Card title={product.name} description={product.description ?? ""} price={product.price} imageUrl={product.images?.[0]?.url ?? ""} />
      </li>
    ))}
  </ul>;
}