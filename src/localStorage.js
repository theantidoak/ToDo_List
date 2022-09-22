import { makeTodoBlock } from './toDoBlock'
import { createForm, unBlurBackground, applyForm, findOpenForm } from './toDoForm';
import { addProjectButton } from './projects'

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function populateStorage(callName, item) {
    if (callName == 'finalList') {
        localStorage.setItem(callName, JSON.stringify(item));
    } else {
        localStorage.setItem(callName, item);
    }
}

function renderStorageOnPage() {  
    if (storageAvailable('localStorage')) {
        if (localStorage.length == 0) return;
        findProjectStorageAndRender();
        findTodoStorageAndRender();
    }
}


//Todo Storage

function findTodoStorageAndRender() {
    const keys = Object.keys(localStorage).sort();
    const lastStorageItem = keys[localStorage.length-1];
    const amountOfStorageItems = lastStorageItem.replace(/\D/g, '');
    if (!localStorage.getItem('array1')) return;
    for (let i = 1; i <= amountOfStorageItems; i++) {
        createStorageForm(input(i).dataID, i);
        makeTodoBlock(input(i).task, input(i).date, input(i).dateID, input(i).description, input(i).checklist, input(i).priority, input(i).project, input(i).dataID);  
        renderCheckedStorage(i);
    }
}

function input(i) {
    const task = JSON.parse(localStorage.getItem(`array${i}`))[0];
    const date = JSON.parse(localStorage.getItem(`array${i}`))[1];
    const dateID = JSON.parse(localStorage.getItem(`array${i}`))[2];
    const description = JSON.parse(localStorage.getItem(`array${i}`))[3];
    const checklist = JSON.parse(localStorage.getItem(`array${i}`))[4];
    const priority = JSON.parse(localStorage.getItem(`array${i}`))[5];
    const project = JSON.parse(localStorage.getItem(`array${i}`))[6];
    const dataID = JSON.parse(localStorage.getItem(`array${i}`))[7];

    return { task, date, dateID, description, checklist, priority, project, dataID }
}

function renderCheckedStorage(i) {
    if (isCompleted(i) === true) {
        const todoContainer = document.querySelectorAll('.todo-container')[i-1];
        const todoCheckbox = todoContainer.querySelector('.top input');
        const projectTitle = JSON.parse(localStorage.getItem(`array${i}`))[6];
        todoCheckbox.checked = true;
        todoContainer.classList.add('completed-todo');
        todoContainer.classList.remove(projectTitle);
        todoContainer.style.display = 'none';
    }
}

function isCompleted(i) {
    const todoCheckboxValue = JSON.parse(localStorage.getItem(`array${i}`))[8];
    if (todoCheckboxValue != null) {
        return true;
    }
}

function removeTodoStorageItem(deletedTodoIndexNum) {
    localStorage.removeItem(`array${deletedTodoIndexNum}`);
    lowerTodoIndexNum(deletedTodoIndexNum);
}

function lowerTodoIndexNum(deletedTodoIndexNum) {
    Object.keys(localStorage).sort().forEach(key => {
        const keyIndexNum = key.replace(/\D/g, '');
        const todoArrayIndex = key.split('')[key.split('').length-1];
        if (!Number.isInteger(+todoArrayIndex)) return;
        if (keyIndexNum > deletedTodoIndexNum) {
            const newKeyIndex = key.replace(keyIndexNum, keyIndexNum-1);
            const storageItemValue = localStorage[key];
            const storageItemDataID = JSON.parse(localStorage.getItem(key))[7];
            const oldID = storageItemDataID.replace(/\D/g, '');
            const newID = oldID - 1;
            const newStorageItemDataID = storageItemDataID.replace(oldID, newID);
            const newStorageItemValue = storageItemValue.replace(storageItemDataID, newStorageItemDataID);
            localStorage.removeItem(key);
            localStorage.setItem(newKeyIndex, newStorageItemValue);
        }
    });
}

function reOrderTodoStorage() {
    const newStorageValueArray = [];
    const sortedKeys = sortKeysByDate();
    changeDataID(sortedKeys, newStorageValueArray);
    setNewValue(sortedKeys, newStorageValueArray);
}

function sortKeysByDate() {
    const todoArrayKeys = Object.keys(localStorage).filter(key => !Number.isInteger(+key[0]));
    const sortedKeys = todoArrayKeys.sort((a,b) => {
        if (Number.isInteger(+a[0]) === true) {
            return 1;
        } else if (Number.isInteger(+b[0]) === true) {
            return -1;
        } else {
            const dateA = new Date(JSON.parse(localStorage.getItem(a))[2]);
            const dateB = new Date(JSON.parse(localStorage.getItem(b))[2]); 
            if (dateA != 'Invalid Date' && dateB != 'Invalid Date') {
                return dateA - dateB;
            } else if (dateA == 'Invalid Date' && dateB == 'Invalid Date') {
                return a.replace(/\D/g, '') - b.replace(/\D/g, '');
            } else if (dateA == 'Invalid Date') {
                return 1
            } else if (dateB == 'Invalid Date') {
                return -1;
            }
        }
    });
    return sortedKeys;
}

