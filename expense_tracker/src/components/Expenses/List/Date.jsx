function Date(props) {
    const month = props.date.toLocaleString('default', { month: 'short' });
    const day = props.date.toLocaleString('default', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="flex xs:flex-col justify-center items-center gap-x-1 text-sm font-bold xs:font-normal xs:bg-primary-white xs:text-primary-black px-4 py-2 rounded-md">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    );
}

export default Date;