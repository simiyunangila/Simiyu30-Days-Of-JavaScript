// this is your main.js


// ### Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another
// feedback stating to  wait for the number of years he needs to turn 18.
let drivingAge = prompt("Enter your age:")

if (drivingAge >= 18) {
    console.log("You are old enough to drive");
    
}else{
    let calculate = 18 - drivingAge
    console.log(`Wait for ${calculate} years you need to turn 18 first inorder to start driving.`);
}
//    ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.
//    ```

// 1. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). 
//Use prompt(“Enter your age:”) to get the age as input.
 let yourAge = prompt("Enter your age:")
 if (yourAge === 25) {
    console.log("we are agemates");
 } else if (yourAge > 25) {
    let nresult = yourAge - 25;
    console.log(`You are ${nresult} years older than me`);
 } else {
    let nresult = 25 - yourAge;
    console.log(`You are ${nresult} years younger than me`);
 }
//    ```sh
//    Enter your age: 30
//    You are 5 years older than me.
//    ```

// 1. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

//     - using if else
//     - ternary operator.

//     ```js
       let a = 4
      let b = 3
    if (a>b) {
        console.log(`${a} is greater than ${b}`);
        
    } else {
        console.log(`${b} is greater than ${a}`);
        
    }
//     ```
let comparison = 4>3
comparison
?console.log('4 is greater than 3')
:console.log(false);
//     ```sh
//       4 is greater than 3
//     ```

// 1. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
 let declarednum = prompt('Input number:')
 if (declarednum%2 ===0) {
    console.log(`${declarednum} is an even number`);
 } else {
    console.log(`${declarednum} is an odd number`);
 }
//     ```sh
//     Enter a number: 2
//     2 is an even number

//     Enter a number: 9
//     9 is is an odd number.
//     ```

// ### Exercises: Level 2

// // 1. Write a code which  can give grades to students according to theirs scores:
// //    - 80-100, A
// //    - 70-89, B
// //    - 60-69, C
// //    - 50-59, D
// //    - 0-49, F
let studentname = prompt('Student name:')
let grade = prompt('Enter student score:')
switch (true){
    case grade >= 80:
        console.log(`${studentname} scored A with ${grade} points `);
        break;
    case  grade >= 70 && grade < 80:
        console.log(`${studentname} scored B with ${grade} points `);
        break;   
    case grade >= 60 && grade < 70:
        console.log(`${studentname} scored C with ${grade} points `);
        break; 
    case grade >= 50 && grade < 60:
        console.log(`${studentname} scored D with ${grade} points `);
        break;
    default: 
        console.log(`${studentname} scored F with ${grade} points `); 

}





// if (grade >= 80) {
//     console.log('A');
// } else if (grade >= 70 && grade < 80) {
//     console.log('B');
    
// } else if (grade >= 60 && grade < 70) {
//     console.log('C');
    
// } else if (grade >= 50 && grade < 60) {
//     console.log('D');
    
// } else {
//     console.log('F');
    
// }

// // 1. Check if the season is Autumn, Winter, Spring or Summer.
// //    If the user input is :
// //    - September, October or November, the season is Autumn.
// //    - December, January or February, the season is Winter.
// //    - March, April or May, the season is Spring
// //    - June, July or August, the season is Summer
let season = prompt('Input month?').toLowerCase(); // Convert input to lowercase

switch (season) {
    case "september":
    case "october":
    case "november":
        console.log(`${season} the sean is Autumn.`);
        break;
        case "december":
            case "january":
            case "february":
                console.log(`${season} the sean is Winter.`);
                break;
                case "march":
                    case "april":
                    case "may":
                        console.log(`${season} the sean is Spring.`);
                        break;
                        case "june":
                            case "july":
                            case "august":
                                console.log(`${season} the sean is Summer.`);
                                break;
    
    default:
        console.log('This is not included in the seasons.');
}
// // 1. Check if a day is weekend day or a working day. Your script will take day as an input.
let checkday = prompt('What is the day today?').toLowerCase(); // Convert input to lowercase

switch (checkday) {
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(`${checkday} is a working day`);
        break;
    case "saturday":
    case "sunday":
        console.log(`${checkday} is a weekend day`);
        break;
    default:
        console.log('Not a day of the week');
}

// // ```sh
// //     What is the day  today? Saturday
// //     Saturday is a weekend.

// //     What is the day today? saturDaY
// //     Saturday is a weekend.

// //     What is the day today? Friday
// //     Friday is a working day.

// //     What is the day today? FrIDAy
// //     Friday is a working day.
// //   ```

// // ### Exercises: Level 3

// // 1. Write a program which tells the number of days in a month.

let countdays = prompt('What is the month?').toLowerCase(); // Convert input to lowercase

switch (countdays) {
    case "november":
    case "september":
    case "june":
    case "april":
        console.log(`${countdays} has 30 days`);
        break;
    case "january":
    case "march":
    case "july":
    case "may":
    case "august":
    case "october":
    case "december":
        console.log(`${countdays} has 30 days`);
        break;
        case "february":
            console.log(`${countdays} has 30 days`);
            break;    
    
    default:
        console.log('Not a month of year');
}




// //   ```sh
// //     Enter a month: January
// //     January has 31 days.

// //     Enter a month: JANUARY
// //     January has 31 day

// //     Enter a month: February
// //     February has 28 days.

// //     Enter a month: FEbruary
// //     February has 28 days.
// //   ```

// // 1. Write a program which tells the number of days in a month, now consider leap year.