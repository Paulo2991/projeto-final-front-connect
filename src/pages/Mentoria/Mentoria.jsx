import mentoria from "../../assets/imagens/mentoria.png";
import experiencia from "../../assets/imagens/experiencia.png";
import acompanhamento from "../../assets/imagens/acompanhamento.png";
import s from "../CardsInfo.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";

function Mentoria()
{
    return (
      <>
        <main className={s.corpoPrincipal}>
          <section>
            <article>
              <InfoCard
                img={mentoria}
                alt="Mentoria De Carreira e Emprego"
                subtitulo="Mentoria carreira e emprego"
                paragrafo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
                textoBotao="Quero Doar"
              />
            </article>
          </section>
          <section>
            <article>
              <InfoCard
                img={experiencia}
                alt="Compartilhe Experiência"
                subtitulo="Compartilhe Experiência"
                paragrafo="Oriente jovens e profissionais iniciantes em sua área."
                textoBotao="Quero Doar"
              />
            </article>
          </section>
          <section>
            <article>
              <InfoCard
                img={acompanhamento}
                alt="Imagem de uma pessoa carregando uma caixa com alimentos"
                subtitulo="Acompanhamento"
                paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento."
                textoBotao="Quero Doar"
              />
            </article>
          </section>
        </main>
      </>
    );                        
}

export default Mentoria;