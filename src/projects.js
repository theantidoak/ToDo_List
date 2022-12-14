/* eslint-disable no-param-reassign */
/* eslint-disable import/no-cycle */
import { populateStorage, removeProjectStorageItem } from './localStorage';
import { countUp, blurBackground, unBlurBackground } from './toDoForm';

function makeProjectNameIntoID(projectTitle) {
  return projectTitle.toLowerCase().split(' ').join('');
}

function displayProjecttodos() {
  const projectTitle = this.getAttribute('class').split(' ')[1];
  const todoContainers = document.querySelectorAll('.todo-container');
  todoContainers.forEach((todo) => {
    todo.style.display = !todo.classList.contains(projectTitle)
      ? 'none'
      : 'flex';
  });
}

function findProjectIndex(projectButton) {
  const projects = document.querySelectorAll('.project-name');
  const projectHunt = [...projects].map((project) => project === projectButton);
  const projectIndex = projectHunt.indexOf(true);
  return projectIndex;
}

function removeProject() {
  const projectButtonDiv = this.parentElement;
  const projectButton = this.previousSibling;
  removeProjectStorageItem(findProjectIndex(projectButton));
  projectButtonDiv.parentElement.removeChild(projectButtonDiv);
}

function addProjectButton(newProjectTitle) {
  // Cache DOM
  const projects = document.querySelector('.projects');

  // Create Elements
  const newProjectDiv = document.createElement('div');
  const newProjectButton = document.createElement('button');
  const newProjectButtonContent = document.createTextNode(newProjectTitle);
  const deleteProjectButton = document.createElement('span');
  const deleteProjectButtonContent = document.createTextNode('-');
  const deleteProjectButtonContent2 = document.createTextNode('-');
  const deleteProjectButtonContent3 = document.createTextNode('-');

  // Set Attributes
  newProjectDiv.classList.add('titled-project-div');
  newProjectButton.classList.add('project-name');
  newProjectButton.classList.add(makeProjectNameIntoID(newProjectTitle));
  deleteProjectButton.classList.add('delete-span');

  // Render Elements
  deleteProjectButton.appendChild(deleteProjectButtonContent);
  deleteProjectButton.appendChild(deleteProjectButtonContent2);
  deleteProjectButton.appendChild(deleteProjectButtonContent3);
  newProjectButton.appendChild(newProjectButtonContent);
  newProjectDiv.appendChild(newProjectButton);
  newProjectDiv.appendChild(deleteProjectButton);
  projects.appendChild(newProjectDiv);

  // Bind Event Listeners
  newProjectButton.addEventListener('click', displayProjecttodos);
  deleteProjectButton.addEventListener('click', removeProject);
}

function closeProjectForm() {
  const projectForm = document.querySelector('.project-form');
  projectForm.parentElement.removeChild(projectForm);
  unBlurBackground();
}

function renderProjectToPage() {
  const projectForm = document.querySelector('#project-title');
  const projectTitleAmount = document.querySelector('.projects').children.length - 1;
  const projectTitle = projectForm.value || `No name${projectTitleAmount}`;
  addProjectButton(projectTitle);
  closeProjectForm();
  unBlurBackground();
  populateStorage(`${countUp()}project`, projectTitle);
}

function createNewProjectForm() {
  // Cache DOM
  const main = document.querySelector('main');

  // Create Elements
  const projectFormDiv = document.createElement('div');
  const exitButton = document.createElement('button');
  const exitButtonContent = document.createTextNode('X');
  const projectForm = document.createElement('form');
  const projectLabel = document.createElement('label');
  const projectInput = document.createElement('input');
  const projectButtonDiv = document.createElement('div');
  const projectButton = document.createElement('button');
  const projectButtonContent = document.createTextNode('Add');

  // Set Attributes
  projectFormDiv.classList.add('project-form');
  exitButton.classList.add('project-exit');
  projectLabel.setAttribute('for', 'projects-title');
  projectInput.setAttribute('type', 'text');
  projectInput.id = 'project-title';
  projectInput.setAttribute('autocomplete', 'off');
  projectButtonDiv.classList.add('project-button-div');
  projectButton.classList.add('addProject');
  projectButton.setAttribute('type', 'submit');

  // Render Elements
  exitButton.appendChild(exitButtonContent);
  projectButton.appendChild(projectButtonContent);
  projectButtonDiv.appendChild(projectButton);
  projectLabel.appendChild(projectInput);
  projectForm.appendChild(projectLabel);
  projectForm.appendChild(projectButtonDiv);
  projectFormDiv.appendChild(exitButton);
  projectFormDiv.appendChild(projectForm);
  main.appendChild(projectFormDiv);

  // Bind Event Listeners
  projectButton.addEventListener('click', renderProjectToPage);
  exitButton.addEventListener('click', closeProjectForm);

  blurBackground(projectFormDiv);
}

// Bind Functions
function bindProjectButtons() {
  // Cache DOM
  const projectFormButton = document.querySelector('.projects-title');
  const defaultProjectButton = document.querySelector('.default');

  // Bind Events
  projectFormButton.addEventListener('click', createNewProjectForm);
  defaultProjectButton.addEventListener('click', displayProjecttodos);
}

export { createNewProjectForm, addProjectButton, bindProjectButtons };
