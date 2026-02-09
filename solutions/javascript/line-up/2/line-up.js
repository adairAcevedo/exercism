//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/*
  * @param {string} name
  * @param {number} numeral
  * @return {string} some
*/

export const format = (name, numeral) => {
  let suffix = "th";
  if(numeral % 100 < 11 || numeral % 100 > 13){
    if(numeral % 10 === 1){ suffix = "st"}
    if(numeral % 10 === 2){ suffix = "nd"}
    if(numeral % 10 === 3){ suffix = "rd"}
  }
  return `${name}, you are the ${numeral+suffix} customer we serve today. Thank you!`;
};
