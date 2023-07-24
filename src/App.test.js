import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import PokedexList from "./Pokedex";
import Pokemons from "./Pokemons";
import PokeDetails from "./PokeDetails";


beforeEach(()=>{
  const fetchData = jest.fn();
  const setSelecitons = jest.fn();
  const selecitons = jest.fn();
  let data = [];
})


afterEach(() => {
  cleanup();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = document.title;
  expect(linkElement).toBe('Pokedex');
});


