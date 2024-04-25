class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Dayo extends Human {
    constructor(name, age){
        super(name, age);
    }

        setName(name){
            this.name = name;
        }
        setAge(age){
            this.age = age;
        }

        getName() {
            return this.name;
        }
        getAge() {
            return this.age;
        }


}

let ayomide = new Dayo();
console.log(ayomide);

class Shapes{
    constructor (name) {
        this.__name = name;
    }

    getName() { return this.__name;}

}
 class Rectangle extends Shapes {
    constructor(name,length, breath) {
        super(name);
        this.length = length;
        this.breath = breath;
    }

    setName (name){
        this.name = name;
    }

    setLength (length){
        this.length = length;
    }

    setBreath (breath){
    this.breath = breath;
    }
 getArea() {
        return this.length * this.breath;
    }

    isSquare(){
        return this.length === this.breath;
    }

 }


let newShape = new Rectangle();
    newShape.setName(Rectangle);
    newShape.setLength(10)
    newShape.setBreath(5)

console.log(newShape.getArea())
console.log(newShape.isSquare())