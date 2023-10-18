const form = document.querySelector("form");
const input = document.querySelector("form input");
const tasksContainer = document.querySelector(".tasks");

let todos = [];

// event listener submit a form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = {
    // property
    text: input.value,
    checked: false,
    id: new Date().getTime(),
  };

  todos.push(todo);
  // Reset the form
  e.target.reset();

  displayTodos();
});

const displayTodos = () => {
  tasksContainer.innerHTML = "";

  //   looping todos
  todos.forEach((todo) => {
    const taskEl = document.createElement("div");
    const inputEl = document.createElement("input");
    const textEl = document.createElement("p");
    const delButton = document.createElement("button");

    taskEl.classList.add("task");
    inputEl.classList.add("checkbox");
    delButton.classList.add("delete");
    textEl.classList.add("text");

    inputEl.type = "checkbox";
    textEl.innerHTML = todo.text;
    delButton.innerHTML = "Delete";

    // delete task
    delButton.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      displayTodos();
    });

    // checkbox task
    inputEl.addEventListener("change", (e) => {
      todo.checked = e.target.checked;
      console.log(e.target);

      if (todo.checked) {
        taskEl.classList.add("done");
      } else {
        taskEl.classList.remove("done");
      }
    });

    taskEl.appendChild(inputEl);
    taskEl.appendChild(textEl);
    taskEl.appendChild(delButton);
    tasksContainer.appendChild(taskEl);
  });
};
