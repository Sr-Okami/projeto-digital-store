import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { Button } from "primereact/button";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputText } from "primereact/inputtext";
import MenuHamburger from "./MenuHamburger";

{
  //Cabecalho da pagina
}
const Header = () => {
  return (
    <header className="lg:w-full">
       {/*Cabecalho para desktop */}
      <div className="lg:flex lg:flex-row lg:gap-10 lg:justify-center lg:items-center lg:mt-6 lg:mb-6 flex justify-between p-5">
        <MenuHamburger />
        <Logo variant="header"/>
        <div className="gap-[20px] flex items-center">
          <IconField iconPosition="right" className="hidden lg:block w-100">
            <InputText
              className="w-full h-[30px] border-none rounded-[14px]"
              placeholder="Pesquisar produto..."
              type="text"
            />
            <InputIcon className="cursor-pointer pi pi-search" />
          </IconField>
          <a href="" className="text-dark-gray-2 hover:text-primary hover:underline text-[14px] font-bold hidden lg:block">
            Cadastre-se
          </a>
          <Button
            label="Entrar"
            pt={{
              root: { className: "bg-primary text-white w-30 h-10 rounded-md hidden lg:block" },
            }}
          />
          <img className="cursor-pointer" src={`${import.meta.env.BASE_URL}assets/mini-cart.svg`} alt="Carrinho" />
        </div>
      </div>
      <div className="hidden lg:flex lg:justify-center">
        <nav>
          <ul className="flex gap-[40px] list-none">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? " text-primary underline decoration-2 underline-offset-5 font-bold"
              : "text-dark-gray-2 font-bold")}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/produtos" className={({ isActive }) => (isActive ? " text-primary underline decoration-2 underline-offset-5 font-bold"
              : "text-dark-gray-2 font-bold")}>Produtos</NavLink>
            </li>
            <li>
              <NavLink to="/categorias" className={({ isActive }) => (isActive ? " text-primary underline decoration-3 underline-offset-5 font-bold"
              : "text-dark-gray-2 font-bold")}>Categorias</NavLink>
            </li>
            <li>
              <NavLink to="/meus-pedidos" className={({ isActive }) => (isActive ? " text-primary underline decoration-2 underline-offset-5 font-bold"
              : "text-dark-gray-2 font-bold")}>Meu Pedidos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;