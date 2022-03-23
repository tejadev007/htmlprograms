function addition()
{
	var num1 = document.getElementById("input1").value
		var num2 = document.getElementById("input2").value
		var sum = parseInt(num1) + parseInt(num2)
		document.getElementById("result").innerHTML = sum

}
function difference()
{
	var num1 = document.getElementById("input1").value
		var num2 = document.getElementById("input2").value
		var diff = num1 - num2
		document.getElementById("result").innerHTML = diff
}
function Multiplication()
{
	var num1 = document.getElementById("input1").value
		var num2 = document.getElementById("input2").value
		var diff = num1 * num2
		document.getElementById("result").innerHTML = diff
}
function Division()
{
	var num1 = document.getElementById("input1").value
		var num2 = document.getElementById("input2").value
		var diff = num1 / num2
		document.getElementById("result").innerHTML = diff
}