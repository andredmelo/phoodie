import { useState } from "react";
import { validateEmail, validatePhone } from "./fieldsValidation";
import { BookingState, BookingAction } from "../../types/menu";

interface BookingFormProps {
  dispatch: React.Dispatch<BookingAction>;
  availableTimes: string[];
  submitForm: (e: React.FormEvent<HTMLFormElement>, data: any) => void;
}

export default function BookingForm({ dispatch, availableTimes, submitForm }: BookingFormProps): JSX.Element {
  const [firstName, setFirstName] = useState<BookingState>({ val: '', error: false });
  const [lastName, setLastName] = useState<BookingState>({ val: '', error: false });
  const [email, setEmail] = useState<BookingState>({ val: '', error: false });
  const [phone, setPhone] = useState<BookingState>({ val: '', error: false });
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('');
  const [guests, setGuests] = useState<string>('2');

  const disableBtn = phone.error || email.error || firstName.error || lastName.error;

  function handleDateReducer() {
    dispatch({
      type: 'date',
      payload: new Date(date),
    })
  };

  function handleEmailBlur() {
    if (validateEmail(email.val)) {
      setEmail({...email, error: false})
    } else {
      setEmail({...email, error: true})
    }
  };

  function handlePhoneBlur() {
    if (validatePhone(phone.val)) {
      setPhone({...phone, error: false})
    } else {
      setPhone({...phone, error: true})
    }
  };

  function handleFirstNameBlur() {
    const textRegex = /[a-zA-Z]{3,15}$/;
    if (textRegex.test(firstName.val)) {
      setFirstName({...firstName, error: false})
    } else {
      setFirstName({...firstName, error: true})
    }
  };

  function handleLastNameBlur() {
    const textRegex = /[a-zA-Z]{3,15}/;
    if (textRegex.test(lastName.val)) {
      setLastName({...lastName, error: false})
    } else {
      setLastName({...lastName, error: true})
    }
  };

  return (
    <form
    className='reservationsForm p-8 md:p-12 bg-white/95 rounded-lg'
    onSubmit={e => submitForm(e, {formData: {
        firstName: firstName.val,
        lastName: lastName.val,
        email: email.val,
        phone: phone.val,
        date: date,
        time: time,
        occasion: occasion,
        guests: guests,
        reserveNumber: Math.floor(Math.random() * 1000),
      }
    })}>
      <h2 className="py-6 text-4xl text-[var(--color-turkeyRed)] font-medium text-center">Online Reservation</h2>
      <p>Choose date and time:</p>
      <div className='date-time mb-6'>
        <input
          type="date"
          id="date"
          value={date}
          onChange={e => {
            setDate(e.target.value);
            handleDateReducer();
          }}
          min="2024-11-01" max="2026-01-01"
          required
        />
        <select name="time" value={time} onChange={e => setTime(e.target.value)} required>
          <option label="Select time" value="">Select time</option>
          {
            availableTimes.map(item => {
              return (
                <option value={item} key={item}>{item}</option>
              )
            })
          }
        </select>
      </div>
      <select name="guests" value={guests} onChange={e => setGuests(e.target.value)} required className='mb-6'>
        {/* <option value="12:00">2 guests</option> */}
        <option value="1">1 Person</option>
        <option value="2">2 Guests</option>
        <option value="3">3 Guests</option>
        <option value="4">4 Guests</option>
        <option value="5">5 Guests</option>
        <option value="6">6 Guests</option>
        <option value="7">7 Guests</option>
        <option value="8">8 Guests</option>
        <option value="9">9 Guests</option>
        <option value="10">10 Guests</option>
      </select>
      {/* <small className='mb-2'>*Max 10 guests per table</small> */}
      <select
        className='mb-10'
        name="occasion"
        value={occasion}
        onChange={e => setOccasion(e.target.value)}>
        <option label="Select an occasion (optional)" value="">Select an occasion (optional)</option>
        <option label="Birthday" value="Birthday">Birthday</option>
        <option label="Anniversary" value="Anniversary">Anniversary</option>
        <option label="Business" value="Business">Business</option>
        {/* <option label="Other" value="Other">Other</option> */}
      </select>
      <div className="input-group">
        <input
          type='text'
          name="firstName"
          maxLength={15}
          value={firstName.val}
          onChange={e => setFirstName({...firstName, val: e.target.value})}
          onBlur={handleFirstNameBlur}
          required
        />
        <label aria-label="firstName" htmlFor="firstName">First Name</label>
        {firstName.error && <small>Please enter a First Name.</small>}
      </div>
      <div className="input-group">
        <input
          type='text'
          name="lastName"
          value={lastName.val}
          maxLength={15}
          onChange={e => setLastName({...lastName, val: e.target.value})}
          onBlur={handleLastNameBlur}
          required
        />
        <label aria-label="lastName" htmlFor="lastName">Last Name</label>
        {lastName.error && <small>Please enter a valid Last Name.</small>}
      </div>
      <div className="input-group">
        <input
          type='email'
          name="email"
          value={email.val}
          onChange={e => setEmail({...email, val: e.target.value})}
          onBlur={handleEmailBlur}
          required
        />
        <label aria-label="email" htmlFor="email">Email</label>
        {email.error && <small>Please enter a valid email address.</small>}
      </div>
      <div className="input-group">
        <input
          type='tel'
          name="phone"
          value={phone.val}
          onChange={e => setPhone({...email, val: e.target.value})}
          onBlur={handlePhoneBlur}
          minLength={11} maxLength={11}
          required
        />
        <label aria-label="phone" htmlFor="phone">Phone Number e.g +0123456789</label>
        {phone.error && 
          <>
            <small>Phone number should start with + or 0.</small>
            <small>Min & Max 10 numbers.</small>
          </>
        }
      </div>
      <button aria-label="On Click confirm booking details" disabled={disableBtn} type="submit">Confirm booking</button>
    </form>
  )
};
