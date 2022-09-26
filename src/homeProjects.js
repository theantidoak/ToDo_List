import {isToday, isThisWeek} from 'date-fns'

function displayAlltodos() {
    const allTodoContainers = document.querySelectorAll('.todo-container');
    allTodoContainers.forEach(todoContainer => {
        const todoType = !todoContainer.classList.contains('completed-todo');
        todoContainer.style.display = todoType ? 'flex' : 'none';
    })
}

function displayUpcomingtodos(e) {
    const allTodoContainers = document.querySelectorAll('.todo-container');
    allTodoContainers.forEach((todoContainer) => {     
        const dueDate = todoContainer.querySelector('.date').dataset.dateTime;
        const todoType = e.currentTarget.isUpcoming(new Date(dueDate), { weekStartsOn: 1 });
        todoContainer.style.display = todoType ? 'flex' : 'none';
    });
}

function displayCompletedtodos() {
    const allTodoContainers = document.querySelectorAll('.todo-container');
    allTodoContainers.forEach(todoContainer => {
        const todoType = todoContainer.classList.contains('completed-todo');
        todoContainer.style.display = todoType ? 'flex' : 'none';
    })
}


export default function bindHomeButtons() {
    // Cache DOM
    const allButton = document.querySelector('.all');
    const homeButton = document.querySelector('.home-title');
    const todayButton = document.querySelector('.today');
    const thisWeekButton = document.querySelector('.upcoming');
    const completedButton = document.querySelector('.completed');

    // Set Date modification parameters
    todayButton.isUpcoming = isToday;
    thisWeekButton.isUpcoming = isThisWeek;
    
    // Bind events
    allButton.addEventListener('click', displayAlltodos);
    homeButton.addEventListener('click', displayAlltodos);
    completedButton.addEventListener('click', displayCompletedtodos);
    todayButton.addEventListener('click', displayUpcomingtodos);
    thisWeekButton.addEventListener('click', displayUpcomingtodos);
}