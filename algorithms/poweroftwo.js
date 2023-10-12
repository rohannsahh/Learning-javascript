/*function isPowerofTwo (n){
    if(n<1){
        return false;
    }
    while(n>1){
        if(n%2 !==0){
            return false;
        }
        n=n/2
    }
    return true
}*/


//Bitwise
function isPowerofTwo(n){
    if(n<1){
        return false
    }
    return(n & (n-1))===0
}







console.log(isPowerofTwo(2))
console.log(isPowerofTwo(0))
console.log(isPowerofTwo(1))
console.log(isPowerofTwo(12))
console.log(isPowerofTwo(16))
console.log(isPowerofTwo(9))


//BIG O = O(log(n))
// input reduces by half