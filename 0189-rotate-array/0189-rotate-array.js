/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(arr, k) {
    const tempArray = Array.from(arr)
    let n = arr.length ;
    for(let i = 0;i<n;i++) {
        arr[(i+k)%n] = tempArray[i];
    }
    return arr ;
};