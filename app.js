// UI and LS objects
ui = new UI();
ls = new LS();

// event elements
// form submit
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
// tasklist X click event
const taskList = document.querySelector('ul');
taskList.addEventListener('click', deleteTask);
// clear button event
const clearBtn = document.querySelector('#clear-tasks');
clearBtn.addEventListener('click', deleteTasks);
// filter field input event
const filterInput = document.querySelector('#filter')
filterInput.addEventListener('keyup', filterTask);
// page reload
document.addEventListener('DOMContentLoaded', getTasks);

// events
// form submit event
form.addEventListener('submit', addTask);

function addTask(e) {
	// create a new object Task with input value
	const task = new Task(taskInput.value);
	// add task value to the visual UI object
	ui.addTask(task);
	// add task value to the LS by LS object
	ls.addTask(task);
	e.preventDefault();
}

function deleteTask(e){
	// get task name
	let task = e.target.parentElement.firstChild;
	// delete task value from visual by UI object
	ui.deleteTask(task);
	// change task element content before deleting from LS
	task = task.textContent;
	// delete task value from LS by LS object
	ls.deleteTask(task);
}

function deleteTasks(e){
	// delete all tasks from ui
	let tasks = document.querySelector('ul');
	ui.deleteTasks(tasks);
	// delete tasks from LS
	ls.deleteTasks();
}

function getTasks(e) {
	// get tasks from LS by this localStorage name
	tasks = ls.getData('tasks');
	// create task list by UI
	ui.getTasks(tasks);
}

function filterTask(e){
	const text = e.target.value.toLowerCase();
	const tasks = document.querySelectorAll('.collection-item');
	tasks.forEach(function(element){
		const task = element.firstChild.textContent.toLowerCase();
		if(task.indexOf(text) != -1){
			element.style.display = 'block';
		} else {
			element.style.display = 'none'
		}
	});
	}