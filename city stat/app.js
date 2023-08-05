
const button = document.querySelector('button')
let resultdiv =  document.createElement('div')
    resultdiv.id = 'result'
    document.getElementById('container').appendChild(resultdiv)
//event listener
button.addEventListener('click',displayStats)
function displayStats(){
	const input =document.getElementById('input')
	const city = input.options[input.selectedIndex].value
    let population = 0, literacyRate = 0, language= 0
	switch(city){
		case 'chennai':
		 population= 8653521
         literacyRate =	7000270
         language = 'Tamil'
         break

        case 'bangalore':
         population	=8520435
         literacyRate =	6735513
          language ='Kannada'
          break

        case 'delhi':
         population = 1428627663
         literacyRate = 834123. 
         language = 'Hindi'
         break

        case 'mumbai':
         population = 1839912
         literacyRate = 1485433
         language = 'Marathi and Hindi'
         break

        default:
         return('you have to select in options')


	}
    
    let text =`The city in India name is ${city} and the language spoken here is ${language}.The Population and literarcy rate is ${population} and ${literacyRate}`
    document.getElementById('result').innerHTML = text
}