const toDoListForm = document.querySelector('#toDoList-form');

const handleToDoListForm = (event) => {
    console.log(event);
    event.preventDefault();
    const listItem = document.createElement("li");
    listItem.textContent = event.target.text.value;

    const toDoList = document.querySelector("#list");

    toDoList.appendChild(listItem);
}

toDoListForm.addEventListener('submit', handleToDoListForm);
