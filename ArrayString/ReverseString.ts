// zNote that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

const reverseWords = (string: string) => {
  const arrayOfStrings = string.split(" ");
  const reversedWord = arrayOfStrings
    .reverse()
    .join(" ")
    .split(" ")
    .filter((item) => item !== "")
    .join(" ");

  console.log(reversedWord);
  return reversedWord;
};

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"

reverseWords("the sky is blue");

// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

reverseWords(" hello world");

// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

reverseWords("a good   example");

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.
