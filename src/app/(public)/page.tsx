import { api, HydrateClient } from "@/trpc/server";
import Link from "next/link";
import Button from "../_components/atoms/Button";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="w-full flex flex-col items-center gap-6 p-4 h-screen">
        <Card />
      </main>
    </HydrateClient>
  );
}

function Card() {
  return (
    <div
    className="shadow-2xl bg-cover bg-center w-full min-h-[378px] h-full px-6 py-14 flex flex-col items-start justify-end gap-4 md:px-12 md:py-24 md:gap-10"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596687760372-4c0d266059a7?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <h2 className="font-ethnocentric text-background-50 text-lg md:text-3xl">Iluminacion</h2>
      <p className="text-background-100 md:text-xl md:-mt-4">Lo mejor en iluminacion para tu moto </p>
      <Link  href="/products?category=iluminacion"><Button className="font-oxanium font-bold pointer-events-none md:text-xl" variant="primary">Conocer Productos</Button></Link>
       
    </div>
  );
} 