import {blurBackground, unBlurBackground} from './toDoForm'

function createNewProject() {
    const main = document.querySelector('main');
    const projectFormDiv = document.createElement('div');
    projectFormDiv.classList.add('project-form');
    const exitButton = document.createElement('button');
    exitButton.classList.add('project-exit');
    const exitButtonContent = document.createTextNode('X');
    const projectForm = document.createElement('form');
    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for', 'projects-title');
    const projectInput = document.createElement('input');
    projectInput.setAttribute('type', 'text');
    projectInput.id = 'project-title';
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('project-button-div');
    const button = document.createElement('button');
    button.classList.add('addProject');
    button.setAttribute('type', 'button');
    const buttonContent = document.createTextNode('Add');

    exitButton.appendChild(exitButtonContent);
    
    button.appendChild(buttonContent);
    buttonDiv.appendChild(button);
    
    projectLabel.appendChild(projectInput);
    projectForm.appendChild(projectLabel);
    projectForm.appendChild(buttonDiv);
    projectFormDiv.appendChild(exitButton);
    projectFormDiv.appendChild(projectForm);
    main.appendChild(projectFormDiv);

    button.addEventListener('click', applyProject);
    bindExitButton();
    blurBackground(projectFormDiv);

}

function bindProjectButton() {
    const addProjectH3 = document.querySelector('.projects-title');
    addProjectH3.addEventListener('click', createNewProject);
}

function addProject(newProject) {
    const projects = document.querySelector('.projects');
    const newProjectDiv = document.createElement('div');
    newProjectDiv.classList.add('titled-project-div');
    const newProjectButton = document.createElement('button');
    const newProjectButtonContent = document.createTextNode(newProject);
    newProjectButton.classList.add('project-name');
    newProjectButton.classList.add(makeValueIntoID(newProject));
    const deleteProjectButton = document.createElement('span');
    deleteProjectButton.classList.add('delete-span');
    const deleteProjectButtonContent = document.createTextNode('-');
    deleteProjectButton.appendChild(deleteProjectButtonContent);
    newProjectButton.appendChild(newProjectButtonContent);
    newProjectDiv.appendChild(newProjectButton);
    newProjectDiv.appendChild(deleteProjectButton);
    projects.appendChild(newProjectDiv);
    bindProjectTitleButtons();
    deleteProjectButton.addEventListener('click', removeProject);
}

function makeValueIntoID(value) {
    return value.toLowerCase().split(' ').join('');
}

function applyProject() {
    const projectForm = document.querySelector('#project-title');
    const output = projectForm.value || 'No name';
    addProject(output);
    closeProjectForm();
    unBlurBackground();
}

function renderProjectToDos() {
    const projectTitle = this.getAttribute('class').split(' ')[1];

    const todoContainers = document.querySelectorAll('.todo-container');
    todoContainers.forEach(todo => {
        if (!todo.classList.contains(projectTitle)) {
            todo.style.display = 'none';
        } else {
            todo.style.display = 'block';
        }
    })
}

function bindProjectTitleButtons() {
    const buttons = document.querySelectorAll('.projects .project-name');
    buttons.forEach(button => button.addEventListener('click', renderProjectToDos));
}

function bindExitButton() {
    const exitButton = document.querySelector('.project-exit');
    exitButton.addEventListener('click', closeProjectForm);
}

function closeProjectForm() {
    const projectForm = document.querySelector('.project-form')
    projectForm.parentElement.removeChild(projectForm);
    unBlurBackground();
}

function removeProject() {
    this.parentElement.parentElement.removeChild(this.parentElement);
}

export {bindProjectButton, bindProjectTitleButtons, createNewProject}