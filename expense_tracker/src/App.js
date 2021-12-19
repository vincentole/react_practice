import { useEffect, useState } from 'react';
import ExpensesCard from './components/Expenses/ExpensesCard';
import Input from './components/NewExpense/Input';

function App() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [yearFilter, setYearFilter] = useState('All');

    function filterYear(year) {
        if (year === 'All') {
          setFilteredItems(items);
        } else setFilteredItems(items.filter((item) => item.date.getFullYear().toString() === year));
    }
    
    function addExpense(expense) {
        setItems((prev) => [...prev, expense]);
    }

    function deleteItem(id) {
        setItems((prev) => {
            return prev.filter((item) => item.id !== id);
        });
    }

    useEffect(() => {
      filterYear(yearFilter);
    }, [items, yearFilter]);

    return (
        <div className='max-w-5xl mx-auto mt-8 space-y-4'>
            <Input onAddExpense={addExpense} />
            <ExpensesCard
                items={items}
                filteredItems={filteredItems}
                onDeleteItem={deleteItem}
                yearFilter={yearFilter}
                onSetYearFilter={setYearFilter}
            />
        </div>
    );
}

export default App;
