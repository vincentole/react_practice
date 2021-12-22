function Card(props) {
    return <div className={`rounded-lg bg-white py-2 px-4 ${props.className}`}>{props.children}</div>
}

export default Card;