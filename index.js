let addBtn = document.querySelector("#addTodo")
let todoList = document.querySelector("#list")
let newTodoText = document.querySelector("#todoText")
let ullength = document.getElementsByTagName("li");

for (let i = 0; i < ullength.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check;
}


addBtn.addEventListener('click', elemanEkle)


function check() {
    this.classList.toggle("checked");
}

function removeButton() {
    this.parentElement.remove();
}

function elemanEkle() {

    if (newTodoText.value == "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");

        let newTodo = document.createElement('li')
        todoList.appendChild(newTodo);
        newTodo.innerHTML = newTodoText.value;
        newTodoText.value = "";

        newTodo.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        newTodo.append(closeButton);
        todoList.append(newTodo);
        inputElement.value = ("");


    }
}





















