import { useState, useEffect } from "react";
import { birthdaySvg, anniversarySvg, businessSvg, generalSvg } from "../../assets/images/svg";
import { Link, useLocation } from "react-router-dom";
import { useNavContext } from '../../context/NavContext';
import { MediaQueries } from "../../types/mediaQueries";
import { BookingFormData } from "../../types/sharedTypes";

const BookingConfirmation: React.FC<MediaQueries> = (props): JSX.Element => {
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

  }, [props.isUnder768, props.isUnder1024, props.isUnder1280, props.isUnder1536]);


  const { changeSection } = useNavContext();
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
      <div
        className="reserve min-h-screen"
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="w-full spacer" />
        <div className='reservationsForm flex flex-col items-center justify-center max-w-[95%] md:max-w-[55%] lg:max-w-[600px] my-8 md:my-0 p-8 md:p-12 bg-white/[0.98] rounded-lg'>
          <h2 className="px-2 text-center">Table reserved at the Phởodie Chicago Restaurant!</h2>
          <p>Here are the details of your reservation:</p>
          <div className="details gap-4">
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
              <li className="flex flex-row gap-2">{occasionSvg} {occasion ? occasion : 'General'}</li>
            </ul>
          </div>
          <p>Order details has been sent to: <b><i>{email}</i></b></p>
          <br/>
          <Link
            to="/"
            rel="href"
            aria-label="Go back to Home page"
            onClick={() => changeSection(0)}
          >
            Go Back
          </Link>
        </div>
      </div>
    </>
  )
};

export default BookingConfirmation;