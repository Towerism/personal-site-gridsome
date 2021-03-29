import moment from "moment";

const START = "2016-04-01";

export function yearsDifferenceRoundUp(start, end) {
  return moment(end)
    .startOf("month")
    .diff(moment(start).startOf("month"), "years");
}

export function yearsExperience() {
  return yearsDifferenceRoundUp(START, new Date());
}
