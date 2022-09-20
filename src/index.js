import './style.css'
import { displayTodoForm } from './toDoForm'
import { bindProjectButtons } from './projects'
import { bindHomeButtons } from './homeProjects'
import { renderStorageOnPage } from './localStorage';


renderStorageOnPage();
displayTodoForm()
bindProjectButtons();
bindHomeButtons();