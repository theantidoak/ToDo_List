import {makeTodoBlock, editTodoBlock } from './toDoBlock';
import {format} from 'date-fns';
import {populateStorage, useLocalStorageInputs} from './localStorage'

function createForm() {

    //Cache DOM
    const main = document.querySelector('main');

    //Create elements
    const todoForm = document.createElement('div');
    const newTask = document.createElement('h1');
    const exit = document.createElement('span');
    const newTaskContent = document.createTextNode('New Task');
    const exitContent = document.createTextNode('X');
    const form = document.createElement('form');
    const taskDiv = document.createElement('div');
    const taskLabel = document.createElement('label');
    const taskInput = document.createElement('input');
    const dateDiv = document.createElement('div');
    const dateLabel = document.createElement('label');
    const dateInput = document.createElement('input');
    const descriptionLabel = document.createElement('label');
    const textArea = document.createElement('textarea');
    const checkListInputs = document.createElement('div');
    const firstChecklist = document.createElement('label');
    const firstChecklistInput = document.createElement('input');
    const secondChecklist = document.createElement('label');
    const secondChecklistInput = document.createElement('input');
    const thirdChecklist = document.createElement('label');
    const thirdChecklistInput = document.createElement('input');
    const fourthChecklist = document.createElement('label');
    const fourthChecklistInput = document.createElement('input');
    const fifthChecklist = document.createElement('label');
    const fifthChecklistInput = document.createElement('input');
    const priorityDiv = document.createElement('div');
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    const high = document.createElement('option');
    const highContent = document.createTextNode('High');
    const medium = document.createElement('option');
    const mediumContent = document.createTextNode('Medium');
    const low = document.createElement('option');
    const lowContent = document.createTextNode('Low');
    const projectDiv = document.createElement('div');
    const projectLabel = document.createElement('label');
    const projectSelect = document.createElement('select');
    const addTaskButton = document.createElement('button');
    const taskButtonContent = document.createTextNode('Add Task');

    //Set attributes
    todoForm.classList.add('todo-form');
    todoForm.classList.add('storable');
    taskDiv.classList.add('task-div');
    taskLabel.setAttribute('for', 'task');
    taskInput.setAttribute('type', 'text');
    taskInput.id = 'task';
    dateDiv.classList.add('date-div');
    dateLabel.setAttribute('for', 'time-label');
    dateInput.setAttribute('type', 'datetime-local');
    dateInput.id = 'time-label';
    descriptionLabel.setAttribute('for', 'task-info');
    descriptionLabel.id = 'task-info-label';
    textArea.setAttribute('type', 'text');
    textArea.id = 'task-info';
    checkListInputs.classList.add('checklist-inputs');
    firstChecklist.setAttribute('for', 'firstchecklist');
    firstChecklistInput.setAttribute('type', 'text');
    firstChecklistInput.setAttribute('autocomplete', "off");
    firstChecklistInput.classList.add('check-list');
    firstChecklistInput.id = 'firstchecklist';
    secondChecklist.setAttribute('for', 'secondchecklist');
    secondChecklistInput.setAttribute('type', 'text');
    secondChecklistInput.setAttribute('autocomplete', "off");
    secondChecklistInput.classList.add('check-list');
    secondChecklistInput.id = 'secondchecklist';
    thirdChecklist.setAttribute('for', 'thirdchecklist');
    thirdChecklistInput.setAttribute('type', 'text');
    thirdChecklistInput.setAttribute('autocomplete', "off");
    thirdChecklistInput.classList.add('check-list');
    thirdChecklistInput.id = 'thirdchecklist';
    fourthChecklist.setAttribute('for', 'fourthchecklist');
    fourthChecklistInput.setAttribute('type', 'text');
    fourthChecklistInput.setAttribute('autocomplete', "off");
    fourthChecklistInput.classList.add('check-list');
    fourthChecklistInput.id = 'fourthchecklist';
    fifthChecklist.setAttribute('for', 'fifthchecklist');
    fifthChecklistInput.setAttribute('type', 'text');
    fifthChecklistInput.setAttribute('autocomplete', "off");
    fifthChecklistInput.classList.add('check-list');
    fifthChecklistInput.id = 'fifthchecklist';
    priorityDiv.classList.add('priority-div');
    priorityLabel.setAttribute('for', 'priority-label');
    high.value = '1';
    medium.value = '2';
    low.value = '3';
    projectDiv.classList.add('project-div');
    projectLabel.setAttribute('for', 'project-label');
    addTaskButton.setAttribute('type', 'button');
    addTaskButton.classList.add('addTask-button');

    //Render elements
    exit.appendChild(exitContent);
    newTask.appendChild(newTaskContent);
    newTask.appendChild(exit);
    todoForm.appendChild(newTask);
    taskLabel.appendChild(taskInput);
    taskDiv.appendChild(taskLabel);
    dateLabel.appendChild(dateInput);
    dateDiv.appendChild(dateLabel);
    descriptionLabel.appendChild(textArea);
    firstChecklist.appendChild(firstChecklistInput);
    checkListInputs.appendChild(firstChecklist);
    secondChecklist.appendChild(secondChecklistInput);
    checkListInputs.appendChild(secondChecklist);
    thirdChecklist.appendChild(thirdChecklistInput);
    checkListInputs.appendChild(thirdChecklist);
    fourthChecklist.appendChild(fourthChecklistInput);
    checkListInputs.appendChild(fourthChecklist);
    fifthChecklist.appendChild(fifthChecklistInput);
    checkListInputs.appendChild(fifthChecklist);
    high.appendChild(highContent);
    medium.appendChild(mediumContent);
    low.appendChild(lowContent);
    prioritySelect.appendChild(high);
    prioritySelect.appendChild(medium);
    prioritySelect.appendChild(low);
    priorityLabel.appendChild(prioritySelect);
    priorityDiv.appendChild(priorityLabel);
    createProjectOptions(projectSelect);
    projectLabel.appendChild(projectSelect);
    projectDiv.appendChild(projectLabel);
    addTaskButton.appendChild(taskButtonContent);
    form.appendChild(taskDiv);
    form.appendChild(dateDiv);
    form.appendChild(descriptionLabel);
    form.appendChild(checkListInputs);
    form.appendChild(priorityDiv);
    form.appendChild(projectDiv);
    form.appendChild(addTaskButton);
    todoForm.appendChild(form);
    main.appendChild(todoForm);

    //Bind events
    exit.addEventListener('click', exitForm);
    addTaskButton.addEventListener('click', applyForm);

    giveDatasetNum(todoForm);
    blurBackground();
    
}

