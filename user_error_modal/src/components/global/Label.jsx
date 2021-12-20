function Label(props) {
    return (
        <label className='text-sm ' htmlFor={props.for}>
            {props.label}
        </label>
    );
}

export default Label;
