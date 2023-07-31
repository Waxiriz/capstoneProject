import { Link } from "react-router-dom";

function ConfirmedBooking() {
    return (
        <>
            <h1>
                Booking confirmed!
            </h1>
            <h2>The API isn't working, so all of this part is just visuals.</h2>
            <button><Link to={"/"}>Home</Link></button>
        </>
    )
}

export default ConfirmedBooking;