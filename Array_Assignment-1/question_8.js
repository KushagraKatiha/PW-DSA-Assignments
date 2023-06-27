let nums=[1,2,3,4,5,6,7,8,9,9];




    let N=nums.length;
   let sum=N*(N+1)/2;
   let dup=0; 
   let arr=Array(nums.length).fill(0);

   for(let i=0; i<nums.length ; i++){
       if(arr[nums[i]-1]===nums[i]){
           dup=nums[i];
       }else{
           arr[nums[i]-1]=nums[i];
           sum-=nums[i];
       }
   }

    console.log([dup,sum]);