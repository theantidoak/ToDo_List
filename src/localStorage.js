import { makeTodoBlock } from './toDoBlock'
import { createStorageForm } from './toDoForm'
import { addProjectButton } from './projects'


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

function findProjectStorageAndRender() {
    const projects = Object.keys(localStorage).filter(key => Number.isInteger(+key[0]));
    projects.sort().forEach(project => addProjectButton(localStorage.getItem(project)));  
}

function findTodoStorageAndRender() {
    const keys = Object.keys(localStorage).sort();
    const laststorageItem = keys[localStorage.length-1];
    const amountOfItems = laststorageItem.replace(/\D/g, '');
    if (!localStorage.getItem('array1')) return;
    for (let i = 1; i <= amountOfItems; i++) {
        createStorageForm(JSON.parse(localStorage.getItem(`array${i}`))[7], i);
        makeTodoBlock(JSON.parse(localStorage.getItem(`array${i}`))[0], JSON.parse(localStorage.getItem(`array${i}`))[1], JSON.parse(localStorage.getItem(`array${i}`))[2], JSON.parse(localStorage.getItem(`array${i}`))[3], JSON.parse(localStorage.getItem(`array${i}`))[4], JSON.parse(localStorage.getItem(`array${i}`))[5], JSON.parse(localStorage.getItem(`array${i}`))[6], JSON.parse(localStorage.getItem(`array${i}`))[7]);  
        renderCheckedStorage(i);
    }
}

function renderCheckedStorage(i) {
    if (isCompleted(i) === true) {
        const todoContainer = document.querySelectorAll('.todo-container')[i-1];
        const todoCheckbox = todoContainer.querySelector('.top input');
        const project = JSON.parse(localStorage.getItem(`array${i}`))[6];
        todoCheckbox.checked = true;
        todoContainer.classList.add('completed-todo');
        todoContainer.classList.remove(project);
        todoContainer.style.display = 'none';
    }
}

function isCompleted(i) {
    if (JSON.parse(localStorage.getItem(`array${i}`))[8] != null) {
        return true;
    }
}

function useLocalStorageInputs(task, date, description, first, second, third, fourth, fifth, priority, project, formNumber) {
    for (let i = 0; i < 7; i++) {
        if (i === 2) {
            continue;
        } else if (i === 4) {
            for (let j = 0; j < 5; j++) {
                arguments[i].value = JSON.parse(localStorage.getItem(`array${formNumber}`))[i][j];
            }
        } else {
            arguments[i].value = JSON.parse(localStorage.getItem(`array${formNumber}`))[i];
        }   
    }
}


function removeStorageItem(num) {
    localStorage.removeItem(`array${num}`);
    lowerDataNumbers(num);
}

function removeProjectStorageItem(num) {
    localStorage.removeItem(`${num}project`);
    lowerProjectDataNumbers(num);
}

function lowerProjectDataNumbers(num) {
    Object.keys(localStorage).sort().forEach(key => {
        const keyNum = key.replace(/\D/g, '');
        if (!Number.isInteger(+keyNum) || !Number.isInteger(+key[0])) return;
        if (keyNum > num) {
            const newKey = key.replace(keyNum, keyNum-1);
            const value = localStorage[key];
            localStorage.removeItem(key);
            localStorage.setItem(newKey, value);
        }
    })

} 


function lowerDataNumbers(num) {
    Object.keys(localStorage).sort().forEach(key => {
        const keyNum = key.replace(/\D/g, '');
        const numbers = key.split('')[key.split('').length-1];
        if (!Number.isInteger(+numbers)) return;
        if (keyNum > num) {
            const newKey = key.replace(keyNum, keyNum-1);
            const value = localStorage[key];
            const valueData = JSON.parse(localStorage.getItem(key))[7];
            const oldID = valueData.replace(/\D/g, '');
            const newID = oldID - 1;
            const newValueData = valueData.replace(oldID, newID);
            const newValue = value.replace(valueData, newValueData);
            localStorage.removeItem(key);
            localStorage.setItem(newKey, newValue);
        }
      });
}


function reOrderStorage() {
    const newStorageValueArray = [];
    const sortedKeys = sortKeysByDate();
    changeDataID(sortedKeys, newStorageValueArray);
    setNewValue(sortedKeys, newStorageValueArray);
}

function setNewValue(sortedKeys, newStorageValueArray) {
    for (let i = 0; i < sortedKeys.length; i++) {
        localStorage.setItem(`array${i+1}`, newStorageValueArray[i]);
    }
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
        const value = localStorage.getItem(key);
        const valueData = JSON.parse(localStorage.getItem(key))[7];
        const oldID = valueData.replace(/\D/g, '');
        const newID = sortedKeys.indexOf(key) + 1;    
        const newValueData = valueData.replace(oldID, newID);
        const newValue = value.replace(valueData, newValueData);
        newStorageValueArray.push(newValue);   
    })
}


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



export { reOrderStorage, populateStorage, renderStorageOnPage, removeStorageItem, removeProjectStorageItem, useLocalStorageInputs }