import './style.css';
import { makeToDoBlock } from './toDoBlock'
import { createForm } from './toDoForm'
import { bindProjectButtons , createNewProjectForm } from './projects'
import { bindHomeButtons } from './homeProjects'
import { setStorage } from './localStorage';


// makeToDoBlock();
// createForm();
// createNewProjectForm();
// localStorage.clear();

setStorage();

(function displayToDoForm() {
    const addToDoButton = document.querySelector('.add-todo');
    addToDoButton.addEventListener('click', createForm);
})();

bindProjectButtons();
bindHomeButtons();