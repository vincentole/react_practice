import { forwardRef } from 'react';
import React from 'react';

function Button(props, ref) {
    return (
        <button
            {...props}
            type={props.type || 'button'}
            className='bg-gray-700 text-white rounded py-1 px-3 focus:outline-2 focus:border-none focus:shadow-[0_0px_10px_2px_rgb(0,0,0,0.3)]'
            ref={ref}
        >
            {props.children}
        </button>
    );
}

// eslint-disable-next-line no-func-assign
Button = forwardRef(Button);

export default Button;
