const addTaskFormEl = document.getElementById("add-task-form")
const tasksListEl = document.getElementById("tasks-list")

const tasks = []

addTaskFormEl.addEventListener("submit", e => {
    e.preventDefault()
    const newTask = new FormData(e.target).get("task").trim()
    e.target.reset()
    if (!newTask) return
    tasks.push(newTask)
    renderTasksList()
})

function removeTask(e) {
    e.target.parentElement.remove()
}

function markTaskAsCompleted(e) {
    const taskTextBtn = e.target
    const completedTask_class = "completed-task"
    
    if (taskTextBtn.classList.contains(completedTask_class)) {
        taskTextBtn.classList.remove(completedTask_class)
    }else {
        taskTextBtn.classList.add(completedTask_class)
    }
}

function renderTasksList() {
    tasksListEl.innerHTML = ""
    tasks.forEach(task => {
        const liEl = document.createElement("li")
        const taskTextBtnEl = document.createElement("button")
        const removeTaskBtnEl = document.createElement("button")
        
        taskTextBtnEl.classList.add("task-text-btn")
        taskTextBtnEl.ariaLabel = "Mark task as completed" 
        taskTextBtnEl.textContent = task
        taskTextBtnEl.addEventListener("click", markTaskAsCompleted)
        liEl.appendChild(taskTextBtnEl)

        removeTaskBtnEl.classList.add("remove-task-btn")
        removeTaskBtnEl.ariaLabel = "Remove task from the list"
        removeTaskBtnEl.addEventListener("click", removeTask)
        liEl.appendChild(removeTaskBtnEl)

        tasksListEl.appendChild(liEl)
    })
}