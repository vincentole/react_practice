import { useLocation, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Button from '../UI/Button';

const CommentsForm = () => {
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const onAllCommentsHandler = () => {
        navigate('all-comments');
    };

    const onLessCommentsHandler = () => {
        navigate('.');
    };


    return (
        <div className='bg-gray-100 py-6 px-8 space-y-4 rounded'>
            <h2 className='text-xl font-bold mb-8'>Comments</h2>
            <form className='text-sm space-y-2'>
                <div className='flex'>
                    <label htmlFor='comment-name' className='w-20'>
                        Name:
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='comment-name'
                        className='border border-gray-300 px-2'
                    />
                </div>
                <div className='flex '>
                    <label htmlFor='comment-message' className='w-20'>
                        Comment:
                    </label>
                    <textarea
                        name='message'
                        id='comment-message'
                        rows={3}
                        className='border border-gray-300 grow px-2 py-1'
                    ></textarea>
                </div>
                <div className='flex justify-end'>
                    <Button displayLabel='Post Comment' />
                </div>
            </form>
            {pathname.endsWith('all-comments') && (
                <Button
                    onClick={onLessCommentsHandler}
                    displayLabel='Show Less'
                    styleType='secondary'
                />
            )}
            <div>
                <header className='text-sm flex gap-2'>
                    <h3 className='font-bold'>Anja</h3>
                    <span className='text-gray-700'>01-01-2022 13:00</span>
                </header>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quis
                    possimus, quibusdam voluptatum sit expedita reprehenderit mollitia iusto maxime
                    modi vel quos et dolore corrupti asperiores iste illo explicabo eius?
                </p>
            </div>
            <div>
                <header className='text-sm flex gap-2'>
                    <h3 className='font-bold'>Tom</h3>
                    <span className='text-gray-700'>01-01-2022 13:00</span>
                </header>
                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur quis
                    possimus, quibusdam voluptatum sit expedita reprehenderit mollitia iusto maxime
                    modi vel quos et dolore corrupti asperiores iste illo explicabo eius?
                </p>
            </div>
            {!pathname.endsWith('all-comments') && (
                <Button
                    onClick={onAllCommentsHandler}
                    displayLabel='Show All Comments'
                    styleType='secondary'
                />
            )}

            <Outlet />
        </div>
    );
};

export default CommentsForm;
