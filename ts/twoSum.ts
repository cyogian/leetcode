/**
 * @param {number[]} nums
 * @param {number} target
 * @url https://leetcode.com/problems/two-sum/
 * @return {number[]}
 */
function twoSum(nums: number[], target: number): number[] {
    const prevValues: Map<number, number> = new Map(); // Stores: number -> its index
    
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;
        
        // Check if we have already seen the number needed to reach the target
        if (prevValues.has(complement)) {
            return [prevValues.get(complement) as number, i];
        }
        
        // Otherwise, store the current number and its index for future lookups
        prevValues.set(currentNum, i);
    }

    return []; // Return an empty array if no solution is found (though the problem guarantees one solution)
};