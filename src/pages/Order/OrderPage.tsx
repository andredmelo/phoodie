import { useContext, useState, useEffect } from "react";
import { AppContext } from '../../context/AppContext';
import { useNavContext } from '../../context/NavContext';
import './OrderPage.css';
import OrderForm from "./OrderForm";
import useSearch from "./useSearch";
import { Link } from "react-router-dom";
import { addCartSvg, removeCartSvg } from "../../assets/images/svg";
import { MenuItem } from '../../types/menu';

export default function OnlineOrder(): JSX.Element {
  const { changeSection } = useNavContext();
  const { cart, dispatch } = useContext(AppContext);
  const [search, setSearch] = useState<string>('');
  const { handleSearch } = useSearch({ search });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            <p>Your order has been placed.</p>
            <p className="mb-10">Thank you!</p>
            <Link
              to="/"
              rel="href"
              aria-label="Go back to Home page"
              onClick={() => changeSection(0)}
            >
              Go Back
            </Link>
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
                        src={new URL(`../../assets/images/menu/${item.img}`, import.meta.url).href} 
                        alt={item.dishLower}
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

            {
              cart.length === 0 ? '' :
                <>
                  <div className="disclaimer flex flex-col items-center justify-center">
                    <button onClick={openModal} className="disclaimer-button">Order Online Disclaimer</button> {/* Button to open modal */}
                    <p className="p-2 text-sm text-white">By placing an order through our website, you acknowledge that you have read, understood, and agreed to this disclaimer.</p>

                    {/* Modal for Disclaimer */}
                    {isModalOpen && (
                      <div className="modal">
                        <div className="modal-content">
                          <span className="close" onClick={closeModal}>&times;</span>
                          <h2 className="mt-2 mb-6">Disclaimer for Online Orders</h2>
                          <div className="flex flex-col space-y-4">
                            <p>1. Order Accuracy:
                              While we strive to ensure that all menu items and prices are accurately listed on our website, errors may occur. We reserve the right to correct any inaccuracies and update information as necessary. If an error is discovered after your order is placed, we will contact you to confirm the correct details.
                            </p>
                            <p>
                              2. Availability:
                              All menu items are subject to availability. We cannot guarantee that all items will be in stock at the time of your order. If a selected item is unavailable, we will notify you as soon as possible and offer alternatives if applicable.
                            </p>
                            <p>
                              3. Allergens and Dietary Restrictions:
                              Our menu items may contain allergens or ingredients that could affect individuals with dietary restrictions. Please inform us of any allergies or dietary concerns when placing your order. We will do our best to accommodate your needs, but we cannot guarantee that cross-contamination will not occur.
                            </p>
                            <p>
                              4. Delivery Times:
                              Estimated delivery times are provided at the time of your order but may vary based on factors such as traffic, weather conditions, and order volume. We appreciate your understanding and patience.
                            </p>
                            <p>
                              5. Payment Processing:
                              All payments are processed securely through our payment gateway. By placing an order, you agree to provide accurate payment information and authorize us to charge the total amount for your order.
                            </p>
                            <p>
                              6. Refunds and Cancellations:
                              Once an order is confirmed, cancellations may not be accepted, especially if the food has already been prepared or dispatched for delivery. Refunds will be considered on a case-by-case basis in accordance with our policy.
                            </p>
                            <p>
                              7. Changes to Terms:
                              We reserve the right to modify these terms at any time without prior notice. It is your responsibility to review the terms periodically for updates.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              }
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