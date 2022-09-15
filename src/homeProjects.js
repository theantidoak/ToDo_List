function displayAll() {
    const todos = document.querySelectorAll('.todo-container');
    todos.forEach(todo => todo.style.display = 'block');
}

function bindAllButton() {
    const allButton = document.querySelector('.all');
    const homeButton = document.querySelector('.home-title');
    allButton.addEventListener('click', displayAll);
    homeButton.addEventListener('click', displayAll);
}

export {bindAllButton}