import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import './button.css'

interface ButtonProps {
    href?: string;
    onClick?: any;
    disabled?: boolean;
    className?: string;
    red?: boolean;
}

const Button: FC<ButtonProps> = ({
        onClick,disabled, href,className= '',
        red, children
    }) => {

    if (href) {
       return (
           <Link to={href} className={`btn ${className} ${red ? 'red' : 'green'}`}>
               {children}
           </Link>
       )
    }

    return (
        <button
            className={`btn ${className} ${red ? 'red' : 'green'}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
