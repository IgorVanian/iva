import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hi :)', () => {
  render(<App />);
  const linkElement = screen.getByText("Hi :)");
  expect(linkElement).toBeInTheDocument();
});
