import { makeTodoBlock, markCompleted } from './toDoBlock'
import { createForm } from './toDoForm'
import { addProjectButton } from './projects'


function populateStorage(callName, item) {
    if (callName == 'finalList') {
        localStorage.setItem(callName, JSON.stringify(item));
    } else {
        localStorage.setItem(callName, item);
    }
}

function renderStorageOnPage() {
    if (localStorage.length == 0) return;
    findProjectStorageAndRender();
    findTodoStorageAndRender();
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
        createForm(true, i);
        makeTodoBlock(JSON.parse(localStorage.getItem(`array${i}`))[0], JSON.parse(localStorage.getItem(`array${i}`))[1], JSON.parse(localStorage.getItem(`array${i}`))[2], JSON.parse(localStorage.getItem(`array${i}`))[3], JSON.parse(localStorage.getItem(`array${i}`))[4], JSON.parse(localStorage.getItem(`array${i}`))[5], JSON.parse(localStorage.getItem(`array${i}`))[6], JSON.parse(localStorage.getItem(`array${i}`))[7]);  
        renderCheckedStorage(i);
    }
}

function renderCheckedStorage(i) {
    if (JSON.parse(localStorage.getItem(`array${i}`))[8] != null) {
        const todoContainer = document.querySelectorAll('.todo-container')[i-1];
        const todoCheckbox = todoContainer.querySelector('.top input');
        const project = JSON.parse(localStorage.getItem(`array${i}`))[6];
        todoCheckbox.checked = true;
        todoContainer.classList.add('completed-todo');
        todoContainer.classList.remove(project);
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
                return a[a.length-1] - b[b.length-1];
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

export { reOrderStorage, populateStorage, renderStorageOnPage, removeStorageItem, removeProjectStorageItem, useLocalStorageInputs }