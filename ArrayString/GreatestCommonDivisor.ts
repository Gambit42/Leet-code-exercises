// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

const gcdOfStrings = (str1: string, str2: string) => {
  const shortestString = str1.length > str2.length ? str2 : str1;
  const longestString = str1.length > str2.length ? str1 : str2;
  //1. First check if the pattern is repeating

  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  //2.Find the GCF of the length of both strings
  //We use recursion to use Euclidian Algorithm

  const handleGetGcf = (dividend: number, divisor: number) => {
    let lastNonZeroGCF = divisor;

    //Recursive Function
    const handleEuclidianAlgorithm = (dividend: number, divisor: number) => {
      const remainder = dividend % divisor;
      if (remainder === 0) {
        return divisor;
      }

      lastNonZeroGCF = remainder;
      handleEuclidianAlgorithm(divisor, remainder);
    };

    handleEuclidianAlgorithm(dividend, divisor);

    return lastNonZeroGCF;
  };

  const gcfNumber = handleGetGcf(longestString.length, shortestString.length);

  console.log(gcfNumber);

  //3. Now we know the GCF, Slice the longest string with GCF being the identifier
  const gcfString = longestString.slice(0, gcfNumber);

  return gcfString;
};
gcdOfStrings("ABCABCD", "ABC"); //"ABC"
gcdOfStrings("ABCABC", "ABC"); //"ABC"
gcdOfStrings("ABABAB", "ABAB"); //"AB"
gcdOfStrings("LEET", "CODE"); //""
gcdOfStrings(
  "TAUXXTAUXXTAUXXTAUXXTAUXX",
  "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
); //TAUXX
