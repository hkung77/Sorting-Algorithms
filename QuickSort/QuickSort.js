/*
* QuickSort takes an array.
* Pick a pivot point and split items in the array to the left or right
* Repeat this process for the smaller array
*
*/

const quickSort = (array) => {
  // If there is only 1 element in the array return the array
  if (array.length === 1) {
    return array;
  }

  // Default first element as pivot
  const pivot = array[0];
  // Setup greather and less than arrays
  const lessThanArray = [];
  const biggerThanArray = [];
  let response = [];

  // Put each item in the corresponding section depending on the pivot
  for (let i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      biggerThanArray.push(array[i]);
    } else {
      lessThanArray.push(array[i]);
    }
  }

  // Recursively call function to sort smaller subsections
  if (biggerThanArray.length >= 1 && lessThanArray.length >= 1) {
    response = [...quickSort(lessThanArray), pivot, ...quickSort(biggerThanArray)]
  } else if (biggerThanArray.length === 0) {
    response = [...quickSort(lessThanArray), pivot]
  } else if (lessThanArray.length === 0) {
    response = [pivot, ...quickSort(biggerThanArray)]
  }

  return response;
}

console.log(quickSort([1,8,3,5,9]));