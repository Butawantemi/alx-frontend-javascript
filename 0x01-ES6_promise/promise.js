var promise = new Promise(function(resolve, reject) {
    // do a thing, possubly async, then...
    if (/* everything turned out fine */ TRUE){
        resolve("Stuff worked!")
    }else{
        reject(Error("It broke"))
    }
})

//How to use promise
promise.then(function(result){
    console.log(result)//"Stuff worked!"
}, function(err){
    console.log(err)//"It broke"
})