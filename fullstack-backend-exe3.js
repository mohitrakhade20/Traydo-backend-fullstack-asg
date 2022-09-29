// A Javascript solution for longest palindrome
 
// Function to print a subString str[low..high]
function printSubStr(str,low,high)
{
    for (let i = low; i <= high; ++i)
        // document.write(str[i]);
        console.log("print sub string", str[i])
}
 
// This function prints the
// longest palindrome subString
// It also returns the length
// of the longest palindrome
function longestPalSubstr(str)
{
    // get length of input String
    let n = str.length;
  
    // All subStrings of length 1
    // are palindromes
    let maxLength = 1, start = 0;
  
    // Nested loop to mark start and end index
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let flag = 1;
  
            // Check palindrome
            for (let k = 0; k < (j - i + 1) / 2; k++)
                if (str[i + k] != str[j - k])
                    flag = 0;
  
            // Palindrome
            if (flag!=0 && (j - i + 1) > maxLength) {
                start = i;
                maxLength = j - i + 1;
            }
        }
    }
  
    console.log("Longest palindrome subString is: ");
    printSubStr(str, start, start + maxLength - 1);
  
    // return length of LPS
    return maxLength;
}
 
// Driver Code
let str = "forgeeksskeegfor";
console.log("Length is: "
         + longestPalSubstr(str));