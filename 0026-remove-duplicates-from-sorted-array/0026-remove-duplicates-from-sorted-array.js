/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let k = 1; // Initialize k
    for (let i = 1; i < nums.length; i++) { // Iterate through nums
        if (nums[i] !== nums[i-1]) { // Check if current element is not equal to PREVIOUS ONE.
            nums[k] = nums[i]; // Move the current element to the k-th position
            k++; // Increment k
        }
    }
    return k; // Return k
    
};