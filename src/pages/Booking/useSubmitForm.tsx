import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./BookingAPI";
import { BookingFormData } from "../../types/sharedTypes";

interface SubmitFormProps {
  formData: BookingFormData;
}

const useSubmitForm = () => {
  const [bookingForm, setBookingForm] = useState<BookingFormData | null>(null);
  const navigate = useNavigate();

  function submitForm(e: React.FormEvent<HTMLFormElement>, { formData }: SubmitFormProps): void {
    e.preventDefault();
    if (submitAPI(formData)) {
      setBookingForm({ ...formData });
    }
  }

  const { date, time, reserveNumber } = {...bookingForm};

  useEffect(() => {
    if (bookingForm) {
      localStorage.setItem('Phoodie-Table', JSON.stringify({
        date,
        time,
        reservation: reserveNumber
      }));
      navigate('/booking-confirmation', { state: bookingForm });
    }
  }, [bookingForm, navigate, date, time, reserveNumber]);

  return { submitForm };
};

export default useSubmitForm;