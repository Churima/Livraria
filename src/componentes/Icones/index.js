import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];
const UlContainer = styled.ul`
    display: flex;
    align-items: center;
`
const LiContainer = styled.li`
    margin-right: 40px;
    width: 25px;
`

function Icones(){
    return(
        <UlContainer>
        { icones.map( (icone) => (
          <LiContainer><img src={icone} alt='icone'/></LiContainer>
        ))}   
       </UlContainer>
    )
}

export default Icones;