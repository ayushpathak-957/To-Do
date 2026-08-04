let taskInput = document.querySelector("#todo-input");

let input = document.querySelector("#todo-form");

let list = document.querySelector("#todo-list");

function taskCreate(task){
    return `<span class="checkbox material-symbols-outlined">radio_button_unchecked</span><p>` +task+ `</p><span class="material-symbols-outlined delete">delete</span>`
}

input.addEventListener("submit",function (event) {
    event.preventDefault()
    
    let task = taskInput.value;
    console.log(task); 
    
    let newTask = document.createElement("li");
    newTask.innerHTML = taskCreate(task);
    list.appendChild(newTask);

    taskInput.value = "";
    taskInput.focus();
});

list.addEventListener('click',function(e){
    // Did we click on a checkbox?
    if (e.target.classList.contains("checkbox")) {
        const checkbox = e.target;
        
        // Find the task (li) that contains this checkbox
        const task = checkbox.closest("li");
        
        // Find only this task's text
        const taskText = task.querySelector("p");
        
        // Toggle completed class
        taskText.classList.toggle("completed");
        
        // Change the icon
        if (taskText.classList.contains("completed")) {
            checkbox.textContent = "check_circle";
        } else {
            checkbox.textContent = "radio_button_unchecked";
        }
    }
    
    if(e.target.classList.contains("delete")){
        let deleteTask = e.target
        const task = deleteTask.closest("li");
        task.remove();
        
    }
    return;
})





// const button = document.getElementById("add-button");
// const input = document.getElementById("todo-input");

// button.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent form submission

//     const task = input.value;
//     console.log(task);
// });