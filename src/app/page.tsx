import { api, HydrateClient } from "@/trpc/server";
import Link from "next/link";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex-1">
        <Link href="/exploradoras">Home</Link>
      </main>
    </HydrateClient>
  );
}