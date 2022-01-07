import {Routes, Route} from 'react-router-dom';
import CommentsAll from './ItemDetails/CommentsAll';
import HomeShop from './pages/HomeShop';
import ItemDetails from './pages/ItemDetails';
import NotFound from './pages/NotFound';

function App() {
 
    return (
        <Routes>
            <Route path='/' element={<HomeShop />} />
            <Route path='/items/:itemId' element={<ItemDetails />}>
                
                    <Route path='all-comments' element={<CommentsAll />} />
                
            </Route>
            <Route path='/*' element={<NotFound />} />
        </Routes>
    );
}

export default App;
