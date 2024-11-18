/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()

    for(let i =0;i<nums.length;i+=1) {
        let compliment = target - nums[i] ;

        if(map.has(compliment)) {
            return [map.get(compliment) , i] ;
        }

        map.set(nums[i] , i );
    }
    return [];
};