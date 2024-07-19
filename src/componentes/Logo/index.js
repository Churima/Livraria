import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const DivContainer = styled.div`
    display: flex;
    font-size:20px;
`
const ImgContainer = styled.img`
   margin-right:10px;
`

function Logo(){
    return(
        <DivContainer>
        <ImgContainer 
            src={logo} 
            alt='logo'
        />
        <p><strong>B</strong>ooks<strong>R</strong>eview</p>
       </DivContainer>
    )
}

export default Logo;