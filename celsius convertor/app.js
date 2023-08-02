function change()
{

const celsius = Number(document.getElementById("get").value)
const convert = celsius * 9/5 +32
const final = document.getElementById("result")
final.innerHTML= convert
}