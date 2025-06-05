import React from "react";
import { Button } from "primereact/button";
import { Carousel } from 'primereact/carousel';
import "../styles/Homepage.css"
import ProductCard from "../components/ProductCard";

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
        /*{
            imagem: `${import.meta.env.BASE_URL}assets/Img/home-slide-5.jpeg`,
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/Img/home-slide-6.jpeg`,
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/Img/home-slide-7.jpeg`,
        },
        {
            imagem: `${import.meta.env.BASE_URL}assets/Img/home-slide-8.jpeg`,
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
            <div className="relative flex items-center ">
                <div className="max-w-[500px]">
                    <p id="Ofertas" className="text-[16px] mb-[20px]">{banner.subtitulo}</p>
                    <p id="Estoque" className="text-[64px] max-w-[500px] mb-[20px]">{banner.titulo}</p>
                    <p className="text-[18px] max-w-[450px] mb-[20px]">{banner.descricao}</p>
                    <Button label="Ver Ofertas" className="w-[220px] h-[48px] bg-primary text-white rounded-md"/>
                </div>
                <div>
                    <img src={banner.imagem} alt="Tênis" className="absolute left-[450px] top-[190px] -translate-y-1/2 w-[60%]"/>
                    <img src={banner.detalhe} alt="Ornamento" className="absolute left-[1000px] top-[60px] -translate-y-1/2 w-[10%]"/>
                </div>
            </div>
        );
    };

    return (
        //Banner principal
        <main className="max-w-6xl mx-auto px-4 py-12 relative">
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
            {/*Coleções em destaque com 3 imagens*/}
            <div>
                <h3 className="font-bold text-dark-gray-2 text-2xl mr-auto">
                    Coleções em destaque
                </h3>
                <div className="flex gap-10 justify-center">
                    <img src={`${import.meta.env.BASE_URL}assets/Img/collection-1.png`} alt="Coleção" className=" h-[200px] shadow-[0px_11px_17px_0px_#C92071] cursor-pointer" />
                    <img src={`${import.meta.env.BASE_URL}assets/Img/collection-2.png`} alt="Coleção" className=" h-[200px] shadow-[0px_11px_17px_0px_#C92071] cursor-pointer" />
                    <img src={`${import.meta.env.BASE_URL}assets/Img/collection-3.png`} alt="Coleção" className=" h-[200px] shadow-[0px_11px_17px_0px_#C92071] cursor-pointer" />
                </div>
            </div>
            {/*Coleções em destaque com 5 imagens*/}
            <div className="justify-center flex">
                <h3 className="font-bold text-dark-gray-2 text-2xl  mt-8">Coleções em destaque</h3>
            </div>
            <div className="mt-5 flex gap-20 justify-center">
                    <div className="flex flex-col items-center">
                        <img src="../public/assets/Vector1.svg" alt="Camisa"/>
                        <span className="text-dark-gray-2 text-1xl font-bold mt-3.5">Camisetas</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="../public/assets/Vector2.svg" alt="Calças"/>
                        <span className="text-dark-gray-2 text-1xl font-bold mt-3.5">Calças</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="h-20 max-w-7x1" src="../public/assets/Vector5.svg" alt="Bonés"/>
                        <span className="text-dark-gray-2 text-1xl font-bold">Bonés</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="../public/assets/Vector4.svg" alt="Headphones"/>
                        <span className="text-dark-gray-2 text-1xl font-bold mt-3.5">Headphones</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="../public/assets/Vector3.svg" alt="Tênis"/>
                        <span className="text-dark-gray-2 text-1xl font-bold mt-3.5">Tênis</span>
                    </div>
            </div>
            {/*Produtos em alta com cards de produtos feito em .JSON*/}
            <div>
                <div className="flex justify-between">
                    <h2 className="font-bold text-dark-gray-2 text-2xl">Produtos em alta</h2>
                    <a className="text-primary" href="#">Ver todos →</a>
                </div>
                
                 <div className="px-4">
                                   
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto gap-8 mt-8">
        <ProductCard title="30% OFF" />
        <ProductCard title="30% OFF" />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
                
                </div>
            </div>
        </main>
    );
};

export default HomePage;