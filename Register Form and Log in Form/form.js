const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword= document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
	if(!validateInput()){
		e.preventDefault();

	}

})

function validateInput(){
	const usernameVal = username.value.trim()
	const emailVal = email.value.trim();
	const passwordVal = password.value.trim();
	const cpasswordVal = cpassword.value.trim();
	let success = true;

	if(usernameVal ==='')
	{
		success =false;
		setError(username,'User name is required')
	}
	else
	{
		setSuccess(username)
	}
		

	// mail validated
	if(emailVal==='')
	{

		success =false;
		setError(email," email is required ")
	}
	else if(!validateEmail(emailVal))
	{

		success =false;
		setError(email," Please enter valid mail id ")
	}
	else{
		setSuccess(email)
	}

	//

	if(passwordVal===''){

		success =false;
		setError(password," password is required ")
	}
	else if(passwordVal.length<8){

		success =false;
		setError(password," password must be 8 Character ")
	}
	else
		{
			setSuccess(password)
		}
	////

	if(cpasswordVal==''){

		success =false;
		setError(cpassword," Make confirm Password ")
	}
	else if(cpasswordVal !== passwordVal){

		success =false;
		setError(cpasswordVal, " Make sure your Password is correct ")
	}

	else{
		setSuccess(cpassword)
	}
	return success;
}

function setError(element, message){
	const inputGroup = element.parentElement;
	const errorElement = inputGroup.querySelector('.error')
	errorElement.innerText = message;
	inputGroup.classList.add('error')
	inputGroup.classList.remove('success')
}


function setSuccess(element, message){
	const inputGroup = element.parentElement;
	const errorElement = inputGroup.querySelector('.error')
	errorElement.innerText = " ";
	inputGroup.classList.add('success')
	inputGroup.classList.remove('error')
}

const validateEmail=(email)=>{
	return String(email)
	.toLowerCase()
	.match(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
};