function addNumbers(X, Y) {
 let answer = X+Y;
 return answer
}


function evenNumbers(numbers) {
    let result = numbers.filter(number => number % 2 == 0);
    return result;
   }
   
module.exports = {addNumbers, evenNumbers};