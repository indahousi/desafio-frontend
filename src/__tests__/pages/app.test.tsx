import { render } from "@testing-library/react";
import App from "../../App";

describe("pages/ App", () => {
  it("should trigger one alert when click", () => {
    const screen = render(<App />);

    expect(screen).toBeTruthy();
  });
});
