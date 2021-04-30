let firstNumber = 600;
let secondNumber = 700;
let calculation;
let lineBreak= "</br>";
calculation = firstNumber + secondNumber;
document.write("my first number is:" + firstNumber);
document.write(lineBreak);

document.write("my second number is:" + secondNumber);
document.write(lineBreak);
document.write("first number + second number =" + calculation);
document.write(lineBreak);


calculation = firstNumber - secondNumber;
document.write("first number - second number =" + calculation);

document.write(lineBreak);
calculation = firstNumber * secondNumber;
document.write("first number * second number =" + calculation);

document.write(lineBreak);
calculation = firstNumber / secondNumber;
document.write("first number / second number =" + calculation);

document.write(lineBreak);
calculation = secondNumber % firstNumber;
document.write("first number % second number =" + calculation);

document.write(lineBreak);
firstNumber = ++ firstNumber;
document.write("++firstNumber =" + firstNumber);

document.write(lineBreak);
firstNumber = -- secondNumber;
document.write("--firstNumber =" + secondNumber);