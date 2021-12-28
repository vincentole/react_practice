import MenuItem from './MenuItem';
import { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Menu() {
    const [menuItems, setMenuItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        async function fetchMenu() {
            setHttpError(null);
            setIsLoading(true);

            const response = await fetch(
                'https://order-food-f1b91-default-rtdb.europe-west1.firebasedatabase.app/menu.json',
            );

            if (!response.ok) {
                throw new Error(`HTTP error with status: ${response.status}`);
            }

            const content = await response.json();
            const loadedMenu = [];

            for (const key in content) {
                loadedMenu.push({
                    id: key,
                    name: content[key].name,
                    description: content[key].description,
                    price: content[key].price,
                });
            }

            setMenuItems(loadedMenu);
            setIsLoading(false);
        }

        fetchMenu().catch((e) => {
            setHttpError(`${e.message}. Please try again later.`);
            setIsLoading(false);
            console.log(`There has been a problem with fetching the menu:
            ${e}`);
        });
    }, []);

    const menuList = menuItems.map((item) => (
        <MenuItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={Number(item.price)}
        />
    ));

    return (
        <div className='w-[90%] mx-auto -mt-10 mb-14'>
            {!isLoading && httpError && <div className='text-center space-y-2'>{httpError}</div>}
            {isLoading && (
                <div className='text-center space-y-2'>
                    <AiOutlineLoading3Quarters className='animate-spin text-rose-900 text-xl mx-auto' />
                    <div>Processing ...</div>
                </div>
            )}
            {!isLoading && !httpError && <ul className='space-y-4'>{menuList}</ul>}
        </div>
    );
}

export default Menu;
