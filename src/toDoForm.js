function createForm() {
    const main = document.querySelector('main');
    const toDoForm = document.createElement('div');
    toDoForm.classList.add('todo-form');
    const newTask = document.createElement('h1');
    const exit = document.createElement('span');
    const newTaskContent = document.createTextNode('New Task');
    const exitContent = document.createTextNode('X');

    exit.appendChild(exitContent);
    newTask.appendChild(newTaskContent);
    newTask.appendChild(exit);
    toDoForm.appendChild(newTask);


    const form = document.createElement('form');
    
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-div');
    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', 'task');
    const taskInput = document.createElement('input');
    taskInput.setAttribute('type', 'text');
    taskInput.id = 'task';

    taskLabel.appendChild(taskInput);
    taskDiv.appendChild(taskLabel);
    form.appendChild(taskDiv);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date-div');
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'time-label');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'datetime-local');
    dateInput.id = 'time-label';

    dateLabel.appendChild(dateInput);
    dateDiv.appendChild(dateLabel);
    form.appendChild(dateDiv);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'task-info');
    descriptionLabel.id = 'task-info-label';
    const textArea = document.createElement('textarea');
    textArea.setAttribute('type', 'text');
    textArea.id = 'task-info';

    descriptionLabel.appendChild(textArea);
    form.appendChild(descriptionLabel);

    const checkListInputs = document.createElement('div');
    checkListInputs.classList.add('checklist-inputs');
    
    const firstChecklist = document.createElement('label');
    firstChecklist.setAttribute('for', 'firstchecklist');
    const firstChecklistInput = document.createElement('input');
    firstChecklistInput.setAttribute('type', 'text');
    firstChecklistInput.classList.add('check-list');
    firstChecklistInput.id = 'firstchecklist';

    firstChecklist.appendChild(firstChecklistInput);
    checkListInputs.appendChild(firstChecklist);

    const secondChecklist = document.createElement('label');
    secondChecklist.setAttribute('for', 'secondchecklist');
    const secondChecklistInput = document.createElement('input');
    secondChecklistInput.setAttribute('type', 'text');
    secondChecklistInput.classList.add('check-list');
    secondChecklistInput.id = 'secondchecklist';

    secondChecklist.appendChild(secondChecklistInput);
    checkListInputs.appendChild(secondChecklist);

    const thirdChecklist = document.createElement('label');
    thirdChecklist.setAttribute('for', 'thirdchecklist');
    const thirdChecklistInput = document.createElement('input');
    thirdChecklistInput.setAttribute('type', 'text');
    thirdChecklistInput.classList.add('check-list');
    thirdChecklistInput.id = 'thirdchecklist';

    thirdChecklist.appendChild(thirdChecklistInput);
    checkListInputs.appendChild(thirdChecklist);

    const fourthChecklist = document.createElement('label');
    fourthChecklist.setAttribute('for', 'fourthchecklist');
    const fourthChecklistInput = document.createElement('input');
    fourthChecklistInput.setAttribute('type', 'text');
    fourthChecklistInput.classList.add('check-list');
    fourthChecklistInput.id = 'fourthchecklist';

    fourthChecklist.appendChild(fourthChecklistInput);
    checkListInputs.appendChild(fourthChecklist);

    const fifthChecklist = document.createElement('label');
    fifthChecklist.setAttribute('for', 'fifthchecklist');
    const fifthChecklistInput = document.createElement('input');
    fifthChecklistInput.setAttribute('type', 'text');
    fifthChecklistInput.classList.add('check-list');
    fifthChecklistInput.id = 'fifthchecklist';

    fifthChecklist.appendChild(fifthChecklistInput);
    checkListInputs.appendChild(fifthChecklist);

    form.appendChild(checkListInputs);

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('priority-div');
    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute('for', 'priority-label');
    const prioritySelect = document.createElement('select');
    const high = document.createElement('option');
    high.value = '1';
    const highContent = document.createTextNode('High');
    const medium = document.createElement('option');
    medium.value = '2';
    const mediumContent = document.createTextNode('Medium');
    const low = document.createElement('option');
    low.value = '3';
    const lowContent = document.createTextNode('Low');

    high.appendChild(highContent);
    medium.appendChild(mediumContent);
    low.appendChild(lowContent);
    prioritySelect.appendChild(high);
    prioritySelect.appendChild(medium);
    prioritySelect.appendChild(low);
    priorityLabel.appendChild(prioritySelect);
    priorityDiv.appendChild(priorityLabel);
    form.appendChild(priorityDiv);

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project-div');
    const projectLabel = document.createElement('label');
    projectLabel.setAttribute('for', 'project-label');
    const projectSelect = document.createElement('select');
    const defaultValue = document.createElement('option');
    defaultValue.value = 'default';
    const defaultContent = document.createTextNode('Default');

    defaultValue.appendChild(defaultContent);
    projectSelect.appendChild(defaultValue);
    projectLabel.appendChild(projectSelect);
    projectDiv.appendChild(projectLabel);
    form.appendChild(projectDiv);

    const addTaskButton = document.createElement('button');
    addTaskButton.setAttribute('type', 'button');
    addTaskButton.classList.add('addTask-button');
    const taskButtonContent = document.createTextNode('Add Task');

    addTaskButton.appendChild(taskButtonContent);
    form.appendChild(addTaskButton);

    toDoForm.appendChild(form);
    main.appendChild(toDoForm);
}

export {createForm}