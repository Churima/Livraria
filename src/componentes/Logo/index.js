import logo from '../../imagens/logo.svg';

function Logo(){
    return(
        <div className='logo'>
        <img src={logo} alt='logo'/>
        <p><strong>B</strong>ook <strong>R</strong>eview</p>
       </div>
    )
}

export default Logo;