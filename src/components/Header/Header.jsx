import s from "./Header.module.scss";
import Logo from "../../assets/icones/logo.png";
import { Link } from "react-router-dom";

function Header()
{
   return (
     <>
       <header className={s.header}>
        <Link to="/">
            <img src={Logo} className={s.imgLogo} alt="Imagem de logo do projeto connect representada 
            por uma mão segurando um coração, simbolizando apoio." />
         </Link>
         <nav className={s.nav}>
           <Link className={s.link} to="/doacao">Doação</Link>
           <Link className={s.link} to="/voluntariado">Voluntariado</Link>
           <Link className={s.link} to="/mentoria">Mentoria</Link>
           <Link className={s.link} to="/eventos">Eventos e Palestras</Link>
         </nav>
         <img className={s.imgUser} src="https://github.com/Paulo2991.png" />
       </header>
       <nav className={s.navUser}>
           <Link to="/usuario">Paulo Vaz</Link>
           <Link>Voluntariado</Link>
           <Link>Configurações da conta</Link>
           <Link>Sair</Link>
       </nav>
     </>
   );                         
}

export default Header;