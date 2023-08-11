let button = document.getElementById('add');
let result = document.getElementById('todoList');
let input = document.getElementById('input');
//local storage 
let todos=[];
window.onload=()=>{
todos = JSON.parse(localStorage.getItem('todos')) || [];
todos.forEach(todo=>(addTodo(todo)))

}

button.addEventListener('click',()=>{
	todos.push(input.value);
	localStorage.setItem('todos',JSON.stringify(todos))
	addTodo(input.value);
	input.value =''


})

function addTodo(todo){
let para = document.createElement('p');
para.innerText = todo;
todoList.appendChild(para)
para.addEventListener('click',()=>{
	para.style.textDecoration='line-through'
	remove(todo)
	 })
para.addEventListener('dblclick',()=>{
	todoList.removeChild(para)
	remove(todo)
})

}
function remove(todo){
	let Index = todos.indexOf(todo)
	if(Index >- 1){

		todos.splice(Index,1)
	}
	localStorage.setItem('todos',JSON.stringify(todos))
}