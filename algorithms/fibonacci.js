function fibonacci (n){
    const fib =[0,1];
    for(let i=2 ; i<n ;i++){
        fib[i] = fib[i-1] +fib[i-2];
    }
    return fib;
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(13))
console.log(fibonacci(30))


// BIG 0 = 0(n) linear time complexity