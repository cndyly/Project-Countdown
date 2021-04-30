/*var code = "cynthia";
code = code.toUpperCase();
code = code.toLowerCase();*/

 var code = prompt("What your name?");
 var firstChar = code.slice (0,1);
 var upperCaseFirstChar = firstChar.toUpperCase();
 
 var restOfCode = code.slice(1, code.length);
 restOfCode =restOfCode.toLowerCase();
 var capitalisedCode =upperCaseFirstChar + restOfCode;
 alert ( " Hello, " + capitalisedCode );