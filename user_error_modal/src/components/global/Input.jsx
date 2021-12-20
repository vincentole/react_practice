import React from 'react';

const Input = React.forwardRef((props, ref) => {

    function handleChange(e) {
        const {value} = e.target;
        props.setInput(value);
    }

    return (
        <input   
            className='border border-gray-900 rounded-md px-2'
            type={props.type}
            name={props.name}
            value={props.input}
            onChange={handleChange}
            ref={ref}
        />
    );
});

export default Input;
