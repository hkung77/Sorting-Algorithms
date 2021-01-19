// Compare each value to values in the response;
// If the value is greater, move the value up until it cannot
// insert value into the index

const insertSort = (array) => {
    let response = [array[0]];

    // Outer loop to handle array input
    for (let i = 1; i <= array.length - 1; i++) {
        // Inner loop to handle response
        for (let j = 0; j <= response.length; j++) {
            // Compare if element in input is not bigger than response
            if (array[i] > response[j]) {
               continue; 
            } else {
                response.splice(j, 0, array[i]);
                break;
            }
        }
    }

    return response;
}


console.log(insertSort([1,8,3,5,9]));


