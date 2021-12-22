function ButtonSecondary(props) {
    return (
        <button
            {...props}
            className={`text-rose-700 bg-white border border-rose-700 flex items-center justify-center gap-1 px-2 py-1 rounded text-sm ${props.className}`}
        >
            {props.children}
        </button>
    );
}

export default ButtonSecondary;
