import { render, screen } from "@testing-library/react";
import Calendar from "../../../components/calendar";
import dateUtils from "../../../utils/date";

describe("Calendar", () => {
  it("should use a custom initial date", () => {
    render(<Calendar initialDate={dateUtils.create("2022-10-23")} />);

    const monthElement = screen.getByTestId("month-test-id");

    expect(monthElement).toHaveTextContent("outubro - 2022");
  });

  it("should use the default date", () => {
    render(<Calendar />);
    const monthElement = screen.getByTestId("month-test-id");

    const month = dateUtils.format(new Date(), "MMMM - yyyy");

    expect(monthElement).toHaveTextContent(month);
  });
});
