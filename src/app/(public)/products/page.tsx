"use client"
import { useSearchParams } from "next/navigation";
import { api } from "@/trpc/react";
import Image from "next/image";
import { Suspense } from "react";


export default function ProductsPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")
  const { data: products } = api.product.getList.useQuery();


  return (
    <main className="w-full flex flex-col items-center gap-6 p-4 min-h-screen">
      <h1 className="font-ethnocentric text-2xl">{category}</h1>
      <p className="text-background-800">{"Iluminación que te permite ver y ser visto."}</p>
      <Suspense fallback={<p>Cargando productos...</p>}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4">
          {products?.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
      </Suspense>
    </main>
  );
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

function ProductCard({ id, name, description, price, imageUrl, inStock }: CardProductProps) {
  return <div className="shadow-lg w-full relative">
    {
      !inStock &&
      <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-2 rounded tracking-widest uppercase">Agotado</span>
    }
    <Image src={imageUrl} alt="" className="w-full object-cover" width={192} height={192} />
    <div className="p-4">
      <p className="font-poppins font-normal text-background-500 text-sm">Ref: {id}</p>
      <p className="font-oxanium text-background-900 font-bold -mt-1">{name}</p>
      <p className="font-poppins font-normal text-background-700 text-sm">{description}</p>
      <p className={"font-oxanium text-primary font-bold text-3xl mt-6" + (inStock ? "" : " opacity-50")}>{formatPrice(price)}</p>
    </div>
  </div>
}
function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);
}