"use client";

import { IconButton } from "@/app/_components/atoms/icons";
import Link from "next/link";
import { useState } from "react";

export default function DashboardNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen(isOpen => !isOpen);
  }
  return (<>
    <div className="flex sticky top-0 z-10 py-4 px-2 gap-x-4 items-center">
      <IconButton name="bars" size={32} onClick={handleIsOpen} className="p-0.5" />
      <h1 className="text-[20px] font-medium absolute left-1/2 transform -translate-x-1/2">Dashboard</h1>
    </div>

    <div className={`fixed top-0 left-0 z-40 h-screen py-4 px-2 overflow-y-auto transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"} w-64 bg-background-200`}>
      <IconButton name="angleLeft" size={32} onClick={handleIsOpen} className="p-0.5" />
      <nav className="text-background-950 text-button">
        <ul className="flex flex-col gap-2">
          <li>
            <Link className="block w-full p-2 hover:bg-background-300 rounded" href="/dashboard" onClick={handleIsOpen}>Home</Link>
          </li>
          <li>
            <Link className="block w-full p-2 hover:bg-background-300 rounded" href="/dashboard/products" onClick={handleIsOpen}>Productos</Link>
          </li>
          <li>
            <Link className="block w-full p-2 hover:bg-background-300 rounded" href="/dashboard/categories" onClick={handleIsOpen}>Categorias</Link>
          </li>
          <li>
            <Link className="block w-full p-2 hover:bg-background-300 rounded" href="/dashboard/images" onClick={handleIsOpen}>Imagenes</Link>
          </li>
        </ul>
      </nav>
    </div></>
  );
}