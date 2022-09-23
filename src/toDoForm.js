import { makeTodoBlock, editTodoBlock} from './toDoBlock';
import { format } from 'date-fns';
import { createStorageArray } from './localStorage'

function createForm() {

    //Cache DOM
    const main = document.querySelector('main');

    //Create elements
    const todoForm = document.createElement('div');
    const newTask = document.createElement('h1');
    const exitSpan = document.createElement('span');
    const newTaskContent = document.createTextNode('New Task');
    const exitContent = document.createTextNode('X');
    const form = document.createElement('form');
    const taskDiv = document.createElement('div');
    const taskLabel = document.createElement('label');
    const taskInput = document.createElement('input');
    const dateDiv = document.createElement('div');
    const dateLabel = document.createElement('label');
    const dateInput = document.createElement('input');
    const priorityDiv = document.createElement('div');
    const priorityLabel = document.createElement('label');
    const prioritySelect = document.createElement('select');
    const highOption = document.createElement('option');
    const highContent = document.createTextNode('High');
    const mediumOption = document.createElement('option');
    const mediumContent = document.createTextNode('Medium');
    const lowOption = document.createElement('option');
    const lowContent = document.createTextNode('Low');
    const projectDiv = document.createElement('div');
    const projectLabel = document.createElement('label');
    const projectSelect = document.createElement('select');
    const descriptionLabel = document.createElement('label');
    const textArea = document.createElement('textarea');
    const checklistInputs = document.createElement('div');
    const checklistDiv = document.createElement('div');
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
    
    const addTaskButton = document.createElement('button');
    const taskButtonContent = document.createTextNode('Add Task');

    //Set attributes
    todoForm.classList.add('todo-form');
    todoForm.classList.add('storable');
    taskDiv.classList.add('task-div');
    taskLabel.setAttribute('for', 'task');
    taskInput.setAttribute('type', 'text');
    taskInput.id = 'task';
    taskInput.required = true;
    taskInput.setAttribute('autocomplete', "off");
    dateDiv.classList.add('date-div');
    dateLabel.setAttribute('for', 'time-label');
    dateInput.setAttribute('type', 'datetime-local');
    dateInput.id = 'time-label';
    projectDiv.classList.add('project-div');
    projectLabel.setAttribute('for', 'project-label');
    descriptionLabel.setAttribute('for', 'task-info');
    descriptionLabel.id = 'task-info-label';
    textArea.setAttribute('type', 'text');
    textArea.id = 'task-info';
    checklistInputs.classList.add('checklist-inputs');
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
    highOption.value = '1';
    mediumOption.value = '2';
    mediumOption.setAttribute('selected', 'selected');
    lowOption.value = '3';
    addTaskButton.setAttribute('type', 'button');
    addTaskButton.classList.add('addTask-button');

    //Render elements
    exitSpan.appendChild(exitContent);
    newTask.appendChild(newTaskContent);
    newTask.appendChild(exitSpan);
    todoForm.appendChild(newTask);
    taskLabel.appendChild(taskInput);
    taskDiv.appendChild(taskLabel);
    dateLabel.appendChild(dateInput);
    dateDiv.appendChild(dateLabel);
    highOption.appendChild(highContent);
    mediumOption.appendChild(mediumContent);
    lowOption.appendChild(lowContent);
    prioritySelect.appendChild(highOption);
    prioritySelect.appendChild(mediumOption);
    prioritySelect.appendChild(lowOption);
    priorityLabel.appendChild(prioritySelect);
    priorityDiv.appendChild(priorityLabel);
    createProjectOptions(projectSelect);
    projectLabel.appendChild(projectSelect);
    projectDiv.appendChild(projectLabel);
    descriptionLabel.appendChild(textArea);
    firstChecklist.appendChild(firstChecklistInput);
    checklistDiv.appendChild(firstChecklist);
    secondChecklist.appendChild(secondChecklistInput);
    checklistDiv.appendChild(secondChecklist);
    thirdChecklist.appendChild(thirdChecklistInput);
    checklistDiv.appendChild(thirdChecklist);
    fourthChecklist.appendChild(fourthChecklistInput);
    checklistDiv.appendChild(fourthChecklist);
    fifthChecklist.appendChild(fifthChecklistInput);
    checklistDiv.appendChild(fifthChecklist)
    checklistInputs.appendChild(checklistDiv)
    addTaskButton.appendChild(taskButtonContent);
    form.appendChild(taskDiv);
    form.appendChild(dateDiv);
    form.appendChild(priorityDiv);
    form.appendChild(projectDiv);
    form.appendChild(descriptionLabel);
    form.appendChild(checklistInputs);
    form.appendChild(addTaskButton);
    todoForm.appendChild(form);
    main.appendChild(todoForm);

    //Bind events
    exitSpan.addEventListener('click', exitForm);
    addTaskButton.addEventListener('click', applyForm);

    giveDataID(todoForm);
    blurBackground(); 
}

