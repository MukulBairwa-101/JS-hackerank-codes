function aVeryBigSum(ar) {
    // Write your code here
    return ar.reduce((acc,curr)=>acc+curr);
}

console.log(aVeryBigSum([5,1000000001,1000000002,1000000003,1000000004,1000000005]))