function createStorageForm(todoFormID, formNumber) {
    createForm();
    const todoForm = document.querySelectorAll(`[data-todo-num='${todoFormID}']`)[0];
    const inputArray = getInputNodes(todoForm);
    useLocalStorageInputs(inputArray[0], inputArray[1], inputArray[2], inputArray[3], inputArray[4], inputArray[5], inputArray[6], inputArray[7], inputArray[8], inputArray[9], formNumber);
    createTodoFromStorage(todoForm, formNumber, inputArray[10]);
}

function getInputNodes(todoForm) {
    const taskInput = todoForm.querySelector('.task-div input');
    const dateInput = todoForm.querySelector('#time-label');
    const textArea = todoForm.querySelector('#task-info');
    const firstChecklistInput = todoForm.querySelector('#firstchecklist');
    const secondChecklistInput = todoForm.querySelector('#secondchecklist');
    const thirdChecklistInput = todoForm.querySelector('#thirdchecklist');
    const fourthChecklistInput = todoForm.querySelector('#fourthchecklist');
    const fifthChecklistInput = todoForm.querySelector('#fifthchecklist');
    const prioritySelect = todoForm.querySelector('.priority-div select');
    const projectSelect = todoForm.querySelector('.project-div select');
    const addTaskButton = todoForm.querySelector('.addTask-button');
    
    const inputArray = [taskInput, dateInput, textArea, firstChecklistInput, secondChecklistInput, thirdChecklistInput, fourthChecklistInput, fifthChecklistInput, prioritySelect, projectSelect, addTaskButton];
    return inputArray;
}

function createProjectOptions(select) {
    const projects = document.querySelectorAll('.project-name');
    for(let i = 0; i < projects.length; i++) {
        const option = document.createElement('option');
        const optionContent = document.createTextNode(projects[i].textContent);
        option.value = projects[i].textContent;
        option.appendChild(optionContent);
        select.appendChild(option);
    }
}

function createTodoFromStorage(todoForm, formNumber, addTaskButton) {
    const projectTitle = JSON.parse(localStorage.getItem(`array${formNumber}`))[7]
    const projectClass = projectTitle.split(' ').join('').toLowerCase();
    todoForm.classList.add(projectClass);
    todoForm.style.display = 'none';
    todoForm.dataset.todoNum = `todo-${formNumber}`;
    addTaskButton.removeEventListener('click', applyForm);
    unBlurBackground();
}


function countUp(indicator) {
    let counter;
    if (indicator === 'todo') {
        counter = document.querySelectorAll('.todo-container').length || 0;
        return ++counter;
    } else {
        counter = document.querySelectorAll('.titled-project-div').length || 0;
        return counter++;
    }
}


function findOpenForm() {
    const addTaskButtons = document.querySelectorAll('.addTask-button');
    const openedForm = [...addTaskButtons].filter((button) => {
        const cssObj = window.getComputedStyle(button.parentElement.parentElement);
        if (cssObj.getPropertyValue('display') === 'block') {
            return button;
        }
    });
    return openedForm[0].parentElement.parentElement;
}

