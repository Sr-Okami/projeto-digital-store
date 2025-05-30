import React from "react";
import { Button } from "primereact/button";
import { Carousel } from 'primereact/carousel';
import "../assets/styles/Homepage.css"

const HomePage = () => {
    const banners = [
        {
            title: "Melhores ofertas personalizadas",
            highlight: "Queima de estoque Nike 🔥",
            description: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
            image: "src/assets/Img/White-Sneakers-PNG-Clipart 1.png",
            ornament: "src/assets/Img/Ornament 11.png"
        }
    ];

    return (
        <main className="m-[90px_104px_150px_104px] relative">
            <div id="cointainer-Queima" className="max-w-[500px]">
                <p id="Ofertas" className="text-[16px] mb-[20px]">
                    Melhores ofertas personalizadas
                </p>
                <p id="Estoque" className="text-[64px] max-w-[500px]
                mb-[20px]">
                    Queima de estoque Nike 🔥
                </p>
                <p id="Generico" className="text-[18px] max-w-[450px] mb-[20px]">
                    Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                </p>
                <Button label="Ver Ofertas" className="w-[220px] h-[48px] bg-primary-force"/>
            </div>
            <div>
                <img src="src\assets\Img\White-Sneakers-PNG-Clipart 1.png" alt="tenis" className="absolute left-[300px] top-[230px] -translate-y-1/2 w-[70%]"/>
                <img src="src\assets\Img\Ornament 11.png" alt="pontos amarelos" className="absolute left-[1000px] top-[60px] -translate-y-1/2 w-[]"/>
            </div>
        </main>
    );
};

export default HomePage;