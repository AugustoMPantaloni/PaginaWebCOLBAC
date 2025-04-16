import React, { useState } from "react";
import CardsTeam from "../cards/CardsTeam";
import dataTeam from "../../../data/team";

const AboutProcess = () => {
const [currentIndex, setCurrentIndex] = useState(0);
const totalMembers = dataTeam.length;

const handleNext = () => {
setCurrentIndex((prevIndex) => (prevIndex + 1) % totalMembers);
};

const handlePrev = () => {
setCurrentIndex((prevIndex) => 
    (prevIndex - 1 + totalMembers) % totalMembers
);
};

const currentMember = dataTeam[currentIndex];

return (
    <div className="about-process" data-aos="fade-up">
        <div className="about-process__header">
            <h2 className="about-process__main-text">
                Una empresa joven con la solidez de la experiencia,<br />
                impulsada por el crecimiento constante.
            </h2>
        </div>
        <div className="about-process__content">
            <h2 className="about-process__design-title" data-aos="fade-up">
                NUESTRO <span className="about-process__purpose-highlight"> EQUIPO </span>
            </h2>
            <div className="about-process__cards">
                <CardsTeam
                key={currentIndex} 
                photo={currentMember.photo}
                name={currentMember.name}
                role={currentMember.role}
                bio={currentMember.bio}
                onNext={handleNext}
                onPrev={handlePrev}
                />
            </div>
        </div>
    </div>
);
};

export default AboutProcess;
