type ButtonProps = {
    onClick?: () => void;
    ariaLabel?: string;
    displayLabel: string;
    ariaDescribedby?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            onClick={props.onClick}
            className='px-4 bg-gray-700 hover:bg-gray-800 text-white rounded'
            type='button'
            aria-label={props.ariaLabel ? props.ariaLabel : ''}
            aria-describedby={props.ariaDescribedby ? props.ariaDescribedby : ''}
        >
            <div>{props.displayLabel}</div>
        </button>
    );
};

export default Button;
