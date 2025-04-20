const CardsWorks = ({ title, description, icon }) => {
    return (
        <div className="cards-works">
            <div className="cards-works__container">
                <img className="cards-works__icon" src={icon} alt={title} />
                <div className="cards-works__text-content">
                    <h1 className="cards-works__title">{title}</h1>
                    <p className="cards-works__description">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardsWorks;
