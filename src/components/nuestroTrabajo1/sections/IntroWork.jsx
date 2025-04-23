import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectCreative } from 'swiper/modules';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import CardsWorks from "../cards/CardsWork";
import dataProceso from "../../../data/proceso";

import logo from "../../../assets/logos/logo1.png"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative'; 

const IntroWork = () => {
    const summaryRef = useRef(null);
    const scrollToSummary = () => {
        summaryRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='intro-work'>
            <h1 className='intro-work__title' data-aos="fade-down">NUESTRO PROCESO DE TRABAJO, PASO A PASO...</h1>
            <h2 className='intro-work__sub-text' data-aos="fade-right">Cada proyecto es único, pero todos siguen un camino pensado para garantizar calidad, eficiencia y resultados increíbles. Te contamos cómo trabajamos:</h2>
            
            <div className='intro-work__container-cards' data-aos="fade-up">
                <Swiper
                    direction={'vertical'}
                    slidesPerView={1}
                    mousewheel={{
                        releaseOnEdges: true, 
                        thresholdDelta: 30, 
                        forceToAxis: true
                    }}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                            translate: [0, '-20%', -150],
                            rotate: [0, 0, -2],
                            opacity: 0.5,
                            scale: 0.9
                        },
                        next: {
                            translate: [0, '25%', -100],
                            opacity: 0.7,
                            scale: 0.95
                        },
                    }}
                    modules={[Mousewheel, Pagination, EffectCreative]} 
                    className="my-vertical-swiper"
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}"><i></i></span>`;
                        }
                    }}
                    style={{ height: '100vh' }}
                >
                    {dataProceso.map((data, index) => (
                        <SwiperSlide key={data.title}>
                            <CardsWorks
                                icon={data.icon}
                                title={data.title}
                                description={data.description}
                                stepNumber={index + 1}
                            />
                            {index === dataProceso.length - 1 && (
                                <button 
                                    onClick={scrollToSummary}
                                    className="view-summary-btn"
                                >
                                    Ver resumen completo ▼
                                </button>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className='intro-work__nosotros-container'>
                <img className='intro-work__nosotros-logo' src={logo}/>
                <h2 className='intro-work__nosotros-text'>Descubrí quiénes somos y por qué hacemos lo que hacemos.</h2>
                <Link to="/SobreNosotros" className='intro-work__nosotros-link'>Click aca</Link>
            </div>
            <div className="process-summary" data-aos="fade-up" ref={summaryRef}>
                <h2 className="summary-title">Proceso Completo</h2>
                <div className="summary-grid">
                    {dataProceso.map((data, index) => (
                        <div className="process-step" key={`summary-${data.title}`}>
                            <div className="step-number">{index + 1}</div>
                            <div className='step-container-icon'>
                                <img className="step-icon" src={data.icon}/>
                            </div>
                            <h3 className="step-title">{data.title}</h3>
                            <p className="step-description">{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IntroWork;