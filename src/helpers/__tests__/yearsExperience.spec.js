import moment from "../../../node_modules/moment/moment";
import { yearsDifferenceRoundUp } from "../yearsExperience";

describe("yearsDifferenceRoundUp", () => {
  let start;
  let end;
  let result;

  describe("when start and end are the same date", () => {
    beforeEach(() => {
      start = moment("2020-05-02");
      end = moment("2020-05-02");
    });
    it("should return 0", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(0);
    });
  });

  describe("when start and end are the same month and day, but are 7 years apart", () => {
    beforeEach(() => {
      start = moment("2013-05-02");
      end = moment("2020-05-02");
    });
    it("should return 7", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(7);
    });
  });

  describe("when start and end are 3 months apart, but are also more than 4 years apart", () => {
    beforeEach(() => {
      start = moment("2020-05-02");
      end = moment("2025-02-02");
    });
    it("should return 5", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(5);
    });
  });

  describe("when start and end are 3 months minus a day apart, but are also more than 4 years apart", () => {
    beforeEach(() => {
      start = moment("2020-05-02");
      end = moment("2025-02-01");
    });
    it("should return 4", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(4);
    });
  });
});
