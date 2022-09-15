import './style.css';

import {makeToDoBlock} from './toDoBlock'
import {createForm} from './toDoForm'
import {bindProjectButton, bindProjectTitleButtons} from './projects'

// makeToDoBlock();

// createForm();

(function displayToDoForm() {
    const addToDoButton = document.querySelector('.add-todo');
    addToDoButton.addEventListener('click', createForm);
})();

bindProjectButton();
bindProjectTitleButtons();