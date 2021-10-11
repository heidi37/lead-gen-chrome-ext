const submitButton = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];

submitButton.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    inputEl.value = '';
    renderLeads();
});

function renderLeads() {
    ulEl.innerHTML = '';
    let listItems = '';
    for (let lead of myLeads) {
        listItems += `
            <li>
                <a href="https://${lead}" target="_blank">
                    ${lead}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML += listItems;

}





