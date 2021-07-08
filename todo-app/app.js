
// Difine ui content
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

// load all task
loadEventListeners()

function loadEventListeners() {
    // add task load
    form.addEventListener('submit', addTasks);

    // remove task load
    taskList.addEventListener('click', removeTasks);

    // clear button
    clearBtn.addEventListener('click', clearTasks);

    // filter task
    filter.addEventListener('keyup', filterTasks);
}

// Add task
function addTasks(e) {
   
    if ( taskInput.value == '' ) {
        alert("Add a task");
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    
    li.appendChild(link);
    taskList.appendChild(li);

    taskInput.value = '';

    e.preventDefault();
}

//Remove task
function removeTasks(e) {
    if (e.target.parentElement.classList.contains('delete-item') ) {
        if (confirm('Are you sure !')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clear task
function clearTasks(e) {
    // taskList.remove();
    taskList.innerHTML = '';

    e.preventDefault();
}

// filter task
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
}