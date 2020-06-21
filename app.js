//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 

/* var firstName = window.prompt("Enter your first name: ");
       var lastName = window.prompt("Enter your last name: ");
var res = firstName + lastName;
alert(res);*/


//2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser 

/* var mobile = window.prompt("Enter your favourite mobile phone model: ");
var length = mobile.length;
alert("Mobile Phone Model: " +mobile + " " + "length of string: " +length); */

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser . 

/*var str="Pakistani";
var index= str.indexOf("n");
document.write("String: " +str + "<br>" + "index of n: " +index); */

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 

/* var str="Hello World";
var index= str.lastIndexOf("l")
document.write("String: " +str + "<br>" + " last index of l: " +index); */

//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 

/*var str="Pakistani";
var index= str.charAt(3);
document.write("String: " +str + "<br>" + "character at index 3: " +index); */

// 6. Repeat Q1 using string concat() method. 

/* var firstName = window.prompt("Enter your first name: ");
       var lastName = window.prompt("Enter your last name: ");
var res = firstName.concat(lastName);
alert(res);*/

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

/*var str="Hyderabad";
var k = str.replace("Hyder","Islam");
document.write("City: " +str + "<br>" + "After repalcement: " +k); */

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 

/* var message = "Ali and Sami are best friends. They play cricket and football together.";
var secondname= message.replace(/and/g , "&");
alert(secondname);*/

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
/* var str= "427";
 var number= parseInt(str);
 document.write("Value: " +str+ "<br>" + "Type: " +"String" + "<br>" + "Value: " +number+ "<br>" + "Type: " +"number"  ); */

 //10. Write a program that takes user input. Convert and show the input in capital letters. 

/* var a=prompt("enter any string: ");
 var b=a.toUpperCase();
 document.write("User Input: " +a + "<br>" + "Upper Case: " +b); */

 //11. Write a program that takes user input. Convert and show the input in title case.

/* var str=prompt("Enter your string: ");
str=str.toLowerCase().split(" ");
var capital="";
for(var i=0;i<str.length;i++){

    capital+=str[i].charAt(0).toUpperCase() + str[i].slice(1);
    capital+=" ";
} 
document.write("User Input: " +str + "<br>" + "Title Case: " +capital) */

// Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser. 

/* var a=35.36;
var b=a.toString();
var c=b.replace(".","");
document.write("Number: " +a+ "<br>" + "Result: " +c) */

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 

/*var a=prompt("Username: ");
for(var i=0;i<=a.length;i++){
    if(a.charCodeAt(i)==33 || a.charCodeAt(i)==44 || a.charCodeAt(i)==46 || a.charCodeAt(i)== 64){
        var message="Please enter a valid username";
break
    }
    else{
        message="valid username"
    }
}
alert(message) */


//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability

/*var arr=["cake","apple pie","cookie","chips","patties"];
var str=prompt("Welcome to bakery.what do you want to order sir/ma'am? ");

for(var i=0;i<arr.length;i++){
    var q=arr.indexOf(str);
    var b=str.toLowerCase();
  var a=  arr[i].toLowerCase();
  
if(b==a){
    var message="avalaible";
    document.write(str + " is " + message + " at index " + q)
    break;
}
else{
    message="not avalaible";
    document.write(str + " is " + message)
    break;
}
 */


 //15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 

/* var userpass=prompt("enter password");
var hasNumbers=false;
var hasAlphabets=false;
var a=true;
if(userpass.length<6){
    alert("passwrod should have atleast six characters");
}
else{
    if(userpass.charCodeAt(0)>47&&userpass.charCodeAt(0)<58){
        alert("password should not start with number");
        a=false;
    }
    for(var i=0;i<userpass.length;i++){
        var charcode=userpass.charCodeAt(i);
        if(charcode>47&&charcode<58){
            hasNumbers=true;
        }
        else if(charcode>97&&charcode<123||charcode>64&&charcode<91){
            hasAlphabets=true;
        }
    }
    
    if(hasNumbers==false){
        alert("your password should have some number");
    }
    else if(hasAlphabets==false){
        alert("your password should have some alphabets");

    }
    else if(a==true&&hasAlphabets==true&&hasNumbers==true){
        alert("password is successfully submitted")
    }

} */

// Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.  

/*var a="UNIVERSITY OF KARACHI";
 for(var i=0;i<a.length;i++){
     var b=a.split("");
     document.write(a[i] + "<br>")
 }
 */

 //17. Write a program to display the last character of a user input. 

/* var a=prompt("enter any string: ");
 var b=a.charAt(a.length-1);
 document.write("User input: " + a + "<br>" + "Last character of input: " +b); */






 // MATH METHODS 

 //1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number   

/* var num=+prompt("enter any positive integer: ");
 var b=Math.round(num);
 var c=Math.floor(num);
 var d=Math.ceil(num);
 document.write("number: " + num + "<br>" + "round off value: " + b + "<br>" + "floor value: " + c + "<br>" + "ceil value: " + d); */


 //2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number 

