function Button(props) {
    return (
        <button
            {...props}
            className={`bg-rose-700 text-white flex items-center justify-center gap-1 px-2 py-1 rounded text-sm ${props.className}`}
        >
            {props.children}
        </button>
    );
}

export default Button;
