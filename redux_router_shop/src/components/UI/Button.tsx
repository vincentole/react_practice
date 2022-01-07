type ButtonProps = {
    onClick?: () => void;
    ariaLabel?: string;
    displayLabel: string;
    ariaDescribedby?: string;
    styleType?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={`px-4 rounded ${
                props.styleType === 'secondary'
                    ? 'border border-gray-800 hover:bg-gray-200 text-gray-800'
                    : 'bg-gray-700 hover:bg-gray-800 text-white'
            }`}
            type='button'
            aria-label={props.ariaLabel ? props.ariaLabel : ''}
            aria-describedby={props.ariaDescribedby ? props.ariaDescribedby : ''}
        >
            <div>{props.displayLabel}</div>
        </button>
    );
};

export default Button;