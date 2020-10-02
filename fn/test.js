// let x = 0;
// let y = 1;
// let sum = 0;

// for(i=1; i < 10; i++) {
//     sum = x + y;
//     x=y;
//     y=sum;
//     console.log(sum);
// } 

// let limit = 5;
// let sum = 0;
// for(let i=1; i < limit; i++) { 
//     sum=sum+i;
//     i=i+1;
//     console.log(sum);
// }

function fact(num, acc=1) {
    if(num === 0) {
        return acc;
    }
    return fact(num - 1, acc * num);
}


console.log(fact(3));