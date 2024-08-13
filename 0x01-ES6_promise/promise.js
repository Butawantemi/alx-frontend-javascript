var promise = new Promise(function(resolve, reject) {
    // do a thing, possubly async, then...
    if (/* everything turned out fine */){
        resolve("Stuff worked!")
    }else{
        reject(Error("It broke"))
    }
})