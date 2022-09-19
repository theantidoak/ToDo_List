import {isToday, isThisWeek} from 'date-fns'

function displayAlltodos() {
    const todos = document.querySelectorAll('.todo-container');
    todos.forEach(todo => {
        const todoType = !todo.classList.contains('completed-todo');
        todo.style.display = todoType ? 'block' : 'none';
    })
}

function displayUpcomingtodos(e) {
    const todos = document.querySelectorAll('.todo-container');
    todos.forEach((todo) => {     
        const dueDate = todo.querySelector('.date').dataset.dateTime;
        const todoType = e.currentTarget.isUpcoming(new Date(dueDate), { weekStartsOn: 1 });
        todo.style.display = todoType ? 'block' : 'none';
    });
}

function displayCompletedtodos() {
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
    allButton.addEventListener('click', displayAlltodos);
    homeButton.addEventListener('click', displayAlltodos);
    completedButton.addEventListener('click', displayCompletedtodos);
    todayButton.addEventListener('click', displayUpcomingtodos);
    thisWeekButton.addEventListener('click', displayUpcomingtodos);
}

export {bindHomeButtons}