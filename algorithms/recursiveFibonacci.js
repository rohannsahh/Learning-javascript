function recursiveFibonacci(n){
    if(n<2){
        return n
    }
   return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(3))
console.log(recursiveFibonacci(13))
console.log(recursiveFibonacci(30))
console.log(recursiveFibonacci(10))

//BIG O = 0(2^n)