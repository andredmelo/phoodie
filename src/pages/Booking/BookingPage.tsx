import { useReducer, useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI } from "./BookingAPI";
/* import '../../assets/shared.css'; */
import './Booking.css';
import useSubmitForm from "./useSubmitForm";
import { MediaQueries } from "../../types/mediaQueries";
import { BookingAction } from "../../types/sharedTypes";

function initializeTimes(): string[] {
  let today = new Date();
  return fetchAPI(today);
}

const updateTimes = (availableTimes: string[], action: BookingAction): string[] => {
  switch (action.type) {
    case 'date':
      return fetchAPI(action.payload);
    default:
      return availableTimes;
  }
};

const BookingPage: React.FC<MediaQueries> = (props): JSX.Element => {
  const { submitForm } = useSubmitForm();
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [backgroundImage, setBackgroundImage] = useState("url('assets/images/backgrounds/Reservations-Phoodie-2560w.webp')");
  useEffect(() => {
    let backgroundImage = "url('assets/images/backgrounds/Reservations-Phoodie-2560w.webp')";
    if (props.isUnder768) {
      //backgroundImage = "url('assets/images/backgrounds/Reservations-Phoodie-768w.webp')";
    } else if (props.isUnder1024) {
      backgroundImage = "url('assets/images/backgrounds/Reservations-Phoodie-1024w.webp')";
    } else if (props.isUnder1280) {
      backgroundImage = "url('assets/images/backgrounds/Reservations-Phoodie-1280w.webp')";
    } else if (props.isUnder1536) {
      backgroundImage = "url('assets/images/backgrounds/Reservations-Phoodie-1920w.webp')";
    }
    setBackgroundImage(backgroundImage);

  }, [props.isUnder768, props.isUnder1024, props.isUnder1280, props.isUnder1536]);

  return (
    <>
      <div
        className="reserve pt-6 md:pt-16 pb-24 md:pb-32 bg-center bg-cover"
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="w-full spacer" />
        <BookingForm
          {...{
            submitForm,
            availableTimes,
            dispatch,
          }}
        />
      </div>

      <div
        className="dslc-section-divider dslc-flip-hor dslc-flip-ver"
        data-divider-pos="bottom"
        data-divider-style="hill-side-soft-off"
      >
				<svg id="hill-side-soft-off" className="fill-[var(--color-whiteSmoke)] w-full h-[calc(var(--navbar-height)*var(--multiplier))]" preserveAspectRatio="none" viewBox="0 0 1442 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
					<path className="divider-color" d="M1442,30.5019121 L1442,100.654403 L0,100.654403 C572.295431,33.9877365 935.145886,0.654403168 1088.55136,0.654403168 C1162.74657,0.654403168 1280.56278,10.6035728 1442,30.5019121 Z" id="hill-side-soft-off" transform="translate(721.000000, 50.654403) scale(1, -1) translate(-721.000000, -50.654403) "></path>
				</svg>
      </div>

      <div className="flex flex-col justify-center items-center mb-[-4rem] pb-32 md:pb-44 lg:pb-52 bg-[var(--color-whiteSmoke)]">
        <h2 className="pt-12 md:pt-6 pb-4 text-2xl md:text-4xl font-semibold text-[var(--color-wenge)]">Phởodie restaurant location</h2>
        <h3 className="pt-4 pb-8 text-lg md:text-xl font-medium text-[var(--color-jetBlack)]">6363 N Milwaukee Ave, Chicago, IL 60646</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5930.327458581551!2d-87.79216635432768!3d41.99676158491562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x880fc947ee7d6871%3A0x4ce4921ec14fdd9b!2s6363%20N%20Milwaukee%20Ave%2C%20Chicago%2C%20IL%2060646%2C%20USA!3m2!1d41.9967617!2d-87.7870165!5e0!3m2!1sen!2s!4v1697847037229!5m2!1sen!2s"
          title="Google Map"
          className="w-[90%] md:w-[80%] lg:w-[65%] h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
          /* allowfullscreen=""  */
          loading="lazy"
          /* referrerpolicy="no-referrer-when-downgrade" */
        ></iframe>
      </div>
    </>
  )
};
export default BookingPage;

export { updateTimes, initializeTimes, useSubmitForm };