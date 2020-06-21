//.............................CHAPTER 21-25...............................

//...................QUESTION 1....
//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. 
//Greet the user using his full name.

//.........ANSWER
// var firstName=prompt("Enter your first name")
// var lastName=prompt("Enter your last name")
// var fullName= firstName + lastName;
// alert("Welcome " +fullName)

//...................QUESTION 2....
//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

//.........ANSWER
// var name=prompt("Enter your favorite mobile phone model")
// document.write("My favorite phone is :" +name)
// var n= (name.length);
// document.write("<br>Lenght of string :" +n)

//...................QUESTION 3....
//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

//.........ANSWER
// var str = "Pakistan.";
// document.write("String :" +str)
// var n = str.indexOf("n");
// document.write("<br>Index of 'n' :" +n)

//...................QUESTION 4....
//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

//.........ANSWER
// var str = "Hello World.";
// document.write("String :" +str)
// var n = str.lastIndexOf("l");
// document.write("<br>Index of 'l' :" +n)

//...................QUESTION 5....
//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

//.........ANSWER
// var name="Pakistani";
// document.write("The String : " +name)
// var firstChar = name.charAt(2);
// document.write("<br>Character at index 3 : " +firstChar)

//...................QUESTION 6....
//6. Repeat Q1 using string concat() method.

//.........ANSWER
// var str1 = prompt("Enter first name ")
// var str2 = prompt("Enter last name")
// var res = str1.concat(str2);
// alert("Welcome in JS world " +res)

//...................QUESTION 7....
//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

//.........ANSWER
// var cityName="Hyderabad";
// document.write("City : " +cityName)
// var firstChar = cityName.indexOf("Hyder");
//  if (firstChar !== -1) {
//     cityName = cityName.slice(0, firstChar) + "Islam" + cityName.slice(firstChar + 5);
//  }
//  document.write("<br>After replacement : " +cityName)


//...................QUESTION 8....
//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

//.........ANSWER
// var message="Ali and Sami are best friends. They play cricket and football together.";
// document.write("String : " +message)
// var newText = message.replace(/and/g, "&");
// document.write("<br>After replacement : " +newText)


//...................QUESTION 9....
//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

//.........ANSWER
// var num="472";
// document.write("Value : " +num +"<br>")
// document.write("Type :" +typeof num)
// var num1= Number(num);
// document.write("<br>Value : " +num1)
// document.write("<br>Type :" +typeof num1)

//...................QUESTION 10....
//10. Write a program that takes user input. Convert and show the input in capital letters.

//.........ANSWER
// var text=prompt("Enter some text");
// document.write("Users input : " +text)
// var res = text.toUpperCase();
// document.write("<br>Upper case : " +res)

//...................QUESTION 11....
//11. Write a program that takes user input. Convert and show the input in title case.

//.........ANSWER
// var text=prompt("Enter some text");
// document.write("Users input : " +text)
// var captializeStrig =(str) =>str[0].toUpperCase()+ str.slice(1).toLowerCase();
// var res = text.split(' ').map(captializeStrig);
// var capitalizeSentence =res.join(' ');
// document.write("<br>Upper case : " +capitalizeSentence)

//...................QUESTION 12....
//12. Write a program that converts the variable num to string. var num = 35.36 ;
//Remove the dot to display “3536” display in your browser.

//.........ANSWER
// var num = 35.36 ;
// document.write("Number :" +num)
// var str=num.toString();
// str = str.replace('.','');
// document.write("<br>Result :" +str)

//...................QUESTION 13....
//13. Write a program to take user input and store username in a variable. If the username
// contains any special symbol among [@ . , !], prompt the user to enter a valid username.For character codes of [@ .

//.........ANSWER
// var username = prompt("Enter user name: ");
// if (username.includes("@")||username.includes(".")||username.includes(",")||username.includes("!")){
// alert("Please enter a valid user name")}
// else{
// alert("Valid user name")
// }
    //...................QUESTION 14....
    //14. You have an array A = [cake”, “cake pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
   
//.........ANSWER
// var item =prompt("Welcome to ABC bakery. What do you want to order sir/ma'am ?: ");
// var fruits = ["cake", "cake pie", "cookie", "chips", "patties"];
// // Check if a value exists in the fruits array
// var index =fruits.indexOf(item);
// if(fruits.indexOf("cake") !== item)
// {
        
