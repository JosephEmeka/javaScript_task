// var var1 = 5000
// var var2 = var3
// var var3 = var1
// console.log(var3)

const arrayTask = function(x, y, z){
    let newArray = [x, y, z]
    for(let i = 0;; i++){
        if(newArray[0] % i && newArray[1] % i && newArray[2] % i){
        break;
        }
        
        console.log(i);
    }
   
}


console.log(arrayTask(2, 6, 8))