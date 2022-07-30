let myLeads = ["freeme.com"]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementsById("input-btn")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i <myLeads.length; i++) {
    ulEl.textContent += "<li>" + myLeads + "</li>"

}