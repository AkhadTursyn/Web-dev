let newtask = document.getElementById("newtask");
let addtask = document.getElementById("addtask");
let tasks = document.getElementById("tasks");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
// addtask.addEventListener("click", (e) => {
    let li = document.createElement("li");
    let label = document.createElement("label");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let remove = document.createElement("img");
    remove.src = "shutterstock.com/image-illustration/remove-icon-website-button-on-white-528912226";
    remove.alt = "Remove";
    label.appendChild(checkbox);
    label.append(newtask.value);
    li.appendChild(label);
    li.appendChild(remove);
    remove.addEventListener("click", (e) => {
        tasks.removeChild(li);
    })
    checkbox.addEventListener("click", (e) => {
        li.classList.toggle("done");
    })
    tasks.appendChild(li);
    newtask.value = "";
})