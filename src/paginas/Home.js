import React, { useState, useCallback } from 'react';
import ActorGrid from '../componentes/actor/ActorGrid';
import CustomRadio from '../componentes/CustomRadio';
import MainPageLayout from '../componentes/MainPageLayout';
import ShowGrid from '../componentes/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const renderResultado = (resultado) => {
    if(resultado && resultado.length === 0){
        return <div>No hay resultados</div>
    }

    if(resultado && resultado.length > 0){
        return resultado[0].show 
        ? ( <ShowGrid data={resultado} /> ) 
        : ( <ActorGrid data={resultado} /> )
    };

    return null;
};

const Home = () => {
    const [input, setInput] = useLastQuery();
    const [resultado, setResultado] = useState(null);
    const [buscarOptions, setBuscarOptions] = useState('shows');

    const isShowBuscar = buscarOptions === 'shows';
    
    const onSearch = () => {
        apiGet(`/search/${buscarOptions}?q=${input}`).then(result => {
            setResultado(result);
        });
            
    };

    const onInputChange = useCallback((e) => {
        setInput(e.target.value);
    }, [setInput]);
    
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSearch();
        }
    };

    const onRadioChange = useCallback((e) => {
        setBuscarOptions(e.target.value);
    }, []);
    
    return (
        <MainPageLayout>
            <SearchInput 
                type="text" 
                placeholder="Buscar algo"
                onKeyDown={onKeyDown} 
                onChange={onInputChange} 
                value={input}
            />

            <RadioInputsWrapper>
                <div>
                    <CustomRadio 
                        label="Peliculas"
                        id="muestra-buscar"
                        value="shows" 
                        checked={isShowBuscar}
                        onChange={onRadioChange} 
                    />
                </div>

                <div>
                    <CustomRadio 
                        label="Actor"
                        id="actor-buscar" 
                        value="people"
                        checked={!isShowBuscar}
                        onChange={onRadioChange} 
                    />
                </div>
            </RadioInputsWrapper>

            <SearchButtonWrapper>
                <button type='button' onClick={onSearch}>Buscar</button>
            </SearchButtonWrapper>
            {renderResultado(resultado)}
        </MainPageLayout>
    );
};

export default Home;
