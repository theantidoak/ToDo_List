import './style.css';

import {makeToDoBlock} from './toDoBlock'
import {createForm} from './toDoForm'
import {bindProjectButton, bindProjectTitleButtons, createNewProject} from './projects'
import {bindAllButton} from './homeProjects'

// makeToDoBlock();

// createForm();

// createNewProject();

(function displayToDoForm() {
    const addToDoButton = document.querySelector('.add-todo');
    addToDoButton.addEventListener('click', createForm);
})();

bindProjectButton();
bindProjectTitleButtons();
bindAllButton();