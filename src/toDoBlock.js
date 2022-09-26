import { openExistingForm } from './toDoForm'
import { populateStorage, removeTodoStorageItem, reOrderTodoStorage } from './localStorage'

function makeTodoBlock(title, date, dateID, description, checklist, priority, project, dataID) {
    
    // Cache DOM
    const main = document.querySelector('main');

    // Create Elements
    const todoContainer = document.createElement('div');
    const topDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    const priorityNum = document.createElement('p'); 
    const priorityContent = document.createTextNode(priority);
    const projectTitle = document.createElement('p');
    const projectContent = document.createTextNode(project);
    const task = document.createElement('h4');
    const taskContent = document.createTextNode(title);
    const dueDate = document.createElement('p');
    const dateContent = document.createTextNode(date);
    const editables = document.createElement('div');
    const editButton = document.createElement('button');
    const descriptionButton = document.createElement('button');
    const descriptionDiv = document.createElement('div');
    const descriptionText = document.createElement('p');
    const descriptionTextContent = document.createTextNode(description);
    const checklistButton = document.createElement('button');
    const checklistDiv = document.createElement('div');
    const checklistOl = document.createElement('ol');
    makeChecklist(checklistOl, checklist);
    const removeButton = document.createElement('button');
    
    // Set Attributes
    todoContainer.classList.add('todo-container');
    todoContainer.classList.add('storable');
    todoContainer.classList.add(projectContent.textContent.split(' ').join('').toLowerCase());
    todoContainer.dataset.todoNum = dataID;
    topDiv.classList.add('top');
    checkbox.setAttribute('type', 'checkbox');
    priorityNum.classList.add('priority');
    projectTitle.classList.add('project');
    dueDate.classList.add('date');
    dueDate.dataset.dateTime = dateID;
    editables.classList.add('editables');
    editButton.classList.add('edit');
    descriptionButton.classList.add('description');
    descriptionDiv.classList.add('description-div');
    checklistButton.classList.add('checklist');
    checklistDiv.classList.add('checklist-div');
    removeButton.classList.add('remove');
    
    // Render Elements
    descriptionText.appendChild(descriptionTextContent);
    descriptionDiv.appendChild(descriptionText);
    descriptionButton.appendChild(descriptionDiv);
    checklistDiv.appendChild(checklistOl);
    checklistButton.appendChild(checklistDiv); 
    priorityNum.appendChild(priorityContent);
    projectTitle.appendChild(projectContent);
    task.appendChild(taskContent);
    dueDate.appendChild(dateContent);
    topDiv.appendChild(priorityNum);
    topDiv.appendChild(checkbox);
    editables.appendChild(editButton);
    editables.appendChild(descriptionButton);
    editables.appendChild(checklistButton);
    editables.appendChild(removeButton);
    todoContainer.appendChild(topDiv);
    todoContainer.appendChild(task);
    todoContainer.appendChild(projectTitle);
    todoContainer.appendChild(dueDate);
    todoContainer.appendChild(editables);
    main.appendChild(todoContainer);

    // Set parameters
    descriptionButton.otherDivClass = '.checklist-div';
    checklistButton.otherDivClass = '.description-div';
    removeButton.todoContainer = todoContainer;
    checkbox.todoContainer = todoContainer;
    
    // Bind Event Listeners
    editButton.addEventListener('click', openExistingForm);
    descriptionButton.addEventListener('click', displayHiddenText);
    checklistButton.addEventListener('click', displayHiddenText);
    removeButton.addEventListener('click', deleteTodo);
    checkbox.addEventListener('input', markCompleted);

    orderTodosChronologically();
    changePriorityColor(topDiv);
}


function makeChecklist(ol, checklist = ['The checklist starts here!']) {
    for(let i = 0; i < checklist.length; i++) {

        // Create elements
        const checklistLi = document.createElement('li');
        const checklistLiContent = document.createTextNode(checklist[i]);

        // Render elements
        checklistLi.appendChild(checklistLiContent);
        ol.appendChild(checklistLi);
    }
}


// Editables 

function editTodoBlock(title, date, dateID, description, checklist, priority, project) {  
    // cache DOM
    const todoForm = this.parentElement.parentElement;
    const todoContainer = todoForm.nextSibling;
    const topDiv = todoContainer.querySelector('.top');
    const task = todoContainer.querySelector('h4');
    const dueDate = todoContainer.querySelector('.date');
    const descriptionText = todoContainer.querySelector('.description-div p');
    const checklistDiv = todoContainer.querySelector('.checklist-div');
    const oldOl = todoContainer.querySelector('.checklist-div ol');
    const newOl = document.createElement('ol');
    const priorityNum = todoContainer.querySelector('.priority');
    const projectTitle = todoContainer.querySelector('.project');

    // Set Attributes
    dueDate.dataset.dateTime = dateID;

    // Render data
    task.textContent = title;
    dueDate.textContent = date;
    descriptionText.textContent = description;
    makeChecklist(newOl, checklist);
    checklistDiv.replaceChild(newOl, oldOl);
    priorityNum.textContent = priority;
    projectTitle.textContent = project;
    
    orderTodosChronologically();
    changePriorityColor(topDiv)
}

function displayHiddenText(e) {
    const buttonDiv = this.firstElementChild;
    const otherDiv = this.parentElement.querySelector(e.currentTarget.otherDivClass);
    if (buttonDiv.style.display == 'none' || buttonDiv.style.display === '') {
        otherDiv.style.display = 'none';
        buttonDiv.style.display = 'block';
    } else {
        buttonDiv.style.display = 'none';
    }
}

