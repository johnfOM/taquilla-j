import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ titulo, subtitulo }) => {
    
    return (
        <TitleWrapper>
           <h1>{titulo}</h1>
           <p>{subtitulo}</p> 
        </TitleWrapper>
    );
};

export default memo(Title);
