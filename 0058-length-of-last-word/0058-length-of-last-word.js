/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    trimmedString = s.trim();

    final_s = trimmedString .split(" ");

    let result = final_s[final_s.length-1];
    return result.length;

};