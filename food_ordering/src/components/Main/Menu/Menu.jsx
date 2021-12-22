import MenuItem from "./MenuItem";
import menuItems from '../../../data/menu'

function Menu() {
    const menuList = menuItems.map((item) => (
        <MenuItem key={item.id} id={item.id} name={item.name} description={item.description} price={Number(item.price)} />
    ));

    return (
        <div className='w-[90%] mx-auto -mt-10 mb-14'>
            <ul className="space-y-4">
               {menuList}
            </ul>
        </div>
    );
}

export default Menu;