//     document.write(item + " is present at index " +index +" in our bakery");
// }
//  else if(fruits.indexOf("cake pie") !== item)
// {
//     document.write(item + " is present at index " +index +" in our bakery");
// }
// else if(fruits.indexOf("chips") !== item)
// {
//     document.write(item + " is present at index " +index +" in our bakery");
// }
// else if(fruits.indexOf("cookie") !== item)
// {
//     document.write(item + " is present at index " +index +" in our bakery");
// }
// else if(fruits.indexOf("patties") !== item)
// {
//     document.write(item + " is present at index " +index +" in our bakery");
// }
//  else{
//     document.write("We are sorry"+ item + "is not available in our bakery");
// }
//...................QUESTION 15....
//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// Declare variables and constants

//.........ANSWER
// var username;           // username entered by user
// var charAny;            // text character identified in username
// var anyNum = false;     // digit variable used to detect whether the username has one or not
// var index;              // index loop variable
// var BR = "<br />";      //break
// var ES = "";            //space
// // Display program requirements for the username requested
// document.write("We'll begin helping you select a username" + BR);
// document.write("Your username must have at least 8 characters," + BR);
// document.write("   start with a letter, and contain at least 1 numeric character." + BR);
// username = prompt("Please enter your username: ", ES);

// // Check for length of username
// while (username.length < 8) {
//     document.write("Your username must be at least 8 characters long." + BR);
//     username = prompt("Please enter your username: ", ES);
// }

// // Check that first character is a letter
// // Substring function has three arguments: string, starting position, and ending position
// charAny = username.substr(0, 1);
// while (charAny !== isLetter()) {
//     document.write("The first character of your username must be a letter." + BR);
//     username = prompt("Please enter your username: ", ES);
// }

// // Check that there's at least one digit in the username
// while (anyNum !== false) {
//     // Check each character, set anyNum to true if a digit
//     for (index = 1; index < username.substr(index, index); index++) {
//         anyNum = username.substr(index, index);
//         if (isNumeric(charAny)) {
//             anyNum = true;
//         }
//     }

//     // If anyNum is false there were no numerics
//     if (anyNum !== true) {
//         document.write("Your username must include at least 1 digit." + BR);
//         username = prompt("Please enter your username: ", ES);
//     }
// }

// // Thank the user and end the program
// document.write("Thank you! Your new username is: " + username);

//...................QUESTION 16....
//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
// var str = "University of Karachi";
// var array = str.split("");
// for(var i=0;i<array.length;i++)
// document.write(array[i] +"<br>")

//...................QUESTION 17....
//17. Write a program to display the last character of a user input.
// var str = prompt("User input: ");
// str1= str.charAt(str.length-1);
// document.write("Last character of input is: " + str1)

//...................QUESTION 18....
//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
// var str="You have a string “The quick brown fox jumps over the lazy dog";
// document.write("Text : " +str)
// var count = (str.match(/The/g) || []).length;
// var count1= (str.match(/The/g) || []).length;
// count2=count+count1;
// document.write("<br>There are "+count2 +"occurrences of word “the”")

//.............................CHAPTER 26-30...............................
//...................QUESTION 1....
//1. Write a program that takes a positive integer from user & display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

//.........ANSWER
// number =+prompt("Enter positive integer:")
// if (number<=0){
// alert("not a positive number")
// }
// else{
// document.write("number =" +number)
// }
// var roundOffValue = Math.round(number)
// document.write("<br>Round off value = " +roundOffValue)
// var floorValue = Math.floor(number)
// document.write("<br>Floor value of number =" +floorValue)
// var ceilValue =Math.ceil(number)
// document.write("<br>Ceil value of number = " +number)

//...................QUESTION 2....
//2. Write a program that takes a negative floating point number from user & display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

//.........ANSWER
// var number =+prompt("Enter a negative floating point integer:")
// if (number>=0){
// alert("not a negative floating point number")
// }
// else{
// document.write("number =" +number)
// }
// var roundOffValue = Math.round(number)
// document.write("<br>Round off value = " +roundOffValue)
// var floorValue = Math.floor(number)
// document.write("<br>Floor value of number =" +floorValue)
// var ceilValue =Math.ceil(number)
// document.write("<br>Ceil value of number = " +number)

