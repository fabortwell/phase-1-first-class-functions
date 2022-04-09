function receivesAFunction (callback) {
    callback ();
}
function returnsANamedFunction() {
    return function namedBs() {
        console.log('Brian is a nerd!')
    };
}
function returnsAnAnonymousFunction() {
    return () => console.log("Hey there! I am anonymous!!")
}