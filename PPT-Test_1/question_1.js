let arr=[1,0,2,1,0,4,5,0]


function moveZeroes (arr){
    let low=0;
    let high =low+1;
    
    while(high<=arr.length-1){
    if(arr[low]!==0 ){
        low++;
        high++;
    }else{
        if(arr[high]!==0){
            [arr[low], arr[high]]=[arr[high], arr[low]]
            low++;
        }
        high++;
    }
}

    return arr;

}

console.log(moveZeroes(arr));