var todoForm = document.getElementById("todo-form"), // We get access to the elements: full form
    addInput = document.getElementById("add-input"), // task entry field
    todoList = document.getElementById("todo-list"), // task list
    todoItems = document.querySelectorAll(".todo-item"); // task item

function main() { // ability to change the original item
    todoForm.addEventListener("submit", addTodoItem);
    todoItems.forEach(item => bindEvents(item));
}

main ();

function createTodoItem (title) { // create new item
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    var label = document.createElement("label");
    label.innerText = title;
    label.className = "title";

    var editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "textfield";

    var editButton = document.createElement("button");
    editButton.innerText = "Изменить";
    editButton.className = "edit";

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    deleteButton.className = "delete";

    var listItem = document.createElement("li");
    listItem.className = "todo-item";

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    bindEvents(listItem);
    console.log(listItem);
    return listItem;
}

function bindEvents(todoItem) { // we hang up events on the buttons created earlier
    var checkbox = todoItem.querySelector(".checkbox");
    var editButton = todoItem.querySelector("button.edit");
    var deleteButton = todoItem.querySelector("button.delete");

    checkbox.addEventListener("change", toggleTodoItem);
    editButton.addEventListener("click", editTodoItem);
    deleteButton.addEventListener("click", deleteTodoItem);
}
function addTodoItem(event) {
    event.preventDefault(); // cancel form submission

    if (addInput.value === "") { // check for filling the input field
        return alert ("Вы не ввели поставленную перед собой задачу");
    }

    var todoItem = createTodoItem(addInput.value);
    todoList.appendChild(todoItem);
    addInput.value = "";
}

function toggleTodoItem() { // mark the task
    var listItem = this.parentNode;
    listItem.classList.toggle("completed");
}

function editTodoItem() { // function to be able to change the entered field
    var listItem = this.parentNode;
    var title = listItem.querySelector(".title");
    var editInput = listItem.querySelector(".textfield");
    var isEditing = listItem.classList.contains("edditing");

    if(isEditing) {  // field change condition
        title.innerText = editInput.value;
        this.innerText = "Изменить";
    } else {
        editInput.value = title.innerText;
        this.innerText = "Сохранить";
    }

    listItem.classList.toggle("editing");
}

function deleteTodoItem() { // function to delete a task
    var listItem = this.parentNode;
    todoList.removeChild(listItem);
}



