import React from "react";
import { Button } from "primereact/button";
import { Carousel } from 'primereact/carousel';
import "/public/assets/styles/Homepage.css"

const HomePage = () => {
    const banners = [
        {
            subtitulo: "Melhores ofertas personalizadas",
            titulo: "Queima de estoque Nike 🔥",
            descricao: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            imagem: `${import.meta.env.BASE_URL}assets/Img/White-Sneakers-PNG-Clipart 1.png`,
            detalhe: `${import.meta.env.BASE_URL}assets/Img/Ornament 11.png`
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/home-slide-1.jpeg`,
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/home-slide-2.jpeg`,
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/home-slide-3.jpeg`,
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/home-slide-4.jpeg`,
        },
        /*{
            imagem: `${import.meta.env.BASE_URL}assets/home-slide-5.jpeg`,
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/home-slide-6.jpeg`,
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/home-slide-7.jpeg`,
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/home-slide-8.jpeg`,
        },*/
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
            <div className="relative flex items-center">
                <div className="max-w-[500px]">
                    <p id="Ofertas" className="text-[16px] mb-[20px]">{banner.subtitulo}</p>
                    <p id="Estoque" className="text-[64px] max-w-[500px] mb-[20px]">{banner.titulo}</p>
                    <p className="text-[18px] max-w-[450px] mb-[20px]">{banner.descricao}</p>
                    <Button label="Ver Ofertas" className="w-[220px] h-[48px] bg-primary-force"/>
                </div>
                <div>
                    <img src={banner.imagem} alt="Tênis" className="absolute left-[300px] top-[190px] -translate-y-1/2 w-[60%]"/>
                    <img src={banner.detalhe} alt="Ornamento" className="absolute left-[850px] top-[60px] -translate-y-1/2 w-[10%]"/>
                </div>
            </div>
        );
    };

    return (
        <main className="m-[90px_104px_150px_104px] relative">
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
        </main>
    );
};

export default HomePage;