function greet(){
  console.log("who is this")
}
greet ();



function greetwithName(name){
  console.log("hello" + "      " +name)
}
greetwithName("vini");
greetwithName("Sp")



function add(a,b){
  console.log(a+b);
}
add(8,3);



function sqrt(number){
  return number*number;
}
result=sqrt(7);
console.log(result);

//global scope 
//local scope

let c = "hai";

function greeting(){
  let b="vini";
  console.log(c);
  console.log(c + " " + b);
  
  if(true){
    let d ="bye";
    console.log(d);
    console.log(b);
  }
  console.log(c);
}

greeting();

for (let i = 0; i <10; i++){
  if (i == 5){
    break;
  }
  console.log(i);
}
let name = "vini"
if (name != "vini"){
  console.log("select");
} else {
  console.log("reject");
}

console.log(Math.floor(7.88))

console.log(test);
var test=1;

var test2=4;
console.log(test2);

test3=5
console.log(test3);
var test3

console.log(test4)
var test4=5

function countDown( number ){
number=number - 1;
if(number>0){
  countDown(number);
}
}
countDown(10);

