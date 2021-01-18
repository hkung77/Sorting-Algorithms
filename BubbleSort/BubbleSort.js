/*
*   Bubble Sort takes an array of numbers
*   Returns:  
*       []<numbers>  
*/

// Bubble sort works by comparing each item in the array and comparing with the next
// to determine which is bigger. The biggest number will keep shifting to the beginning until it is at the end.
// This process will repeat for each subset of the array until all have been sorted.

// Bubbles highest number to the top.
const bubbleSort = (array) => {
    // Start from the end of the array
    for (let i = array.length; i > 0; i--) {
        // This loop handles the bubbling effect for the biggest number
        for (let j = 0; j < i; j++) {
            // Compare to see if the previous item is bigger and required to bubble up 
            if (array[j] > array[j+1]) {
                // Save the lower value to temp 
                const temp = array[j];
                // Adjust the values
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
}

