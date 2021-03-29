import moment from "../../../node_modules/moment/moment";
import { yearsDifferenceRoundUp } from "../yearsDifferenceRoundUp";

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

  describe("when start and end are different dates but within the same month", () => {
    beforeEach(() => {
      start = moment("2020-05-02");
      end = moment("2020-05-25");
    });
    it("should return 0", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(0);
    });
  });

  describe("when start and end are 1 year minus 1 day apart, but are in the same month", () => {
    beforeEach(() => {
      start = moment("2020-05-02");
      end = moment("2021-05-01");
    });
    it("should return 1", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(1);
    });
  });

  describe("when start and end are exactly 1 year apart", () => {
    beforeEach(() => {
      start = moment("2020-05-02");
      end = moment("2021-05-02");
    });
    it("should return 1", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(1);
    });
  });

  describe("when start and end are exactly 2 years minus 1 day apart, but are in the same month", () => {
    beforeEach(() => {
      start = moment("2020-05-02");
      end = moment("2022-05-01");
    });
    it("should return 2", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(2);
    });
  });

  describe("when start and end are exactly 2 years apart", () => {
    beforeEach(() => {
      start = moment("2020-05-02");
      end = moment("2022-05-02");
    });
    it("should return 2", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(2);
    });
  });

  describe("when start and end are exactly 2 years minus 1 day apart, but are not in the same month", () => {
    beforeEach(() => {
      start = moment("2020-05-01");
      end = moment("2022-04-30");
    });
    it("should return 1", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(1);
    });
  });

  describe("when start and end are more than 3 years but less than 4 years apart", () => {
    beforeEach(() => {
      start = moment("2020-05-01");
      end = moment("2023-07-30");
    });
    it("should return 3", () => {
      result = yearsDifferenceRoundUp(start, end);
      expect(result).toEqual(3);
    });
  });
});
