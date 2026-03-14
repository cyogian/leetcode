/**
 * @param {string[]} strs
 * @url https://leetcode.com/problems/longest-common-prefix/
 * @return {string}
 */
function longestCommonPrefix(strs: string[]): string {
    return strs.reduce((prefix, str) => {
        while (!str.startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return '';
        }
        return prefix;
    }, strs[0] || '');
}