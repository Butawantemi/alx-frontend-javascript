/* //Syntax
const myPromise = new Promise(function(resolve, reject){
    resolve();//when the promise succeeds
    reject();// when the promise fails
})

myPromise.then(function(){
    function1(value);// if the code is successful
    function2(error);// if the code fails 
}) */

const myPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Am in love with JavaScript');
    }, 5000)
})

myPromise.then(function(value){
    console.log(value);
})