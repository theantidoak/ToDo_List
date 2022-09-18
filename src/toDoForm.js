import {makeToDoBlock, editToDoBlock} from './toDoBlock';
import {format} from 'date-fns';
import {renderStorage} from './localStorage'

function createForm(title, storageCounter) {
    const main = document.querySelector('main');
    const toDoForm = document.createElement('div');
    toDoForm.classList.add('todo-form');
    toDoForm.classList.add('storable');
    const newTask = document.createElement('h1');
    const exit = document.createElement('span');
    const newTaskContent = document.createTextNode('New Task');
    const exitContent = document.createTextNode('X');

    exit.appendChild(exitContent);
    newTask.appendChild(newTaskContent);
    newTask.appendChild(exit);
    toDoForm.appendChild(newTask);


    const form = document.createElement('form');
    
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', 'task');
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.id = 'task';

    taskLabel.appendChild(taskInput);
    taskDiv.appendChild(taskLabel);
    form.appendChild(taskDiv);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date-div');
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'time-label');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'datetime-local');
    dateInput.id = 'time-label';

    dateLabel.appendChild(dateInput);
    dateDiv.appendChild(dateLabel);
    form.appendChild(dateDiv);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'task-info');
    descriptionLabel.id = 'task-info-label';
    const textArea = document.createElement('textarea');
    textArea.setAttribute('type', 'text');
    textArea.id = 'task-info';

    descriptionLabel.appendChild(textArea);
    form.appendChild(descriptionLabel);

    const checkListInputs = document.createElement('div');
    checkListInputs.classList.add('checklist-inputs');
    
    const firstChecklist = document.createElement('label');
    firstChecklist.setAttribute('for', 'firstchecklist');
    const firstChecklistInput = document.createElement('input');
    firstChecklistInput.setAttribute('type', 'text');
    firstChecklistInput.setAttribute('autocomplete', "off");
    firstChecklistInput.classList.add('check-list');
    firstChecklistInput.id = 'firstchecklist';

    firstChecklist.appendChild(firstChecklistInput);
    checkListInputs.appendChild(firstChecklist);

    const secondChecklist = document.createElement('label');
    secondChecklist.setAttribute('for', 'secondchecklist');
    const secondChecklistInput = document.createElement('input');
    secondChecklistInput.setAttribute('type', 'text');
    secondChecklistInput.setAttribute('autocomplete', "off");
    secondChecklistInput.classList.add('check-list');
    secondChecklistInput.id = 'secondchecklist';

    secondChecklist.appendChild(secondChecklistInput);
    checkListInputs.appendChild(secondChecklist);

    const thirdChecklist = document.createElement('label');
    thirdChecklist.setAttribute('for', 'thirdchecklist');
    const thirdChecklistInput = document.createElement('input');
    thirdChecklistInput.setAttribute('type', 'text');
    thirdChecklistInput.setAttribute('autocomplete', "off");
    thirdChecklistInput.classList.add('check-list');
    thirdChecklistInput.id = 'thirdchecklist';

    thirdChecklist.appendChild(thirdChecklistInput);
    checkListInputs.appendChild(thirdChecklist);

    const fourthChecklist = document.createElement('label');
    fourthChecklist.setAttribute('for', 'fourthchecklist');
    const fourthChecklistInput = document.createElement('input');
    fourthChecklistInput.setAttribute('type', 'text');
    fourthChecklistInput.setAttribute('autocomplete', "off");
    fourthChecklistInput.classList.add('check-list');
    fourthChecklistInput.id = 'fourthchecklist';

    fourthChecklist.appendChild(fourthChecklistInput);
    checkListInputs.appendChild(fourthChecklist);

    const fifthChecklist = document.createElement('label');
    fifthChecklist.setAttribute('for', 'fifthchecklist');
    const fifthChecklistInput = document.createElement('input');
    fifthChecklistInput.setAttribute('type', 'text');
    fifthChecklistInput.setAttribute('autocomplete', "off");
    fifthChecklistInput.classList.add('check-list');
    fifthChecklistInput.id = 'fifthchecklist';

    fifthChecklist.appendChild(fifthChecklistInput);
    checkListInputs.appendChild(fifthChecklist);

    form.appendChild(checkListInputs);

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priority-div');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority-label');
    const prioritySelect = document.createElement('select');
    const high = document.createElement('option');
    high.value = '1';
    const highContent = document.createTextNode('High');
    const medium = document.createElement('option');
    medium.value = '2';
    const mediumContent = document.createTextNode('Medium');
    const low = document.createElement('option');
    low.value = '3';
    const lowContent = document.createTextNode('Low');

    high.appendChild(highContent);
    medium.appendChild(mediumContent);
    low.appendChild(lowContent);
    prioritySelect.appendChild(high);
    prioritySelect.appendChild(medium);
    prioritySelect.appendChild(low);
    priorityLabel.appendChild(prioritySelect);
    priorityDiv.appendChild(priorityLabel);
    form.appendChild(priorityDiv);

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for', 'project-label');
    const projectSelect = document.createElement('select');
    createProjectOptions(projectSelect);

    projectLabel.appendChild(projectSelect);
    projectDiv.appendChild(projectLabel);
    form.appendChild(projectDiv);

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('type', 'button');
    addTaskButton.classList.add('addTask-button');
    const taskButtonContent = document.createTextNode('Add Task');

    addTaskButton.appendChild(taskButtonContent);
    form.appendChild(addTaskButton);

    toDoForm.appendChild(form);

    main.appendChild(toDoForm);

    
    if (title === true) {
        useLocalStorageInputs(taskInput, dateInput, textArea, firstChecklistInput, secondChecklistInput, thirdChecklistInput, fourthChecklistInput, fifthChecklistInput, prioritySelect, projectSelect, storageCounter);
        toDoForm.style.display = 'none';
        toDoForm.dataset.todoNum = storageCounter;
        const formNumber = storageCounter.replace(/\D/g, '');
        const projectName = localStorage.getItem(`project${formNumber}`);
        applyForm(projectName, toDoForm);
    } else {
        blurBackground();
        const formNumber = countUp.addNumber();
        toDoForm.dataset.todoNum = 'todo-' + formNumber;
        addTaskButton.addEventListener('click', applyForm);
    }
    
    
    exit.addEventListener('click', exitForm)
}