//...................QUESTION 3....
//3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//.........ANSWER
// var num =+prompt("Enter positive or negative number")
// var absoluteValue =Math.abs(num)
// document.write("Absolute value of" +num +"=" +absoluteValue)

//...................QUESTION 4....
//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

//.........ANSWER
// var diceRoll1 = Math.floor( Math.random() * 6 ) +1;
// document.write('Random dice value : ' + diceRoll1);
// var diceRoll2 = Math.floor( Math.random() * 6 ) +1;
// document.write('<br>Random dice value : ' + diceRoll2);

//...................QUESTION 5....
//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

//.........ANSWER
// var heads = 0;
// var tails = 0;
// if (Math.random() < 0.5){
//     document.write("2<br> Random coin value:Heads")
// }else{
//     document.write("1<br> Random coin value: Tails")
// }

//...................QUESTION 6....
//6. Write a program that shows a random number between 1 and 100 in your browser.

//.........ANSWER
// var number = Math.floor(Math.random() * 100);
// document.write("Random number between 1 and 100 : " +number)

//...................QUESTION 7....
//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

//.........ANSWER
// var weight = prompt("Enter your weight in Kilograms")
// document.write("The weight of users is "+weight)

//...................QUESTION 8....
//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input 
//equals the secret number, congratulate the user.

//.........ANSWER
// var secretNum=Math.floor(Math.random()*10)
// var number =+prompt("Enter a number between 1 and 10")
// if (number===secretNum){
//     alert("Congratulation you won!")
// }
// else{
//     alert("Try again!")
// }

//.............................CHAPTER 31-34...............................
//...................QUESTION 1....
//1. Write a program that displays current date and time in your browser.
// var rightNow = new Date();
// document.write(rightNow)

//...................QUESTION 2....
//2. Write a program that alerts the current month in words. For example December.
// var monthNames = ["jan", "febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// var month=now.getMonth();
// var nameOfCurrentMonth=monthNames[month];
// document.write("Current month : "+nameOfCurrentMonth)

//...................QUESTION 3....
//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// alert("Today is " +nameOfToday);

//...................QUESTION 4....
//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
// var dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
// if (nameOfToday!==sunday){
//     alert("Its Funday!");
// }
// else if(nameOfToday!==saturday){
//     alert("Its Funday!");
// }
// else{
//     alert("Today is " +nameOfToday);
// }

//...................QUESTION 5....
//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows
// “Last days of the month”.
// var d = new Date();
//   var n = d.getUTCDate();
//   if(n<=15){
//       document.write("First fifteen days of the month")
//   }
//   else{
//       document.write("Last days of the month")
//   }
//...................QUESTION 6....
//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand.
// Use any variable you like to represent the Date object.
// var now = new Date();
// document.write("Current Date : " +now);
// var d = new Date();
// var n = d.getTime();
// document.write("<br>Elapsed milliseconds since January 1,1970 : " +n);
// var minutes= n / 60000;
// document.write("<br>Elapsed minutes since January 1,1970 : " +minutes);

//...................QUESTION 7....
//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
// var d = new Date();
// var n = d.getUTCHours();
// var m = d.getUTCMinutes();
// var s = d.getUTCSeconds();
//  if(n<=12 && m==00 && s==00){
//     alert("It's AM")
//  }
//  else{
//      alert("It's PM");
//  }

//...................QUESTION 8....
//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.
// var d = new Date();
// d.setDate(0);
// var laterDate=d;
// document.write("LaterDate : " +laterDate);

//...................QUESTION 9....
 // 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? 
 //Note: 1st Ramadan was on June 18, 2015
// var date1 = new Date("05/18/2015"); 
// var date2 = new Date("04/24/2020"); 

// var Difference_In_Time = date2.getTime() - date1.getTime(); 

// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

// document.write(+Difference_In_Days+ " days have passed since 1st Ramazan,2015");

 //...................QUESTION 10....
 //10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

