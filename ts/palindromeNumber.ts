/**
 * @param {number} x
 * @url https://leetcode.com/problems/palindrome-number/
 * @return {boolean}
 */
function isPalindrome(x: number): boolean {
    // Negative numbers and numbers ending in 0 (except 0 itself) aren't palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reverse = 0;
    let m = x;

    while (m > 0) {
        const n = m % 10;
        // Use Math.floor to ensure integer division
        m = Math.floor(m / 10); 
        reverse = (reverse * 10) + n;
    }

    return reverse === x;
};