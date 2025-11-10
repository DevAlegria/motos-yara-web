"use client";

import { BarsIcon, AngleLeftIcon } from "@/assets/icons";
import Link from "next/link";
import { useState } from "react";

export default function DashboardNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(isOpen => !isOpen);
  }
  return (<>
    <div className="flex sticky top-0 z-10 p-2 gap-x-4 shadow-md items-center">
      <button onClick={handleIsOpen} className="w-10 aspect-square" type="button">
        <BarsIcon />
      </button>
      <h1 className="text-title">Dashboard</h1>
    </div>

    <div className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} w-64 bg-gray-800`}>
      <button onClick={handleIsOpen} className="w-10 aspect-square mb-4 hover:bg-gray-700 rounded" type="button">
        <AngleLeftIcon />
      </button>
      <nav className="text-white">
        <ul className="flex flex-col gap-2">
          <li>
            <Link className="block w-full p-2 hover:bg-gray-700 rounded" href="/dashboard" onClick={handleIsOpen}>Home</Link>
          </li>
          <li>
            <Link className="block w-full p-2 hover:bg-gray-700 rounded" href="/dashboard/products" onClick={handleIsOpen}>Productos</Link>
          </li>
          <li>
            <Link className="block w-full p-2 hover:bg-gray-700 rounded" href="/dashboard/categories" onClick={handleIsOpen}>Categorias</Link>
          </li>
          <li>
            <Link className="block w-full p-2 hover:bg-gray-700 rounded" href="/dashboard/images" onClick={handleIsOpen}>Imagenes</Link>
          </li>
        </ul>
      </nav>
    </div></>
  );
}