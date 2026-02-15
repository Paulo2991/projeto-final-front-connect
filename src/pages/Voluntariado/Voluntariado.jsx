import s from "../CardsInfo.module.scss";
import reciclagem from "../../assets/imagens/reciclagem.png";
import tecnologia from "../../assets/imagens/tecnologia.png";
import esporte from "../../assets/imagens/esporte.png";
import InfoCard from "../../components/infoCard/InfoCard";

function Voluntariado()
{
     return (
       <>
         <main className={s.corpoPrincipal}>
           <section>
             <article>
               <InfoCard
                 img={reciclagem}
                 alt="Reciclagem"
                 subtitulo="Multirão De Reciclagem"
                 paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
                 textoBotao="Quero Doar"
               />
             </article>
           </section>
           <section>
             <article>
               <InfoCard
                 img={tecnologia}
                 alt="Ensinando Tecnologia Para As Pessoas"
                 subtitulo="Aulas de Tecnologia"
                 paragrafo="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
                 textoBotao="Quero Doar"
               />
             </article>
           </section>
           <section>
             <article>
               <InfoCard
                 img={esporte}
                 alt="Imagem de uma pessoa carregando uma caixa com alimentos"
                 subtitulo="Esporte e Palestras"
                 paragrafo="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
                 textoBotao="Quero Doar"
               />
             </article>
           </section>
         </main>
       </>
     );                       
}

export default Voluntariado;