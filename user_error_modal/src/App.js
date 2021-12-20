import { createRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/global/Button';
import Card from './components/global/Card';
import Input from './components/global/Input';
import Label from './components/global/Label';
import Modal from './components/global/Modal';
import UserListItem from './components/UserListItem';

const username_error_msg = 'Please enter a valid name (non-empty value).';
const age_error_msg = 'Please enter a valid age (a number > 0).';

function App() {
    const [users, setUsers] = useState([]);
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [usernameInputError, setUsernameInputError] = useState(false);
    const [ageInputError, setAgeInputError] = useState(false);
    const inputNameRef = createRef(null);

    const usersList = users.map((user, i) => (
        <UserListItem key={i} username={user.name} age={user.age} />
    ));

    function createModal(title, message, setActive, active) {
        return ReactDOM.createPortal(
            <Modal
                title={title}
                message={message}
                setActive={setActive}
                active={active}
                focusAfterCloseRef={inputNameRef}
            />,
            document.querySelector('#modals'),
        );
    }

    function addUser(e, name, age) {
        e.preventDefault();

        if (!inputName.trim()) {
            setUsernameInputError(true);
        } else if (Number(inputAge) < 1) {
            setAgeInputError(true);
        } else {
            setUsers((prev) => [...prev, { name: name, age: age }]);
            setInputName('');
            setInputAge('');
        }

        inputNameRef.current.focus();
    }

    useEffect(() => {
        inputNameRef.current.focus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {usernameInputError &&
                createModal(
                    'Invalid Username',
                    username_error_msg,
                    setUsernameInputError,
                    usernameInputError,
                )}
            {ageInputError &&
                createModal('Invalid Age', age_error_msg, setAgeInputError, ageInputError)}
            <div className='max-w-xl mx-auto mt-10 space-y-8'>
                <Card>
                    <form
                        className='flex flex-col gap-1'
                        onSubmit={(e) => addUser(e, inputName, inputAge)}
                    >
                        <Label for='username' label='Username' />
                        <Input
                            type='text'
                            name='username'
                            input={inputName}
                            setInput={setInputName}
                            ref={inputNameRef}
                        />
                        <Label for='age' label='Age (Years)' />
                        <Input type='number' name='age' input={inputAge} setInput={setInputAge} />
                        <div className='mt-4'>
                            <Button type='submit'>Add User</Button>
                        </div>
                    </form>
                </Card>
                <Card className='flex flex-col gap-1'>
                    {usersList.length < 1 ? <h2>No users found.</h2> : usersList}
                </Card>
            </div>
        </>
    );
}

export default App;
