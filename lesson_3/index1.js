function test() {
    console.log("Привет!");
}

test();

function call(func) {
    func();
}

let printSomething = function() {
    console.log("Просто текст");
};

printSomething();

call(printSomething);

