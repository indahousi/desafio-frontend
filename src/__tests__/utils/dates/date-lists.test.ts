import {
  create,
  datesBetween,
  eachDaysOfMonth,
  eachMonthsOfYear,
} from "../../../utils/date";

describe("Getting list of dates", () => {
  it("should get all dates between 23/10/2022 to 10/11/2022", () => {
    const start = create("2022-10-23");
    const end = create("2022-11-10");
    const dates = datesBetween(start, end, { days: 1 });

    const expected = [
      create("2022-10-23"),
      create("2022-10-24"),
      create("2022-10-25"),
      create("2022-10-26"),
      create("2022-10-27"),
      create("2022-10-28"),
      create("2022-10-29"),
      create("2022-10-30"),
      create("2022-10-31"),
      create("2022-11-01"),
      create("2022-11-02"),
      create("2022-11-03"),
      create("2022-11-04"),
      create("2022-11-05"),
      create("2022-11-06"),
      create("2022-11-07"),
      create("2022-11-08"),
      create("2022-11-09"),
      create("2022-11-10"),
    ];

    expect(dates).toEqual(expected);
  });

  it("should list all dates of month", () => {
    const dates = eachDaysOfMonth(create("2022-10-23"));

    const expected = [
      create("2022-09-25"),
      create("2022-09-26"),
      create("2022-09-27"),
      create("2022-09-28"),
      create("2022-09-29"),
      create("2022-09-30"),

      create("2022-10-01"),
      create("2022-10-02"),
      create("2022-10-03"),
      create("2022-10-04"),
      create("2022-10-05"),
      create("2022-10-06"),
      create("2022-10-07"),
      create("2022-10-08"),
      create("2022-10-09"),
      create("2022-10-10"),
      create("2022-10-11"),
      create("2022-10-12"),
      create("2022-10-13"),
      create("2022-10-14"),
      create("2022-10-15"),
      create("2022-10-16"),
      create("2022-10-17"),
      create("2022-10-18"),
      create("2022-10-19"),
      create("2022-10-20"),
      create("2022-10-21"),
      create("2022-10-22"),
      create("2022-10-23"),
      create("2022-10-24"),
      create("2022-10-25"),
      create("2022-10-26"),
      create("2022-10-27"),
      create("2022-10-28"),
      create("2022-10-29"),
      create("2022-10-30"),
      create("2022-10-31"),

      create("2022-11-01"),
      create("2022-11-02"),
      create("2022-11-03"),
      create("2022-11-04"),
      create("2022-11-05"),
    ];

    expect(dates).toEqual(expected);
  });

  it("should list all months of year", () => {
    const months = eachMonthsOfYear(create("2022-10-23"));

    const expected: Date[] = [
      create("2022-01-01"),
      create("2022-02-01"),
      create("2022-03-01"),
      create("2022-04-01"),
      create("2022-05-01"),
      create("2022-06-01"),
      create("2022-07-01"),
      create("2022-08-01"),
      create("2022-09-01"),
      create("2022-10-01"),
      create("2022-11-01"),
      create("2022-12-01"),
    ];

    expect(months).toEqual(expected);
  });
});
