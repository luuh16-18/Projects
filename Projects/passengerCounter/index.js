let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let clearEl = document.getElementById("savel-el")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    console.log(count)
}

function clear() {
    let clearStr = ""
    clearEl.textContent += "Previous Enteries: "
} 



