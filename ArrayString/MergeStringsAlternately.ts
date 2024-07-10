// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

const handleConvertToArray = (word: string) => {
  return [...word];
};

const handleMergeStringsAlternately = (word1: string, word2: string) => {
  if (1 > word1.length || word2.length > 100) return;
  let mergedArray = [] as string[];
  const WORD_1_ARRAY = handleConvertToArray(word1);
  const WORD_2_ARRAY = handleConvertToArray(word2);

  //If the first word is longer than the second word, append the remaining letters not able to be alternated
  if (word1.length > word2.length) {
    WORD_1_ARRAY.map((firstWordElement, index) => {
      mergedArray = [...mergedArray, firstWordElement];
      if (WORD_2_ARRAY[index] === undefined) return;
      mergedArray = [...mergedArray, WORD_2_ARRAY[index]];
    });
    console.log(mergedArray.join(""));
    return mergedArray.join("");
  }

  //If the second word is longer than the first word, append the remaining letters not able to be alternated
  if (word1.length < word2.length) {
    WORD_1_ARRAY.map((firstWordElement, index) => {
      mergedArray = [...mergedArray, firstWordElement];
      if (WORD_2_ARRAY[index] === undefined) return;
      mergedArray = [...mergedArray, WORD_2_ARRAY[index]];
    });

    mergedArray = [
      ...mergedArray,
      ...WORD_2_ARRAY.slice(WORD_1_ARRAY.length - WORD_2_ARRAY.length),
    ];
    console.log(mergedArray.join(""));
    return mergedArray.join("");
  }

  WORD_1_ARRAY.map((firstWordElement, index) => {
    mergedArray = [...mergedArray, firstWordElement, WORD_2_ARRAY[index]];
  });

  console.log(mergedArray.join(""));

  return mergedArray.join("");
};

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

handleMergeStringsAlternately("abc", "pqr");

// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

handleMergeStringsAlternately("ab", "pqrd");

// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

handleMergeStringsAlternately("abcd", "pq");

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.
