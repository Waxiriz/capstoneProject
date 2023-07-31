import { Link } from "react-router-dom";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
    return (
        <>
            <h1 className="bookingPage-h1">
                Booking confirmed!
            </h1>
            <h2>The API isn't working, so all of this part is just visuals.</h2>
            <div className="styleBtn">
                <button><Link to={"/"}>Home</Link></button>
            </div>
        </>
    )
}

export default ConfirmedBooking;