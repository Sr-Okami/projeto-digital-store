import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";

{
  //Cabecalho da pagina
  //mesmo com o tailwind quebrado está funcionando usando o css
}
const Header = () => {
  return (
    <header>
      <div className=" gap-5 items-center max-w-7xl mx-auto px-4 py-4">
        <Logo variant="header"/>
        <div className="gap-[20px] flex items-center">
          <IconField iconPosition="right" className="w-[559px]">
            <InputText
              className="w-[559px] h-[30px] border-none rounded-[14px] p-[6px] pr-10"
              placeholder="Pesquisar produto..."
              type="text"
            />
            <InputIcon className="pi pi-search" />
          </IconField>
          <a href="" className="text-secundary-force text-[14px]">
            Cadastre-se
          </a>
          <Button
            label="Entrar"
            pt={{
              root: { className: "bg-primary-force w-[114px] h-[40px]" },
            }}
          />
          <img src={`${import.meta.env.BASE_URL}assets/mini-cart.svg`} alt="Carrinho" />
        </div>
      </div>
      <div>
        <nav>
          <ul className="flex gap-[40px] mt-[40px] ml-[104px] list-none">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `no-underline text-secundary-force font-normal hover:!font-bold transition-all${isActive ? " !font-bold !text-primary-force" : ""}`}>Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/produtos"
                className={({ isActive }) =>
                  `no-underline text-secundary-force font-normal hover:!font-bold transition-all${isActive ? " !font-bold !text-primary-force" : ""}`}>Produtos</NavLink>
            </li>
            <li>
              <NavLink
                to="/categorias"
                className={({ isActive }) =>
                  `no-underline text-secundary-force font-normal hover:!font-bold transition-all${isActive ? " !font-bold !text-primary-force" : ""}`}>Categorias</NavLink>
            </li>
            <li>
              <NavLink
                to="/meus-pedidos"
                className={({ isActive }) =>
                  `no-underline text-secundary-force font-normal hover:!font-bold transition-all${isActive ? " !font-bold !text-primary-force" : ""}`}>Meus Pedidos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;