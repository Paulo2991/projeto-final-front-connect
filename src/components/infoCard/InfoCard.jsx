import s from "./InforCard.module.scss";

function InfoCard(props)
{
    return (
       <>
            <article className={s.article}>
                <img src={props.img} alt={props.alt} />
                <h2>{props.subtitulo}</h2>
                <p>{props.paragrafo}</p>
                <p>{props.subParagrafo}</p>
                <button>{props.textoBotao}</button>
            </article>
       </>                     
    )                        
}

export default InfoCard;