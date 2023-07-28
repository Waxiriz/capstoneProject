import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import { initializeTimes, updateTimes } from "./BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingPage/>);
    const headingElement = screen.getByText("Book a table");
    expect(headingElement).toBeInTheDocument();
})

test('Tests the output of the initialization of the timeslots', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
})

test('Test updateTimes returns the same value that is provided in the state', () => {
    const state = ["12:00", "13:00", "14:00"];
    const result = updateTimes(state);
    expect(result).toEqual(state);
})