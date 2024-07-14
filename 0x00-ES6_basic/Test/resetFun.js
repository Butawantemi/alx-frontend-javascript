const sum = (...args) => {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    } 
    return sum;
}

console.log(sum(4, 5, 6, 7));