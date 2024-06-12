import React, { useState } from 'react';

const Button = () => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount + 1);
        console.log('Button clicked');
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <p>Button has been clicked {clickCount} times</p>
        </div>
    );
};

export default Button;