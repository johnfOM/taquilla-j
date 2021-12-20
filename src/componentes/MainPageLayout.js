import React from 'react';
import Navbar from './Navbar';
import Title from './Title';

const MainPageLayout = ({ children }) => {
    return (
        <div>
            <Title 
                titulo="Cartelera"
                subtitulo="¿Estas buscando una pelicula o Actor?"
            />
            <Navbar />
            {children}
        </div>
    );
};

export default MainPageLayout;
