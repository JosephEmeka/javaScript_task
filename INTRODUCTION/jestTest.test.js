let {addNumbers, evenNumbers} = require("./add.js");

test("Add two numbers", ()=> {
    let a = 3;
    let b = 5;
    let answer = addNumbers(a, b);
    expect(answer).toBe(8);


})

test("filter even numbers", ()=> {
    let arr = [1, 2, 3, 4, 5, 6]
    let answer = evenNumbers(arr);
    expect(answer).toEqual([2, 4, 6])
})

let {scores} = require("./arrayMethods.js");

test("student grades", ()=> {
    expect(scores(95)).toBe("A")
    expect(scores(78)).toBe("C")
    expect(scores(85)).toBe("B")
    expect(scores(60)).toBe("D")
    expect(scores(45)).toBe("F")
    expect(scores(92)).toBe("A")

})

