"use client";
import { useState } from "react";
import { api } from "@/trpc/react";

export function NewCategory() {
    const [name, setName] = useState("");
    const utils = api.useUtils();
    const createCategory = api.category.create.useMutation({
        onSuccess: async () => {
            await utils.category.invalidate();
            setName("");
        }
    });
    return (
        <div className="w-full max-w-xs">
            <form
                className="grid grid-cols-4 text-lg gap-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (name.length === 0) return;
                    createCategory.mutate({ name });
                }}
            >
                <label className=" col-span-4 text-blue-500 font-medium" htmlFor="">Nueva Categoria</label>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="col-span-3 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                />
                <button
                    type="submit"
                    className="col-span-1 p-2 bg-blue-500 text-white rounded disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                    disabled={createCategory.isPending}
                >
                    {createCategory.isPending ? "Añadiendo..." : "Añadir"}
                </button>
            </form>
        </div>
    )
}