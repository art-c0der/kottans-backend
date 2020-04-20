function repeat(operation, num) {
  if(num <= 1){
    return operation();
  }
  repeat(operation, --num)
}

// Do not remove the line below
module.exports = repeat
