import InfoCard from "../../components/infoCard/InfoCard";
import igFamilia from "../../assets/imagens/igFamilia.png";
import s from "../CardsInfo.module.scss";
import institutoJovem from "../../assets/imagens/institutoJovem.png";
import projetoEscola from "../../assets/imagens/projetoEscola.png";

function Doacao()
{
   return (
     <>
       <main className={s.corpoPrincipal}>
         <section>
           
           <article>
             <InfoCard
               img={igFamilia}
               alt="Imagem de uma pessoa carregando caixa com alimentos"
               subtitulo="Uma grande família"
               paragrafo="Contribua com alimentos não perecíveis e ajdue familías em situação de vulnerabilidade."
               textoBotao="Quero Doar"
             />
           </article>
         </section>
         <section>
           <article>
             <InfoCard
               img={institutoJovem}
               alt="Imagem de uma pessoa carregando uma caixa com alimentos"
               subtitulo="Instituto grande familia"
               paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
               textoBotao="Quero Doar"
             />
           </article>
         </section>
         <section>
           <article>
             <InfoCard
               img={projetoEscola}
               alt="Imagem de uma pessoa carregando uma caixa com alimentos"
               subtitulo="Projeto Futuro na Escola"
               paragrafo="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
               textoBotao="Quero Doar"
             />
           </article>
         </section>
       </main>
     </>
   );                         
}

export default Doacao;