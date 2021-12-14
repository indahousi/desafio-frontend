import { sum, create } from "../../../utils/date";

describe("Summing dates", () => {
  it("should sum 5 days", () => {
    const added = sum(create("2020/10/23"), { days: 5 });

    expect(added).toEqual(create("2020/10/28"));
  });

  it("should sum 2 months", () => {
    const added = sum(create("2020/10/23"), { months: 2 });

    expect(added).toEqual(create("2020/12/23"));
  });

  it("should sum 4 years", () => {
    const added = sum(create("2020/10/23"), { years: 4 });

    expect(added).toEqual(create("2024/10/23"));
  });

  it("should sum 3 days, 1 month and 3 years", () => {
    const added = sum(create("2020/10/23"), {
      days: 3,
      months: 1,
      years: 3,
    });

    expect(added).toEqual(create("2023/11/26"));
  });
});
