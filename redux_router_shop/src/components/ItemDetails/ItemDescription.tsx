import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../Icons/Spinner';
import CommentsForm from './CommentsForm';

type ShopItemType = {
    id: string;
    price: number;
    title: string;
};

type ItemDetailsUrlType = {
    itemId: string;
};

const ItemDescription = () => {
    const [shop, setShop] = useState<ShopItemType[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    const { itemId } = useParams<ItemDetailsUrlType>();
    const item = shop.find((item) => item.title.replaceAll(' ', '-').toLowerCase() === itemId);

    useEffect(() => {
        const getShop = async () => {
            setIsLoading(true);
            const response = await fetch(
                'https://redux-store-aa0fe-default-rtdb.europe-west1.firebasedatabase.app/shop.json',
            );

            if (!response.ok) {
                throw new Error(`HTTP error, status: ${response.status}`);
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

        getShop().catch((error) => {
            setError(error.message);
            setIsLoading(false);
            console.log(error);
        });
    }, []);

    if (isLoading)
        return (
            <div className='bg-gray-100 py-6 px-8 rounded flex items-center justify-center gap-2'>
                <h2 className='font-bold'>Loading Details</h2>
                <Spinner className='text-gray-700 w-10 aspect-square' />
            </div>
        );

    if (error && !isLoading)
        return (
            <div className='bg-gray-100 py-6 px-8 rounded flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold'>{`An error occured:`}</h2>
                <p>{error}</p>
            </div>
        );

    if (!item && !isLoading && !error) {
        return (
            <div className='bg-gray-100 py-6 px-8 space-y-4 rounded'>
                <h2 className='text-xl font-bold mb-8'>Item not found</h2>
                <p>The item you requested could not be found.</p>
            </div>
        );
    }

    return (
        <div className='space-y-8'>
            <div className='bg-gray-100 py-6 px-8 space-y-4 rounded'>
                <h2 className='text-xl font-bold mb-8'>{item!.title}</h2>
                <p>This item costs ${item!.price.toFixed(2)}</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam laborum
                    enim commodi unde rerum vel ex ullam ab molestiae expedita, quas magnam
                    temporibus placeat illo, non sit porro atque!
                </p>
            </div>
            <CommentsForm />
        </div>
    );
};

export default ItemDescription;
