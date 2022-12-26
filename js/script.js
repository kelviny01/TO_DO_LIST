// função que add tarefa
function addTask() {
  // titulo da tarefa
  const taskTitle = document.querySelector("#task-title").value;

  if (taskTitle) {
    // clona template
    const template = document.querySelector(".template");

    const newTask = template.cloneNode(true);

    // add titulo
    newTask.querySelector(".task-title").textContent = taskTitle;

    // remover as classes desnecessárias
    newTask.classList.remove("template");
    newTask.classList.remove("hide");

    // add tarefa na lista
    const list = document.querySelector("#task-list");

    list.appendChild(newTask);

    // add o evento de remover
    const removeBtn = newTask
      .querySelector(".remove-btn")
      .addEventListener("click", function () {
        removeTask(this);
      });

    // função de remover tarefa
    function removeTask(task) {
      task.parentNode.remove(true);
    }

    // função de completar a tarefa
    function completeTask(task) {

        const taskComplete = task.parentNode

        taskComplete.classList.toggle("done")

    }

    // add evento de completar tarefa
    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
        completeTask(this)
    })

    // limpar texto
    document.querySelector("#task-title").value = "";
  }
}

// evendo de add tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});