function changePriorityColor(topDiv) {
    const todoForm = topDiv.parentElement.previousSibling;
    const prioritySelect = todoForm.querySelector('.priority-div select')
    if (prioritySelect.value == 1) {
        topDiv.style.backgroundColor = 'var(--celadon-blue)';
    } else if (prioritySelect.value == 2) {
        topDiv.style.backgroundColor = 'var(--coral)';
    } else if (prioritySelect.value == 3) {
        topDiv.style.backgroundColor = 'var(--maya-blue)';
    }
}


function deleteTodo(e) {
    const main = document.querySelector('main');
    const todoContainer = e.currentTarget.todoContainer;
    const dataID = todoContainer.dataset.todoNum;
    const todoForm = todoContainer.previousSibling;
    todoContainer.parentElement.removeChild(todoForm);
    main.removeChild(todoContainer);

    removeTodoStorageItem(dataID.replace(/\D/g, ''));
    orderTodosChronologically();
}

function markCompleted(e) {
    const todoContainer = e.currentTarget.todoContainer;
    const projectTitle = todoContainer.querySelector('.project').textContent.toLowerCase();
    if (this.checked === true) {
        todoContainer.classList.add('completed-todo');
        todoContainer.classList.remove(projectTitle);
        addCheckedToStorage(todoContainer, projectTitle);
    } else if (this.checked === false) {
        todoContainer.classList.remove('completed-todo');
        todoContainer.classList.add(projectTitle);
        removeCheckedFromStorage(todoContainer, projectTitle);
    }
}


// Checkbox Input Value to Storage

function addCheckedToStorage(todoContainer) {
    const dataIndex = todoContainer.dataset.todoNum;
    const storageIndex = dataIndex.replace(/\D/g, '');
    const todoContainerArray = JSON.parse(localStorage.getItem(`array${storageIndex}`));
    todoContainerArray.push('checked');
    populateStorage(`array${storageIndex}`, JSON.stringify(todoContainerArray));
}

function removeCheckedFromStorage(todoContainer) {
    const dataIndex = todoContainer.dataset.todoNum;
    const storageIndex = dataIndex.replace(/\D/g, '');
    const todoContainerArray = JSON.parse(localStorage.getItem(`array${storageIndex}`));
    todoContainerArray.pop();
    populateStorage(`array${storageIndex}`, JSON.stringify(todoContainerArray));
}

function sortTodos(allTodoContainers) {
    return [...allTodoContainers].sort((a, b) => {
        const dateIDA = a.querySelector('.date').dataset.dateTime;
        const dateIDB = b.querySelector('.date').dataset.dateTime;
        const todoStorageIndexA = a.dataset.todoNum.replace(/\D/g, '');
        const todoStorageIndexB = b.dataset.todoNum.replace(/\D/g, '');
        const dueDateA = new Date(dateIDA);
        const dueDateB = new Date(dateIDB);
        if (dateIDA != '' && dateIDB != '') {
            return dueDateA - dueDateB;
        } else if (dateIDA == '' && dateIDB == '') {
            return todoStorageIndexA - todoStorageIndexB;
        } else if (dateIDA == '') {
            return 1
        } else if (dateIDB == '') {
            return -1;
        }
    });
}

function sortForms(allTodoForms, sortedTodos) {
    return [...allTodoForms].sort((a,b) => {
        const dataIDA = a.dataset.todoNum;
        const dataIDB = b.dataset.todoNum;
        const correspondingTodoA = sortedTodos.map(todoContainer => todoContainer.dataset.todoNum == dataIDA);
        const correspondingTodoB = sortedTodos.map(todoContainer => todoContainer.dataset.todoNum == dataIDB);

        return (correspondingTodoA.indexOf(true) + 1) - (correspondingTodoB.indexOf(true) + 1);
    })
}

function changeTodoNum(sortedTodos, sortedForms) {
    for (let i = 0; i < sortedTodos.length; i++) {
        sortedTodos[i].dataset.todoNum = `todo-${i+1}`;
        sortedForms[i].dataset.todoNum = `todo-${i+1}`;
    }
}

function removePreviousTodos(allTodoForms, allTodoContainers) {
    const main = document.querySelector('main');
    [...allTodoForms].sort().forEach(todoForm => main.removeChild(todoForm));
    [...allTodoContainers].sort().forEach(todoContainer => main.removeChild(todoContainer));
}

function appendSortedTodos(sortedForms, sortedTodos) {
    const main = document.querySelector('main');
    for (let i = 0; i< sortedForms.length; i++) {
        main.appendChild(sortedForms[i]);
        main.appendChild(sortedTodos[i]);
    }
}

function orderTodosChronologically() {
    const allTodoContainers = document.querySelectorAll('.todo-container');
    const allTodoForms = document.querySelectorAll('.todo-form');
    const sortedTodos = sortTodos(allTodoContainers);
    const sortedForms = sortForms(allTodoForms, sortedTodos);
    
    removePreviousTodos(allTodoForms, allTodoContainers);
    appendSortedTodos(sortedForms, sortedTodos);
    reOrderTodoStorage();
    changeTodoNum(sortedTodos, sortedForms);
}

export { 
    makeTodoBlock, 
    editTodoBlock, 
    markCompleted, 
    sortTodos 
}