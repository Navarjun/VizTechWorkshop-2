
// load the csv in data
d3.csv('./data/sample.csv')
    .then(dataLoaded);

function dataLoaded(data) {
    console.log(data);
}

// defining a basic function
// TRY: type 'sayHi()' in your browser console and see what happens!
function sayHi() {
    alert('Hi!');
}

// TRY: type 'sayHiTo("YOURNAME")' in your browser console and see what happens!
// hey, you can now add your name
// this name is called an ARGUMENT
function sayHiTo(name) {
    alert('Hi ' + name + '!');
}

// TRY: type 'add(40, 865)' in your browser console and see what happens!
// You can add 2 numbers in great style with this function
// This one has two arguments 'num1' and 'num2'
// While also, it returns a value 'result'
function add(num1, num2) {
    let result = num1 + num2;
    return result;
}

// REMEMBER: Arguments are not accessible outside a function
