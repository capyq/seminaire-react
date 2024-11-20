import { useEffect, useMemo, useState } from 'react';
import { getAll, Pokemon } from '../../API';

export const usePokemonFilter = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [filterPokemonText, setFilterPokemonText] = useState<string>('');
  const [pokemonFilter, setPokemonFilter] = useState<Pokemon[]>([]);
  useEffect(() => {
    getAll().then((pok) => setPokemons(pok));
  }, []);
  useEffect(() => {
    setPokemonFilter(pokemons.filter((p) => !filterPokemonText || p.name.indexOf(filterPokemonText) !== -1));
  }, [filterPokemonText, pokemons]);

  return { filterPokemonText, setFilterPokemonText, pokemonFilter };
};

export const usePokemonByType = (type: string[]) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [typeSafe, setTypeSafe] = useState<string[]>([]);

  useEffect(() => {
    setTypeSafe((oldTypeSafe) => {
      if (oldTypeSafe === type) {
        return oldTypeSafe;
      }
      return type;
    });
  }, [type]);

  useEffect(() => {
    getAll().then((pok) => setPokemons(pok));
  }, []);
  const pokemonFilter = useMemo(() => pokemons.filter((p) => p.type.includes(typeSafe[0])), [pokemons, typeSafe]);
  return { pokemonFilter };
};
