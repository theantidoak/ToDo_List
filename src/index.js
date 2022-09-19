import './style.css';
import { maketodoBlock } from './toDoBlock'
import { createForm } from './toDoForm'
import { bindProjectButtons , createNewProjectForm } from './projects'
import { bindHomeButtons } from './homeProjects'
import { setStorage } from './localStorage';


// maketodoBlock();
// createForm();
// createNewProjectForm();
// localStorage.clear();

setStorage();

(function displaytodoForm() {
    const addtodoButton = document.querySelector('.add-todo');
    addtodoButton.addEventListener('click', createForm);
})();

bindProjectButtons();
bindHomeButtons();