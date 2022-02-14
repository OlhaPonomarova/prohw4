var str = prompt("");
var result = "";
var isfilter = false;

for (var char of str){
    if (char === "<"){
    isfilter = true;
 } 

if (isfilter === false){
    result += char;
 }

if (char === ">"){
    isfilter = false;
 }  
}

console.log(result);