import Card from "../_components/Card";
import exploradoras from "@/data/exploradoras.json";
export default async function Exploradoras() {
  return (<>
    <h1 className="text-3xl font-bold mb-4 text-center py-2">Exploradoras</h1>
    <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {exploradoras.map((item) => <Card key={item.id} {...item} />)}
    </main>
  </>

  );
}
