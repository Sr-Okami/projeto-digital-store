import React from 'react';

//Aqui tem o <logo /> que cria um variante para as duas cores da logo.
const Logo = ({ variant = "header", ...props }) => {
    const src =
        variant === "footer"
            ? "public/assets/logo-header.svg"
            : ".src/assets/logo-header.svg";
    return (
        <img
            height={44}
            width={253}
            src={src}
            alt={`Logo ${variant}`}
            {...props}
        />
    );
};

export default Logo;