// //variables
// /*variables act as a container which contains various data as temporary basis for mathmetical or logical
// operation on these data.*/ 

// // var one;
// // /*document.write(one+"<br>");

// // var two = 5;//Value assign in the variable using assignment operator(=)

// // document.write(two+"<br>");

// // document.write('2/3');*/

// // var two = 3; //Numeric type (Integer)

// // var add = one + two;

// // var minus = one - two;

// // var multiply = one * two;
// // document.write(typeof multiply+"<br>")
// // var divide = one/two;

// // var st = "araman"; //String type value
// // document.write(typeof st+"<br>")
// // var arr = new Array(); // Array Object

// // var bool = false; //Boolean type value
// // document.write(typeof bool+"<br>")

// // var floating_point = 10.5; //Float type value

// // var obj = new Object(floating_point+"<br>"); //Object Type variable

// // document.write(typeof obj+"<br>")

// // var dt = new Date();//Date type variable and object

// // document.write(typeof bool +"<br>");

// //var age = prompt("Enter your age");
// //alert('Your age is:'+age);
// //document.write("Your age is:"+age+"<br>");

// //console.log("Your age is:"+age);

// function getTotal()
// {
// 	var num1 = parseFloat(prompt("Enter first number:"));
// 	var num2 = parseFloat(prompt("Enter second number:"));
// 	var total = num1 + num2;
// 	document.getElementById("showtotal").innerHTML = total;
// }
// pro
// var name = araman;
// var age = 43;

// var message = `My name is ${name} and I am ${age} years old`; //Template literal

// // document.write(message);
	

// // document.write(addnum+"<br>");

// // document.write(st+"<br>");

// document.write(divide+"<br>");

// //document.write(obj);
// document.write(dt);

var x=5;
x+=2;
x-=5;
x*=4;
x / 3;
x++;
x--;
document.write(x+"<br>" );

var y=x % 3 ;
document.write(y+"<br>");

//if statement

// var age = ("Enter your Age");

// if(age >=18){
// 	document.write("You are adult")
// }

// else if (age <18) {
// 	document.write("your are ok")
// }

// else{
// 	document.write("old")
// }






// var one =prompt("Enter f.num");
// var two =prompt("2d");

// one=parseInt(one);
// two=parseInt(two);

// if (one==two) {
// 	document.write(one +"is equal to"+ two);
// }

// else if (one<two) {
// 	document.write(one +"is less than"+ two);
// }



// else {
// 	document.write(one +"is greater than"+ two);
// }



// var grade= prompt("Enter your Grade");

// switch (grade) {
// 		case 'A':
// 		document.write("Good Mark!");
// 		break;

// 		case 'B':case 'b':
// 			document.write("B");
// 		break;
		
// 		case 'C':
// 			document.write("c");
// 		break;

// 		case 'D':
// 			document.write("D");ent
// 		break;

// 		case 'F':
// 			document.write("F");
// 		break;
		
// 		default:
// 			document.write('Write grade');
// 		break;

 
// }



// let answer=prompt("What is a capital of france?\nA)Madrid\nB)Berlin\n\nEnter the letter your answer")

// //n

// switch (answer) {
// 	case "A":case "a":
// 		document.write("ok");
// 		break;

// 		case "B":
// 		case "b":
// 		alert("b");
// 		break;	

// 	default:
// 		document.write("undifined");
// 		break;
// }



// let answer2=prompt("What is a capital of france?\nA)Madrid\nB)Berlin\n\nEnter the letter your answer")

// //n

// switch (answer2) {
// 	case "A":case "a":
// 		document.write("ok");
// 		break;

// 		case "B":
// 		case "b":
// 		alert("b");
// 		break;	

// 	default:
// 		document.write("undifined");
// 		break;
// }

// var correct=Dhaka;
// if (answer) {
// 	document.write(correct);
// }





//Final Condition







let answer = prompt("What is the capital of France?\nA)Madrid\nB)Berlin\nC)Paris\nD)Rome\n\nEnter the letter of your answer:");

switch (answer) 
{
	case "A":
		alert("Wrong! The capital of France is not Mardird");
		break;
	case "B":
		alert("Wrong! The capital of France is not Berlin");
		break;
	case "C":
		alert("Correct! The capital of France is Paris");
		break;
	case "D":
		alert("Wrong! The capital of France is not Rome");
		break;

	default:
		alert("Invalid Choice!");
		break;
}


let answer2 = prompt("What is the capital of Bangladesh?\nA)Madrid\nB)Dhaka\nC)Paris\nD)Rome\n\nEnter the letter of your answer:");


switch(answer2)
{
	case "A":
	alert("Wrong! The capital of Bangladesh is not Madrid");
	break;

	case "B":
	alert("Correct! The capital of Bangladesh is Dhaka");
	break;

	case "C":
	alert("Wrong! The capital of Bangladesh is not Paris");
	break;

	case "D":
	alert("Wrong! The capital of Bangladesh is not Rome");
	break;

	default:
	alert("Invalid Choice!");
	break;
}

var x = ("A");
var y =("D");


if(answer)
{
	document.write("Correct answer is:"+x+"<br>");
}

if(answer2)
{
	document.write("Correct answer is:"+y);
}




