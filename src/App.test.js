import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

beforeAll(()=>{
  const fetchData = jest.fn();
  const setSelecitons = jest.fn();
  const selecitons = jest.fn();
  let data = [];
})
