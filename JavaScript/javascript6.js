function decor()
{

	var text = document.getElementById("input1").value
	
	var text_len = text.length

	if (text_len >= 10)
	{
		document.getElementById("input1").style.border = "2px solid green"

		document.getElementById("input1").style.borderRight = "0px"

		document.getElementById("icon1").style.border = "2px solid green"

		document.getElementById("icon1").style.borderLeft = "0px"

		document.getElementById("icon1").setAttribute("class","fa fa-check-circle fa-2x")

		document.getElementById("icon1").style.color = "green"

		document.getElementById("label_1").style.color = "black"

		document.getElementById("head_6").style.color = "black"

		var err = ""

		document.getElementById("h5_1").innerHTML = err

	}
	else 
	{
		document.getElementById("input1").style.border = "2px solid red"

		document.getElementById("input1").style.borderRight = "0px"

		document.getElementById("icon1").style.border = "2px solid red"

		document.getElementById("icon1").style.borderLeft = "0px"
		
		document.getElementById("icon1").setAttribute("class","fa fa-exclamation-circle fa-2x")
			
		document.getElementById("icon1").style.color = "red"

		document.getElementById("label_1").style.color = "red"

		document.getElementById("head_6").style.color = "red"
		
		var err = "Enter a valid Email Id"

		document.getElementById("h5_1").innerHTML = err.fontcolor("red")
	}
}

function decor2()
{
	document.getElementById("input1").style.border = "2px solid black"

	document.getElementById("input1").style.borderRight = "0px"

	document.getElementById("icon1").style.border = "2px solid black"

	document.getElementById("icon1").style.borderLeft = "0px"
}

function decor3()
{

	var text = document.getElementById("input2").value
	
	var text_len = text.length

	if (text_len >= 8)
	{
		document.getElementById("input2").style.border = "2px solid green"

		document.getElementById("input2").style.borderRight = "0px"

		document.getElementById("icon2").style.border = "2px solid green"

		document.getElementById("icon2").style.borderLeft = "0px"

		document.getElementById("icon2").style.borderRight = "0px"

		document.getElementById("icon3").style.border = "2px solid green"

		document.getElementById("icon3").style.borderLeft = "0px"

		document.getElementById("icon2").setAttribute("class","fa fa-check-circle fa-2x")

		document.getElementById("icon2").style.color = "green"

		document.getElementById("label2").style.color = "black"

		document.getElementById("heading").style.color = "black"

		var error = ""

		document.getElementById("heading").innerHTML = error.fontcolor("black")
	}
	else 
	{
		document.getElementById("input2").style.border = "2px solid red"

		document.getElementById("input2").style.borderRight = "0px"

		document.getElementById("icon2").style.border = "2px solid red"

		document.getElementById("icon2").style.borderLeft = "0px"

		document.getElementById("icon2").style.borderRight = "0px"

		document.getElementById("icon3").style.border = "2px solid red"

		document.getElementById("icon3").style.borderLeft = "0px"
		
		document.getElementById("icon2").setAttribute("class","fa fa-exclamation-circle fa-2x")

		document.getElementById("icon2").style.color = "red"

		document.getElementById("label2").style.color = "red"
		
		var error = "Enter a valid password"

		document.getElementById("heading").innerHTML = error.fontcolor("red")
	}
}
function decor4()
{
	document.getElementById("input2").style.border = "2px solid black"

	document.getElementById("input2").style.borderRight = "0px"

	document.getElementById("icon2").style.border = "2px solid black"

	document.getElementById("icon2").style.borderLeft = "0px"

	document.getElementById("icon2").style.borderRight = "0px"

	document.getElementById("icon3").style.border = "2px solid black"

	document.getElementById("icon3").style.borderLeft = "0px"
}

function passwordEye()
{
	var prev = document.getElementById("icon3").getAttribute("class")

	var previous = document.getElementById("input2").getAttribute("type")

	if (prev == "fa fa-eye fa-2x" && previous == "password")
	{
		document.getElementById("icon3").setAttribute("class","fa fa-eye-slash fa-2x")
		document.getElementById("input2").setAttribute("type","text")
	}
	else
	{
		document.getElementById("icon3").setAttribute("class","fa fa-eye fa-2x")
		document.getElementById("input2").setAttribute("type","password")
	}
}
	