//  var now1 = new Date("Jan/01/2015 01:00:00");
//  var now2 =new Date();
//  var Difference_In_Time = now2.getTime() - now1.getTime()/1000;
//  document.write("On reference date "+now2 +", " +Difference_In_Time +" seconds has passed since beginning of 2015");
 
 //...................QUESTION 11....
//  //11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and
// //finally display the date object in your browser.
// var d = new Date();
// document.write("Current Date : "+d);
// d.setHours(d.getHours() - 1);
// document.write(" <br>1 hour ago, It was: "+d);

//...................QUESTION 12....
// //12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
// var d = new Date();
// document.write("Current Date: "+d);
// d.setFullYear(d.getFullYear() -100);
// document.write("100 years back, It was: "+d);

//...................QUESTION 13....
//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
// var dob = prompt("Enter Your Age")
// var d=new Date();
// d.setFullYear(d.getFullYear() -dob);
// var n=d;
// var c=n.getFullYear();
// document.write("Your Age is : "+dob +"<br>Your Birth Year is : "+c);

//...................QUESTION 14....
//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places..
// Display the following fields:
//a. Customer Name
//b. Current Month
//c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date) Where,
//Net Amount Payable (within Due Date) = Number of units * Charges per unit
//& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name : <strong>ABC Customer</strong>");
// var monthNames = ["jan", "febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
//  var month=now.getMonth();
//  var nameOfCurrentMonth=monthNames[month];
//  document.write("<br>Month : " +"<b>"+nameOfCurrentMonth +"</b>");
// var units=prompt("Enter Number of units")
// var charges=16;
// document.write("<br>Number of units : " +"<b>"+units+"</b>" +"<br>Charges per unit : "+"<b>"+charges +"<b/><br>");
// var Net_Amount_Payable= units * charges;
// document.write("<br>Net Amount Payable (within Due Date) : " +"<b>" +Net_Amount_Payable + "</b>");
// var lateCharges =350;
// document.write("<br>Late Payment Charges : " +lateCharges);
// var Gross_Amount_Payable = Net_Amount_Payable + lateCharges;
// document.write("<br>Gross Amount Payable (after Due Date) : "+Gross_Amount_Payable);


//.............................CHAPTER 35-38...............................
//...................QUESTION 1....
//1. Write a function that displays current date & time in your browser.
// function foo() {
//     var now1=new Date();
//     document.write("Current Date and Time : "+now1);
// }
// foo();

//...................QUESTION 2....
//2. Write a function that takes first & last name and then it greets the user using his full name.
// function name(fName,lName){



//     return "Welcome "+fName + " " +lName

// }

// var firstName=prompt("Enter firstname")

// var lastName=prompt(" Enter lastname")

// document.write(name(firstName ,lastName))

//...................QUESTION 3....
//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// function add(a,b){
//     return (a + b)
// }
// var One=+prompt("Enter 1st number ");
// var two=+prompt("Enter 2nd number ");
// document.write(add(One,two));

//...................QUESTION 4....
//4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function name(num1, num2, operator) {
//     if (operator=="+"){
//         return "Sum = "+(num1 + num2)
//     }
//     else if(operator=="-"){
//         return "sub = "+((num1 - num2))
//     }
//     else if(operator=="*"){
//         return "Multiply = "+((num1 * num2))
//     }
//     else if(operator=="/"){
//         return "Divide = "+((num1 / num2))
//     }
//     else if(operator=="%"){
//         return "Reminder = "+((num1 % num2))
//     }
//     else{
//         return "Operator is not valid "
//     }
// }
//     var first=+prompt("Enter 1st number")
//     var second=+prompt("Enter 2nd number")
//     var operator1 =prompt("Enter the operator")
//     document.write(name(first,second,operator1));

    //...................QUESTION 5....
   // 5. Write a function that squares its argument.
// function sqr(num1){
//     return "Square of a Number = " +(num1*num1);
// }
// var first =+prompt("Enter an Integer ");
// document.write(sqr(first));

    //...................QUESTION 6....
