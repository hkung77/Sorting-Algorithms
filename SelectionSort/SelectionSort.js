/*
* Selection sort finds the smallest number and rotates to the begining of the array 
*/
const selectionSort = (array) => {
  // Loop through as beginning index;
  for (let i = 0; i < array.length; i++) {
  // Loop through to find smallest value
    for (let j = 1 + i; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

console.log(selectionSort([2,7,1,3,8,-12,33]));