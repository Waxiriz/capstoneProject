import { useState } from "react";

function BookingForm(props) {
    const [datePick, setDatePick] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("No occasion");

    const [actualTime, setActualTime] = useState(
        props.availableTimes?.map((times) => <option key={times}>{times}</option>)
    );

    const handleDateChange = (e) => {
        setDatePick(e.target.value);

        props.setAvailableTimes(e.target.value);
        setActualTime(props.availableTimes.map((times) => <option>{times}</option>));
    }

    const clearForm = () => {
        setDatePick("");
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
                        <label htmlFor="date">
                            Choose a date
                        </label>
                        <input
                            value={datePick}
                            id="date"
                            required
                            type="date"
                            onChange={handleDateChange}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="time">
                            Choose the time
                        </label>
                        <select
                            id="time"
                            required>
                                {actualTime}
                        </select>
                    </div>
                    <div className="Field">
                        <label htmlFor="guests">
                            Number of guests
                        </label>
                        <input
                            value={guests}
                            type="number"
                            id="guests"
                            onChange={(e) => {
                                setGuests(e.target.value);
                            }}
                            placeholder="Number of guests"
                            required
                            min={1}
                            max={10}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="occasion">
                            Occasion
                        </label>
                        <select
                            value={occasion}
                            id="occasion"
                            onChange={(e) => {
                                setOccasion(e.target.value);
                            }}>
                                <option value={"No occasion"}>No occasion</option>
                                <option value={"Birthday"}>Birthday</option>
                                <option value={"Anniversary"}>Anniversary</option>
                        </select>
                    </div>
                    <button type="submit">
                        <a href={"/confirmed"}>
                            Make your reservation
                        </a>
                    </button>
                </fieldset>
            </form>
        </>
    )
}

export default BookingForm;