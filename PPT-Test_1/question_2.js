
let str="leetcode"


var nonRepeating = function(str) {
    for (let i = 0; i < str.length; i++){
      
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
          
            return i
        } else {
            return -1      
        }
    }
};

console.log(nonRepeating(str));

