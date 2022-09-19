import {openExistingForm} from './toDoForm'
import {removeStorageItem} from './localStorage'

function makeToDoBlock(title, timeDate, dateID, description, checklist, priorityValue, projectValue, dataID) {
    
    //Cache DOM
    const main = document.querySelector('main');

    //Create Elements
    const toDoContainer = document.createElement('div');
    const topDiv = document.createElement('div');
    const checkBox = document.createElement('input');
    const priority = document.createElement('p'); 
    const priorityContent = document.createTextNode(priorityValue);
    const project = document.createElement('p');
    const projectContent = document.createTextNode(projectValue);
    const task = document.createElement('h4');
    const taskContent = document.createTextNode(title);
    const date = document.createElement('p');
    const dateContent = document.createTextNode(timeDate);
    const editables = document.createElement('div');
    const editButton = document.createElement('button');
    const descriptionButton = document.createElement('button');
    const descriptionDiv = document.createElement('div');
    const descriptionText = document.createElement('p');
    const descriptionTextContent = document.createTextNode(description);
    const checklistButton = document.createElement('button');
    const checklistDiv = document.createElement('div');
    const checklistOl = document.createElement('ol');
    makeChecklist(checklist, checklistOl);
    const removeButton = document.createElement('button');
    
    //Set Attributes
    toDoContainer.classList.add('todo-container');
    toDoContainer.classList.add('storable');
    toDoContainer.classList.add(projectContent.textContent.split(' ').join('').toLowerCase());
    toDoContainer.dataset.todoNum = dataID;
    topDiv.classList.add('top');
    checkBox.setAttribute('type', 'checkbox');
    priority.classList.add('priority');
    project.classList.add('project');
    date.classList.add('date');
    date.dataset.dateTime = dateID;
    editables.classList.add('editables');
    editButton.classList.add('edit');
    descriptionButton.classList.add('description');
    descriptionDiv.classList.add('description-div');
    checklistButton.classList.add('checklist');
    checklistDiv.classList.add('checklist-div');
    removeButton.classList.add('remove');
    
    //Render Elements
    descriptionText.appendChild(descriptionTextContent);
    descriptionDiv.appendChild(descriptionText);
    descriptionButton.appendChild(descriptionDiv);
    checklistDiv.appendChild(checklistOl);
    checklistButton.appendChild(checklistDiv); 
    priority.appendChild(priorityContent);
    project.appendChild(projectContent);
    task.appendChild(taskContent);
    date.appendChild(dateContent);
    topDiv.appendChild(priority);
    topDiv.appendChild(checkBox);
    editables.appendChild(editButton);
    editables.appendChild(descriptionButton);
    editables.appendChild(checklistButton);
    editables.appendChild(removeButton);
    toDoContainer.appendChild(topDiv);
    toDoContainer.appendChild(task);
    toDoContainer.appendChild(project);
    toDoContainer.appendChild(date);
    toDoContainer.appendChild(editables);
    main.appendChild(toDoContainer);

    orderToDosChronologically();
    
    //Bind Event Listeners
    editButton.addEventListener('click', openExistingForm);
    descriptionButton.addEventListener('click', displayDescription);
    checklistButton.addEventListener('click', displayChecklist);
    removeButton.addEventListener('click', deleteToDo);
    checkBox.addEventListener('input', markCompleted);

}


function makeChecklist(checklist, ol) {
    checklist = checklist || ['The checklist starts here!'];
    for(let i=0; i < checklist.length; i++) {
        const checklistLi = document.createElement('li');
        const checklistLiContent = document.createTextNode(checklist[i]);
        checklistLi.appendChild(checklistLiContent);
        ol.appendChild(checklistLi);
    }
}

