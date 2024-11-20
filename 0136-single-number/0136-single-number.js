/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //hashmap 
    const counter = {}

    for(let el of nums) {
        counter[el] = (counter[el] || 0)+ 1;
    }    

    for(let key in counter){
        if(counter[key] == 1) {
            return Number(key);
        }
    }
};

