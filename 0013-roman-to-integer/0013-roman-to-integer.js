/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Define the mapping of Roman numerals to integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;

    // Iterate over the Roman numeral string
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];
        const next = romanMap[s[i + 1]];

        // If the current value is less than the next, subtract the current from total
        if (current < next) {
            total -= current;
        } else {
            // Otherwise, add the current value to the total
            total += current;
        }
    }

    return total;
};
