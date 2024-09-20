/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();  // To store the most recent index of each character
    let left = 0;  // Left boundary of the sliding window
    let maxLength = 0;  // Maximum length of substring found

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // If the character is already in the map and its index is within the current window
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;  // Move the left boundary of the window
        }

        map.set(char, right);  // Update the index of the character
        maxLength = Math.max(maxLength, right - left + 1);  // Update the maximum length
    }

    return maxLength;
};
