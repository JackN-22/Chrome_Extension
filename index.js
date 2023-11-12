const textEl = document.getElementById("text-el")
const resultsEl = document.getElementById("results-el")
const saveEl = document.getElementById("save-el")
const resetEl = document.getElementById("reset")
let resultsString = []

let leadsFromLocalStorage = JSON.parse( localStorage.getItem("resultsString")) 

if(leadsFromLocalStorage){
    resultsString = leadsFromLocalStorage
    renderResults()
}

saveEl.addEventListener("click", function(){
    resultsString.push(textEl.value)
    textEl.value = ""
    localStorage.setItem("resultsString", JSON.stringify(resultsString))
    renderResults()
})

function renderResults(){
    let listItems = ""
    for (let r = 0; r < resultsString.length; r++) {
        listItems += `
        <li>
            <a target='_blank' style='color: white' href='${resultsString[r]}'>${resultsString[r]}
            </a>
        </li>
        `

    }
    resultsEl.innerHTML = listItems
}