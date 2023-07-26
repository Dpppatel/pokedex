import { render, fireEvent, cleanup, getByText} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import PokedexList from './Pokedex';
import Pokemons from './Pokemons';
import PokeDetails from './PokeDetails';
import { Pokedex } from 'pokeapi-js-wrapper';

const container = () => render(<App />);

jest.mock('pokeapi-js-wrapper');

afterEach(() => {
  cleanup();
  jest.mockRestore();
});
  let pokedexList, pokemonList, pokemonDetailsTable;

  beforeEach(()=>{
    Pokedex.mockReturnValue({
      getPokedexsList: jest.fn().mockResolvedValue({results:[{name:'national'}]}),

      getPokedexByName: jest.fn().mockResolvedValue({pokemon_entries: [{pokemon_species:{name:'bulbasaur', url:'https://pokeapi.co/api/v2/pokemon-species/1/'}}]}),
      
      getPokemonByName: jest.fn().mockResolvedValue({name:'bulbasaur', types:[{type:{name:'grass'}}], abilities:[{ability:{name:'overgrow'}}], stats:[{base_stat:45, stat:{name:'hp'}}], sprites:{other:{'official-artwork':{front_default:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'}}}})

    })
    let { getByText } = container();
    pokedexList = getByText('national');
    pokemonList = getByText('bulbasaur');
    pokemonDetailsTable = getByText('Types'); 
  })

describe('Integretion testing', () =>{

  
  test('To display correct elements', () =>{
    render(<App />)
    

    expect(pokedexList).toBeInTheDocument();
    expect(pokemonList).not.toBeInTheDocument();
    expect(pokemonDetailsTable).not.toBeInTheDocument();
  });

    test('one full function', () =>{
      fireEvent.click(pokedexList);
      expect(pokedexList).not.toBeInTheDocument();
      expect(pokemonList).toBeInTheDocument();
      expect(pokemonDetailsTable).not.toBeInTheDocument();
  });
})





