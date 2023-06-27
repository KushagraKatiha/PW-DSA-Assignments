let nums = [3,2,2,3];
let val = 3;

function removeElement(nums,val){
    let j = 0;
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i]!=-1){
            nums[j]=nums[i];
            j++
        }
    }
    return j;
}

console.log(removeElement(nums, val));