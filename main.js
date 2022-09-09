// This tab (JavaScript) allows us to establish the elements. 
window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

// Example of coding concept relational operators 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const task = input.value;

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content'); 

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    const task_edit_el = document.createElement('button');
    task_actions_el.classList.add('edit');
    task_edit_el.innerHTML = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete')
    task_delete_el.innerHTML = 'Delete';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);
    
    list_el.appendChild(task_el);

    input.value = '';

// Example of coding concept control statements (if statements) and example of array functions

    task_edit_el.addEventListener('click', () => {
        if (taks_edit_el.innerText.toLowerCase() == "edit") {
            task_input_el.innerText("save");
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
        } else {
            task_edit_el.innerText = "Edit";
            task_input_el.setAttribute("readonly", "readonly");
        }
        });

        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_el);

        }); 
    })
}) 