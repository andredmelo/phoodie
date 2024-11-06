import './Menu.css';
import { useContext } from "react";
import { AppContext } from '../../context/AppContext';
import { MenuItem } from '../../types/menu';

const Menu = (): JSX.Element => {

  const { menuData } = useContext(AppContext);

  return (
    <>
      <div className="w-full spacer" />
      <div className='menuContainer flex align-center justify-center py-6 lg:py-10'>
        <div className='menuOutter'>
          <div className='menuInner'>
            <div className='menu'>
            <span className="flex flex-col items-center text-base p-8">
              <img src="../../assets/images/Phoodie_logo.svg" alt="Phởodie logo" className="w-[150px]"></img>
              {/* Phởodie */}
            </span>
              <h2>Menu</h2>
              <div className='menu-content'>
                {
                  menuData.map((item: MenuItem) => {
                    return (
                      <div className='menu-content-item' key={item.id}>
                        <img
                          src={new URL(`../../assets/images/menu/${item.img}`, import.meta.url).href} 
                          alt={item.dishLower}
                        />
                        <div>
                          <div className='flex flex-row h-full items-center justify-between'>
                            <h3>{item.dishLower}</h3>
                            <span>${item.price}</span>
                          </div>
                          <p>{item.description}</p>
                        </div>
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