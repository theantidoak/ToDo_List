import {isToday, isThisWeek} from 'date-fns'

function displayAll() {
    const todos = document.querySelectorAll('.todo-container');
    todos.forEach(todo => {
        if (!todo.classList.contains('completed-todo')) {
            todo.style.display = 'block';
        } else {
            todo.style.display = 'none';
        }
    })
}


function displayUpcoming(e) {
    const todos = document.querySelectorAll('.todo-container');
    todos.forEach((todo) => {
        const dates = [...todo.children].filter(child => child.classList.contains('date'));
        const dateContainer = [...dates].filter(date => e.currentTarget.isUpcoming(new Date(date.dataset.dateTime), { weekStartsOn: 1 }) === true);
        if (dateContainer.length > 0) {
            todo.style.display = 'block';
        } else {
            todo.style.display = 'none';
        };
    });
}

function displayCompleted() {
    const todos = document.querySelectorAll('.todo-container');
    todos.forEach(todo => {
        if (todo.classList.contains('completed-todo')) {
            todo.style.display = 'block';
        } else {
            todo.style.display = 'none';
        }
    })
}


function bindAllButton() {
    const allButton = document.querySelector('.all');
    const homeButton = document.querySelector('.home-title');
    const todayButton = document.querySelector('.today');
    const thisWeekButton = document.querySelector('.upcoming');
    const completedButton = document.querySelector('.completed');
    allButton.addEventListener('click', displayAll);
    homeButton.addEventListener('click', displayAll);
    completedButton.addEventListener('click', displayCompleted);
    todayButton.addEventListener('click', displayUpcoming);
    todayButton.isUpcoming = isToday;
    thisWeekButton.addEventListener('click', displayUpcoming);
    thisWeekButton.isUpcoming = isThisWeek;
}

export {bindAllButton}