function useLocalStorageInputs(task, date, description, first, second, third, fourth, fifth, priority, project, formNumber) {
    formNumber = formNumber.replace(/\D/g, '');
    task.value = localStorage.getItem(`title${formNumber}`);
    date.value = localStorage.getItem(`date${formNumber}`);
    description.value = localStorage.getItem(`description${formNumber}`);
    first.value = localStorage.getItem(`finalList${formNumber}[0]`);
    second.value = localStorage.getItem(`finalList${formNumber}[1]`);
    third.value = localStorage.getItem(`finalList${formNumber}[2]`);
    fourth.value = localStorage.getItem(`finalList${formNumber}[3]`);
    fifth.value = localStorage.getItem(`finalList${formNumber}[4]`);
    priority.value = localStorage.getItem(`priority${formNumber}`);
    project.value = localStorage.getItem(`project${formNumber}`);
}

const countUp = (function() {
    let counter = 0;
    let projectCounter = 0;
    return { 
        addNumber(negative) {
        const containers = document.querySelectorAll('.todo-container');
        counter = containers.length || 0;
        let nextNumber;
        if (negative) {
            nextNumber = --counter;
        } else {
            nextNumber = ++counter;
        }
        localStorage.setItem('counter', nextNumber);
        return nextNumber;
        },
        addProjectNumber() {
            let nextProjectNumber = ++projectCounter
            return nextProjectNumber;
        }
};
})();


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

function applyForm(storageSelected, storageForm) {
    if (storageForm) {
        const projectClass = storageSelected.split(' ').join('').toLowerCase();
        storageForm.classList.add(projectClass);
    } else {
        const projectSelect = this.previousSibling.firstElementChild.firstElementChild.value;
        if (projectSelect == '') return;
        
        this.parentElement.parentElement.classList.add(projectSelect.split(' ').join('').toLowerCase());
        makeToDoBlock(setTitle(), setDate(), setDateAsID(),setDescription(), setChecklist(), setPriority(), setProject(), setData());
        removeForm();
        unBlurBackground();
        this.removeEventListener('click', applyForm);
    } 
    
}

