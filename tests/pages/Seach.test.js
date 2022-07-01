import {  render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Search } from '../../src/components/pages/Search';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));



describe('Pruebas en <Search />', () => {


    beforeEach(() => jest.clearAllMocks() );

    
    test('debe de mostrarse correactamente con valores por defecto', () => {
        
        const { container } =render(
            <MemoryRouter>
                <Search />
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();
        
    });


    test('debe de mostrar a Batman y el input con el valor del queryString', () => {
        
        render(
            <MemoryRouter initialEntries={['/search?q=rick']}>
                <Search />
            </MemoryRouter>
        );
        
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('rick');
        
       

      
        
    });

  


})