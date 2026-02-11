/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

/** 
 * @param {number} time
 * @returns {string}
*/
export function cookingStatus(time){
    if(time > 0){
        return "Not done, please wait." 
    }
    if(time === 0){
        return "Lasagna is done." 
    }
    return "You forgot to set the timer."
}

/**
 * 
 * @param {string[]} layers 
 * @param {number} minutes 
 * @returns 
 */
export function preparationTime(layers = [], minutes = 2){
    return layers.length * minutes;
}

/**
 * 
 * @param {string[]} ingredients 
 * @returns 
 */
export function quantities(ingredients){
    let noodles = 0, sauce = 0;
    noodles = ingredients.filter((item) => item === 'noodles').length;
    sauce = ingredients.filter((item)=> item === 'sauce').length;

    return {noodles: noodles * 50, sauce: sauce * 0.2}
}

/**
 * 
 * @param {string[]} friendsList 
 * @param {string[]} myList 
 */

export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length-1])
}

/**
 * 
 * @param {object} recipe 
 * @param {number} people 
 * @returns {object}
 */
export function scaleRecipe(recipe, people){
    let portions = 2, resultRecipe ={};
    for(let key in recipe){
        resultRecipe[key] = (recipe[key]/portions)* people;
    }
    return resultRecipe
}