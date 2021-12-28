import { forwardRef } from "react";

function InputWithLabel(props, ref) {
    const htmlProps = {...props};
    delete htmlProps.inputId;
    delete htmlProps.labelClassName;

    return (
        <>
            <label htmlFor={props.inputId} className={props.labelClassName} >{props.label}</label>

            <input
                {...htmlProps}
                id={props.inputId}
                className={`border border-stone-300 rounded px-1 ${props.className}`}
                ref={ref}
            />
        </>
    );
}

// eslint-disable-next-line no-func-assign
InputWithLabel = forwardRef(InputWithLabel);

export default InputWithLabel;
