window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const taskContainer = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('SUBMIT');

        const newTask = input.value

        // HTML Setup
        const newTaskContainer = document.createElement('div');
        newTaskContainer.classList.add('task');

        const newTaskContent = document.createElement('div');
        newTaskContent.classList.add('content');

        newTaskContainer.appendChild(newTaskContent);

        const newInput = document.createElement('input');
        newInput.classList.add('text');
        newInput.type = 'text';
        newInput.setAttribute = ('readonly', 'readonly');
        newInput.value = newTask;

        newTaskContent.appendChild(newInput);

        // Final 
        taskContainer.appendChild(newTaskContainer);

        // Buttons
        const taskActions = document.createElement('div');
        taskActions.classList.add('actions');

        const editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.innerText = 'EDIT';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerText = 'DELETE';

        taskActions.appendChild(editButton);
        taskActions.appendChild(deleteButton);

        newTaskContainer.appendChild(taskActions);

        // Javascript Setup
        input.value = '';

        editButton.addEventListener('click', (e) => {
            console.log('edit');

            if (editButton.innerHTML.toLowerCase() == 'edit') {
                editButton.innerText = 'Save';
                newInput.removeAttribute('readonly');
                newInput.focus();
            } else {
                editButton.innerText = 'Edit';
                newInput.setAttribute('readonly', 'readonly');
            }  
        })

        deleteButton.addEventListener('click', (e) => {
            console.log('delete')
            taskContainer.removeChild(newTaskContainer);
        })

    })
});