function applyForm() {

    //Cache DOM
    const todoForm = this.parentElement.parentElement;
    const projectSelectValue = todoForm.querySelector('.project-div select').value
    if (projectSelectValue == '') return;

    //Set attributes
    todoForm.classList.add(projectSelectValue.split(' ').join('').toLowerCase());
    
    //Add to Storage, Make Todo, Exit Form, Unblur, Change Form button event listener
    createStorageArray(setTitle(), setDate(), setDateAsID(),setDescription(), setChecklist(), setPriority(), setProject(), setData());
    makeTodoBlock(setTitle(), setDate(), setDateAsID(),setDescription(), setChecklist(), setPriority(), setProject(), setData()); 
    exitForm.call(this);
    unBlurBackground();
    this.removeEventListener('click', applyForm);  
}

function giveDatasetNum(todoForm) {
    todoForm.dataset.todoNum = 'todo-' + countUp('todo');
}

function editForm() {
    editTodoBlock.call(this, setTitle(), setDate(), setDateAsID(), setDescription(), setChecklist(), setPriority(), setProject(), setData());
    createStorageArray(setTitle(), setDate(), setDateAsID(),setDescription(), setChecklist(), setPriority(), setProject(), setData());
    exitForm.call(this);
    unBlurBackground();
}

function addNewProjectToExistingForms(taskButton) {
    const todoForm = taskButton.parentElement.parentElement;
    const projectSelect = todoForm.querySelector('.project-div select');
    while (projectSelect.firstChild) {
        projectSelect.removeChild(projectSelect.lastChild);
    }
    createProjectOptions(projectSelect);
}

function openExistingForm() {
    const addTaskButton = document.querySelectorAll('.addTask-button');
    addTaskButton.forEach((taskButton) => {
        const todoForm = taskButton.parentElement.parentElement;
        const todoContainer = this.parentElement.parentElement;
        if (todoForm.dataset.todoNum === todoContainer.dataset.todoNum) {
            addNewProjectToExistingForms(taskButton);
            todoForm.style.display = 'block';
            taskButton.addEventListener('click', editForm);
        }
    })
    blurBackground();
}

function blurBackground() {
    const overlay = document.querySelector('.overlay');
    const overlayedHeader = document.querySelector('.overlayed-header');
    overlay.style.display = 'block';
    overlayedHeader.style.display = 'block';
}

function unBlurBackground() {
    const overlay = document.querySelector('.overlay');
    const overlayedHeader = document.querySelector('.overlayed-header');
    overlay.style.display = 'none';
    overlayedHeader.style.display = 'none';
}

function createStorageArray(title, date, dateID, description, checklist, priority, project, data) {
    const array = [];
    array.push(title, date, dateID, description, checklist, priority, project, data);
    const dataNumber = findOpenForm().dataset.todoNum;
    populateStorage(`array${dataNumber.replace(/\D/g, '')}`, JSON.stringify(array));
}


//Todo Inputs

function setTitle() {
    const title = findOpenForm().querySelector('#task');
    return title.value; 
}

function setDateAsID() {
    const date = findOpenForm().querySelector('#time-label');
    return date.value;
}

function setDate() {
    const date = findOpenForm().querySelector('#time-label');
    const value = date.value != '' ? format(new Date(date.value), 'EE, dd/MM/yyyy HH:mm') : date.value;
    return value;
}

function setDescription() {
    const description = findOpenForm().querySelector('#task-info');
    if (description.value == '') {
        description.value = 'Nothing to see here, but there could be';
    }
    return description.value;
}

function setChecklist() {

    //Cache DOM
    const firstCLVal = findOpenForm().querySelector('#firstchecklist').value;
    const secondCLVal = findOpenForm().querySelector('#secondchecklist').value;
    const thirdCLVal = findOpenForm().querySelector('#thirdchecklist').value;
    const fourthCLVal = findOpenForm().querySelector('#fourthchecklist').value;
    const fifthCLVal = findOpenForm().querySelector('#fifthchecklist').value;
    
    const checklistArray = [firstCLVal, secondCLVal, thirdCLVal, fourthCLVal, fifthCLVal];
    const filteredChecklist = checklistArray.filter((item) => item !== ''); 
    const finalList = filteredChecklist.length === 0 ? ['Nothing to see here', 'But there could be'] : filteredChecklist; 
    return finalList;
}

function setPriority() {
    const priority = findOpenForm().querySelector('.priority-div select');
    return priority.value;
}

function setProject() {
    const project = findOpenForm().querySelector('.project-div select');
    return project.value;
}

function setData() {
    const dataSet = findOpenForm().dataset.todoNum;
    return dataSet;
}

function exitForm() {
    const todoForm = this.parentElement.parentElement;
    const data = todoForm.dataset.todoNum
    const twins = document.querySelectorAll(`[data-todo-num="${data}"]`);
    twins.length > 1 ? todoForm.style.display =  'none' : todoForm.parentElement.removeChild(todoForm);
    unBlurBackground();
}

function displayTodoForm() {
    const addtodoButton = document.querySelector('.add-todo');
    addtodoButton.addEventListener('click', createForm);
};

export {createForm, createStorageForm, displayTodoForm, openExistingForm, blurBackground, unBlurBackground, countUp}