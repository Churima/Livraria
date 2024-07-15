import './estilo.css'
import Perfil from '../../imagens/perfil.svg';
import Sacola from '../../imagens/sacola.svg';

const icones = [Perfil, Sacola];

function Icones(){
    return(
        <ul className='icones'>
        { icones.map( (img) => (
          <li className='icone'><img src={img}/></li>
        ))}   
       </ul>
    )
}

export default Icones;