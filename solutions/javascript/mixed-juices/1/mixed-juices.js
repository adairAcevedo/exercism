// @ts-check

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  const defaultTime = 2.5;
  let time = 0;

  switch(name){
    case 'Pure Strawberry Joy':
      time = 0.5
      break;
    case 'Energizer':
      time = 1.5;
      break;
    case 'Green Garden':
      time= 1.5;
      break;
    case 'Tropical Island':
      time = 3.0
      break;
    case 'All or Nothing':
      time = 5.0
      break;
    default:
      time = defaultTime;
      break;
  }
  return time;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let totalWedges = 0;
  let index =0;
  while(wedgesNeeded >totalWedges && limes.length > index){
    switch(limes[index]){
      case 'small':
        totalWedges += 6;
        break;
      case 'medium':
        totalWedges += 8;
        break;
      case 'large':
        totalWedges += 10;
        break;
    }
    index += 1;
  }
  return index;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let index = 0;
  do{
    timeLeft = timeLeft - timeToMixJuice(orders[index])
    orders.shift()
  }while(timeLeft >0)

  return orders;
}
