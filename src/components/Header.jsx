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
    <header className="w-full">
      <div className="flex gap-2 justify-center mt-10 mb-10">
        <Logo variant="header"/>
        <div className="gap-[20px] flex items-center">
          <IconField iconPosition="right" className="w-[559px]">
            <InputText
              className="w-[559px] h-[30px] border-none rounded-[14px]"
              placeholder="Pesquisar produto..."
              type="text"
            />
            <InputIcon className="cursor-pointer pi pi-search" />
          </IconField>
          <a href="" className="text-dark-gray-2 hover:text-primary hover:underline text-[14px] font-bold">
            Cadastre-se
          </a>
          <Button
            label="Entrar"
            pt={{
              root: { className: "bg-primary-force w-30 h-10 rounded-md" },
            }}
          />
          <img className="cursor-pointer" src={`${import.meta.env.BASE_URL}assets/mini-cart.svg`} alt="Carrinho" />
        </div>
      </div>
      <div className="flex justify-center">
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
              <NavLink to="/categorias" className={({ isActive }) => (isActive ? " text-primary underline decoration-2 underline-offset-5 font-bold"
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