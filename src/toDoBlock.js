function makeToDoBlock() {
    const main = document.querySelector('main');
    const toDoContainer = document.createElement('div');
    toDoContainer.classList.add('todo-container');
    const topDiv = document.createElement('div');
    topDiv.classList.add('top');
    const priority = document.createElement('p');
    priority.classList.add('priority');
    const project = document.createElement('p');
    project.classList.add('project');
    const task = document.createElement('h4');
    const date = document.createElement('p');
    date.classList.add('date');
    const editables = document.createElement('div');
    editables.classList.add('editables');
    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    const descriptionButton = document.createElement('button');
    descriptionButton.classList.add('description');
    const checklistButton = document.createElement('button');
    checklistButton.classList.add('checklist');
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove');


    //Example 
    const priorityContent = document.createTextNode('1');
    const projectContent = document.createTextNode('Project 1');
    const taskContent = document.createTextNode('Do this example');
    const dateContent = document.createTextNode('12:30 14/09/22');
    priority.appendChild(priorityContent);
    project.appendChild(projectContent);
    task.appendChild(taskContent);
    date.appendChild(dateContent);



    topDiv.appendChild(priority);
    topDiv.appendChild(project);

    editables.appendChild(editButton);
    editables.appendChild(descriptionButton);
    editables.appendChild(checklistButton);
    editables.appendChild(removeButton);

    toDoContainer.appendChild(topDiv);
    toDoContainer.appendChild(task);
    toDoContainer.appendChild(date);
    toDoContainer.appendChild(editables);

    main.appendChild(toDoContainer);

}

export { makeToDoBlock }