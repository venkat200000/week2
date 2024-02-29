let string =" pranusys";
let newstring ="";
for(var i= string.length-1;i>=0;i-- )
{ 
   newstring +=string[i];
}
console.log(newstring)

// 2nd method
//var splitstring = string.split("");
//var reversestring = splitstring.reverse();
//var joinstring = reversestring.join("");
//console.log( joinstring);

// console.log(string.split("").reverse().join(""));// simple using method                                                                 