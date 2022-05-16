let todoContainer = document.querySelector(".todo");
let completeTasks = 0;

function makeTodo(num) {
  const todoDiv = document.createElement("div");
  todoDiv.className = "single-todo";
  const html = `
  <div class="task" id="task_${num}" >Todo Task ${num}</div>
  <button type="button" id="${num}">Mark As Done</button>
  `;
  todoDiv.innerHTML = html;
  return todoDiv;
}

for (let i = 1; i <= 12; i++) {
  todoContainer.append(makeTodo(i));
}

function updateProgress() {
  completeTasks++;
  let percent = Math.round((completeTasks / 12) * 100);
  let progress = document.querySelector("progress");
  progress.value = percent;
  document.querySelector("h2").textContent = `${percent}% Done`;
}

todoContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let taskNum = event.target.id;
    let button = document.getElementById(taskNum);
    button.classList.add("task-complete");
    button.textContent = "Done";
    updateProgress();
  }
});

let navSlide = () => {
  let burger = document.querySelector(".burger");
  let nav = document.querySelector(".nav");
  let ex = document.querySelector(".ex");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("burger-active");
    ex.classList.toggle("ex-active");
  });

  ex.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("burger-active");
    ex.classList.toggle("ex-active");
  });
};

navSlide();
