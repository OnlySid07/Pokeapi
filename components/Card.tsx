import { usePokeApi } from "@/hooks/usepokeapi";

type Props = {
  name: string;
};

export function Card({ name }: Props) {
  const data = usePokeApi({ name });

  if (!data) return <p>Cargando...</p>;
  return (
    <div className="">
      <h1 className="py-4">Nombre: {data.name}</h1>
      <img
        src={data?.sprites?.front_default}
        alt="Image of pokemon"
        className="mx-auto w-1/2"
      />
      <p className="pb-4">Tipo: {data.types[0].type.name}</p>
    </div>
  );
}
