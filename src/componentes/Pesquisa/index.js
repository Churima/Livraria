import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`


function Pesquisa(){
    const [textoDigitado, setTextoDigitado] = useState('')

    return(
        <PesquisaContainer>
            <Titulo>Pode começar por aqui!</Titulo>
            <Input
              placeholder='Escreva aqui o seu livro!'
              onBlur={evento => setTextoDigitado(evento.target.value)}
            />
            <p>{textoDigitado}</p>
        </PesquisaContainer>
    )

}

export default Pesquisa;