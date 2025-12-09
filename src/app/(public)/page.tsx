import { api, HydrateClient } from "@/trpc/server";
import Link from "next/link";
import Button from "../_components/atoms/Button";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="w-full flex flex-col items-center gap-6 p-4">
        <Card />
      </main>
    </HydrateClient>
  );
}

function Card() {
  return (
    <div
    className="shadow-2xl bg-cover w-full h-[378px] px-6 py-14 flex flex-col items-start justify-end gap-4"
      style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596687760372-4c0d266059a7?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <h2 className="font-ethnocentric text-background-50 text-lg">Iluminacion</h2>
      <p className="text-background-100">Lo mejor en iluminacion para tu moto </p>
      <Link  href="/exploradoras"><Button className="font-oxanium font-bold pointer-events-none" variant="primary">Conocer Productos</Button></Link>
       
    </div>
  );
} 