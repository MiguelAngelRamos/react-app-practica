import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from './Navbar';

describe('Navbar Component', () => {
    it('debe renderizar el logo correctamente', () => {
        render(<Navbar />);
        // Buscamos el texto "DevOps App"
        const logoElement = screen.getByText(/DevOps App/i);
        expect(logoElement).toBeInTheDocument();
    });

    it('debe tener los enlaces de navegación', () => {
        render(<Navbar />);
        expect(screen.getByText('Inicio')).toBeInTheDocument();
        expect(screen.getByText('Contacto')).toBeInTheDocument();
    });

    it('debe tener el rol de navegación', () => {
        render(<Navbar />);
        const nav = screen.getByRole('navigation');
        expect(nav).toBeInTheDocument();
    });
});