function checkPhoneNumber()
{
	
	var num = document.getElementById("input").value
	var numlen = num.length
	
	if (numlen == 10)
	{
		document.getElementById("icon").setAttribute("class","fa fa-check-circle")
		
		document.getElementById("icon").style.color = "green"

		document.getElementById("input").style.borderColor = "green"

		document.getElementById("name").style.color = "green"

		var msg = "Success"
		document.getElementById("error").innerHTML = msg.fontcolor("green")
	}
	else
	{
		var msg = "Enter a Valid Phone Number"
		document.getElementById("error").innerHTML = msg.fontcolor("red")

		document.getElementById("name").style.color = "red"

		document.getElementById("input").style.borderColor = "red"

		document.getElementById("icon").setAttribute("class","fa fa-exclamation-circle")

		document.getElementById("icon").style.color = "red"

	}
}