//6. Write a function that computes factorial of a number.
// function factorial(n){
//     if (n == 0){
//         return 1
//     }
//     else{
//         return n * factorial(n-1)
// }
// }
// var num =+prompt("Enter An Integer ");
// document.write(factorial(num));

    //...................QUESTION 7....
    //7. Write a function that take start and end number as inputs & display counting in your browser.
    // function count(num1,num2){

    //     var numb=[] 
    //     temp=num1
    //     for(i=0;i<num2;i++){
    //      numb[i]=num1
    //      num1++
    //     }
    //     return numb
    // }
    
    // var start=prompt("Enter start num")
    // var end=prompt("Enter end num")
    
    // startI=parseInt(start)
    // endI=parseInt(end)
    
    // document.writeln(count(startI,endI))

        //...................QUESTION 8....
    //8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2
    // function hypo(num1,num2){

    //     return ((num1*num1)+(num2*num2))
    // }
    // num3=+prompt("enter base")
    
    // num4=+prompt("enter perp")
    // document.write(hypo(num3,num4))

        //...................QUESTION 9....
   // 9. Write a function that calculates the area of a rectangle. A = width * height Pass width and height in following manner:
//i. Arguments as value
//ii. Arguments as variables
// function rectA(height,width){
//     return height*width
  
//   }
//   var height =prompt("Enter Height")
//   var width=prompt("Enter width ")
//   document.write(rectA(height,width))
  
//...................QUESTION 10....
 //10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that 
 //reads the same backward as forward, e.g., madam.
// var wordR=""
// var ln = prompt("Enter to check palindrome")

// var tempWord = ln.split("");
// for(i=tempWord.length-1;i>=0;i--){

//  wordR=wordR+tempWord[i]
// }
// if (ln==wordR) {
//  document.write("word is a palindrome")
// }
//  else {
//   document.write("word isn't a palindrome")
// }

//...................QUESTION 11....
//11. Write a JavaScript function that accepts a string as aparameter and converts the first letter of each word of the string in upper case.
//EXAMPLE STRING : 'the quick brown fox'
//EXPECTED OUTPUT : 'The Quick Brown Fox'
// function small(inp) {
//     var inpSmall = inp.toLowerCase()
//      var chrCap = inpSmall.charAt(0)
//      chrCap = chrCap.toUpperCase()
//    var sep = inpSmall.split("")
//     sep[0] = chrCap
//    inpSmall = sep.join("")
//     return inpSmall
//   }
//   function Capsent(inp){
//   var propSent=""
//   var inpSmall = inp.toLowerCase()
//   var sp = inpSmall.split(" ")
//   for(i=0;i<sp.length;i++){
//      propSent=propSent+small(sp[i])+" "
//   }
//   return propSent
//   }
//   var inp = prompt("Enter ")
//   document.write(Capsent(inp))

//...................QUESTION 12....
//12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//EXAMPLE STRING : 'Web Development Tutorial'
//EXPECTED OUTPUT : 'Development'
// function Long(sent) {
//     var strSp = sent.split(' ')
//     var longestWord = 0
//    for(var i = 0; i < strSp.length; i++){
//     if(strSp[i].length > longestWord){
//       longestWord = strSp[i].length
//         num=i
//          }
//       }
  
//     return strSp[num]
//   }
//   var sen =prompt("Enter Sentence")
//   document.write(Long(sen))
  
  //...................QUESTION 13....
  //13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
  //occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'
//   function chec(sent, chr) {
//     var strSp = sent.split('');
//     num = 0
//     for (var i = 0; i < strSp.length; i++) {

//         if (strSp[i] == chr) {
//             num = num + 1
//         }
//     }
//     return num
// }
// var sen =prompt("Enter Sentence")
// var ch =prompt("Enter character")
// document.write(chec(sen,ch))


  //...................QUESTION 12....
  //14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference:
//• Pass the radius to the function.
//• Calculate the circumference based on the radius, and output "The circumference is NN".
//Create a function called calcArea: • Pass the radius to the function.
//• Calculate the area based on the radius, and output "The area is NN".
//Circumference of circle = 2πr Area of circle = πr2
// function calcCircumference(radius){
//     return "The circumference is"+(2*3.14*radius)
// }
// var num1=+prompt("Enter the radius");
// document.write(calcCircumference(num1));
// function calcCircumference1(radius){
//     return "<br>The area is"+(3.14*radius*radius)
// }
// document.write(calcCircumference1(num1));