/* var num=+prompt("enter any negetive floating number: ");
 var b=Math.round(num);
 var c=Math.floor(num);
 var d=Math.ceil(num);
 document.write("number: " + num + "<br>" + "round off value: " + b + "<br>" + "floor value: " + c + "<br>" + "ceil value: " + d); */

 // Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

/* var num= -10.34;
 var b= Math.abs(num);
 document.write("number: " + num + "<br>" + "absolute value: " + b); */


 //4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

/* var a=Math.floor(Math.random() * 6) + 1;
 document.write("random value of dice: " + a) */


 //5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 

/* var a= (Math.floor(Math.random() * 2) + 1); //? 'heads' : 'tails';
  if(a==1){
      document.write(a +"<br>" +  "random coin value : tails");
  }
  else{
    document.write(a +"<br>" + "random coin value: heads");
  } */

//6. Write a program that shows a random number between 1 and 100 in your browser. 

/*var num=Math.floor(Math.random() * 100) + 1;
document.write("the random no between 1 to 100 is: " + num); */

//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 

/*var weight= prompt("enter your weight in kilograms: ");
var b=parseFloat(weight);
document.write("the weight of user is " + b + " kilograms"); */


//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

/*var x=Math.floor(Math.random() * 10) + 1;
 var y=+prompt("enter any no from 1 to 10: ");
 if(x==y){
document.write("CONGRATES...");
 }
 else{
     document.write("TRY AGAIN");
 } */
 


 // FUNCTIONS


 //1. Write a function that displays current date & time in your browser. 

/* function myFunction(){
  return new Date();
 }
 document.write(myFunction()); */


 //2. Write a function that takes first & last name and then it greets the user using his full name. 

/* function myFunction(){
     var a=prompt("enter your first name: ");
     var b=prompt("enter your last name: ");
     return "Welcome"+ " " + a+b;
 }
 document.write(myFunction()); */


 //3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.  

/* function myFunction(){
     var a=+prompt("input any no: ");
     var b=+prompt("input any no: ");
     return a+b;
 }
 document.write(myFunction()); */


 //4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser. 

/* function myFunction(num1,num2,operator){
    if(operator == "add"){
return num1+num2
    }
    if(operator == "sub"){
        return num1-num2;
    }
    if(operator == "mul"){
        return num1*num2;
    }
    else if(operator == "divide"){
        return num1/num2;
    }

 }
 document.write(myFunction(2,3,"divide")) */

 //5. Write a function that squares its argument.   

/* function myFunction(num){
     return num*num;
 }
 document.write("square: " + myFunction(18)); */

 //6. Write a function that computes factorial of a number. 

/* function factorial(num) 
{ 

  if (num === 0)
 {
    return 1;
 }
  return num * factorial(num-1);
         
}
document.write("FACTORIAL: " + factorial(8)); */


//7. Write a function that take start and end number as inputs & display counting in your browser. 

/*function myFunction(){
    var a=+prompt("enter start no:");
    var b=+prompt("enter end no: ");
    for(var i=a;i<=b;i++){
    document.write(i + "<br>");
    }
    return i;
}
document.write(myFunction()); */

//8. Write a nested function that computes hypotenuse of a right angle triangle.  Hypotenuse2 = Base2 + Perpendicular2 

/*function calcHypotenuse(base, Perpendicular) {
    function square(a) { return a * a; }
    return Math.sqrt(square(base) + square(Perpendicular));
 }
 
   document.write("the hypotenuse is : " + calcHypotenuse(2,2)); */




//9. Write a function that calculates the area of a rectangle.      A = width * height     Pass width and height in following manner: i. Arguments as value ii. Arguments as variables 
// i. arguments as values:

/*function myFunction(width=24,height=51){
    var area= width * height;
    return area;
}
document.write("the area of rectangle is: " + myFunction()); */

//ii.arguments as variables:

/*function myFunction(width,height){
    var area= width * height;
    return area;
}
document.write("the area of rectangle is: " + myFunction(24,51)); */




//10. Write a JavaScript function that checks whether a passed string is palindrome or not?   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam

/*function myFunction(n){
    var b=n.split("").reverse().join("");
    if (n==b){
        document.write("it is a palindrome")
    }
    else{
        document.write("plz write correct string")
    }
     }
     myFunction("madam"); */


     //11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 

    /* function myFunction(x){
        x=x.toLowerCase().split(" ");
    var capital="";
    for(var i=0;i<x.length;i++){
    
        capital+=x[i].charAt(0).toUpperCase() + x[i].slice(1);
        capital+=" ";
    } 
    return capital;
     }
     document.write(myFunction("my name is soma fatima")); */


     //12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 

    /* function myFunction(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(myFunction('this is something wrong')); */


//13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'   

/*function myFunction(str,letter){
    var letterCount=0;
    for(var x=0;x<str.length;x++){
if(str.charAt(x)== letter){
    letterCount +=1;
}
    }
    return letterCount;
}
document.write("Occurance of " + myFunction("mississippi","s")) */


//14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference: • Pass the radius to the function. • Calculate the circumference based on the radius, and output "The circumference is NN". Create a function called calcArea: • Pass the radius to the function. • Calculate the area based on the radius, and output "The area is NN".

