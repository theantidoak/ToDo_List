import {isToday, isThisWeek} from 'date-fns'

function displayAllToDos() {
    const todos = document.querySelectorAll('.todo-container');
    todos.forEach(todo => {
        const todoType = !todo.classList.contains('completed-todo');
        todo.style.display = todoType ? 'block' : 'none';
    })
}

function displayUpcomingToDos(e) {
    const todos = document.querySelectorAll('.todo-container');
    todos.forEach((todo) => {     
        const dueDate = todo.querySelector('.date').dataset.dateTime;
        const todoType = e.currentTarget.isUpcoming(new Date(dueDate), { weekStartsOn: 1 });
        todo.style.display = todoType ? 'block' : 'none';
    });
}

function displayCompletedToDos() {
    const todos = document.querySelectorAll('.todo-container');
    todos.forEach(todo => {
        const todoType = todo.classList.contains('completed-todo');
        todo.style.display = todoType ? 'block' : 'none';
    })
}


function bindHomeButtons() {

    //Cache DOM
    const allButton = document.querySelector('.all');
    const homeButton = document.querySelector('.home-title');
    const todayButton = document.querySelector('.today');
    const thisWeekButton = document.querySelector('.upcoming');
    const completedButton = document.querySelector('.completed');

    //Set Date modification parameters
    todayButton.isUpcoming = isToday;
    thisWeekButton.isUpcoming = isThisWeek;
    
    //Bind events
    allButton.addEventListener('click', displayAllToDos);
    homeButton.addEventListener('click', displayAllToDos);
    completedButton.addEventListener('click', displayCompletedToDos);
    todayButton.addEventListener('click', displayUpcomingToDos);
    thisWeekButton.addEventListener('click', displayUpcomingToDos);
}

export {bindHomeButtons}