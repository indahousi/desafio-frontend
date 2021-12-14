import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calendar from "../../../components/calendar";
import { create } from "../../../utils/date";

describe("Calendar/ Actions", () => {
  it("should sub one month when user click in previous button", () => {
    render(<Calendar initialDate={create("2021-10-23")} />);

    const previousElement = screen.getByTestId("prev-test-id");

    userEvent.click(previousElement);

    const monthElement = screen.getByTestId("month-test-id");

    expect(monthElement).toHaveTextContent("setembro - 2021");
  });

  it("should add one month the date when user click in next button", () => {
    render(<Calendar initialDate={create("2021-10-23")} />);

    const nextElement = screen.getByTestId("next-test-id");

    userEvent.click(nextElement);

    const monthElement = screen.getByTestId("month-test-id");

    expect(monthElement).toHaveTextContent("novembro - 2021");
  });

  it("when showMonths is true should sub one year when user click in previous button", () => {
    render(<Calendar initialDate={create("2021-10-23")} />);

    const monthElement = screen.getByTestId("month-test-id");

    userEvent.click(monthElement);

    const previousElement = screen.getByTestId("prev-test-id");

    userEvent.click(previousElement);

    expect(monthElement).toHaveTextContent("2020");
  });

  it("when showMonths is true should sum one year when user click in next button", () => {
    render(<Calendar initialDate={create("2021-10-23")} />);

    const monthElement = screen.getByTestId("month-test-id");

    userEvent.click(monthElement);

    const nextElement = screen.getByTestId("next-test-id");

    userEvent.click(nextElement);

    expect(monthElement).toHaveTextContent("2022");
  });

  it("when showMonths is true should click in one of months", () => {
    render(<Calendar initialDate={create("2021-10-23")} />);

    const monthElement = screen.getByTestId("month-test-id");

    userEvent.click(monthElement);

    const monthButtonElement = screen.getByTestId("month-test-julho-id");

    userEvent.click(monthButtonElement);

    expect(monthElement).toHaveTextContent("julho - 2021");
  });
});
