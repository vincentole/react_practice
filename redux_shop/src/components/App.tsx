import {Routes, Route} from 'react-router-dom';
import HomeShop from './pages/HomeShop';
import ItemDetails from './pages/ItemDetails';
import ItemNotFound from './pages/ItemNotFound';
import NotFound from './pages/NotFound';

function App() {
 
    return (
        <Routes>
            <Route path='/' element={<HomeShop />} />
            <Route path='/items/:itemId' element={<ItemDetails />} />            
            <Route path='/*' element={<NotFound />} />
        </Routes>
    );
}

export default App;
