import s from "./PaginaInicial.module.scss"
import banner from "../../assets/imagens/banner.png";
function PaginaInicial()
{
     return (
       <main className={s.main}>
         <section className={s.info}>
           <h1>Projetos Sociais que transformam</h1>
           <p>
             Conectamos sua empresa com projetos sociais impactantes. Juntos,
             criamos mudanças reais na comunidade.
           </p>
           <section className={s.infoDados}>
             <article>
               <h2>500+</h2>
               <p>Empresas Voluntarias</p>
             </article>
             <article>
               <h2>1.2+</h2>
               <p>Projetos Realizados</p>
             </article>
             <article>
               <h2>50K+</h2>
               <p>Vidas Impactadas</p>
             </article>
           </section>
         </section>
         <img src={banner} alt="" />
       </main>
     );
                         
}

export default PaginaInicial;
