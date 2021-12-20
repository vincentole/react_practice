function Card(props) {
    return (
        <div {...props} className={`border border-gray-900 rounded-md p-2 ${props.className}`}>
            {props.children}
        </div>
    );
}

export default Card;
