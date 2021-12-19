function Amount(props) {
    return (
        <div className="bg-primary-white text-primary-black rounded-full px-8 py-2 w-full xs:w-auto text-center">${props.amount}</div>
    );
}

export default Amount;