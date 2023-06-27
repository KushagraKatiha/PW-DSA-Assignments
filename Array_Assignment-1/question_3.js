let nums=[1,3,5,6]
let tg=2;

function insertion(arr, target){
    for(let i=0; i<nums.length; i++){
        if(nums[i]==target){
       return i;
   }else if(nums[i]>target && nums[i-1]<target){
       return i;
   }else if( i==nums.length-1 && nums[nums.length-1]<target){
       return i+1;
   }else if(nums[i]>target){
       return i;
   }
}
}



console.log(insertion(nums,tg));
