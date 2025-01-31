//if-else condition//
let number = -2;

if (number > 0) {
    console.log(`this number is a positive number`)
} else if (number < 0) {
    console.log(`this number is a negative number`)
} else { 
    console.log(`this number is 0`)
}

//switch statement//
var day = '6' ;

    switch (day) {
        case '1':
                console.log(`It's sunday`)
            break;
        case '2':
                console.log(`It's monday`)
            break;
        case '3':
                console.log(`It's tuesday`)
            break;
        case '4':
                console.log(`It's wednesday`)
            break;
        case '5':
                console.log(`It's thursday`)
            break;
        case '6':
                console.log(`It's friday`)
            break;
        case '7':
                console.log(`It's saturday`)
            break;
        default:
                console.log(`unknown day`)
            break;
    }

//loops
    //for loop
for (let c=1; c <= 5; c++) {
    console.log(c);
}
    //while loop
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

    //do...while loop
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);

    //control flow break
for (var a = 1; a <= 10; a++) {
    if (a === 3) {
        break;
    }
    console.log(a);
}
console.log(`loop stopped at a = 3`);

    //control flow continue
for (var b = 1; b <= 5; b++) {
    if (b === 3) {
        console.log(`skipping ${b}`);
        continue;
    }
    console.log(b)
}

//scope
var outside = "im outside";

function place() {
    var inside = "i'm inside";
    console.log(inside);
    console.log(outside);
}

place();

console.log(outside);
console.log(inside);