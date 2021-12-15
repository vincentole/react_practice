import Card from '../global/Card';
import Button from '../global/Button';
import { useState } from 'react';

function Input() {
    const [input, setInput] = useState({ title: '', amount: '', date: '' });
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <Card className='bg-primary-teal shadow-primary-teal/20'>
            <form onSubmit={() => console.log('submitted')} className='space-x-2'>
                {isEditing && (
                    <Card>
                        <div className='flex flex-wrap gap-2'>
                            <label htmlFor='title' className=''>
                                Title
                                <input
                                    className='input'
                                    type='text'
                                    name='title'
                                    value={input.title}
                                    onChange={handleChange}
                                />
                            </label>

                            <label htmlFor='amount' className=''>
                                Amount
                                <input
                                    className='input'
                                    type='number'
                                    name='amount'
                                    value={input.amount}
                                    min='0.01'
                                    step='0.01'
                                    onChange={handleChange}
                                />
                            </label>

                            <label htmlFor='date' className=''>
                                Date
                                <input
                                    className='input'
                                    type='date'
                                    name='date'
                                    value={input.date}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                    </Card>
                )}

                <div className={`${isEditing && 'mt-8'} flex gap-2`}>
                    {!isEditing && (
                        <Button
                            onClick={() => setIsEditing(true)}
                            type='button'
                            styleType='primary'
                        >
                            Add New Expense
                        </Button>
                    )}
                    {isEditing && (
                        <Button
                            onClick={() => setIsEditing(false)}
                            type='button'
                            styleType='secondary'
                        >
                            Cancel
                        </Button>
                    )}
                    {isEditing && (
                        <Button
                            onClick={() => console.log('Click')}
                            type='button'
                            styleType='primary'
                        >
                            Add Expense
                        </Button>
                    )}
                </div>
            </form>
        </Card>
    );
}

export default Input;
