enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(DayOfWeek.Monday, DayOfWeek.Sunday);

const isWeekend = (day: DayOfWeek): boolean => {
  if (day > 4) return true;
  else return false;
};

console.log(isWeekend(DayOfWeek.Wednesday));
console.log(isWeekend(DayOfWeek.Saturday));
