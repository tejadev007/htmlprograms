function mobnum()
{
	var num = document.getElementById("mnum").value

	var numlen = num.length

		if (numlen == 10)
		{
			document.getElementById("button").removeAttribute("disabled") 
		}
		else
		{
			document.getElementById("button").setAttribute("disabled","true")
		}
}