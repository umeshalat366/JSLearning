

//1.function expression
//2.Callback
//3.Funtion can return another function

function show(){
    console.log('Inside show function');
    let innerFunction=function(){
        console.log('Inside inner function');
    }
    return innerFunction;
}
let inner = show();
inner();
//show()();

function greet (callback){
    console.log(`Good Morning`);
    callback();
    let inner=function(){
        console.log(`Thank you, I am fine...`);
    }
    return inner;
}
function inquire(){
    console.log(`How are you...?`);
}
greet(inquire)();