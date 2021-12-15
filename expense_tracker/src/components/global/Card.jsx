function Card(props) {
    return (
        <div
            className={`text-white p-4 rounded-md shadow-md ${props.className}`}
        >
            {props.children}
        </div>
    );
}

export default Card;
