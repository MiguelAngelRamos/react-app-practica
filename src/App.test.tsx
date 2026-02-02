import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('debe renderizar el mensaje de bienvenida correctamente', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Bienvenido al Modo Oscuro/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  it('debe mostrar el mensaje sobre Jenkins y GitFlow', () => {
    render(<App />);
    const paragraph = screen.getByText(/desplegada con Jenkins y GitFlow/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('validación básica del pipeline', () => {
    expect(true).toBe(true);
  });
});