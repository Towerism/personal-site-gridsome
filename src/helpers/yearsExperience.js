import moment from "moment";

const START = "2016-04-01";

export function yearsDifferenceRoundUp(start, end) {
  return moment(end)
    .add(3, "months")
    .diff(moment(start), "years");
}

export function yearsExperience() {
  return yearsDifferenceRoundUp(START, new Date());
}
