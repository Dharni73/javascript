
function calculator(){
	const FInput = Number(document.getElementById('input').value)
    const SInput =Number(document.getElementById('secondinput').value)
	const Final = document.getElementById('operation').value
	const Results = document.getElementById('result')
	switch(Final){
	 	case '*':
	 	  res= FInput*SInput
	 	 break

	 	case '+':
	 	  res= FInput+SInput
	 	 break

	 	case '-':
	 	 res = FInput-SInput
	 	 break

	 	case '/':
	 	 res = FInput / SInput
	 	 break

	 }
	 

	result.innerHTML = res
}
	 