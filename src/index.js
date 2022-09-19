import './style.css';
import { maketodoBlock } from './toDoBlock'
import { createForm } from './toDoForm'
import { bindProjectButtons , createNewProjectForm } from './projects'
import { bindHomeButtons } from './homeProjects'
import { renderStorageOnPage } from './localStorage';


// maketodoBlock();
// createForm();
// createNewProjectForm();
// localStorage.clear();

renderStorageOnPage();

(function displaytodoForm() {
    const addtodoButton = document.querySelector('.add-todo');
    addtodoButton.addEventListener('click', createForm);
})();

bindProjectButtons();
bindHomeButtons();