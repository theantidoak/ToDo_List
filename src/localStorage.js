import {makeToDoBlock} from './toDoBlock'
import {createForm} from './toDoForm'

function populateStorage(callName, item) {
    if (callName == 'finalList') {
        localStorage.setItem(callName, JSON.stringify(item));
    } else {
        localStorage.setItem(callName, item);
    }
}
function setStorage() {
    if (localStorage.length == 0) return;
    const keys = Object.keys(localStorage).sort();
    const laststorageItem = keys[localStorage.length-1];
    const amountOfItems = laststorageItem.replace(/\D/g, '');
    
    for (let i = 1; i <= amountOfItems; i++) {
        createForm(true, localStorage.getItem(`dataSet${i}`));
        makeToDoBlock(localStorage.getItem(`title${i}`), localStorage.getItem(`date${i}`), localStorage.getItem(`dateID${i}`), localStorage.getItem(`description${i}`), JSON.parse(localStorage.getItem(`finalList${i}`)), localStorage.getItem(`priority${i}`), localStorage.getItem(`project${i}`), localStorage.getItem(`dataSet${i}`));
    }
}

function renderStorage (callName, item) {
    if (!localStorage.getItem(callName)) {
        populateStorage(callName, item);
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
    --localStorage.counter;

    lowerDataNumbers(num)
}

function lowerDataNumbers(num) {
    
    Object.keys(localStorage).forEach(key => {
        const keyNum = key.replace(/\D/g, '');
        const valueNum = localStorage[key].replace(/\D/g, '');
        if (keyNum > num) {
            const newValue = localStorage[key].replace(valueNum, valueNum - 1);
            const newKey = key.replace(keyNum, keyNum-1);
            localStorage.removeItem(key);
            if (Number.isInteger(localStorage[key].charAt(localStorage[key].length-1))) {
                localStorage.setItem(newKey, newValue);
            } else {
                localStorage.setItem(newKey, localStorage[key]);
            }
            
        }
        
      });
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

function storageFunction() {
    
}

// function populateStorage() {
//     localStorage.setItem('content', JSON.stringify(document.querySelector('.content')));
    
//     renderStorage();
// }

// function renderStorage() {
//     document.body.appendChild(localStorage.getItem('content'));
// }


// export {storageFunction, populateStorage}

export {populateStorage, renderStorage, setStorage, removeStorageItem}