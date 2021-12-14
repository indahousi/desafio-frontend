import { create } from "../../../utils/date";

describe("Creating dates", () => {
  it("should create a date compatible with timezone UTC", () => {
    const utcDate = create(new Date("2020-10-23"));

    expect(utcDate).toEqual(new Date("2020-10-23T03:00:00.000Z"));
  });
});
