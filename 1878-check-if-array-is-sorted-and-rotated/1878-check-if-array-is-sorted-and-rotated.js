/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let dropCount = 0;
    let n = nums.length;
    for(let i = 0;i<nums.length;i++) {
        if(nums[i] > nums[(i+1)%n]) {
            dropCount +=1;
        }
    }
    if(dropCount > 1) return false 
    return true 
};