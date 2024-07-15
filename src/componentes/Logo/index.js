import logo from '../../imagens/logo.svg';
import './estilo.css';

function Logo(){
    return(
        <div className='logo'>
        <img 
            src={logo} 
            alt='logo'
            className='logo-img'
        />
        <p><strong>B</strong>ook<strong>R</strong>eview</p>
       </div>
    )
}

export default Logo;