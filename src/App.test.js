import {Pokedex} from 'pokeapi-js-wrapper';
import { render, cleanup, screen, fireEvent, findByText } from '@testing-library/react';
import App from './Pokedex App Pages/PokedexApp';

jest.mock('pokeapi-js-wrapper');

describe('Integretion testing on full function', () => {

  beforeEach(() => {
    Pokedex.mockReturnValue({
      getPokedexsList: jest.fn().mockResolvedValue({ results: [{ name: 'national' }] }),

      getPokedexByName: jest.fn().mockResolvedValue({ pokemon_entries: [{ pokemon_species: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon-species/1/' } }] }),

      getPokemonByName: jest.fn().mockResolvedValue({ name: 'bulbasaur', types: [{ type: { name: 'grass' } }], abilities: [{ ability: { name: 'overgrow' } }], stats: [{ base_stat: 45, stat: { name: 'hp' } }], sprites: { other: { 'official-artwork': { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' } } } })

    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  //first step
  test('Displays the list of pokedexes', async () => {
    render(<App />)

    await screen.findByText('national');
  });

  //next step
  test('Displays the list of pokemons', async () => {
    render(<App />)

    fireEvent.click(await screen.findByText('national'));

    await screen.findByText('bulbasaur');
  });

  //Last step
  test('Displays the pokemon details', async () => {
    render(<App />);

    fireEvent.click(await screen.findByText('national'));
    fireEvent.click(await screen.findByText('bulbasaur'));

    await screen.findByText('bulbasaur');
    await screen.findByText('grass');
    await screen.findByText('overgrow');
  });


});

describe('Error testing', () => {
  
  beforeEach(() => {
    Pokedex.mockReturnValue({
      getPokedexsList: jest.fn().mockRejectedValue(new Error('screams')),
      getPokedexByName: jest.fn().mockRejectedValue(new Error('screams')),
      getPokemonByName: jest.fn().mockRejectedValue(new Error('screams'))
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test('testing errors', async () => {
    render(<App />)
    
    await screen.findByText('An Error Occured. Please Refresh');
  });
})