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
  const numbersOrdinarys = [{key: 1, value: "st"},{key: 2, value: "nd"},{key: 3, value: "rd"}];
  const exclude =[11,12,13];
  let endOrdinalNumber= "";
  let find = numbersOrdinarys.find((num) => numeral.toString().endsWith(num.key));
  let numeralString = `${numeral.toString()[numeral.toString().length-2]}${numeral.toString()[numeral.toString().length-1]}`;
  if(exclude.find((num) => num == numeralString) || find === undefined){
    endOrdinalNumber = "th"
  }else if(Object.hasOwn(find, "value")){
    endOrdinalNumber = find["value"];
  }
  return `${name}, you are the ${numeral}${endOrdinalNumber} customer we serve today. Thank you!`;
};
