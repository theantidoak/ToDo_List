import {makeToDoBlock} from './toDoBlock'
import {createForm} from './toDoForm'
import {format} from 'date-fns'
import { addProjectButton } from './projects'

function setStorage() {
    if (localStorage.length == 0) return;
    const keys = Object.keys(localStorage).sort();
    const laststorageItem = keys[localStorage.length-1];
    const amountOfItems = laststorageItem.replace(/\D/g, '');
    findProjectStorageAndRender();
    if (!localStorage.getItem('dataSet1')) return;
    for (let i = 1; i <= amountOfItems; i++) {
        const dateTime = localStorage.getItem(`date${i}`);
        let renderedTime;
        if (dateTime != '') {
            renderedTime = format(new Date(dateTime), 'EE, dd/MM/yyyy HH:mm');
        } else {
            renderedTime = dateTime;
        }
        createForm(true, localStorage.getItem(`dataSet${i}`));
        makeToDoBlock(localStorage.getItem(`title${i}`), renderedTime, localStorage.getItem(`dateID${i}`), localStorage.getItem(`description${i}`), JSON.parse(localStorage.getItem(`finalList${i}`)), localStorage.getItem(`priority${i}`), localStorage.getItem(`project${i}`), localStorage.getItem(`dataSet${i}`));
    }
    
}

function renderStorage (callName, item) {
    if (callName == 'finalList') {
        localStorage.setItem(callName, JSON.stringify(item));
    } else {
        localStorage.setItem(callName, item);
    }
}

function removeStorageItem(num) {
    localStorage.removeItem(`title${num}`);
    localStorage.removeItem(`date${num}`);
    localStorage.removeItem(`dateID${num}`);
    localStorage.removeItem(`dataSet${num}`);
    localStorage.removeItem(`description${num}`);
    localStorage.removeItem(`finalList${num}`);
    localStorage.removeItem(`priority${num}`);
    localStorage.removeItem(`project${num}`);

    lowerDataNumbers(num);
}

function removeProjectStorageItem(num) {
    localStorage.removeItem(`${num}project`);
    lowerProjectDataNumbers(num);
}

function lowerProjectDataNumbers(num) {

    Object.keys(localStorage).sort().forEach(key => {
        const keyNum = key.replace(/\D/g, '');
        if (!Number.isInteger(+keyNum)) return;
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
            const numbersValue = value.split('')[value.split('').length-1];
            const newValue = value.replace(/\D/g, '');
            localStorage.removeItem(key);
            
            if (!Number.isInteger(+numbersValue) || Number.isInteger(+value[0])) {
                localStorage.setItem(newKey, value);
            } else {
                const finalValue = value.replace(newValue, newValue-1);
                localStorage.setItem(newKey, finalValue);
            } 
        }
      });
}

function findProjectStorageAndRender() {
    const projects = Object.keys(localStorage).filter(key => Number.isInteger(+key[0]));
    projects.sort().forEach(project => addProjectButton(localStorage.getItem(project)));  

}


// function storageAvailable(type) {
//     let storage;
//     try {
//         storage = window[type];
//         const x = '__storage_test__';
//         storage.setItem(x, x);
//         storage.removeItem(x);
//         return true;
//     }
//     catch (e) {
//         return e instanceof DOMException && (
//             // everything except Firefox
//             e.code === 22 ||
//             // Firefox
//             e.code === 1014 ||
//             // test name field too, because code might not be present
//             // everything except Firefox
//             e.name === 'QuotaExceededError' ||
//             // Firefox
//             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
//             // acknowledge QuotaExceededError only if there's something already stored
//             (storage && storage.length !== 0);
//     }
// }

export {renderStorage, setStorage, removeStorageItem, removeProjectStorageItem}