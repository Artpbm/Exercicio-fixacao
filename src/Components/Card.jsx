import style from './Card.module.css'

export const Card = ({name, image, ki, maxKi, race, gender, description, affiliation}) => {
    return(
    <>
    <h5 className={style.tittle}>{name}</h5>
    <img src={image} alt={name} className={style.imgstyle} />

    <p>Raça: {race}</p>
    <p>Genêro: {gender}</p>
    <p>Ki: {ki}</p>
    <p>Ki máximo: {maxKi}</p>
    <p>Afiliação: {affiliation}</p>
    <p>Descrição {description}</p>
    </>
    )
}