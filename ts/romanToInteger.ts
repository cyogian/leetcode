/**
 * @param {string} s
 * @url https://leetcode.com/problems/roman-to-integer/
 * @return {number}
 */
function romanToInt(s: string): number {
    const romanValues: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        const value = romanValues[char];

        if (value < prevValue) {
            total -= value;
        } else {
            total += value;
        }

        prevValue = value;
    }

    return total;
};