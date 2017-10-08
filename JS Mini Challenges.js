/*
1) Create a script with two variables, each assigned to a number.
Add them together and output the result to the console.
Now do the same with two strings.
*/

var num1 = 1 //Adding 2 numbers
var num2 = 2

console.log(num1 + num2)

var string1 = "Yeah" //Adding 2 strings
var string2 = "Boy!!"

console.log(string1 + ' ' + string2)

/*
Create a multidimensional array related to a subject that interests you.
Output two of the items in sub-arrays to the console.
*/

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

console.log(citrus)

/* Write a script that checks if a variable is less than 100.
If it is, alert the user that their variable is less than 100.
If it is not alert the user of what the value was and that it was greater than 100.
*/

function myNumber() {
  var x = document.getElementById('nuh').value
  if(x < 100){
    alert("Variable is less than 100")
  }
  else(
    alert("Value is " + x + " and that is greater than 100")
  )
}

/*
Declare a function that takes a name as an argument and tells the user what name they've entered.
Try running it after it has been declared.
*/

function myName(){
  var x = document.getElementById('duh').value;
  console.log(x)
  alert("Hello " + x)
}



/*
Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.
*/

function pickADoor(doorNumber){
	if(doorNumber == 1){
		console.log("You win a pony")
	} else if (doorNumber == 2){
		console.log("You win a pete townsend woodstock guitar")
	} else if (doorNumber == 3){
		console.log("You win my last night leftovers")
	} else {
		alert("please choose a door from numbers 1 - 3")
	}
}
pickADoor(1)
