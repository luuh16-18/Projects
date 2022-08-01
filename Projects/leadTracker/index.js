let myLeads = ["google.com", "freeme.com", "leads.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementsById("input-btn")
const ulEl = document.getElementById("ul-el")



inputBtn.window.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    console.log(myLeads)
})
 
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {

    
    listItems += ` 
    "<li> 
        <a target='_blank' href='${myLeads[i]}>
            ${myLeads[i]}
        </a>
    </li>"
    `
}
ulEl.innerHTML = listItems

