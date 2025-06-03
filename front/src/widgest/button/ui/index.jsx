import React from 'react';

const Button = ({ onClick, name, className }) => {
    return (
        <>
            <button onClick={onClick} className={className}>
                {name}
            </button>
        </>
    );
};

export default Button;