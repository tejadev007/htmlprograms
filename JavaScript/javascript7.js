function RegExpression()
{
	var firstname = document.getElementById("fname").value

		var regExp = /^[A-Z]{5,8}$/

		if (firstname.match(regExp))
		{
			var msg = "valid data"
			document.getElementById("check").innerHTML = msg
		}
		else
		{
			var msg = "invalid data"
			document.getElementById("check").innerHTML = msg
		}

}