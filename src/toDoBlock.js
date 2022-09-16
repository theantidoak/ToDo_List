import {openExistingForm} from './toDoForm'

function makeToDoBlock(title, timeDate, dateID, description, checklist, priorityValue, projectValue, dataID) {
    const main = document.querySelector('main');
    const toDoContainer = document.createElement('div');
    toDoContainer.classList.add('todo-container');
    toDoContainer.dataset.todoNum = dataID;
    const topDiv = document.createElement('div');
    topDiv.classList.add('top');
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    const priority = document.createElement('p');
    priority.classList.add('priority');
    const project = document.createElement('p');
    project.classList.add('project');
    const task = document.createElement('h4');
    const date = document.createElement('p');
    date.classList.add('date');
    date.dataset.dateTime = dateID;
    const editables = document.createElement('div');
    editables.classList.add('editables');
    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    const descriptionButton = document.createElement('button');
    descriptionButton.classList.add('description');
    const checklistButton = document.createElement('button');
    checklistButton.classList.add('checklist');
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');


    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description-div');
    const descriptionText = document.createElement('p');
    const descriptionTextContent = document.createTextNode(description);

    descriptionText.appendChild(descriptionTextContent);
    descriptionDiv.appendChild(descriptionText);
    descriptionButton.appendChild(descriptionDiv);

    const checklistDiv = document.createElement('div');
    checklistDiv.classList.add('checklist-div');
    const checklistOl = document.createElement('ol');
    makeChecklist(checklist, checklistOl);

    checklistDiv.appendChild(checklistOl);
    checklistButton.appendChild(checklistDiv);


    //Example 
   
    const priorityContent = document.createTextNode(priorityValue);
    const projectContent = document.createTextNode(projectValue);
    const taskContent = document.createTextNode(title);
    const dateContent = document.createTextNode(timeDate);
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

    toDoContainer.classList.add(projectContent.textContent.split(' ').join('').toLowerCase());

    
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
        // checklistLi.classList.add(`checklist${i}`);
        const checklistLiContent = document.createTextNode(checklist[i]);
        checklistLi.appendChild(checklistLiContent);
        ol.appendChild(checklistLi);
    }
}

function editToDoBlock(title, timeDate, dateID, description, checklist, priorityValue, projectValue) {
    
    const form = this.parentElement.parentElement;
    const todoContainer = document.querySelectorAll(`[data-todo-num="${form.dataset.todoNum}"]`)[1];
    const task = todoContainer.querySelector('h4');
    const date = todoContainer.querySelector('.date');
    date.dataset.dateTime = dateID;
    const descriptionBox = todoContainer.querySelector('.description-div p');
    const checklistBox = todoContainer.querySelector('.checklist-div');
    const oldOl = todoContainer.querySelector('.checklist-div ol');
    const ol = document.createElement('ol');
    const priority = todoContainer.querySelector('.priority');
    const project = todoContainer.querySelector('.project');

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


export { makeToDoBlock, editToDoBlock }