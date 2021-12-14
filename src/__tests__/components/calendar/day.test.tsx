import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Calendar from "../../../components/calendar";
import dateUtils from "../../../utils/date";

describe("Calendar/ Day", () => {
  it("should trigger one alert when click", () => {
    render(<Calendar initialDate={dateUtils.create("2022-10-23")} />);

    const dayElement = screen.getByTestId("day-test-05-10-2022-id");
    const anotherDayElement = screen.getByTestId("day-test-04-10-2022-id");

    expect(dayElement).toHaveStyle("background: #fff;");

    userEvent.click(dayElement);
    expect(dayElement).toHaveStyle("background: #f22;");
    expect(anotherDayElement).toHaveStyle("background: #fff;");
  });
});
