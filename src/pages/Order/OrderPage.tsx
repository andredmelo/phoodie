import { useContext, useState, useEffect } from "react";
import { AppContext } from '../../context/AppContext';
import './OrderPage.css';
import OrderForm from "./OrderForm";
import useSearch from "./useSearch";
import { Link } from "react-router-dom";
import { addCartSvg, removeCartSvg } from "../../assets/images/svg";
import { MenuItem } from '../../types/menu';

export default function OnlineOrder(): JSX.Element {
  const { cart, dispatch } = useContext(AppContext);
  const [search, setSearch] = useState<string>('');
  const { handleSearch } = useSearch({ search });
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleAddToCart(item: MenuItem): void {
    //console.log("Adding item to cart:", item); // Log the item being added
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  }

  function handleRemoveFromCart(id: number): void {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setSubmitted(true);
  }

  let total = cart.map(item => Number(item.price) * item.quantity)
    .reduce((acc, value) => acc + value, 0).toFixed(2);

  return (
    <>
      <div className="order">
        {/* <h2>ORDER ONLINE</h2> */}
        {
          submitted ?
          <div className="submitted">
            <p>Your order has been placed!</p>
            <Link to="/" rel="href" aria-label="Go back to Home page">Go Back</Link>
          </div>
          :
          <div className="order-content">
            <div className="search">
              <input
                placeholder="Search menu... e.g pho"
                value={search}
                onChange={e => setSearch(e.target.value)} />
            </div>
            <div className="order-items">
              {
                handleSearch().map((item: MenuItem) => {
                  return (
                    <div className="order-item" key={item.id}>
                      <img
                        src={new URL(`../../assets/images/${item.img}`, import.meta.url).href} 
                        alt={item.dishUpper}
                      />
                      <p>{item.dishLower}</p>
                      <p>
                        <span>${item.price}</span>
                        <button aria-label="Remove from cart" onClick={() => handleRemoveFromCart(item.id)}>{removeCartSvg}</button>
                        <span className="buttonSpacing"/>
                        <button aria-label="Add to cart" onClick={() => handleAddToCart(item)}>{addCartSvg}</button>
                      </p>
                    </div>
                  )
                })
              }
            </div>
            <div className="cart-items">
              {
                cart.length === 0 ?
                <p className="cart-empty">Cart is empty!</p>
                :
                <>
                  {
                    cart.map(item => {
                      return (
                        <div className="cart-item" key={item.id}>
                          <p>
                            <span>• {item.dishLower}</span>
                            <span><b>x{item.quantity}</b></span>
                          </p>
                        </div>
                      )
                    })
                  }
                  <p className="total">Total: ${total}</p>
                </>
              }
            </div>
          </div>
        }
      </div>

      <div
        className="dslc-section-divider"
        data-divider-pos="bottom"
        data-divider-style="hill-side-soft"
      >
        <svg id="hill-side-soft" className="fill-[var(--color-orangeWeb-90)] w-full h-[60px]" preserveAspectRatio="none" viewBox="0 0 1442 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path className="divider-color" d="M1442,33.8142136 C1280.56278,15.0410066 1162.74657,5.65440317 1088.55136,5.65440317 C935.145886,5.65440317 572.295431,37.1029354 3.86535248e-12,100 L0,0 L1442,0 L1442,33.8142136 Z"></path>
        </svg>
      </div>

      <OrderForm onSubmit={onSubmit} />
    </>
  )
};