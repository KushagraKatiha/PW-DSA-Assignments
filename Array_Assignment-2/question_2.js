let nums = [1,2,5,4,7,7]

var distributeCandies = function(candyType) {
    const half = (candyType.length/2);
    let arr = Array.from(new Set(candyType))

    return arr.length > half ?  half:  arr.length;
};

console.log(distributeCandies(nums));