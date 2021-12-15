import { useState } from "react";
import Card from "../global/Card";

function ExpensesFilter() {
    const [year, setYear] = useState('2021');

    function handleChange(event) {
        const {value} = event.target;
        setYear(value);
    }

    return (
        <Card className="flex gap-4">
            <h2>Filter: </h2>
            <label htmlFor='year'>
                Year
                <select className="input inline-block ml-2" name='year' id='year' value={year} onChange={handleChange}>
                    <option value='2017'>2017</option>
                    <option value='2018'>2018</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                </select>
            </label>
        </Card>
    );
}

export default ExpensesFilter;