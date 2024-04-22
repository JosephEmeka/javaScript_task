// let array = [1, 3, 4, 5, 6]
// let arr = [];

// let answer = array.forEach((value) => {arr.push(value * 2);}

// let answer = array.map((value) => value * 2)

// let answer = array.filter(value => value % 2 == 0).map(value => value * 10)

// console.log(answer)


let scores = value => {
    if (value >= 90 && value <= 100){return "A"}
    if (value >= 80 && value <= 89){return "B"}
    if (value >= 70 && value <= 79){return "C"}
    if (value >= 60 && value <= 69){return "D"}
    else {return "F"}
}
    
let studentScores = [95, 78, 85, 60, 45, 92];
let result = studentScores.map(value => scores (value));

console.log(result);


module.exports = {scores};