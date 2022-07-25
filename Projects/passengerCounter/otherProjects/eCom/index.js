let errorParagraph = document.getElementById("error")
console.log(errorParagraph)

function purchase() {
    console.log(errorParagraph)
    errorParagraph.textContent = "Something Went Wrong With The Purchase! PLEASE TRY AGAIN!"
}