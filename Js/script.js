
const btn = document.querySelector(".btn");
const body = document.querySelector("body");

// ---------------------addevent listerners------------------
btn.addEventListener("click", function () {

    body.classList.toggle("on");
    toggleText();

})

//-----------using function----------------
// btn.onclick = function(){

//     body.classList.toggle("on");
// }

function addText() {
    const textE1 = document.createElement("h1");
    textE1.classList.toggle("quote");
    textE1.textContent = "DON'T STOP WHEN IT HURTS STOP WHEN YOU ARE DONE ";
    body.appendChild(textE1);
}

function toggleText() {

    const textQuote = document.querySelector(".quote");

    if (textQuote) {
        textQuote.remove()
    }
    else {
        addText()
    }
}