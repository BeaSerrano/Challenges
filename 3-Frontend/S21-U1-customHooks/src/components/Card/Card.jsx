import './Card.css'

const Card = ({ name, image, title }) => {
    return (
        <>
            <h2>{title}</h2>
            <div className='cardCharacter'>
                <h3>{name}</h3>
                <img src={image} alt={name} width='150'/>
            </div>
        </>
    )
}

export default Card