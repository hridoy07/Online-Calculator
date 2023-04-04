 //  var Memory  = "0";      // initialise memory variable
  //  var  Current = "0";     // and value of Display ("current" value)
  //  var  MAXLENGTH = "30;    // maximum number of digits before decimal!
  var dotted;
function addDigit(digit) {
	document.getElementById("disp").innerHTML+=digit.value;
}

function addOper(oper) {
	document.getElementById("disp").innerHTML+=oper.value;
}

function equals() {
	var eq= eval(document.getElementById("disp").innerHTML);
	document.getElementById("disp").innerHTML=eq;
}
function dot(dot)
{
	 if(dotted==1)
	 {
		 flag=true;
	 }
	 else
	 {
		 dotted>1;
	 }
	document.getElementById("disp").innerHTML+=dot.value;
	
}
function clr()
{
  
  
  document.getElementById("disp").innerHTML= "";
}
 
 
