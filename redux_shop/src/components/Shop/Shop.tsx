import { useEffect, useState } from 'react';
import Spinner from '../../Icons/Spinner';
import ShopItem from './ShopItem';

type ShopType = {
    id: string;
    price: number;
    title: string;
};

const Shop = () => {
    const [shop, setShop] = useState<ShopType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const shopList = shop.map(item => <ShopItem key={item.id} title={item.title} price={item.price}/>);

    useEffect(() => {
        const getShop = async () => {
            setIsLoading(true);
            const response = await fetch(
                'https://redux-store-aa0fe-default-rtdb.europe-west1.firebasedatabase.app/shop.json',
            );

            if (!response.ok) {
                throw new Error(`HTTP error, status: ${response.status}`)
            }
            
            const content = await response.json();

            const shopList = [];
            for (const key in content) {
                shopList.push({
                    id: key,
                    title: content[key].title,
                    price: content[key].price,
                });
            }

            setShop(shopList);
            setIsLoading(false);
        };

        getShop().catch(error => {
            setError(error.message);
            setIsLoading(false);
            console.log(error);
        });
    }, []);

    if (isLoading)
        return (
            <div className='bg-gray-100 py-6 px-8 rounded flex items-center justify-center gap-2'>
                <h2 className='font-bold'>Loading Shop</h2>
                <Spinner className='text-gray-700 w-10 aspect-square' />
            </div>
        );

    if (error && !isLoading) return (
        <div className='bg-gray-100 py-6 px-8 rounded flex flex-col items-center justify-center gap-2'>
            <h2 className='font-bold'>{`An error occured:`}</h2>
            <p>{error}</p>
        </div>
    ); 

    return (
        <div className='bg-gray-100 py-6 px-8 space-y-4 rounded'>
            <h2 className='text-xl font-bold mb-8'>Our Products</h2>
            {shopList}
        </div>
    );
};

export default Shop;
