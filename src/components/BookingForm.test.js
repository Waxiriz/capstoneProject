import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, updateTimes } from "./BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingPage/>);

    const link = screen.getByRole('link', {name: 'Make your reservation'})
    expect(link).toHaveAttribute("href");
    link.setAttribute('disabled', true);
    expect(link).toHaveAttribute("disabled");

    const headingElement = screen.getByText("Book a table");
    expect(headingElement).toBeInTheDocument();
})

test('Tests the output of the initialization of the timeslots', () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0);
})

test('Test updateTimes returns the same value that is provided in the state', () => {
    const state = "07-29-2023";
    const result = updateTimes(state);
    const expectedTimes = ["17:00", "17:30", "19:30", "20:00", "21:00", "23:00"];
    expect(result).toEqual(expectedTimes);
})