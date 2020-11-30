/*import Swiper, { Navigation, Pagination } from 'swiper/react';
import 'swiper/swiper.css';*/
import SwiperCore, { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import './Carousel.css';
import slides from './ImgCarousel';



const Carousel = () => {
    SwiperCore.use([Pagination]);
    /*const swiper = Swiper.use([Navigation, Pagination]);
    new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
    })*/

    return (
        <div id="carousel-hero">

            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                navigation
                pagination={{ 
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';
                    },
                }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
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
                        </div>
                    </SwiperSlide>
                )}  
            </Swiper>
            {/*<div className="swiper-container">
                <div className="swiper-wrapper">
                    {slides.map(slide => 
                        <div className="swiper-slide" key={slide.name}>
                            <picture>
                                <source srcSet={slide.image.mobile} media="(max-width: 450px)" type="image/jpeg"/>
                                <source srcSet={slide.image.tablet} media="(max-width: 850px)" type="image/jpeg"/>
                                <img src={slide.image.desktop} alt={slide.name}/>
                            </picture>
                        </div> 
                    )}  
                </div>
                <div className="swiper-pagination"></div>
            </div>*/}
        </div>
    );
}

export default Carousel;