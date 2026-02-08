// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;
  for (let index = 0; index < birdsPerDay.length; index++) {
    totalCount += birdsPerDay[index];
  }

  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let totalCount = 0;
  let index = week > 1 ? ((week-1)*7) : 0, endWeek = index+7;
  for (index; index < endWeek; index++) {
    totalCount += birdsPerDay[index];
  }

  return totalCount
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index++) {
    birdsPerDay[index] = index %2 ===0 ? birdsPerDay[index]+1 : birdsPerDay[index];
  }
  return birdsPerDay;
}
