
const CardsTeam  = ({ photo, name, role, bio, onPrev, onNext }) => {
    return (
        <div className="team-card">
            <div className="team-card__photo">
                <img className="team-card__photo-size" src={photo} alt={`Foto de ${name}`} />
            </div>
            <div className="team-card__content">
                <h2 className="team-card__name">{name}</h2>
                <h3 className="team-card__role">{role}</h3>               
                <p className="team-card__bio">{bio}</p>
                <div className="team-card__nav">
                    <button className="team-card__button" onClick={onPrev}>&#8592;</button> 
                    <button className="team-card__button" onClick={onNext}>&#8594;</button> 
                </div>
            </div>
        </div>
    )
}

export default CardsTeam;

