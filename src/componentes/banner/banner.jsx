import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StyleDiv from './style';

export default function Banner({ banner1, banner2 }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Altere o valor conforme necessário
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Habilita o autoplay
    autoplaySpeed: 30000, // Define o tempo de intervalo entre os slides (em milissegundos)
  };

  return (
    <StyleDiv>
      <Slider {...settings}>
        <div>
          <div className="text-container">
            <h1>Landing Page Profissional</h1>
            <p>Modelos de sites especialmente desenhados para atender às necessidades de escritórios de advocacia e profissionais do direito. Aprimore a presença online do seu negócio com uma apresentação de excelência na web.</p>
          </div>
          <div className="image-container">
            <img src={banner1} alt="banner 1" />
          </div>
        </div>
        <div>
          <div className="text-container">
            <h1>Landing Page especializada </h1>
            <p>
Explorando a Era Digital: Sites Essenciais para Advogados</p>
          </div>
          <div className="image-container">
            <img src={banner2} alt="banner 2" />
          </div>
        </div>
      </Slider>
    </StyleDiv>
  );
}
