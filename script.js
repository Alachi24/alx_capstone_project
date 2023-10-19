// using "getElementById" to gain access to html that has an element "id"
// using "const + value" to create a variable for long syntax
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Render the created element on the browser
function addTask() {
  if (inputBox.value === "") {
    alert("Something must be Written 😒!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// to activate the checked, unchecked and delete btn

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// add a localStorage to retain information
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Render it to the browser
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
