import {openExistingForm} from './toDoForm'
import {reOrderStorage, removeStorageItem } from './localStorage'

function makeTodoBlock(title, timeDate, dateID, description, checklist, priorityValue, projectValue, dataID, storage) {
    
    //Cache DOM
    const main = document.querySelector('main');

    //Create Elements
    const todoContainer = document.createElement('div');
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
    todoContainer.classList.add('todo-container');
    todoContainer.classList.add('storable');
    todoContainer.classList.add(projectContent.textContent.split(' ').join('').toLowerCase());
    todoContainer.dataset.todoNum = dataID;
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
    todoContainer.appendChild(topDiv);
    todoContainer.appendChild(task);
    todoContainer.appendChild(project);
    todoContainer.appendChild(date);
    todoContainer.appendChild(editables);
    main.appendChild(todoContainer);

    if (!storage) {
        orderTodosChronologically();
    } 
    

    //Set parameters
    descriptionButton.otherDivClass = '.checklist-div';
    checklistButton.otherDivClass = '.description-div';
    removeButton.todoContainer = todoContainer;
    checkBox.todoContainer = todoContainer;
    
    //Bind Event Listeners
    editButton.addEventListener('click', openExistingForm);
    descriptionButton.addEventListener('click', displayHiddenText);
    checklistButton.addEventListener('click', displayHiddenText);
    removeButton.addEventListener('click', deleteTodo);
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


//Editables 


function editTodoBlock(title, timeDate, dateID, description, checklist, priorityValue, projectValue) {  
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
    orderTodosChronologically();
}

function displayHiddenText(e) {
    const controlledDiv = this.firstElementChild;
    const otherDiv = this.parentElement.querySelector(e.currentTarget.otherDivClass);
    if (controlledDiv.style.display == 'none' || controlledDiv.style.display === '') {
        otherDiv.style.display = 'none';
        controlledDiv.style.display = 'block';
    } else {
        controlledDiv.style.display = 'none';
    }
}

function deleteTodo(e) {
    const main = document.querySelector('main');
    const todoContainer = e.currentTarget.todoContainer;
    const dataset = todoContainer.dataset.todoNum;
    const form = todoContainer.previousSibling;
    todoContainer.parentElement.removeChild(form);
    main.removeChild(todoContainer);
    removeStorageItem(dataset.replace(/\D/g, ''));
    orderTodosChronologically();
}

function markCompleted(e) {
    const todoContainer = e.currentTarget.todoContainer;
    const project = todoContainer.querySelector('.project').textContent.toLowerCase();
    if (this.checked === true) {
        todoContainer.classList.add('completed-todo');
        todoContainer.classList.remove(project);
    } else if (this.checked === false) {
        todoContainer.classList.remove('completed-todo');
        todoContainer.classList.add(project);
    }
}

function sortTodos(todos) {
    return [...todos].sort((a, b) => {
        const timeA = a.querySelector('.date').dataset.dateTime;
        const timeB = b.querySelector('.date').dataset.dateTime;
        const datasetNumA = a.dataset.todoNum;
        const datasetNumB = b.dataset.todoNum;
        const todoA = new Date(timeA);
        const todoB = new Date(timeB);
        if (timeA != '' && timeB != '') {
            return todoA - todoB;
        } else if (timeA == '' && timeB == '') {
            return datasetNumA[datasetNumA-1] - datasetNumB[datasetNumB-1];
        } else if (timeA == '') {
            return 1
        } else if (timeB == '') {
            return -1;
        }
    });
}

function sortForms(todoForms, sortedTodos) {
    return [...todoForms].sort((a,b) => {
        const datasetNumA = a.dataset.todoNum;
        const datasetNumB = b.dataset.todoNum;
        const correspondingTodoA = sortedTodos.map(todo => todo.dataset.todoNum == datasetNumA);
        const correspondingTodoB = sortedTodos.map(todo => todo.dataset.todoNum == datasetNumB);

        return (correspondingTodoA.indexOf(true) + 1) - (correspondingTodoB.indexOf(true) + 1);
    })
}

function changeTodoNum(sortedTodos) {
    for (let i = 0; i < sortedTodos.length; i++) {
        sortedTodos[i].dataset.todoNum = `todo-${i+1}`;
    }
}

function removePrevioustodos(todoForms, todos) {
    const main = document.querySelector('main');
    [...todoForms].sort().forEach(form => main.removeChild(form));
    [...todos].sort().forEach(todo => main.removeChild(todo));
}

function appendSortedTodos(sortedForms, sortedTodos) {
    const main = document.querySelector('main');
    for (let i = 0; i< sortedForms.length; i++) {
        main.appendChild(sortedForms[i]);
        main.appendChild(sortedTodos[i]);
    }
}

function orderTodosChronologically() {
    const todos = document.querySelectorAll('.todo-container');
    const todoForms = document.querySelectorAll('.todo-form');
    const sortedTodos = sortTodos(todos);
    const sortedForms = sortForms(todoForms, sortedTodos);
    
    removePrevioustodos(todoForms, todos);
    appendSortedTodos(sortedForms, sortedTodos);
    reOrderStorage();
    changeTodoNum(sortedTodos);
}


export { makeTodoBlock, editTodoBlock, sortTodos }