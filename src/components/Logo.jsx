import React from 'react';

const Logo = ({ variant = "header", ...props }) => {
    const src =
        variant === "footer"
            ? "src/assets/logo-footer.svg"
            : "src/assets/logo-header.svg";
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