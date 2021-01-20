/*
* FibonacciSequence
*   F(n) = F(n+1) + F(n+2)
*
*
*/

// 
const fibSequence = (n) => {
    const fibSeq = [0,1];
    for(let i = 0; i < n; i++) {
        fibSeq.push(fibSeq[i] + fibSeq[i+1]);
    }
    return fibSeq[n];
}

console.log(fibSequence(5));
console.log(fibSequence(10));

const fibSequenceRecursive = (n) => {
    if (n < 2) {
        return n;
    } else {
        return fibSequenceRecursive(n-1) + fibSequenceRecursive(n-2);
    }
}
console.log(fibSequenceRecursive(5));
console.log(fibSequenceRecursive(10));