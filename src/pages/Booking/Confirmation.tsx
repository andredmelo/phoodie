import { birthdaySvg, anniversarySvg, businessSvg, generalSvg } from "../../assets/images/svg";
import { Link, useLocation } from "react-router-dom";
import { BookingFormData } from "../../types/menu";

export default function Confirmation(): JSX.Element {
  const { state } = useLocation();
  const { date, firstName, lastName, email, phone, time, occasion, guests, reserveNumber } = state as BookingFormData;

  const occasionSvg = (
    occasion === 'Birthday' ? birthdaySvg :
    occasion === 'Anniversary' ? anniversarySvg :
    occasion === 'Business' ? businessSvg :
    generalSvg
  );

  function upperCase(word: string): string {
    const original = [...word];
    return original[0].toUpperCase() + original.slice(1).join('');
  };

  return (
    <>
      <div className="reserve">
        <h2>Table reserved at the Little Lemon Chicago Restaurant!</h2>
        <p>Here are the details of your reservation:</p>
        <div className="details">
          <ul>
            <li>Reservation number:</li>
            <li>Full Name:</li>
            <li>Phone Number:</li>
            <li>Reservation date:</li>
            <li>Reservation time:</li>
            <li>Number of People:</li>
            <li>Occasion:</li>
          </ul>
          <ul>
            <li><b>000-{reserveNumber}-428</b></li>
            <li>{upperCase(firstName)} {upperCase(lastName)}</li>
            <li>{phone}</li>
            <li>{date}</li>
            <li>{time}</li>
            <li>{guests}</li>
            <li>{occasion ? occasion : 'General'} {occasionSvg}</li>
          </ul>
        </div>
        <p>Order details has been sent to: <b><i>{email}</i></b></p>
        <br/>
        <Link to="/reservations" rel="href" aria-label="Go back to Reservations page">Go Back</Link>
      </div>
    </>
  )
};
