/**
 * Created by shraddha on 22/7/17.
 */
import {multi_value,sum} from "./lib";



let q, w, e, r, t, y;

//Here we are using ES6's array destructuring feature to assign the returned values to variables.
//Here we are ignoring 2 and 4 array indexes
[q, w, e, r, , y] = multi_value();

//alert(y);



let array = [1,4,5,6];

let add = sum(...array);
alert(add);




//setTimeout(()=>{ alert("Hello"); }, 3000);
/*let printMessage = (message)=>{ alert(message); }

 printMessage('Hello World');*/

/*let detail = {
 "name":"test",
 "message":"testing"
 };


 let{name}=detail;
 alert(name);*/


//ES6 Array Example
/*var array = [1, 3, 5, 7, 9];

 //'i' references to the values of the array indexes
 for(var i of array)
 {
 //   console.log(i); //1, 3, 5, 7, 9
 alert(i);
 }*/


//Return Multiple value
/*function multi_value()
 {
 return [1, 6, 7, 4, 8, 0]; //here we are storing variables in an array and returning the array
 }

 var q, w, e, r, t, y;

 //Here we are using ES6's array destructuring feature to assign the returned values to variables.
 //Here we are ignoring 2 and 4 array indexes
 [q, w, e, r, , y] = multi_value();

 alert(y);//y is 0
 alert(e);//y is 0*/


/*function sum(a, b,c)
 {
 alert(a+b+c);
 }

 var array = [1,4,5,6];

 sum(...array);*/


/*//args variable is an array holding the passed function arguments
 function function_one(...args)
 {
 alert(args);
 alert(args.length);
 }

 function_one(1, 4);
 function_one(1, 4, 7);
 function_one(1, 4, 7, 0);


 function function_two(a, b, ...args)
 {
 alert(args);
 alert(args.length);
 }

 //"args" holds only 7 and 9
 function_two(1, 5, 7, 9);*/



/*var a = [1, 2, 3];
 alert(a.includes(2)); // true
 alert(a.includes(4)); // false*/


/*var sum = (x, y) => x + y;

 console.log(sum(2, 900)); //902*/

/*function sum(p, q)
 {
 console.log(p() + q()); //87
 }

 sum(a => 20 + 10, b => 1 + 56); */


