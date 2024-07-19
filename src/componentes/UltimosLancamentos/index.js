import styled from 'styled-components';
import { livros } from './dadosUltimosLancamentos';
import { Titulo } from '../Titulo';

const UltimosLancamentosContainer = styled.section`
    background-image: linear-gradient(180deg, #000 5%, #EBECEE 30%);
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;  
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimoLancamentos(){
  
    return(
        <UltimosLancamentosContainer>
            <Titulo cor='#EB9B00' tamanhoFonte='36px' alinhamento='Left'>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt='imagem-lancamento'/>
                ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimoLancamentos;