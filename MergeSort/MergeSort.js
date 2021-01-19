/*
* MergeSort divides the array into halves and sorts them as the are being merged
*/

const mergeSort = (array) => {
  // Base Cases
  // If there is only 1 item in the array, it should be returned
  if (array.length === 1) {
    return array;
  // If there are 2 items in the array we should just return them in proper order
  } else if (array.length === 2) {
    if (array[0] > array[1]) {
      const temp = array[0];
      array[0] = array[1];
      array[1] = temp;
    }
    return array;
  }

  // Split Array logic
  // Calculate the middle index (rounded down)
  const splitIndex = Math.floor(array.length / 2);

  // Get the first half of the array
  const firstHalf = array.slice(0, splitIndex);
  // Get the second half of the array
  const secondHalf = array.slice(splitIndex, array.length);

  // Repeat the process
  const sortedFirstHalf = mergeSort(firstHalf); 
  const sortedSecondHalf = mergeSort(secondHalf);

  // Merging logic
  // Set initial values for response and counting the split arrays
  const response = [];
  let firstCount = 0;
  let secondCount = 0;

  // Loop until the response length is equal to the initial array length
  while (response.length !== array.length) {
    // Check which half has the lower value
    // The lowest value will get pushed first into the response and increament the counter
    if (sortedFirstHalf[firstCount] < sortedSecondHalf[secondCount]) {
      response.push(sortedFirstHalf[firstCount]);
      firstCount++;
    } else {
      response.push(sortedSecondHalf[secondCount]);
      secondCount++;
    }
  }

  return response;
}

console.log(mergeSort([3,6,7,12, -12, 33]));