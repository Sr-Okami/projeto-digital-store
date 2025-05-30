import React from "react";
import Logo from "./Logo";
import "../assets/styles/Footer.css";
import informationsData from "./information.json";

//Rodape com a informações em JSON, meio complicadodinho mais deu certo.
//As informações clicaveis não estão indo para lugar algum (#).
const FooterInformations = ({ title, informations }) => (
  <div  id="colunas-container">
    <span className="text-[22px] mb-[25px] block">{title}</span>
    <ul>
      {informations.map((info, idx) => (
        <li key={idx} className="list-none mb-[10px] text-[16px] max-w-[200px]">
          <a href={info.link} className="no-underline text-[16px] ">{info.text}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
    return (
        <footer className="footer-force">
            <div className="flex itens-center m-[72px_104px_40px_104px] gap-[60px]">
                <div>
                    {/*Primeira coluna*/}
                    <Logo variant="footer" />
                    <p class="break-normal max-w-[350px] text-[16px] mt-[10px] mb-[20px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div class="flex gap-[20px] mt-[10px]">
                      <img src="src/assets/facebook.svg" alt="Facebook" />
                      <img src="src/assets/instagram.svg" alt="Instagram" />
                      <img src="src/assets/twitter.svg" alt="Twitter" />
                    </div>
                </div>
                <div className="">

                </div>
                {/*Restante das colunas */}
                {informationsData.map((item, idx) => (
                    <FooterInformations key={idx} title={item.title} informations={item.informations}/>
                ))}
            </div>
            <div>
                <hr className="m-[0px_104px_0px_104px]" />
                <span  className="flex justify-center mt-[20px] mb-[20px]">© 2025 Digital Store</span>
            </div>
        </footer>
    );
};

export default Footer;