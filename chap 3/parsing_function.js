function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    console.log("ex",someFunction,value)
    someFunction(value);  //say(hello)
}
execute(say, "Hello");



function say1(word1){
    console.log(word1);
}

function execute1(sf1,value1){
    sf1(value1);
}

execute1(say1,"hello1");