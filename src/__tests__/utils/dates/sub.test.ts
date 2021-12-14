import { sub, create } from "../../../utils/date";

describe("Subtracting dates", () => {
  it("should subtract 5 days", () => {
    const subtracted = sub(create("2020/10/23"), { days: 5 });

    expect(subtracted).toEqual(create("2020/10/18"));
  });

  it("should subtract 2 months", () => {
    const subtracted = sub(create("2020/10/23"), { months: 2 });

    expect(subtracted).toEqual(create("2020/08/23"));
  });

  it("should subtract 4 years", () => {
    const subtracted = sub(create("2020/10/23"), { years: 4 });

    expect(subtracted).toEqual(create("2016/10/23"));
  });

  it("should subtract 10 days, 12 month and 1 years", () => {
    const subtracted = sub(create("2020/10/23"), {
      days: 10,
      months: 12,
      years: 1,
    });

    expect(subtracted).toEqual(create("2018/10/13"));
  });
});
