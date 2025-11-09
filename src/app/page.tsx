import { api, HydrateClient } from "@/trpc/server";
import Link from "next/link";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex-1 flex flex-col items-center justify-center gap-4">
        <Link className=" text-[#090909]
        py-[0.7em]
        px-[1.7em]
        text-[18px]
        rounded-md
        bg-[#e8e8e8]
        border border-[#e8e8e8]
        transition-all
        duration-300
        shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]
        hover:border-white
        active:shadow-[4px_4px_12px_#c5c5c5,-4px_-4px_12px_#ffffff]" href="/exploradoras">Ver Exploradoras</Link>
      </main>
    </HydrateClient>
  );
}