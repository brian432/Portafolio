import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";


const Portafolio = ({ active }) => {
  const enlaces = [
    {
      "proyecto": "https://brian432.github.io/Nasa-App/",
      "codigo": "https://github.com/brian432/Nasa-App"
    },
    {
      "proyecto": "https://brian432.github.io/Movies-App/",
      "codigo": "https://github.com/brian432/Movies-App"
    },
    {
      "proyecto": "https://brian432.github.io/api-countries/",
      "codigo": "https://github.com/brian432/api-countries"
    },
    {
      "proyecto": "https://brian432.github.io/job-listings/",
      "codigo": "https://github.com/brian432/job-listings"
    },
    {
      "proyecto": "https://brian432.github.io/ip-address-tracker/",
      "codigo": "https://github.com/brian432/ip-address-tracker"
    },
    {
      "proyecto": "https://brian432.github.io/rock-paper-scissors/",
      "codigo": "https://github.com/brian432/rock-paper-scissors"
    }
  ];
  return (
    <div id="portafolio" className={!active ? 'section-active padding' : 'center padding'}>
      <h1 className="div-izquierdo neon">Portafolio</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper div-derecho" style={{ display: `${!active ? '' : 'none'}` }}
      >
        {
          enlaces.map((elemento, indice) =>
            <SwiperSlide key={indice} className={`cuadros cuadro${indice} filter`}>
              <a href={elemento.proyecto} target="_blank" rel="noopener noreferrer"><button className="btn hover">Ver proyecto</button></a>
              <a href={elemento.codigo} target="_blank" rel="noopener noreferrer"><button className="btn hover">Ver codigo</button></a>
            </SwiperSlide>
          )
        }

      </Swiper>
    </div>
  )
}

export default Portafolio;

