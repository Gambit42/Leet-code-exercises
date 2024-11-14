//

//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the
//elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

//First solution fails (exceeded time limit) this is inefficient since it runs multiple loops
// const productExceptSelf = (nums: number[]) => {
//   const productArray = nums.map((_, mapIndex) => {
//     const product = nums
//       .filter((_, index) => index !== mapIndex)
//       .reduce((acc, value) => {
//         return acc * value;
//       });

//     return product;
//   });

//   return productArray;
// };

//Second attempt (This is the solution this is efficient since it just makes two loops)

const productExceptSelf = (nums: number[]) => {
  const numberArrayLength = nums.length;
  const result = new Array(numberArrayLength).fill(1);

  let prefixProduct = 1;
  for (let i = 0; i < numberArrayLength; i++) {
    result[i] = prefixProduct;
    prefixProduct *= nums[i]; // Update the prefix product
  }

  let suffixProduct = 1;

  for (let i = numberArrayLength - 1; i >= 0; i--) {
    result[i] *= suffixProduct; // Multiply the current result by the suffix product
    suffixProduct *= nums[i]; // Update the suffix product
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
