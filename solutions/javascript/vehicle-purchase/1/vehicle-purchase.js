/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return (kind === 'car' || kind.includes('truck'))
}
/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} string1
 * @param {string} string2
 * @param {number} lengthFisrt
 * @returns {string} a sentence of advice which option to choose
 */
export function getBiggestString(string1, string2, lengthFisrt){
  let string1Minus = string1.toLowerCase(), string2Minus= string2.toLowerCase();
  for(let index=0; lengthFisrt>index; index++){
      if (Number.isInteger(string1Minus[index]) && Number.isInteger(string2Minus[index])){
        if((string1Minus[index] > string2Minus[index])){
          return string1;
        }
        if((string2Minus[index] > string2Minus[index])){
          return string2;
        }
      }
      if (string1Minus.charCodeAt(index) > string2Minus.charCodeAt(index)){
        return string2;
      }
      if (string2Minus.charCodeAt(index) > string1Minus.charCodeAt(index)){
        return string1;
      }
  }
  return ""
}
/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  let lengthFisrt = option1.length;
  let lengthSecond = option2.length;
  const END_MESSAGE = " is clearly the better choice."
  if(lengthFisrt > lengthSecond){
    return getBiggestString(option1, option2, lengthFisrt)+ END_MESSAGE;
  }else{
    return getBiggestString(option2, option1, lengthSecond) + END_MESSAGE;
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if(age> 10){
    return originalPrice * 0.5;
  }
  if(age>=3 && age <=10){
    return originalPrice * 0.7;
  }
  if(age >= 0 && age < 3){
    return originalPrice * 0.8;
  }
  return 0;
}
