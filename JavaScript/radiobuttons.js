function workingWithRadioButtons()
{
	var num1 = document.getElementById("input1").value

	var num2 = document.getElementById("input2").value

	var radio1 = document.getElementById("radio1").checked

	var radio2 = document.getElementById("radio2").checked

	var radio3 = document.getElementById("radio3").checked

	var radio4 = document.getElementById("radio4").checked

	if(radio1 == false && radio2 == false && radio3 == false && radio4 == false)
	{
		var msg="No Radio Buttons are Selected"

		document.getElementById("err").innerHTML = msg
	}

	if(radio1 == true)
	{
		var sum = parseInt(num1) + parseInt(num2)
		
		document.getElementById("result").innerHTML = sum
	}

	if(radio2 == true)
	{
		var diff = num1 - num2
		
		document.getElementById("result").innerHTML = diff
	}

	if(radio3 == true)
	{
		var mul = num1 * num2
		
		document.getElementById("result").innerHTML = mul
	}

	if(radio4 == true)
	{
		var div = num1 / (num2)
		
		document.getElementById("result").innerHTML = div
	}
}