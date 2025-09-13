//FullStack Dev Lab 2

//Exercise 1
console.log('Exercise 1:');
greeter = (myArray) => {

    let greetText = 'Hello';

    for (const name of myArray) {
        console.log(greetText + ' ' + name);
    }
};
greeter(['Ricki'])
console.log('\n')

//Exercise 2
console.log('Exercise 2:');
function capitalizeFirstLetter(string) {

    if (typeof string !== 'string') {
        return string;
    }
    else{
        string = string.toLowerCase();
        const split_string = [...(string)];
        const [first, ...rest] = split_string;
        const uppercase = first.toUpperCase();
        return [uppercase, ...rest].join('');
    }
}

console.log(capitalizeFirstLetter('bingo'));
console.log(capitalizeFirstLetter('fooBar'));
console.log(capitalizeFirstLetter('nodeJs'));
console.log('\n')

//Exercise 3
console.log('Exercise 3:');
function capitalizedColours() {

    const colours = ['red', 'green', 'blue'];

    return colours.map(colour => {
        return capitalizeFirstLetter(colour);
    });
}

console.log(capitalizedColours());
console.log('\n')

//Exercise 4
console.log('Exercise 4:');
function lessThanTwenty() {

    var values = [1, 60, 34, 30, 20, 5]
    return values.filter(value => value < 20);
}

console.log(lessThanTwenty());
console.log('\n')

//Exercise 5
console.log('Exercise 5:');
function calculateSum() {

    var array = [1, 2, 3, 4];
    return array.reduce((a, b) => {
        return a + b;
    }, 0)
}

function calculateProduct() {

    var array = [1, 2, 3, 4];
    return array.reduce((a, b) => {
        return a * b;
    })
}

console.log(calculateSum());
console.log(calculateProduct());
console.log('\n')

//Exercise 6
console.log('Exercise 6:');
class Car{

    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
       console.log(`Model: ${this.model}\nYEAR: ${this.year}`);
    }
}

class Sedan extends Car {

    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info(){
        console.log(`${this.model} has a balance of ${this.balance}`);
    }
}

const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());


