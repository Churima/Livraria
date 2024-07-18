import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

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

const Resultado = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa(){
    const [LivroPesquisado, setLivroPesquisado] = useState([]);

    return(
        <PesquisaContainer>
            <Titulo>Pode começar por aqui!</Titulo>
            <Input
              placeholder='Escreva aqui o seu livro!'
              onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                setLivroPesquisado(resultadoPesquisa)
              }}
            />
            { LivroPesquisado.map( livro => (
                <Resultado>
                    <p>{livro.nome}</p>
                    <img src={livro.src} alt='img-livro'/>
                </Resultado>    
            ))}
        </PesquisaContainer>
    )

}

export default Pesquisa;