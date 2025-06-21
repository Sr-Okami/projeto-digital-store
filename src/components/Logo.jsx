import React from 'react';
import { Link } from 'react-router-dom';

//Aqui tem o <logo /> que cria um variante para as duas cores da logo.
const Logo = ({ variant = "header", ...props }) => {
    const src =
        variant === "footer"
            ? `${import.meta.env.BASE_URL}assets/logo-footer.svg`
            : `${import.meta.env.BASE_URL}assets/logo-header.svg`;
    return (
        <Link to="/">
            <img
                className='w-[150px] xl:w-[253px] lg:w-[253px]  '
                /*height={44}
                width={253}*/
                src={src}
                alt={`Logo ${variant}`}
                {...props}
            />
        </Link>
    );  
};

export default Logo;