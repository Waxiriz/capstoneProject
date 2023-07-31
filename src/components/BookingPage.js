import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../bookingAPI";

export function initializeTimes() {
    // The API doesn't seem to work. According to the discussion on coursera, it looks like the is a know issue.
    const today = new Date();
    return fetchAPI(today);
}

export function updateTimes(date) {
    return fetchAPI(date)
}

function BookingPage() {

    const [availableTimes, dispatch] = useReducer(updateTimes(""), initializeTimes());

    return (
        <>
            This is the Booking page.
            <BookingForm 
            availableTimes={availableTimes} 
            setAvailableTimes={dispatch}/>
        </>
    )
}

export default BookingPage;