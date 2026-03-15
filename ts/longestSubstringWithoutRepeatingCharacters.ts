/**
 * @param {string} s
 * @url https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @return {number}
 */
function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0;
    let left = 0;
    // Map to store: character -> its last seen index
    const charMap = new Map<string, number>();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        // If we've seen this character and it's within our current window
        if (charMap.has(char) && charMap.get(char)! >= left) {
            // Jump the left pointer to the right of the previous occurrence
            left = charMap.get(char)! + 1;
        }

        // Update the character's last seen position
        charMap.set(char, right);

        // Calculate current window size and update maxLength
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}