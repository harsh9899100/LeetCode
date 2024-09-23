/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const m = s.length;
    const n = p.length;

    // Create a dp array with dimensions (m+1) x (n+1), initialized to false
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    // Base case: Empty pattern matches empty string
    dp[0][0] = true;

    // Fill in the DP table for the case where p contains '*' as it can match zero elements
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    // Fill in the rest of the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Case 1: If the characters match or the pattern has '.', we carry over the previous value
            if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
                dp[i][j] = dp[i - 1][j - 1];
            }
            // Case 2: If the pattern contains '*', we have two options:
            else if (p[j - 1] === '*') {
                // 1. We assume '*' matches zero occurrences: dp[i][j-2]
                dp[i][j] = dp[i][j - 2];

                // 2. We assume '*' matches one or more occurrences of the preceding character
                if (p[j - 2] === s[i - 1] || p[j - 2] === '.') {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    // The result is stored in dp[m][n], which indicates if the entire strings match
    return dp[m][n];
};
