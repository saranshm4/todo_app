/* title = prompt("Enter your Todo Title:")
description = prompt("Enter your Todo description:")
if(title){
    localStorage.setItem(title, description) 
}

console.log(localStorage.getItem(title)) */

let submit_btn = document.getElementById('submit_btn')

const checkField = () => {
    if (document.getElementById('title').value == "" && document.getElementById('description').value == "") {
        return true
    }
    else {
        return false
    }
}

setInterval(function () {
    //console.log(checkField())
    if (checkField()) {
        submit_btn.disabled = true
    }
    else {
        submit_btn.disabled = false
    }
}, 10)

const getTodo = () => {
    title = document.getElementById('title').value
    description = document.getElementById('description').value
    high_priority = document.getElementById("high_priority").checked
    localStorage.setItem("title", title)
    localStorage.setItem("description", description)
    localStorage.setItem("high_priority", high_priority)
    let task_list = document.createElement("div")
    local_title = localStorage.getItem("title")
    local_description = localStorage.getItem("description")
    local_high_priority = localStorage.getItem("high_priority")
    const Priority = () => {
        if (local_high_priority == "true") {
            task_list.setAttribute("style","background-color: rgb(234, 232, 130);")
            return "High Priority"
        }
        else {
            return "Not High Priority"
        }
    }

    task_list.innerHTML = `<h5 class="mb-1 fs-3">${local_title}</h5><p class="mb-1 fs-4">${local_description}</p><small>${Priority()}</small>`
    const attrs = {
        "id": "task",
        "class": "list-group-item list-group-item-action row ",
        "aria-current": "true"
    }
    for (var key in attrs) {
        task_list.setAttribute(key, attrs[key]);
    }
    document.getElementById('task_group').appendChild(task_list)
    document.getElementById('title').value = ""
    document.getElementById('description').value = ""
}


submit_btn.addEventListener("click", getTodo)

const clear_todo = () => {
    localStorage.clear()
}

let clear_btn = document.getElementById('clear_btn')
clear_btn.addEventListener("click", clear_todo)




/* let task_delete = document.getElementsByClassName('task_delete')

deleteTodo =()=>{
    task_delete.parentElement.innerHTML= ""
}

 */



/* 
setInterval(() => {

    return document.querySelectorAll(".btn-danger")
})


for (item of deleteBtns) {
    item.addEventListener('click', (e) => {
        //console.log(e.target.parentElement)
        e.target.parentElement.remove()
    })
} */


