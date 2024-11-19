/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let unique = new Set(nums);

    for(let i =1;i<=nums.length;i++) {
        if(!unique.has(i)) {
            return i;
        }
    }
    return 0;
};