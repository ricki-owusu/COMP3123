//Full Stack Dev Lab Exercise 1

//1
function capitalize(string) {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

let string1 = "my name is ricki"
console.log(capitalize(string1));

//2
const numbers = [400, 25, 72, 9, 24, 15, -7];
const largest = Math.max(...numbers);
console.log(largest);

//3
function moveToStart(string){
    if (string.length >= 3){
        let sub1 = string.slice(0, -3);
        let sub2 = string.slice(-3);
        return sub2 + sub1;
    }else {
        console.log("Choose a longer word!");
        return string;
    }
}
console.log(moveToStart("OwusuAnsah"));
console.log(moveToStart("Ricki"));
console.log(moveToStart("Beautiful"));
console.log(moveToStart("Cat"));

//4
function findAngleType(angle){
    if (angle < 90){
        console.log("This is an acute angle!");
    }else if (angle === 90){
        console.log("This is a right angle!");
    }else if (angle > 90){
        console.log("This is an obtuse angle!");
    }else if (angle === 180){
        console.log("This is a straight angle!");
    }
}

console.log(findAngleType(90));
console.log(findAngleType(145));
console.log(findAngleType(40));
console.log(findAngleType(180));

//5
function max_sum_of_numbers(array){
    const result = [];
    for (let i = 0; i < array.length -1; i++){
        result.push(array[i] + array[i + 1]);
    }
    return result;
}
console.log(max_sum_of_numbers([56,12,7,23]));
console.log(max_sum_of_numbers([4, 7, 24, 11, 156, 87, 1, 9]));
console.log(max_sum_of_numbers([100, 200, 300, 400, 500, 600, 700,800]));