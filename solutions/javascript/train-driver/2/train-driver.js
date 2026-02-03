/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids
 * @returns {number[]} wagon ids
 */
// export function getListOfWagons(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
export function getListOfWagons(...numbers) {
  return numbers;
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */

export function fixListOfWagons(numbers) {
  let [first, second, ...last] = numbers;
  return [...last, first, second]
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  let [firstId, ...lastids] = ids;
  return [firstId, ...missingWagons, ...lastids];
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  return {...information,...additional}
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  let {timeOfArrival,...extraInformation} = information;
  return [timeOfArrival,extraInformation];
}
