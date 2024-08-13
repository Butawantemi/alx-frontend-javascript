var promise = new Promise(function(resolve, reject){
    resolve(1);
})

promise.then(function(val){
    return val + 2;
}).then(function(val){
    return val + 3;
})