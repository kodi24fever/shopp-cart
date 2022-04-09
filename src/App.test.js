import { render, screen } from '@testing-library/react';
import App from './App';

//Other imports
import data from './data';

console.log(data);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
