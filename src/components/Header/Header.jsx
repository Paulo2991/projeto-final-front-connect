import Logo from "../../assets/icones/logo.png";
import { Link } from "react-router-dom";
function Header()
{
   return (
     <>
       <header>
         <img src={Logo} alt="Imagem de um site " />
         <nav>
           <Link to="/doacao">Doação</Link>
           <Link to="/voluntariado">Voluntariado</Link>
           <Link to="/mentoria">Mentoria</Link>
           <Link to="/eventos">Eventos & Palestras</Link>
         </nav>
         <img src="https://avatars.githubusercontent.com/u/133176621?v=4" />
       </header>
     </>
   );                         
}

export default Header;