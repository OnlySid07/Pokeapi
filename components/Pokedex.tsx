import { useState, useEffect } from "react";
type Props = {
  name: string;
};
type Poketype = {
  name: string | null;
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};
export function Pokemon({ name }: Props) {
  const [data, setData] = useState<Poketype | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fecthPokemon = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );
        if (!res) throw new Error(`Error`);
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.menssage);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fecthPokemon();
  }, [name]);

  if (loading) return <h1>Cargando...</h1>;
  if (!data) return <h1>No hay datos</h1>;
  return (
    <div className="bg-white w-full max-w-md shadow-xl text-center rounded-lg">
      <h1 className="font-bold">Nombre</h1>
      <h2>{data?.name}</h2>
      <img
        className="mx-auto w-1/2 items-center justify-center"
        src={data?.sprites.front_default}
        alt=""
      />
      <p>Tipo:{data?.types[0].type.name}</p>
    </div>
  );
}
