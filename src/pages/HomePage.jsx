import React from "react";
import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import "../styles/HomePage.css";

const HomePage = () => {
    
    return (
        //Banner principal
        <main className="max-w-6xl mx-auto px-4 py-12 relative">
            <Gallery />
            {/*Coleções em destaque com 3 imagens*/}
            <section>
                <div>
                    <Section title="Coleções em destaque">
                    <div className="flex gap-10 justify-center">
                        <img src={`${import.meta.env.BASE_URL}assets/Img/collection-1.png`} alt="Coleção" className=" h-[200px] shadow-[0px_11px_17px_0px_#C92071] cursor-pointer" />
                        <img src={`${import.meta.env.BASE_URL}assets/Img/collection-2.png`} alt="Coleção" className=" h-[200px] shadow-[0px_11px_17px_0px_#C92071] cursor-pointer" />
                        <img src={`${import.meta.env.BASE_URL}assets/Img/collection-3.png`} alt="Coleção" className=" h-[200px] shadow-[0px_11px_17px_0px_#C92071] cursor-pointer" />
                    </div>
                    </Section>
                </div>
                
                {/*Coleções em destaque com 5 imagens*/}
                <div className="justify-center flex mt-8">
                    <Section title="Coleções em destaque" titleAlign="center">
                        <div className="mt-3 flex gap-20 justify-center">
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
                    </Section>
                </div>
                
                <div className="mt-10">
                    <Section
                        title="Produtos em alta"
                        titleAlign="center"
                        link={{ href: "#", text: "Ver tudo →" }}
                    >
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
                    </Section>
                </div>
            </section>
        </main>
    );
};

export default HomePage;