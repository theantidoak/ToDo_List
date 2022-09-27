import './style.css';
import bindHomeButtons from './homeProjects';
import { bindAddTodoButton } from './toDoForm';
import { bindProjectButtons } from './projects';
import { renderStorageOnPage } from './localStorage';

renderStorageOnPage();
bindAddTodoButton();
bindProjectButtons();
bindHomeButtons();
