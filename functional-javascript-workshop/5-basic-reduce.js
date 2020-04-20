function countWords(inputWords) {
  return inputWords.reduce((acc, word) =>{
    acc[word] = ++acc[word] || 1;
    return acc;
  }, {}) 
}

module.exports = countWords