function editToDoBlock(title, timeDate, dateID, description, checklist, priorityValue, projectValue) {
    
    //cache DOM
    const form = this.parentElement.parentElement;
    const todoContainer = document.querySelectorAll(`[data-todo-num="${form.dataset.todoNum}"]`)[1];
    const task = todoContainer.querySelector('h4');
    const date = todoContainer.querySelector('.date');
    const descriptionBox = todoContainer.querySelector('.description-div p');
    const checklistBox = todoContainer.querySelector('.checklist-div');
    const oldOl = todoContainer.querySelector('.checklist-div ol');
    const ol = document.createElement('ol');
    const priority = todoContainer.querySelector('.priority');
    const project = todoContainer.querySelector('.project');

    //Set Attributes
    date.dataset.dateTime = dateID;

    //Render data
    task.textContent = title;
    date.textContent = timeDate;
    descriptionBox.textContent = description;
    makeChecklist(checklist, ol);
    checklistBox.replaceChild(ol, oldOl);
    priority.textContent = priorityValue;
    project.textContent = projectValue;
}

function displayDescription() {
    const descriptionDiv = this.firstElementChild;
    const checklistDiv = this.parentElement.children[2].firstElementChild;
    if (descriptionDiv.style.display == 'none' || descriptionDiv.style.display === '') {
        checklistDiv.style.display = 'none';
        descriptionDiv.style.display = 'block';
    } else {
        descriptionDiv.style.display = 'none';
    }
}

function displayChecklist() {
    const checklistDiv = this.firstElementChild;
    const descriptionDiv = this.parentElement.children[1].firstElementChild;
    if (checklistDiv.style.display === 'none' || checklistDiv.style.display === '') {
        descriptionDiv.style.display = 'none';
        checklistDiv.style.display = 'block';
    } else {
        checklistDiv.style.display = 'none';
    }
}

function deleteToDo() {
    const todoContainer = this.parentElement.parentElement;
    const dataset = todoContainer.dataset.todoNum;
    const form = document.querySelector(`[data-todo-num="${dataset}"]`)
    todoContainer.parentElement.removeChild(form);
    todoContainer.parentElement.removeChild(todoContainer);
    removeStorageItem(dataset.replace(/\D/g, ''))
}

function markCompleted() {
    const todoContainer = this.parentElement.parentElement; 
    const project = todoContainer.querySelector('.project').textContent.toLowerCase();
    if (this.checked === true) {
        todoContainer.classList.add('completed-todo');
        todoContainer.classList.remove(project);
    } else if (this.checked === false) {
        todoContainer.classList.remove('completed-todo');
        todoContainer.classList.add(project);
    }
}

function sortToDos(todos) {
    return [...todos].sort((a, b) => {
        const timeA = a.querySelector('.date').dataset.dateTime;
        const timeB = b.querySelector('.date').dataset.dateTime;
        const toDoA = new Date(timeA);
        const toDoB = new Date(timeB);
        if (timeA == '') {
            return 1;
        } else if (timeB == '') {
            return -1;
        } else {
            return toDoA - toDoB;
        }
    });
}

function sortForms(todoForms) {
    return [...todoForms].sort((a, b) => a.dataset.todoNum.replace(/\D/g, '') - b.dataset.todoNum.replace(/\D/g, ''));
}

function changeDataset(todoForms, sortedToDos) {
    todoForms.forEach(form => {
        const dataNum = form.dataset.todoNum;
        const todoFound = sortedToDos.map(todo => todo.dataset.todoNum == dataNum);
        const index = todoFound.indexOf(true) + 1;
        form.dataset.todoNum = `todo-${index}`;
    })
    sortedToDos.forEach(todo => {
        const dataNum = sortedToDos.indexOf(todo) + 1;
        todo.dataset.todoNum = `todo-${dataNum}`;
    });
}

function removePreviousTodos(todoForms, todos) {
    const main = document.querySelector('main');
    todoForms.forEach(form => main.removeChild(form));
    todos.forEach(todo => main.removeChild(todo));
}

function appendSortedTodos(sortedForms, sortedToDos) {
    const main = document.querySelector('main');
    for (let i =0; i< sortedForms.length; i++) {
        main.appendChild(sortedForms[i]);
        main.appendChild(sortedToDos[i]);
    }
}

function orderToDosChronologically() {
    const todos = document.querySelectorAll('.todo-container');
    const todoForms = document.querySelectorAll('.todo-form');
    const sortedToDos = sortToDos(todos);
    const sortedForms = sortForms(todoForms);
    
    changeDataset(todoForms, sortedToDos);
    removePreviousTodos(todoForms, todos);
    appendSortedTodos(sortedForms, sortedToDos);
}


export { makeToDoBlock, editToDoBlock }