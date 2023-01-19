import { usePokemon } from '../../hooks/pokemon.js';
import Select from '../Select.js/Select.js';
import Search from '../Search/Search.js';

export default function Main() {
  const { pokemon, types, handleTypeChange, search, setSearch } = usePokemon();
  return (
    <>
      <Select types={types} handleTypeChange={handleTypeChange} />
      <Search search={search} setSearch={setSearch}/>
      <div>
        {pokemon.map((poke) => (
          <p key={poke._id}>{poke.pokemon} {poke.type_1} {poke.type_2}</p>
        ))}
      </div>
    </>
  );
}
