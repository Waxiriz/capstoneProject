import React, { useState } from "react";
import "./BookingForm.css";
import { useNavigate } from "react-router-dom";

function BookingForm(props) {
  const [nameCustomer, setNameCustomer] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [datePick, setDatePick] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("No occasion");
  const [errors, setErrors] = useState({});
  const [actualTime, setActualTime] = useState(
    props.availableTimes?.map((times) => <option key={times}>{times}</option>)
  );

  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setDatePick(e.target.value);
    fetchAvailableTimes(e.target.value);
  };

  const fetchAvailableTimes = (selectedDate) => {
    const timesOptions = props.availableTimes.map((times) => <option key={times}>{times}</option>);
    setActualTime(timesOptions);
  };

  const clearForm = () => {
    setEmailAdd("");
    setNameCustomer("");
    setDatePick("");
    setGuests(1);
    setOccasion("No occasion");
    setErrors({});
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, proceed with form submission logic here
      alert("Table booked successfully!");
      clearForm();
      navigate("/confirmed");
    } else {
      // Form has errors, set the errors state to display validation messages
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate nameCustomer field
    if (!nameCustomer) {
      errors.nameCustomer = "Reservation name is required";
    }

    // Validate emailAdd field
    if (!emailAdd) {
      errors.emailAdd = "Contact email is required";
    } else if (!isValidEmail(emailAdd)) {
      errors.emailAdd = "Invalid email address";
    }

    // Validate datePick field
    if (!datePick) {
      errors.datePick = "Choose a date";
    }

    // Validate guests field
    if (!guests || guests < 1 || guests > 10) {
      errors.guests = "Number of guests must be between 1 and 10";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const isFormValid = Object.keys(errors).length === 0;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Personal information</h2>
          <div className="Field">
            <label htmlFor="name">Reservation name:</label>
            <input
              value={nameCustomer}
              id="name"
              aria-label="name to make the reservation"
              required
              onChange={(e) => {
                setNameCustomer(e.target.value);
              }}
              placeholder="Smith"
            />
            {errors.nameCustomer && <div className="error">{errors.nameCustomer}</div>}
          </div>
          <div className="Field">
            <label htmlFor="email">Contact email:</label>
            <input
              value={emailAdd}
              id="email"
              aria-label="email address"
              required
              type="email"
              onChange={(e) => {
                setEmailAdd(e.target.value);
              }}
              placeholder="smith@email.com"
            />
            {errors.emailAdd && <div className="error">{errors.emailAdd}</div>}
          </div>
          <div className="Field">
            <label htmlFor="date">Choose a date:</label>
            <input value={datePick} id="date" aria-label="date selection" required type="date" onChange={handleDateChange} />
            {errors.datePick && <div className="error">{errors.datePick}</div>}
          </div>
          <div className="Field">
            <label htmlFor="time">Choose the time:</label>
            <select id="time" required aria-label="time selection">
              {actualTime}
            </select>
          </div>
          <div className="Field">
            <label htmlFor="guests">Number of guests:</label>
            <input
              value={guests}
              type="number"
              aria-label="number of guests"
              id="guests"
              onChange={(e) => {
                setGuests(e.target.value);
              }}
              placeholder="Number of guests"
              required
              min={1}
              max={10}
            />
            {errors.guests && <div className="error">{errors.guests}</div>}
          </div>
          <div className="Field">
            <label htmlFor="occasion">Occasion:</label>
            <select
              value={occasion}
              id="occasion"
              aria-label="occasion"
              onChange={(e) => {
                setOccasion(e.target.value);
              }}
            >
              <option value={"No occasion"}>No occasion</option>
              <option value={"Birthday"}>Birthday</option>
              <option value={"Anniversary"}>Anniversary</option>
            </select>
          </div>
          <button type="submit" disabled={!isFormValid} aria-label="on click">
            Make your reservation
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default BookingForm;
