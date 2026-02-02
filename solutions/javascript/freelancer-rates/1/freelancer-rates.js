const HOUR_PER_DAY =8; 
const MONTHLY_DAYS_WORK = 22;
const PERCENTAJE_RATE = 1;
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */

export function dayRate(ratePerHour) {
  return ratePerHour * HOUR_PER_DAY;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (ratePerHour * HOUR_PER_DAY));
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let ratePerDay = dayRate(ratePerHour);
  let fullyMonths = Math.floor(numDays/ MONTHLY_DAYS_WORK);
  let amountByMonths = fullyMonths * MONTHLY_DAYS_WORK * ratePerDay;
  let letfDays = numDays-(fullyMonths* MONTHLY_DAYS_WORK);
  let amountMonthsWithDiscount = amountByMonths * (PERCENTAJE_RATE-discount);
  let amountByLeftDays = letfDays*ratePerDay;
  return Math.ceil(amountByLeftDays+ amountMonthsWithDiscount);
}