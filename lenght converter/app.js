function convert () {
    const num = Number(document.getElementById("number").value)
    const value = num/2.54
    const answer = document.getElementById("result")
    answer.innerHTML = value.toFixed(2)+ " inches "
}
