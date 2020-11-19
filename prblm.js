/*

AUTHOR:MAHBUBUL HASAN SAKIB

*/


var pre = "";
function fun(r)   //receiving the value of each key
{
    $("#res").val(pre+r);  //showing the current input value with previous existing values in calculator
    pre=$("#res").val();   //store the previous values of calculator screen
}
function clr() //for clearing the all existing values from screen
{
    $("#res").val(""); //it clears the screen by putting null value;
    pre = "";   //it stores the previous value as null
}
function cal() //for calculation 
{
    var res = eval($("#res").val()); //it evaluates the arithmetic expressions
    $("#res").val(res); //showing the result after evaluation of expressions
    pre = $("#res").val(); //store previous result
}
function clr_last() //for removing last digit from screen
{
    var s = $("#res").val();
    $("#res").val(s.slice(0, -1)); //slicing the last digit from screen
    pre = $("#res").val();  //restore the existing values after removing one digit
}