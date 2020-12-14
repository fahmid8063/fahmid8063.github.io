
function sum(){
	
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value
	
	 // let answer=document.querySelector("#result_div").value
	let y= parseInt(number1) + parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
	// 

}
function substrack(){
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value
	
	 // let answer=document.querySelector("#result").value
	let y= parseInt(number1) - parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
	// 

}
function mult(){
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value
	
	 // let answer=document.querySelector("#result").value
	let y= parseInt(number1) * parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
	// 

}
function division(){
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value

	
	 // let answer=document.querySelector("#result").value
	let y= parseInt(number1) / parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
	// 

}


function modulus(){
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value

	
	 // let answer=document.querySelector("#result").value
	let y= parseInt(number1) % parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
}



function sum(){
	
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value
	// let answer=document.querySelector("#result_div").innerHTML


	if(number1==''){
		swal("Nubmer1 is empty")
		return false;
	}
	else if (number2==''){
		swal("Nubmer2 is empty")
		return false;
	}
	else {
			 // let answer=document.querySelector("#result").value
	let y= parseInt(number1) + parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
	}
}

function substrack(){
	
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value
	// let answer=document.querySelector("#result").value


	if(number1==''){
		swal("Nubmer1 is empty")
		return false;
	}
	else if  (number2==''){
		swal("Nubmer2 is empty")
		return false;
	}
	else {
		// let answer=document.querySelector("#result").value
	let y= parseInt(number1) - parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
	}
}


function mult(){
	
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value
	// let answer=document.querySelector("#result").value


	if(number1==''){
		swal("Nubmer1 is empty")
		return false;
	}
	else if  (number2==''){
		swal("Nubmer2 is empty")
		return false;
	}
	else {
		 // let answer=document.querySelector("#result").value
	let y= parseInt(number1) * parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
	// 
	}
}

function division(){
	
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value
	// let answer=document.querySelector("#result").value


	if(number1==''){
		swal("Nubmer1 is empty")
		return false;
	}
	else if (number2==''){
		swal("Nubmer2 is empty")
		return false;
	}
	else {
		// let answer=document.querySelector("#result").value
	let y= parseInt(number1) / parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
	}
}
function modulus(){
	let number1=document.querySelector("#input1").value
	let number2=document.querySelector("#input2").value
	// let answer=document.querySelector("#result").value


	if(number1==''){
		swal("Nubmer1 is empty")
		return false;
	}
	else if (number2==''){
		swal("Nubmer2 is empty")
		return false;
	}
	else {
		 // let answer=document.querySelector("#result").value
	let y= parseInt(number1) % parseInt(number2); 
	document.querySelector("#result_div").innerHTML=y
	}




}