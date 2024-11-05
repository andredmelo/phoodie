import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./BookingAPI";
import { BookingFormData } from "../../types/menu";

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
      localStorage.setItem('Little_Lemon-Table', JSON.stringify({
        date,
        time,
        reservation: reserveNumber
      }));
      navigate('/confirmation', { state: bookingForm });
    }
  }, [bookingForm, navigate, date, time, reserveNumber]);

  return { submitForm };
};

export default useSubmitForm;