// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

const mergeAlternately = (word1: string, word2: string): string => {
  let merged: string[] = [];
  let lastIndexUsed = 0;

  [...word1].map((letter, index) => {
    merged.push(letter);
    lastIndexUsed = index;
    if (!word2[index]) return;
    merged.push(word2[index]);
  });

  if (word1.length < word2.length) {
    return [...merged, ...word2.slice(lastIndexUsed + 1)].join("");
  }

  return merged.join("");
};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abcd", "pq"));
