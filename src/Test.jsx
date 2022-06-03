import React from 'react';

const Test = () => {
    const reference = React.useRef('Marco');

    return (
        <div>
            <p>{reference.current}</p>
        </div>
    )
}

export default Test;