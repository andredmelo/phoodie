import './Menu.css';
import { useContext } from "react";
import { AppContext } from '../../context/AppContext';

interface MenuItem {
  id: string;
  img: string;
  dishUpper: string;
  description: string;
  price: number;
}

const Menu = () => {

  const { menuData } = useContext(AppContext);

  return (
    <>
      <div className="w-full spacer" />
      <div className='menu'>
        <h2>Menu</h2>
        <div className='menu-content'>
          {
            menuData.map((item: MenuItem) => {
              return (
                <div className='menu-content-item' key={item.id}>
                  <img
                    src={new URL(`../../assets/images/${item.img}`, import.meta.url).href} 
                    alt={item.dishUpper}
                  />
                  <div>
                    <p>{item.dishUpper}</p>
                    <p>{item.description}</p>
                  </div>
                  <span>${item.price}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default Menu;