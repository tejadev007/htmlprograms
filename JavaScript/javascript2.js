function workingWithButtons()
{
	var umob = document.getElementById("mnum").value
	
	var umoblen = umob.length

		if (umoblen == 10)
		{
			//enable the button
			document.getElementById("btn").removeAttribute("disabled")
		}
		else 
		{
			//disable the button
			document.getElementById("btn").setAttribute("disabled","true")
		}
}