
function add()
{
	var num1 = document.getElementById("tye").value
	var num2 = document.getElementById("run").value

	var sum = parseInt(num1) + parseInt(num2)
	document.getElementById("result").innerHTML = sum
   
}
add()

function sub()
{
	var num1 = document.getElementById("tye").value
	var num2 = document.getElementById("run").value
	var sub = num1 - num2
	
	document.getElementById("result").innerHTML = sub
}
sub()

function mul()
{
	var num1 = document.getElementById("tye").value
	var num2 = document.getElementById("run").value
	var mul = num1 * num2 

		document.getElementById("result").innerHTML = mul
}
		mul()

function div()
{
	var num1 = document.getElementById("tye").value
	var num2 = document.getElementById("run").value
	var div = num1 / num2

		document.getElementById("result").innerHTML = div

}
	div()