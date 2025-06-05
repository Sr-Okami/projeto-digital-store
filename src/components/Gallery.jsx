import React from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import "../styles/index.css"

const banners = [
  {
    subtitulo: "Melhores ofertas personalizadas",
    titulo: "Queima de estoque Nike 🔥",
    descricao: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    imagem: `${import.meta.env.BASE_URL}assets/Img/White-Sneakers-PNG-Clipart 1.png`,
    detalhe: `${import.meta.env.BASE_URL}assets/Img/Ornament 11.png`
  },
  {
    imagem: `${import.meta.env.BASE_URL}assets/Img/home-slide-1.jpeg`,
  },
  {
    imagem: `${import.meta.env.BASE_URL}assets/Img/home-slide-2.jpeg`,
  },
  {
    imagem: `${import.meta.env.BASE_URL}assets/Img/home-slide-3.jpeg`,
  },
  {
    imagem: `${import.meta.env.BASE_URL}assets/Img/home-slide-4.jpeg`,
  },
];

const bannerTemplate = (banner) => {
  if (!banner.subtitulo && !banner.titulo && !banner.descricao) {
    return (
      <div className="flex justify-center items-center h-[400px] relative">
        <img src={banner.imagem} alt="Banner" className="max-h-[350px] object-contain" />
      </div>
    );
  }

  return (
    <div className="relative flex items-center ">
      <div className="max-w-[500px]">
        <p className="text-[16px] mb-[20px] text-warning">{banner.subtitulo}</p>
        <p className="text-[64px] max-w-[500px] mb-[20px] font-bold">{banner.titulo}</p>
        <p className="text-[18px] max-w-[450px] mb-[20px]">{banner.descricao}</p>
        <Button label="Ver Ofertas" className="w-[220px] h-[48px] bg-primary text-white rounded-md"/>
      </div>
      <div>
        <img src={banner.imagem} alt="Tênis" className="absolute left-[450px] top-[190px] -translate-y-1/2 w-[60%]"/>
        {banner.detalhe && (
          <img src={banner.detalhe} alt="Ornamento" className="absolute left-[1000px] top-[60px] -translate-y-1/2 w-[10%]"/>
        )}
      </div>
    </div>
  );
};

const Gallery = () => (
  <div className="justify-center">
    <Carousel 
      value={banners.slice(0, 4)}
      itemTemplate={bannerTemplate}
      numVisible={1}
      numScroll={1}
      autoplayInterval={5000}
      circular
      showIndicators
      showNavigators={false}
    /> 
  </div>
);

export default Gallery;