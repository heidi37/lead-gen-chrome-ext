const submitButton = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

submitButton.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = '';
    updateList();
});

function updateList() {
    ulEl.innerHTML = '';
    for (let lead of myLeads) {
        ulEl.innerHTML += `<li>${lead}</li>`
        // const li = document.createElement('li');
        // li.textContent = lead;
        // ulEl.append(li);
    }
}





