var visitors = [
  1234, 156, 162, 15962, 1561, 15613, 15, 1231, 15231, 651, 621, 554, 25,
];

const MON = 0,
  TUE = 1,
  WED = 2,
  THU = 3,
  FRI = 4,
  SAT = 5,
  SUN = 6;

let toWeekDay = (n) => n % 7;

console.log(visitors.filter((count, index) => toWeekDay(index) === WED));
