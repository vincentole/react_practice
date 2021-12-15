function Button(props) {
    // Buttons can have a style prop 'primary' or 'secondary'

    const style = `
        ${props.styleType === 'primary' && 'bg-primary-grey'}
        ${props.styleType === 'secondary' && 'bg-primary-teal border border-primary-grey'}
    `;

    return (
        <button className={`${style} px-2 py-1 rounded shadow`} type={props.type} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;
