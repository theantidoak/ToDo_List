import './style.css'
import { bindAddTodoButton } from './toDoForm'
import { bindProjectButtons } from './projects'
import { bindHomeButtons } from './homeProjects'
import { renderStorageOnPage } from './localStorage';


renderStorageOnPage();
bindAddTodoButton();
bindProjectButtons();
bindHomeButtons();