'use strict';

let sum = process.argv.reduce((
prevValue, currentValue, index
)=>{
    if(index > 1){
      return prevValue + +currentValue;
    }
    
  }, 0)

console.log(sum);
