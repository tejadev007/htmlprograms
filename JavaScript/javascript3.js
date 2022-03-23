function showPassword()
{
	var pass = document.getElementById("thy").setAttribute("type","text")
}
function hidePassword()
{
	var pass = document.getElementById("thy").setAttribute("type","password")
}
function showAndHide()

{
	var prev = document.getElementById("thy").getAttribute("type")
	
	if (prev == "password")
	{
		document.getElementById("thy").setAttribute("type","text")
	}
	else
	{
		document.getElementById("thy").setAttribute("type","password")
	}
}
	