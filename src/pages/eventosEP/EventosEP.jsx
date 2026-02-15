import jovens from "../../assets/imagens/jovens.png";
import tecnologia from "../../assets/imagens/transformação.png";
import emprego from "../../assets/imagens/emprego.png";
import s from "../CardsInfo.module.scss";
import InfoCard from "../../components/infoCard/InfoCard";

function EventosEP()
{
  return (
    <>
      <main className={s.corpoPrincipal}>
        <section>
          <article>
            <InfoCard
              img={jovens}
              alt="Empoderando os jovens para o futuro"
              subtitulo="Empoderando Jovens para o Futuro"
              paragrafo="Atividade: Palestra motivacional sobre liderança jovem e transformação social.
              Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades."
              textoBotao="Quero Doar"
            />
          </article>
        </section>
        <section>
          <article>
            <InfoCard
              img={tecnologia}
              alt="Imagem de uma pessoa carregando uma caixa com alimentos"
              subtitulo="Tecnologia que Transforma"
              paragrafo="Atividade: Workshop de introdução à programação e inovação digital. 
              Impacto: Preparar jovens para o mercado de trabalho através da tecnologia."
              textoBotao="Quero Doar"
            />
          </article>
        </section>
        <section>
          <article>
            <InfoCard
              img={emprego}
              alt="Imagem de uma pessoa carregando uma caixa com alimentos"
              subtitulo="Carreira e Primeiro Emprego"
              paragrafo="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.
              Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
              textoBotao="Quero Doar"
            />
          </article>
        </section>
      </main>
    </>
  );                          
}

export default EventosEP;