function editForm() {
    editToDoBlock.call(this, setTitle(), setDate(), setDateAsID(), setDescription(), setChecklist(), setPriority(), setProject(), setData());
    removeForm();
    unBlurBackground();
}

function addNewProjectToExistingForms(taskButton) {
    const projectSelect = taskButton.previousSibling.firstElementChild.firstElementChild;
    while (projectSelect.firstChild) {
        projectSelect.removeChild(projectSelect.lastChild);
    }
    createProjectOptions(projectSelect);
}

function openExistingForm() {
    const addTaskButton = document.querySelectorAll('.addTask-button');
    addTaskButton.forEach((taskButton) => {
        if (taskButton.parentElement.parentElement.dataset.todoNum == this.parentElement.parentElement.dataset.todoNum) {
            addNewProjectToExistingForms(taskButton);
            taskButton.parentElement.parentElement.style.display = 'block';
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

function setTitle() {
    const title = findOpenForm().querySelector('#task');
    const dataNumber = findOpenForm().dataset.todoNum;
    renderStorage(`title${dataNumber.replace(/\D/g, '')}`, title.value);
    return title.value; 
    
}

function setDateAsID() {
    const date = findOpenForm().querySelector('#time-label');
    const dataNumber = findOpenForm().dataset.todoNum;
    renderStorage(`dateID${dataNumber.replace(/\D/g, '')}`, date.value);
    return date.value;
}

function setDate() {
    const date = findOpenForm().querySelector('#time-label');
    const value = date.value != '' ? format(new Date(date.value), 'EE, dd/MM/yyyy HH:mm') : date.value;
    const dataNumber = findOpenForm().dataset.todoNum;
    renderStorage(`date${dataNumber.replace(/\D/g, '')}`, date.value);
    return value;
}

function setDescription() {
    const description = findOpenForm().querySelector('#task-info');
    const dataNumber = findOpenForm().dataset.todoNum;
    if (description.value == '') {
        description.value = 'Nothing to see here, but there could be';
    }
    renderStorage(`description${dataNumber.replace(/\D/g, '')}`, description.value);

    return description.value;
}

function setChecklist() {
    const firstChecklist = findOpenForm().querySelector('#firstchecklist');
    const secondChecklist = findOpenForm().querySelector('#secondchecklist');
    const thirdChecklist = findOpenForm().querySelector('#thirdchecklist');
    const fourthChecklist = findOpenForm().querySelector('#fourthchecklist');
    const fifthChecklist = findOpenForm().querySelector('#fifthchecklist');

    const checklistArray = [firstChecklist.value, secondChecklist.value, thirdChecklist.value, fourthChecklist.value, fifthChecklist.value];
    
    const dataNumber = findOpenForm().dataset.todoNum;

    let finalList = checklistArray.filter((item) => {
        if (item !== "") {
            return item;
        }
    });
    
    if (finalList.length === 0) {
        finalList = ['Nothing to see here', 'But there could be'];
    }
    
    renderStorage(`finalList${dataNumber.replace(/\D/g, '')}`, JSON.stringify(finalList));

    return finalList;
}

function setPriority() {
    const priority = findOpenForm().querySelector('.priority-div select');
    const dataNumber = findOpenForm().dataset.todoNum;

    renderStorage(`priority${dataNumber.replace(/\D/g, '')}`, priority.value);
    return priority.value;

}

function setProject() {
    const project = findOpenForm().querySelector('.project-div select');
    const dataNumber = findOpenForm().dataset.todoNum;
    renderStorage(`project${dataNumber.replace(/\D/g, '')}`, project.value);
    return project.value;

}

function setData() {
    const dataSet = findOpenForm().dataset.todoNum;
    renderStorage(`dataSet${dataSet.replace(/\D/g, '')}`, dataSet)
    return dataSet;
}

function removeForm() {
    findOpenForm().style.display = 'none';
}

function exitForm() {
    const form = this.parentElement.parentElement;
    const data = form.dataset.todoNum
    const twins = document.querySelectorAll(`[data-todo-num="${data}"]`);
    if (twins.length > 1) {
        form.style.display = 'none'
    } else {
        form.parentElement.removeChild(form);
    }
    unBlurBackground();
}

export {createForm, openExistingForm, blurBackground, unBlurBackground, countUp}