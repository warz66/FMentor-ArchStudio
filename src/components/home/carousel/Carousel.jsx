import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import Button from 'components/button/Button'
import './Carousel.css';
import slides from './ImgCarousel';



const Carousel = () => {

    SwiperCore.use([Pagination]);

    return (
        <section id="slider-hero">

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ 
                    clickable: true,
                    type: 'bullets',
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">0' + (index + 1) + '</span>';
                    },
                }}
            >
                {slides.map( slide => 
                    <SwiperSlide key={slide.name}>
                        <picture>
                            <source srcSet={slide.image.mobile} media="(max-width: 450px)" type="image/jpeg"/>
                            <source srcSet={slide.image.tablet} media="(max-width: 850px)" type="image/jpeg"/>
                            <img src={slide.image.desktop} alt={slide.name}/>
                        </picture>
                        <div className="carousel-hero-info">
                            <h1>{slide.title}</h1>
                            <p>{slide.text}</p>
                            <Button/>
                        </div>
                    </SwiperSlide>
                )}  
            </Swiper>
        </section>
    );
}

export default Carousel;