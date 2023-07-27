import { useState } from "react";

function BookingForm() {
    const [datePick, setDatePick] = useState("");
    const [timePick, setTimePick] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("No occasion");

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]

    const clearForm = () => {
        setDatePick("");
        setTimePick("");
        setGuests(1);
        setOccasion("No occasion");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table booked succesfully!")
        clearForm();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Book a table</h2>
                    <div className="Field">
                        <label>
                            Choose a date
                        </label>
                        <input
                            value={datePick}
                            type="date"
                            onChange={(e) => {
                                setDatePick(e.target.value);
                            }}
                            placeholder="Date"
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Choose the time
                        </label>
                        <select
                            value={timePick}
                            onChange={(e) => {
                                setTimePick(e.target.value);
                            }}>
                                {availableTimes.map((availableTime, index) => (
                                    <option key={index} value={availableTime}>
                                        {availableTime}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className="Field">
                        <label>
                            Number of guests
                        </label>
                        <input
                            value={guests}
                            type="number"
                            onChange={(e) => {
                                setGuests(e.target.value);
                            }}
                            placeholder="1"
                            min={1}
                            max={10}
                        />
                    </div>
                    <div className="Field">
                        <label>
                            Occasion
                        </label>
                        <select
                            value={occasion}
                            onChange={(e) => {
                                setOccasion(e.target.value);
                            }}>
                                <option value={"No occasion"}>No occasion</option>
                                <option value={"Birthday"}>Birthday</option>
                                <option value={"Anniversary"}>Anniversary</option>
                        </select>
                    </div>
                    <button type="submit">
                        Make your reservation
                    </button>
                </fieldset>
            </form>
        </>
    )
}

export default BookingForm;