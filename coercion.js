4 + "7"; //47
4 + "7"; //28

//coercion: cambiar de string a numero

var a = 4 = "7";
typeof a  // output: "string"

//coercion explicita
var b= 4 * "7";
typeof b //output "number"

//coercion implicita
var x  = 20;
var y = x + "";
console.log(y); //output: 20
typeof y; //output: "string"
var z = String(x);  //obligar al numero a string
typeof z //output: "string"

var w = Number(z);
typeof w //output "number"