
const toDoListForm = document.querySelector('#toDoList-form');

const handleToDoListForm = (event) => {
    console.log(event);
    event.preventDefault();
    const listItem = document.createElement("li");
    listItem.textContent = event.target.text.value;
    
    const toDoList = document.querySelector("#list");

    toDoList.appendChild(listItem);

    //adding delete
    const button = document.createElement('button');
    button.innerText = 'Delete';
    button.addEventListener('click',() => deleteFunction(listItem));

    listItem.appendChild(button);
    

    
}

toDoListForm.addEventListener('submit', handleToDoListForm);



// //deleting something 

const deleteFunction = (itemToDelete) => {
    console.log("hello from delete");
    const toDoList = document.querySelector("#list");
    toDoList.removeChild(itemToDelete);
}




