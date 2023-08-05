const btn = document.getElementById("btn")
const colortext =document.getElementById("color")
const Body = document.getElementById("Body")
const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

// event listener
btn.addEventListener('click',changeBg)

function changeBg(){
	let hexcolor = '#'
	for(let i=1; i<=6; i++)
	{
		hexcolor = hexcolor + randomValue()
	}
	Body.style.backgroundColor = hexcolor
	colortext.innerHTML = hexcolor
}


function randomValue(){
	let randomIndex = Math.floor(Math.random()*16)
	return hex[randomIndex]

}
