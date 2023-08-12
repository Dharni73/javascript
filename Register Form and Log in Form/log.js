const form = document.querySelector('#form1');
const username= document.querySelector('#user');
const password = document.querySelector('#pass');

form.addEventListener('submit',(e)=>{
	if(! makeLogin())
	{
	e.preventDefault();
    }

})

function makeLogin(){
	const userVal = username.value;
	const passVal = password.value;
	console.log(userVal,passVal);
	let success = true;

	if (userVal =='')
	{
		success= false;
		setError(username,'Enter userName')
	} 
	else
	{
		setSuccess(username)
	}
	if(passVal==''){

		success=false;
		setError(password,'Enter your password')
	}
	else if(passVal.length<8){

		success=false;
		setError(password,'Password is Incorrect')
	}
	else{
		setSuccess(password)
	}
	return success; 


}
function setError(element,message){
	const Input = element.parentElement;
	const Error =Input.querySelector('.error');
	Error.innerText = message;
	Input.classList.add('errormsg')
	Input.classList.remove('success')
}

function setSuccess(element){
	const Input = element.parentElement;
	const Error =Input.querySelector('.error');
	Error.innerText = " ";
	Input.classList.add('success')
	Input.classList.remove('errormsg')
}