// recursion is basically an alternative to loops
// use function calls to replicate the loops 
// iterative programming
for (let x = 0; x < 10; x++) {
    console.log(x);
}

console.log('---recursive solution---');
function printX(x, limit) {
    // need condition to stop the whole chain of function call if a certain limit is reached
    // base case: recursion should stop when x is 10
    if (x == limit) { //known as base case => recursion should stop when reached
        return
    }
    // each step in the process
    console.log(x)

    // recursive call and the problem is shrunk each time 
    printX(x + 1, limit) //=> recursive calls 
}
// function will continue running
printX(0, 5);

function hello(x){
    console.log('hello', x);
    console.log(xyzz(10))
}

function xyzz(y){
    let z =10;
    let t = z + y;
    return t
}
hello('bestie')

console.log('------')
// summation of numbers
function sum(n){
    let total = 0;
    for (let i=0; i<n; i++){
        total += i;
    }
    return total
}

console.log(sum(5))

console.log('-----')
// function recurSum(x, limit){
//     total = 0;
//     total += x;
//     if (x == limit){
//         return
//     }
//     recurSum(x+1, limit);
// }

function sumR(n){
    // summation of 1 returns 1
    if (n==1){
        return 1;
    }
    // summation of 5+sum(4);
    
    return n+sumR(n-1);
}

console.log(sumR(5))