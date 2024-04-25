let animal  =  {
    type : 'unknown',
    sound: function () { 
        console.log('The' + this.type + " make sound"
        );
    }
}


let vehicle ={vehicle: 4};

let car = {
    seats : 5,
    __proto__ : vehicle,
    wheels: 6,
};

let dog = Object.create(animal)
let goat = {}
Object.setPrototypeOf(goat, animal)


console.log('vehicle' , vehicle, vehicle.__proto__);
console.log('car' , car, car.__proto__);
console.log('car wheels:' , car.wheels);



function Person(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name);
    }
}

const personOne = new Person("Jumoke", 13)

const json ='{"result" : true, "count": 42}';
const obj = JSON.parse(json);

console.log(obj.count);
console.log(obj.result);
console.log(personOne.name)

console.log(JSON.stringify({x:5, y: 6}));

