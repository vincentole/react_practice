function GraphItem(props) {
    const height = props.value > 0 && props.maxValue > 0 ? (props.value / props.maxValue) * 100 : 0; 

    // w-1/5
    return (
        <div className="w-[25%] xs:w-[16.66%] sm:w-[8.33%] flex flex-col items-center gap-y-1">
            <div className='flex h-20 w-8 items-end rounded-md bg-primary-white overflow-clip'>
                <div className='bg-primary-teal h-0 w-full' style={{ height: `${height}%` }}></div>
            </div>
            <div>{props.label}</div>
        </div>
    );
}

export default GraphItem;