import React from 'react';

const Button = ({ type, className, children, clickHandler }) => {
    return (
        <button
            type={ type }
            className={ className }
            onClick={ clickHandler }
        >
            { children }
        </button>
    );
};

export default Button;