"use client";
import { useState } from "react";
import { Card } from "@/components/Card";

export default function Home() {
  const [name, setName] = useState("");
  const [selected, setSelected] = useState("");

  const handleSearch = () => {
    if (!selected.trim()) return;
    setName(selected.trim().toLowerCase());
    setSelected("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-100 p-4">
      {/*TITULO*/}
      <div className="rounded-2xl shadow-2xl w-full text-center bg-white p-6 max-w-md">
        <h1 className="font-bold text-4xl text-blue-400">PokeAPI</h1>
      </div>
      <div className="rounded-2xl shadow-xl bg-white p-6 w-full text-center max-w-md">
        <h2 className="">Nombre del pokemon</h2>
        <input
          className="w-full text-center py-2 mb-4 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500  "
          type="text"
          placeholder="Nombre"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button
          onClick={handleSearch}
          className={`w-full max-w-md rounded-lg font-semibold py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 transition  `}
        >
          Buscar
        </button>
      </div>
      {!name ? (
        <p className="bg-white rounded-lg w-full max-w-md text-center p-6">
          Busca informacion de tu pokemon
        </p>
      ) : (
        <div className="bg-white rounded-lg w-full max-w-md text-center">
          {<Card name={name} />}
        </div>
      )}
    </main>
  );
}
