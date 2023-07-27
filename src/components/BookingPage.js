import BookingForm from "./BookingForm";
import { useReducer } from "react";

function BookingPage() {

    function initializeTimes() {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    }

    function updateTimes(date) {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }

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