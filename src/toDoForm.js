import {makeToDoBlock, editToDoBlock} from './toDoBlock';

function createForm() {
    const main = document.querySelector('main');
    const toDoForm = document.createElement('div');
    toDoForm.classList.add('todo-form');
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
    firstChecklistInput.classList.add('check-list');
    firstChecklistInput.id = 'firstchecklist';

    firstChecklist.appendChild(firstChecklistInput);
    checkListInputs.appendChild(firstChecklist);

    const secondChecklist = document.createElement('label');
    secondChecklist.setAttribute('for', 'secondchecklist');
    const secondChecklistInput = document.createElement('input');
    secondChecklistInput.setAttribute('type', 'text');
    secondChecklistInput.classList.add('check-list');
    secondChecklistInput.id = 'secondchecklist';

    secondChecklist.appendChild(secondChecklistInput);
    checkListInputs.appendChild(secondChecklist);

    const thirdChecklist = document.createElement('label');
    thirdChecklist.setAttribute('for', 'thirdchecklist');
    const thirdChecklistInput = document.createElement('input');
    thirdChecklistInput.setAttribute('type', 'text');
    thirdChecklistInput.classList.add('check-list');
    thirdChecklistInput.id = 'thirdchecklist';

    thirdChecklist.appendChild(thirdChecklistInput);
    checkListInputs.appendChild(thirdChecklist);

    const fourthChecklist = document.createElement('label');
    fourthChecklist.setAttribute('for', 'fourthchecklist');
    const fourthChecklistInput = document.createElement('input');
    fourthChecklistInput.setAttribute('type', 'text');
    fourthChecklistInput.classList.add('check-list');
    fourthChecklistInput.id = 'fourthchecklist';

    fourthChecklist.appendChild(fourthChecklistInput);
    checkListInputs.appendChild(fourthChecklist);

    const fifthChecklist = document.createElement('label');
    fifthChecklist.setAttribute('for', 'fifthchecklist');
    const fifthChecklistInput = document.createElement('input');
    fifthChecklistInput.setAttribute('type', 'text');
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

    toDoForm.classList.add(projectSelect.value.toLowerCase());
    toDoForm.dataset.todoNum = 'todo-' + countUp.addNumber();

    main.appendChild(toDoForm);
    
    addTaskButton.addEventListener('click', applyForm);
    exit.addEventListener('click', exitForm)
    blurBackground();
}

const countUp = (function() {
    let counter = 0;
    return { addNumber() {
        return ++counter;
    } };
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

function applyForm() {
    makeToDoBlock(setTitle(), setDate(), setDescription(), setChecklist(), setPriority(), setProject(), setData());
    removeForm();
    this.removeEventListener('click', applyForm);
    unBlurBackground();
}

function editForm() {
    editToDoBlock.call(this, setTitle(), setDate(), setDescription(), setChecklist(), setPriority(), setProject(), setData());
    removeForm();
    unBlurBackground();
}

function openExistingForm() {
    const addTaskButton = document.querySelectorAll('.addTask-button');
    addTaskButton.forEach((taskButton) => {
        if (taskButton.parentElement.parentElement.dataset.todoNum == this.parentElement.parentElement.dataset.todoNum) {
            taskButton.parentElement.parentElement.style.display = 'block';
            taskButton.addEventListener('click', editForm);
        }
    })
    blurBackground();
}

function blurBackground() {
    const openForm = findOpenForm();
    const content = document.querySelector('.content');
    const header = document.querySelector('header');
    header.style.filter = 'blur(5px)';
    content.firstElementChild.style.filter = 'blur(5px)';
    [...content.lastElementChild.children].forEach((child) => {
        if (child !== openForm) {
            child.style.filter = 'blur(5px)'
        }
    })
}

function unBlurBackground() {
    const content = document.querySelector('.content');
    const header = document.querySelector('header');
    header.style.filter = 'blur(0px)';
    content.firstElementChild.style.filter = 'blur(0px)';
    [...content.lastElementChild.children].forEach((child) => {
        child.style.filter = 'blur(0px)'
    })
}

function setTitle() {
    const title = findOpenForm().querySelector('#task');
    return title.value;
}

function setDate() {
    const date = findOpenForm().querySelector('#time-label');
    return date.value;
}

function setDescription() {
    const description = findOpenForm().querySelector('#task-info');
    if (description.value == '') {
        description.value = 'Nothing to see here, but there could be';
    }
    return description.value;
}

function setChecklist() {
    const firstChecklist = findOpenForm().querySelector('#firstchecklist');
    const secondChecklist = findOpenForm().querySelector('#secondchecklist');
    const thirdChecklist = findOpenForm().querySelector('#thirdchecklist');
    const fourthChecklist = findOpenForm().querySelector('#fourthchecklist');
    const fifthChecklist = findOpenForm().querySelector('#fifthchecklist');

    const checklistArray = [firstChecklist.value, secondChecklist.value, thirdChecklist.value, fourthChecklist.value, fifthChecklist.value];
    
    let finalList = checklistArray.filter((item) => {
        if (item !== "") {
            return item;
        }
    });
    
    if (finalList.length === 0) {
        finalList = ['Nothing to see here', 'But there could be'];
    }

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
    return findOpenForm().dataset.todoNum;
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

export {createForm, openExistingForm}