import { Link } from 'react-router-dom';

const BackToStore = () => {
    return (
        <Link to='/' className='bg-white hover:bg-gray-200 px-4 py-2 space-x-2 rounded'>
            <span>Back to Redux Store</span>
            
        </Link>
        
    );
};

export default BackToStore;
