import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Cards from "../../cards/cards";
import CardsData from "../../../../data/servicios";

const ServicesSection = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(CardsData);
    }, []);

    return (
        <section className="services-section">
            <div className="services-section__header">
                <div className="services-section__highlight-wrapper">
                    <div className="services-section__highlight" />
                </div>
                <div className="services-section__text-wrapper">
                    <h2 className="services-section__title">
                    DEL “TENGO UNA IDEA” AL “¡ESTÁ ONLINE!”
                    </h2>
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={1}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1440: { slidesPerView: 5 }
                }}
                className="services-section__swiper"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <Cards
                            title={card.title}
                            description={card.description}
                            icono={card.icono}
                            backgroundColor={card.backgroundColor}
                            borderColor={card.borderColor}
                            shadowColor={card.shadowColor}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ServicesSection;
