import Button from "@/app/_components/atoms/Button";
import Input from "@/app/_components/atoms/Input";
import TextArea from "@/app/_components/atoms/TextArea";

export default function ProductsPage() {
  return (
    <main className="p-4 space-y-6">
      <div className="shadow-md rounded p-4 flex flex-col gap-4">
        <Input label="Nombre" placeholder="Nuevo producto" />
        <TextArea label="Descripcion (opcional)" placeholder="caracteristicas" />
        <Input label="Precio" placeholder="99 999" type="number"/>
        <Button>Crear Producto</Button>
      </div>
    </main>
  );
}