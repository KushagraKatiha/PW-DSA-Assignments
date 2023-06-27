let nums1 = [1,2,3] 
let nums2 = [2,5,6]

let m = nums1.length;
let n = nums2.length; 

for(let i=0 ; i<nums1.length; i++){
    if(nums1[i]==0){
        nums1.splice(i,1);
    }
}


for( let i = m, j=0; j<n; i++, j++ ){
    
    nums1[i] = nums2[j];
}

nums1.sort((a,b)=> a-b);

console.log(nums1);