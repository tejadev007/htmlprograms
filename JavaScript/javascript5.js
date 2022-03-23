function showName()
{
	var text = document.getElementById("input1").value

	document.getElementById("result1").innerHTML = text

	var text2 = document.getElementById("input2").value

	document.getElementById("result2").innerHTML = text2

	var text3 = document.getElementById("input3").value

	document.getElementById("result3").innerHTML = text3

	document.getElementById("input2").setAttribute("value","+91")

	document.getElementById("fieldset1").style.color = "blue"

	document.getElementById("fieldset1").style.boxShadow ="0px 0px 10px blue"

	document.getElementById("fieldset2").style.color = "blue"

	document.getElementById("fieldset2").style.boxShadow ="0px 0px 10px blue"
}


