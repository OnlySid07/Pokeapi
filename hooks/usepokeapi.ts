import { useEffect, useState } from "react";

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

export function usePokeApi({ name }: Props) {
  const [data, setData] = useState<Poketype | null>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then((res) => res.json())
      .then((response: Poketype) => {
        setData(response);
      });
  }, [name]);

  return data;
}
