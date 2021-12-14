import { format, create } from "../../../utils/date";

describe("Formatting dates", () => {
  it("should format to dd-MM-yyyy", () => {
    const formatted = format(create("2020/10/23"), "dd-MM-yyyy");

    expect(formatted).toEqual("23-10-2020");
  });

  it("should format date to dd", () => {
    const formatted = format(create("2020/10/03"), "dd");

    expect(formatted).toEqual("03");
  });

  it("should format date to d", () => {
    const formatted = format(create("2020/10/05"), "d");

    expect(formatted).toEqual("5");
  });

  it("should format date to MM", () => {
    const formatted = format(create("2020/10/05"), "MM");

    expect(formatted).toEqual("10");
  });

  it("should format date to MMM", () => {
    const formatted = format(create("2020/10/05"), "MMM");

    expect(formatted).toEqual("out");
  });

  it("should format date to MMMM", () => {
    const formatted = format(create("2020/10/05"), "MMMM");

    expect(formatted).toEqual("outubro");
  });

  it("should format date to MMMM with another language", () => {
    const formatted = format(create("2020/10/05"), "MMMM", { locale: "enUS" });

    expect(formatted).toEqual("October");
  });

  it("should format date to yy", () => {
    const formatted = format(create("2020/10/05"), "yy");

    expect(formatted).toEqual("20");
  });

  it("should format date to yyyy", () => {
    const formatted = format(create("2020/10/05"), "yyyy");

    expect(formatted).toEqual("2020");
  });
});
