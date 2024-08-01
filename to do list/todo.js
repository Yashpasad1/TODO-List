const addBtn = document.querySelector(".add_btn")
// console.log(addBtn);
const addText = document.querySelector(".text")

const error = document.getElementById("error")

const taskContainer = document.querySelector(".task")
let count = document.querySelector(".count")
let taskCount = 0

const updateCount = (taskCount) => {
    count.innerText = taskCount;
}

const addTask = () => {
    const TaskName = addText.value.trim()
    error.style.display = "none"
    if (!TaskName) {
        setTimeout(() => {

            error.style.display = "block"
        }, 200);
        return
    }
    const task = `<div class="taskadd">
    <input type="checkbox" class="taskcheck">
    <span class="addText">${TaskName}</span>

    <button class="delete"><i class="fa-regular fa-trash-can"></i></button>
     

</div>`

    taskContainer.insertAdjacentHTML("beforeend", task)
    taskCount++
    updateCount(taskCount)
    addText.value = ""

    const deleteBtn = document.querySelectorAll(".delete")
    deleteBtn.forEach(button => {
        button.onclick = () => {
            button.parentNode.remove()
            taskCount -=1
            if ( taskCount < 0) {
                taskCount = 0
             }
            updateCount(taskCount)
        }


    })

    const checkitm =  document.querySelectorAll(".taskcheck")
    checkitm.forEach ((checkbox) => {
      checkbox.onchange = () => {
        checkbox.nextElementSibling.classList.toggle("complete")
        if (checkbox.checked ) {
            taskCount -= 1;   
        }else {
            taskCount += 1;
        }
        if ( taskCount < 0 ) {
            taskCount = 0
         }
         updateCount(taskCount)
      }
      
    })
    
    
}

addBtn.addEventListener("click", addTask)

