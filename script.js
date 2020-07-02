var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
	listElement.innerHTML = '';
	for (todo of todos){
		let todoElement = document.createElement('li')
		let todoText = document.createTextNode(todo)

		var linkElement = document.createElement('a');
		linkElement.setAttribute('href', '#')
		let linkText = document.createTextNode('Excluir');
		
		var pos = todos.indexOf(todo);
		linkElement.setAttribute('onclick',`deleteTodo(${pos})`)

		linkElement.appendChild(linkText)

		todoElement.appendChild(todoText)
		todoElement.appendChild(linkElement)

		listElement.appendChild(todoElement)
	}
}

renderTodos()

function addTodo(){
	var todoText = inputElement.value;
	todos.push(todoText)
	inputElement.value = '';

	renderTodos()
	saveToStorage()
}

btnElement.onclick = addTodo;

function deleteTodo(position){
	todos.splice(position,1);
	renderTodos()
	saveToStorage()
}

function saveToStorage(){
	localStorage.setItem('list_todos',JSON.stringify(todos))
}