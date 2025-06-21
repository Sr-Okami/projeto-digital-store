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
                    <div className="flex lg:gap-10 gap-5 lg:justify-center lg:flex-row flex-col-reverse items-center">
                        <img src={`${import.meta.env.BASE_URL}assets/Img/collection-1.png`} alt="Coleção" className="trasition duration-150 hover:scale-150 lg:h-[200px] lg:w-[300px] h-30 w-50 cursor-pointer" />
                        <img src={`${import.meta.env.BASE_URL}assets/Img/collection-2.png`} alt="Coleção" className="trasition duration-150 hover:scale-150 lg:h-[200px] lg:w-[300px] h-30 w-50 cursor-pointer" />
                        <img src={`${import.meta.env.BASE_URL}assets/Img/collection-3.png`} alt="Coleção" className="trasition duration-150 hover:scale-150 lg:h-[200px] lg:w-[300px] h-30 w-50 cursor-pointer" />
                    </div>
                    </Section>
                </div>
                
                {/*Coleções em destaque com 5 imagens*/}
                <div className="justify-center flex mt-8">
                    <Section title="Coleções em destaque" titleAlign="center">
                        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
                            <a href="#" className="flex flex-col items-center group text-dark-gray-2 transition duration-300 hover:scale-150 hover:text-primary">
                                <img src="../public/assets/Vector1.svg" alt="Camisa" className=" filter grayscale group-hover:grayscale-0"/>
                                <span className=" text-1xl font-bold mt-3.5 ">Camisetas</span>
                            </a>
                            <a href="#" className="flex flex-col items-center group text-dark-gray-2 transition duration-300 hover:scale-150 hover:text-primary">
                                <img src="../public/assets/Vector2.svg" alt="Calças" className="filter grayscale group-hover:grayscale-0 "/>
                                <span className="text-1xl font-bold mt-3.5">Calças</span>
                            </a>
                            <a href="#" className="flex flex-col items-center group text-dark-gray-2 transition duration-300 hover:scale-150 hover:text-primary">
                                <img src="../public/assets/Vector5.svg" alt="Bonés" className="h-20 max-w-7x1 filter grayscale group-hover:grayscale-0" />
                                <span className="text-1xl font-bold">Bonés</span>
                            </a>
                            <a href="#" className="flex flex-col items-center group text-dark-gray-2 transition duration-300 hover:scale-150 hover:text-primary">
                                <img src="../public/assets/Vector4.svg" alt="Headphones" className="filter grayscale group-hover:grayscale-0"/>
                                <span className="text-1xl font-bold mt-3.5">Headphones</span>
                            </a>
                            <a href="#" className="flex flex-col items-center group text-dark-gray-2 transition duration-300 hover:scale-150 hover:text-primary">
                                <img src="../public/assets/Vector3.svg" alt="Tênis" className="filter grayscale group-hover:grayscale-0"/>
                                <span className="text-1xl font-bold mt-3.5">Tênis</span>
                            </a>
                        </div>
                    </Section>
                </div>
                
                <div className="mt-10">
                    <Section
                        title="Produtos em alta"
                        titleAlign="center"
                        link={{ text: "Ver tudo →", href: "/produtos" }}
                    >
                        <div className="px-4">
                            <div className="">
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