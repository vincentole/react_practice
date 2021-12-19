import Card from '../global/Card';

function ExpensesFilterCard(props) {
    const options = props.options.map((option, i) => <option key={i} value={option}>{option}</option>);

    function handleChange(event) {
        const { value } = event.target;
        props.onSetYearFilter(value);
    }
    
    

    return (
        <Card className='flex gap-4'>
            <h2>Filter: </h2>
            <label htmlFor='year'>
                {options.length > 0 ? (
                    <>
                        Year
                        <select
                            className='input inline-block ml-2'
                            name='year'
                            id='year'
                            value={props.yearFilter}
                            onChange={handleChange}
                        >
                            {[
                                <option key='-1' value='All'>
                                    All
                                </option>,
                                ...options,
                            ]}
                        </select>
                    </>
                ) : (
                    'No data available.'
                )}
            </label>
        </Card>
    );
}

export default ExpensesFilterCard;
