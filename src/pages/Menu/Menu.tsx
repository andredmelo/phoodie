import './Menu.css';
import { useContext } from "react";
import { AppContext } from '../../context/AppContext';
import { MenuItem } from '../../types/menu';

const Menu = (): JSX.Element => {

  const { menuData } = useContext(AppContext);

  return (
    <>
      <div className="w-full spacer" />
      <div className='menuContainer flex align-center justify-center py-10'>
        <div className='menuOutter'>
          <div className='menuInner'>
            <div className='menu'>
            <span className="flex flex-col items-center text-base p-8">
              <img src="../../assets/images/Phoodie_logo.svg" alt="Phởodie logo" className="w-[75px]"></img>
              Phởodie
            </span>
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
          </div>
        </div>
      </div>
    </>
  )
}
export default Menu;