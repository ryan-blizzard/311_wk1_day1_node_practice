const isEven = (num) => { //if else statemnet
  // write code for numbers.isEven
  if (num % 2 == 0) {
} return true

}

const sum = (arr) => { //reduce method
  // write code for numbers.sum
  return arr.reduce((a, b) => a + b);

}



const comboSum = (arr, sum) => { //reduce method
  // write code for numbers.comboSum
  let result = 0;

  for (i = 0; i < arr.length; i++){
    for (j = 0; j < arr.length; j++){
      if (i !== j) {
        if (arr[i] + arr[j] === sum){
          return true
        };
      }
    }
  }
return false
}

module.exports = {
  isEven,
  sum,
  comboSum
}