function changeDataID(sortedKeys, newStorageValueArray) {
    sortedKeys.forEach(key => {
        const storageItemValue = localStorage.getItem(key);
        const storageItemDataID = JSON.parse(localStorage.getItem(key))[7];
        const oldID = storageItemDataID.replace(/\D/g, '');
        const newID = sortedKeys.indexOf(key) + 1;    
        const newStorageItemDataID = storageItemDataID.replace(oldID, newID);
        const newStorageItemValue = storageItemValue.replace(storageItemDataID, newStorageItemDataID);
        newStorageValueArray.push(newStorageItemValue);   
    })
}

function setNewValue(sortedKeys, newStorageValueArray) {
    for (let i = 0; i < sortedKeys.length; i++) {
        localStorage.setItem(`array${i+1}`, newStorageValueArray[i]);
    }
}


// Todo Form Storage 

function createStorageArray(title, date, dateID, description, checklist, priority, project, data) {
    const array = [];
    const dataNumber = findOpenForm().dataset.todoNum;
    array.push(title, date, dateID, description, checklist, priority, project, data);
    populateStorage(`array${dataNumber.replace(/\D/g, '')}`, JSON.stringify(array));
}


function createStorageForm(todoFormID, formNumber) {
    createForm();
    const todoForm = document.querySelectorAll(`[data-todo-num='${todoFormID}']`)[0];
    const inputArray = getInputNodes(todoForm);
    useLocalStorageInputs(formNumber, inputArray[0], inputArray[1], inputArray[2], inputArray[3], inputArray[4], inputArray[5], inputArray[6]);
    createTodoFromStorage(todoForm, formNumber, inputArray[7]);
}

function getInputNodes(todoForm) {
    const taskInput = todoForm.querySelector('.task-div input');
    const dateInput = todoForm.querySelector('#time-label');
    const dateID = '';
    const textArea = todoForm.querySelector('#task-info');
    const firstChecklistInput = todoForm.querySelector('#firstchecklist');
    const secondChecklistInput = todoForm.querySelector('#secondchecklist');
    const thirdChecklistInput = todoForm.querySelector('#thirdchecklist');
    const fourthChecklistInput = todoForm.querySelector('#fourthchecklist');
    const fifthChecklistInput = todoForm.querySelector('#fifthchecklist');
    const prioritySelect = todoForm.querySelector('.priority-div select');
    const projectSelect = todoForm.querySelector('.project-div select');
    const addTaskButton = todoForm.querySelector('.addTask-button');
    
    const checklist = [firstChecklistInput, secondChecklistInput, thirdChecklistInput, fourthChecklistInput, fifthChecklistInput]
    const inputArray = [taskInput, dateInput, dateID, textArea, checklist, prioritySelect, projectSelect, addTaskButton];
    return inputArray;
}

function useLocalStorageInputs(formNumber, ...args) {
    for (let i = 0; i < 7; i++) {
        if (i === 1) {
            //date
            args[i].value = JSON.parse(localStorage.getItem(`array${formNumber}`))[i+1];
        } else if (i === 2) {
            //dateID
            continue;
        } else if (i === 4) {
            //checklist
            for (let j = 0; j < 5; j++) {
                if (JSON.parse(localStorage.getItem(`array${formNumber}`))[i][j] == undefined) {
                    continue;
                }
                args[i][j].value = JSON.parse(localStorage.getItem(`array${formNumber}`))[i][j];
            }
        } else {
            args[i].value = JSON.parse(localStorage.getItem(`array${formNumber}`))[i];
        }   
        
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


//Project Storage

function findProjectStorageAndRender() {
    const projectTitles = Object.keys(localStorage).filter(key => Number.isInteger(+key[0]));
    projectTitles.sort().forEach(project => addProjectButton(localStorage.getItem(project)));  
}

function removeProjectStorageItem(num) {
    localStorage.removeItem(`${num}project`);
    lowerProjectDataNumbers(num);
}

function lowerProjectDataNumbers(num) {
    Object.keys(localStorage).sort().forEach(key => {
        const keyIndexNum = key.replace(/\D/g, '');
        if (!Number.isInteger(+keyIndexNum) || !Number.isInteger(+key[0])) return;
        if (keyIndexNum > num) {
            const newKeyIndex = key.replace(keyIndexNum, keyIndexNum-1);
            const storageItemValue = localStorage[key];
            localStorage.removeItem(key);
            localStorage.setItem(newKeyIndex, storageItemValue);
        }
    })

} 



export { populateStorage, renderStorageOnPage, removeTodoStorageItem, reOrderTodoStorage, createStorageArray, useLocalStorageInputs, removeProjectStorageItem }