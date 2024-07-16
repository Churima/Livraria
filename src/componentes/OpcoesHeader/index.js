import styled from 'styled-components';

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha estante'];
const UlContainer = styled.ul`
    display: flex;
`
const LiContainer = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

function OpcoesHeader(){

    return(
        <UlContainer>
        { textoOpcoes.map( (texto) => (
          <LiContainer><p>{texto}</p></LiContainer>
        ))}
       </UlContainer>
    )
}

export default OpcoesHeader;