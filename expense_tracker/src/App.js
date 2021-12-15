import { useState } from 'react';
import ExpensesCard from './components/Expenses/ExpensesCard';
import Input from './components/NewExpense/Input';

function App() {
  const [items, setItems] = useState([]);

  function addExpense(expense) {
    setItems(prev => [...prev, expense]);
  }


  return (
      <div className='max-w-5xl mx-auto mt-8 space-y-4'>
          <Input onAddExpense={addExpense}/>
          <ExpensesCard items={items} />
      </div>
  );
}

export default App;
