import { useContext, useState } from "react";
import { validateName, validateEmail, validatePhone, validateAddress } from "../Booking/fieldsValidation";
import { AppContext } from "../../context/AppContext";
//import { BookingFormData } from "../../types/menu";
import './OrderPage.css';

interface OrderFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onFormData: (data: { name: string; address: string; email: string }) => void; // Include a callback for the form data
}

export default function OrderForm({ onSubmit, onFormData }: OrderFormProps): JSX.Element {
  const { cart } = useContext(AppContext);
  const [address, setAddress] = useState<{ val: string; error: boolean }>({ val: '', error: false });
  const [name, setName] = useState<{ val: string; error: boolean }>({ val: '', error: false });
  const [email, setEmail] = useState<{ val: string; error: boolean }>({ val: '', error: false });
  const [phone, setPhone] = useState<{ val: string; error: boolean }>({ val: '', error: false });

  function handlePhoneBlur(): void {
    if (validatePhone(phone.val)) {
      setPhone({ ...phone, error: false });
    } else {
      setPhone({ ...phone, error: true });
    }
  }

  function handleEmailBlur(): void {
    if (validateEmail(email.val)) {
      setEmail({ ...email, error: false });
    } else {
      setEmail({ ...email, error: true });
    }
  }

  function handleNameBlur(): void {
    /* const textRegex = /^(?:[a-zA-ZÀ-ÿ]{3,15})(?: [a-zA-ZÀ-ÿ]{3,24})?$/; */
    /* const textRegex = /^[a-zA-ZÀ-ÿ]{3,15}$/; */ // This version includes both standard Latin letters and their accented variants
    /* if (textRegex.test(name.val)) { */
    if (validateName(name.val)) {
      setName({ ...name, error: false });
    } else {
      setName({ ...name, error: true });
    }
  }

  function handleAddressBlur() {
    if (validateAddress(address.val)) {
      setAddress({...address, error: false})
    } else {
      setAddress({...address, error: true})
    }
  };

  return (
    <div className="order-details mx-auto mb-8 md:mb-24 lg:mb-32">
      <form onSubmit={e => { 
        e.preventDefault(); // Prevent default form submission
        onFormData({ address: address.val, name: name.val, email: email.val }); // Call onFormData with the current values when submitting
        onSubmit(e); // Call the passed onSubmit function
      }}>
        <p>Order details</p>
        <div className="input-group">
          <input
            type='text'
            name="name"
            maxLength={40}
            value={name.val}
            onChange={e => setName({ ...name, val: e.target.value })}
            onBlur={handleNameBlur}
            required
          />
          <label aria-label="name" htmlFor="name">Name</label>
          {name.error && <small>Please enter a valid name. (First and last names only)</small>}
        </div>
        <div className="input-group">
          <input
            type='tel'
            name="phone"
            value={phone.val}
            onChange={e => setPhone({ ...phone, val: e.target.value })}
            onBlur={handlePhoneBlur}
            minLength={11} maxLength={13}
            required />
          <label aria-label="phone" htmlFor="phone">Phone Number e.g +15551234567</label>
          {phone.error && 
            <>
              <small>Phone number should start with + or 0.</small>
              <small>Min 11 & Max 13 numbers.</small>
            </>
          }
        </div>
        <div className="input-group">
          <input
            type='email'
            name="email"
            value={email.val}
            onChange={e => setEmail({ ...email, val: e.target.value })}
            onBlur={handleEmailBlur}
            required
          />
          <label aria-label="email" htmlFor="email">Email</label>
          {email.error && <small>Please enter a valid email address.</small>}
        </div>
        <div className="input-group">
          <input
            name="address"
            value={address.val}
            /* onChange={e => setAddress(e.target.value)} */
            onChange={e => setAddress({ ...address, val: e.target.value })}
            onBlur={handleAddressBlur}
            required />
          <label aria-label="address" htmlFor="address">Delivery Address</label>
        </div>
        <button aria-label="Submit Order" disabled={cart.length === 0} type="submit">CHECKOUT</button>
      </form>
    </div>
  )
};
