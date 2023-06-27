let digits = [9]

function increment(digits){
    let integer=BigInt(digits.join(""))+1n;
    let intToString = integer.toString();

    let newArr=[];
    for(let i=0 ; i<intToString.length; i++){
        let num = parseInt(intToString[i]);
        newArr.push(num);
    }
    
    return newArr;


}

console.log(increment(digits));