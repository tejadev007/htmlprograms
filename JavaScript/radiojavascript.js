function basicRadioButtons()
{
	var radio1 = document.getElementById("radio1").checked
	var radio2 = document.getElementById("radio2").checked

	if (radio1 == false && radio2 == false)
	{
		var msg = "No Radio Buttons are Selected"

		document.getElementById("err").innerHTML = msg
	}
	if (radio1 == true)
	{
		var msg = "Male radio button is selected"

		document.getElementById("err").innerHTML = msg
	}
	if (radio2 == true)
	{
		var msg ="Female radio button is selected"

		document.getElementById("err").innerHTML = msg
	}
}