//Create Form Functions

function createProjectOptions(select) {
    const projectTitles = document.querySelectorAll('.project-name');
    for(let i = 0; i < projectTitles.length; i++) {
        const projectOption = document.createElement('option');
        const optionContent = document.createTextNode(projectTitles[i].textContent.toLowerCase());
        projectOption.value = projectTitles[i].textContent.toLowerCase();
        projectOption.appendChild(optionContent);
        select.appendChild(projectOption);
    }
}

function exitForm() {
    const todoForm = this.parentElement.parentElement;
    const dataID = todoForm.dataset.todoNum
    const todoPair = document.querySelectorAll(`[data-todo-num="${dataID}"]`);
    todoPair.length > 1 ? todoForm.style.display =  'none' : todoForm.parentElement.removeChild(todoForm);
    unBlurBackground();
}

function giveDataID(todoForm) {
    todoForm.dataset.todoNum = 'todo-' + countUp('todo');
}

function countUp(indicator) {
    let counter;
    if (indicator === 'todo') {
        const todoContainers = document.querySelectorAll('.todo-container')
        counter = todoContainers.length || 0;
        return ++counter;
    } else {
        const projectTitles = document.querySelectorAll('.project-name')
        counter = projectTitles.length - 1 || 0;
        return counter++;
    }
}

function blurBackground() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
}

function unBlurBackground() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';
}


function applyForm() {

    //Cache DOM
    const todoForm = this.parentElement.parentElement;
    const projectSelectValue = todoForm.querySelector('.project-div select').value
    if (projectSelectValue == '') return;

    //Set attributes
    todoForm.classList.add(projectSelectValue.split(' ').join('').toLowerCase());
    
    //Add to Storage, Make Todo, Exit Form, Unblur, Remove applyForm event listener before adding editForm 
    createStorageArray(setTask(), setDate(), setDateAsID(),setDescription(), setChecklist(), setPriority(), setProject(), setData());
    makeTodoBlock(setTask(), setDate(), setDateAsID(),setDescription(), setChecklist(), setPriority(), setProject(), setData()); 
    exitForm.call(this);
    unBlurBackground();
    this.removeEventListener('click', applyForm);  
}

function editForm() {
    //Add to storage, Edit Todo, Exit Form, Unblur
    
    editTodoBlock.call(this, setTask(), setDate(), setDateAsID(), setDescription(), setChecklist(), setPriority(), setProject(), setData());
    createStorageArray(setTask(), setDate(), setDateAsID(),setDescription(), setChecklist(), setPriority(), setProject(), setData());
    exitForm.call(this);
    unBlurBackground();
}

function openExistingForm() {
    
    const addTaskButton = document.querySelectorAll('.addTask-button');
    addTaskButton.forEach((taskButton) => {
        const todoForm = taskButton.parentElement.parentElement;
        const todoContainer = this.parentElement.parentElement;
        if (todoForm.dataset.todoNum === todoContainer.dataset.todoNum) {
            addNewProjectToExistingForms(taskButton);
            setProjectSelectValue(todoForm, todoContainer);
            todoForm.style.display = 'block';
            taskButton.addEventListener('click', editForm);
        }
    })
    blurBackground();
}

function addNewProjectToExistingForms(taskButton) {
    const todoForm = taskButton.parentElement.parentElement;
    const projectSelect = todoForm.querySelector('.project-div select');
    while (projectSelect.firstChild) {
        projectSelect.removeChild(projectSelect.lastChild);
    }
    createProjectOptions(projectSelect);
}

function setProjectSelectValue(todoForm, todoContainer) {
    const projectSelect = todoForm.querySelector('.project-div select');
    const projectTitle = todoContainer.querySelector('.project').textContent.toLowerCase();
    projectSelect.value = projectTitle;
}

function bindAddTodoButton() {
    const addtodoButton = document.querySelector('.add-todo');
    addtodoButton.addEventListener('click', createForm);
};


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

//Todo Inputs

function setTask() {
    const task = findOpenForm().querySelector('#task');
    return task.value; 
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

export { createForm, countUp, blurBackground, unBlurBackground, applyForm, openExistingForm, bindAddTodoButton, findOpenForm }