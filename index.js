//declaring global variables I am going to use in my functions below
let todoContainer = document.querySelector(".todo");
let completeTasks = 0;

//I am using a function to generate my todo's instead of hardcoding
//them in. I know this is probably not a future app but
//this funciton would be easier to modify if we were to add
//features to the site that allowed our users to add new todos
//Also, it was a time saver for me as I only had to put this together
//once and my for loop did all the copying and pasting.
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

//this function calculates the new progress as todo are marked completed
//tasks currently cannot be uncompleted but that logic could be easily added
function updateProgress() {
  completeTasks++;
  let percent = Math.round((completeTasks / 12) * 100);
  let progress = document.querySelector("progress");
  progress.value = percent;
  document.querySelector("h2").textContent = `${percent}% Done`;
}

//This event listener updates the todo button for completion and the progress bar
todoContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let taskNum = event.target.id;
    let button = document.getElementById(taskNum);
    button.classList.add("task-complete");
    button.textContent = "Done";
    updateProgress();
  }
});

//This function creates the nav menu animation and adds or removes the burger
//or ex depending on whether the menu is open or not.
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
