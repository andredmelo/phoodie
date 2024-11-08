import './Menu.css';
import { useContext, useState, useEffect } from "react";
import { AppContext } from '../../context/AppContext';
import { MenuItem, MediaQueries } from '../../types/menu';

const Menu: React.FC<MediaQueries> = (props): JSX.Element => {
  console.log(props.isUnder768);

  const { menuData } = useContext(AppContext);

  const [backgroundImage, setBackgroundImage] = useState("url('assets/images/backgrounds/Menu-Phoodie-2560w.webp')");

  useEffect(() => {
    let backgroundImage = "url('assets/images/backgrounds/Menu-Phoodie-2560w.webp')";
    if (props.isUnder768) {
      //backgroundImage = "url('assets/images/backgrounds/Menu-Phoodie-768w.webp')";
    } else if (props.isUnder1024) {
      backgroundImage = "url('assets/images/backgrounds/Menu-Phoodie-1024w.webp')";
    } else if (props.isUnder1280) {
      backgroundImage = "url('assets/images/backgrounds/Menu-Phoodie-1280w.webp')";
    } else if (props.isUnder1536) {
      backgroundImage = "url('assets/images/backgrounds/Menu-Phoodie-1920w.webp')";
    }
    setBackgroundImage(backgroundImage);

    console.log(backgroundImage);
  
  }, [props.isUnder768, props.isUnder1024, props.isUnder1280, props.isUnder1536]);

  return (
    <>
      <div className="w-full spacer" />
      <div
        className='menuContainer flex align-center justify-center pt-6 lg:pt-10 pb-16 md:pb-24 lg:pb-40 px-3 lg:px-0 bg-cover bg-center'
        style={{ backgroundImage: backgroundImage }}
      >
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