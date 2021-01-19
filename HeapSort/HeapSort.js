/*
* Heap Sort Steps
*   1. Base Case: If array is length of 1, return the array
*   2. Put array into a tree 
*   3. Compare values and move the biggest values up the parent
*   4. When the biggest value is a the top, remove it and reccurisve Heap Sort with the smaller subset
*/

const heapSort = (array) => {
  // Basecase
  if (array.length === 1) {
    return array;
  }

  let arrayToHeap = true;
  const heapArray = [];
  let index = 0;

  // Heapify the array by saving child indexes to the corresponding array
  while (arrayToHeap) {
    if (2 * index + 1 === array.length - 1) {
      heapArray.push([2 * index + 1]);
      // stop loop
      arrayToHeap = false;
    } else if (2 * index + 1 > array.length - 1) {
      arrayToHeap = false;
    } else {
      heapArray.push([2 * index + 1, 2 * index + 2]);
      index++;
    }
  }

  // Create Max Heap
  for (let i = heapArray.length - 1; i >= 0; i--) {
    const [leftChild = 0, rightChild = 0] = heapArray[i];
    // LeftChild is the highest
    if (array[leftChild] > array[i] && array[leftChild] > array[rightChild]) {
      // Replace actual array values
      const temp = array[leftChild];
      array[leftChild] = array[i];
      array[i] = temp;

      // RightChild is biggest
    } else if (
      array[rightChild] > array[i] &&
      array[rightChild] > array[leftChild]
    ) {
      // Replace actual array values
      const temp = array[rightChild];
      array[rightChild] = array[i];
      array[i] = temp;
    }
  }

  const [biggestNumber, ...restOfArray] = array;
  return [biggestNumber, ...heapSort(restOfArray)];
};

console.log(heapSort([6, 2, 7, -1, 3, 26, -12]));