/*function calcCircumference(radius){
var circumference=2*Math.PI*radius;
return circumference;
}
document.write("the circumference of a circle is found to be: " + calcCircumference(10)); */

// FOR RADIUS:

/*function calcArea(radius){
    var area=Math.PI*(radius*radius);
    return area;
    }
    document.write("the area of a circle is found to be: " + calcArea(10)); */


    // DATE METHOD:

    //1.Write a program that displays current date and time in your browser. 
   /* var a=new Date();
    document.write(a); */

    //2. Write a program that alerts the current month in words. For example December. 
  
 /*   var a = new Date();
var n = a.getMonth();
if(n==0){
    alert("january");
}
if(n==1){
    alert("feburary");
}
if(n==2){
    alert("march");
}
if(n==3){
    alert("april");
}
if(n==4){
    alert("may");
}
if(n==5){
    alert("june");
}
if(n==6){
    alert("july");
}
if(n==7){
    alert("august");
}
if(n==8){
    alert("september");
}
if(n==9){
    alert("october");
}
if(n==10){
    alert("november");
}
if(n==11){
    alert("december");
} */

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 

/*var a = new Date();
var b = a.getDay();
if(b==0){
    alert("today is Sun")
}
if(b==1){
    alert("today is Mon")
}
if(b==2){
    alert("today is tue")
}
if(b==3){
    alert("today is Wed")
}
if(b==4){
    alert("today is Thrus")
}
if(b==5){
    alert("today is Fri")
}
if(b==6){
    alert("today is Sat")
}*/

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.  


/*var a = new Date();
var b = a.getDay();
if(b==0){
    alert("its Fun Day!")
}
if(b==1){
    alert("today is Mon")
}
if(b==2){
    alert("today is tue")
}
if(b==3){
    alert("today is Wed")
}
if(b==4){
    alert("today is Thrus")
}
if(b==5){
    alert("today is Fri")
}
if(b==6){
    alert("its fun day!")
}*/

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 

/* var date =new Date();
         var a=date.getDate();
         if(a<16){
             document.write("First Fifteen Days of the Month");
         }
         else{
             document.write("last Days of Month");
         } */


         //6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. 


           // var a=new Date();
        // document.write("Current date"+date);
        // document.write("<br>Elapsed milliseconds sice January 1,1970: "+a.getTime());
        // document.write("<br>Elapsed minutes sice January 1,1970: "+a.getTime()/60000);

        //7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

        // var a=new Date();
        // document.write()
        // document.write(a.getHours()>12? "It's PM":"It's AM");


        //8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 

         // var Date=new Date("December 31, 2020");
        // document.write("Later Date: "+Date);

        //9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015  

        // var ramadanDate=new Date("June 18, 2015");
        // var currentDate=new Date();
        // var differ=currentDate.getTime()-ramadanDate.getTime();
        // document.write(Math.round(differ/86400000)+" Days have passed since 1st Ramadan,2015");



        //10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

        // var fif=new Date("January 1, 2015");
        // var refDate=new Date("December 3, 2018");
        // var differ=refDate.getTime()-fif.getTime();
        // document.write("On reference date "+refDate+" ,"+differ/60000+" had passed since biggening of 2015");


        //11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.  

          // var a=new Date(); 
        // var gethour=a.getHours();
        // var setdate=a.setHours(gethour-1);
        // var getnewhour=a.getHours();
        // var currdate=new Date();
        // document.write("Current date:"+currdate+"<br> 1hours age, it was "+a);


        //12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 

         // var currDate=new Date();
        // var backDate=new Date();
        // backDate.setFullYear(currDate.getFullYear()-100);
        // d.write("current date:"+currDate+"<br>100 year back,it was "+backDate);


        //13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

         // var age=+prompt("enter your age.")
        // var date=new Date();
        // var birthYear=date.getFullYear()-age;
        // d.write("Your age is "+ age +"<br>Your birthYear is "+birthYear);


        //14. Write a program to generate your K-Electric bill in your browser. 

        // var customerName=prompt("enter your name:");
        // var date=new Date();
        // var monthes=["January","February","March","April","May","June","July","August","September","October","November","December"];
        // var currMonth=monthes[date.getMonth()];
        // var Units=+prompt("enter no of units:");
        // var perUnit=+prompt("enter per unit charges");
        // var lateCharges=+prompt("enter late charges");
        // var netAmount=Units*perUnit;
        // var grossAmount=netAmount + lateCharges;
        // d.write("<h1>K-Electric Bill</h1>");
        // d.write("Customer Name:"+"<b>"+customerName+"</b>");
        // d.write("<br>No of Units:"+"<b>"+Units+"</b>");
        // d.write("<br>charges per Unit:"+"<b>"+perUnit+"</b>");
        // d.write("<br>Net Amount Payable (Within Due Date):"+"<b>"+netAmount+"</b>");
        // d.write("<br>Late Payment Surcharges:"+"<b>"+lateCharges+"</b>");
        // d.write("<br>Gross Amount Payable (after Due Date):"+"<b>"+grossAmount+"</b>");

        

