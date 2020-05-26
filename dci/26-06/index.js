// Today’s assessment

// Add support for an additional operation, "med" to the switch (today’s index.js)
//  which calculates the Median number in the set. To calculate the median you will have to follow the steps below:
// Sort the set of numbers
// Get the index of the middle number by dividing the last index of the set by two: <last index> / 2
// If the resulting index is a whole number (e.g. 7) then the median of the set is the value in that index.
// Otherwise (if num is a fraction, e.g. 7.5) then the median is calculated by adding the two values in the indexes around it (for 7.5 it would be 7, and 8 ) and dividing them by two.

// const sorted = (myArr = [1, 2, 3, 4, 5, 6, 9, 10].sort());
// const medianIndex = (sorted.length - 1) / 2;

// //check if the returns an int
// if (medianIndex % 2 == 0) {
//   console.log(sorted[medianIndex]);
// } else {
//   console.log(
//     (sorted[Math.floor(medianIndex)] + sorted[Math.ceil(medianIndex)]) / 2
//   );
// }

myNumbers = [1, 2, 3, 4, 5, 6, 8, 9];

const returnMedian = arr => {
  const sorted = arr.sort();
  const medianIndex = (sorted.length - 1) / 2;

  return medianIndex % 2 == 0
    ? sorted[medianIndex]
    : (sorted[Math.floor(medianIndex)] + sorted[Math.ceil(medianIndex)]) / 2;
};

console.log(returnMedian(myNumbers));
