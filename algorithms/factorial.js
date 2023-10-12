function factorial(n){
    result=1;
    for(let i = 2; i<=n ;i++ ){
        result = result*i;
    }
 return result;

}
console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(7))
console.log(factorial(30))

// linear time complexity = BIG O notation =0(n)