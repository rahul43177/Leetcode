/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let counter = {}
    for(let val of nums) {
        counter[val] = (counter[val] || 0) + 1 
    }

    //iterating over the counter to check the value ==1 
    for(let key in counter) {
        if(counter[key] == 1) {
            return Number(key) ;
        }
    }

};