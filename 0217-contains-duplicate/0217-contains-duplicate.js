/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let counter = {}
    for(let element of nums) {
        counter[element] = (counter[element] || 0) + 1 
    }

    for(let key in counter) {
        if(counter[key] > 1) {
            return true ;
        }
    }
    return false;
};