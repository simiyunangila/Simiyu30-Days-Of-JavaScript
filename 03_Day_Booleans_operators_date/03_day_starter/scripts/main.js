// ## 💻 Day 3: Exercises

// ### Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstname =Rebecca 
let lastName = Simiyu
let country= Kenya
let city = Nairobi
let age = 50
let isMarried=false

// 2. Check if type of '10' is equal to 10
console.log(10===10);

// 3. Check if parseInt('9.8') is equal to 10
let Compare= 9.8===10

// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
//    2. Write three JavaScript statement which provide falsy value.


// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3  true
   2. 4 >= 3 false
   3. 4 < 3 false
   4. 4 <= 3 false
   5. 4 == 4 true
   6. 4 === 4 true
   7. 4 != 4 false
   8. 4 !== 4 false
   9. 4 != '4' false
   10. 4 == '4'true
   11. 4 === '4' false

   // 12. Find the length of python and jargon and make a falsy comparison statement.
  " python".length==="jargon".length

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12 true
   2. 4 > 3 && 10 > 12 false
   3. 4 > 3 || 10 < 12 true
   4. 4 > 3 || 10 > 12  true
   5. !(4 > 3) false
   6. !(4 < 3) true
   7. !(false) false
   8. !(4 > 3 && 10 < 12) false
   9. !(4 > 3 && 10 > 12) false
   10. !(4 === '4') true
   11. There is no 'on' in both dragon and python false

// 7. Use the Date object to do the following activities
   1. What is the year today? getfullyear()
   2. What is the month today as a number? getmonth()
   3. What is the date today?now date()
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

### Exercises: Level 2

1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```

1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
1. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
1. Calculate the slope, x-intercept and y-intercept of y = 2x -2
1. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
1. Compare the slope of above two questions.
1. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

1. If the length of your name is greater than 7 say, your name is long else say your name is short.
1. Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

1. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

1. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```

// 1. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm getfullyear()-getmonth()-getdate()
   2. DD-MM-YYYY HH:mm getdate()-getmonth()-getfullyear()
   3. DD/MM/YYYY HH:mm getdate()/getmonth()/getfullyear()