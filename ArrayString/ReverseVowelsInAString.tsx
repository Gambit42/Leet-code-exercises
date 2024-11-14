//
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a',  'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
const reverseVowels = (stringToReverse: string) => {
  const isVowel = (letter: string) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    if (vowels.includes(letter)) {
      return true;
    }
    return false;
  };
  const vowelIndexes = [] as any;

  stringToReverse.split("").forEach((letter, index) => {
    if (isVowel(letter)) {
      vowelIndexes.push(index);
    }
  });

  const reversedVowelIndexes = [...vowelIndexes].reverse();

  const reversedVowels = [] as string[];
  let reversedVowelChangedCount = 0;

  stringToReverse.split("").forEach((letter, index) => {
    if (isVowel(letter)) {
      reversedVowels.push(
        stringToReverse[reversedVowelIndexes[reversedVowelChangedCount]]
      );
      reversedVowelChangedCount++;
      return;
    }

    return reversedVowels.push(letter);
  });

  return reversedVowels.join("");
};

console.log(reverseVowels("leetcode")); //leotcede
console.log(reverseVowels("IceCreAm")); //AceCreIm
