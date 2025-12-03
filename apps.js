const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "X": (a, b) => a * b,
    "/": (a, b) => b === 0 ? "Error (/0)" : a / b
}

let display = document.querySelector(".display")

let a = null
let b = null
let sign = null
let result = null

let firstInput = true
let secondInput = false

const refreshBtn = document.querySelector(".refreshBtn")
refreshBtn.addEventListener("click", () => {
    firstInput = true; secondInput = false
    display.innerText = 0; a = null; b = null; sign = null
})

const numberButtons = document.querySelectorAll(".keys .numberBtn")
numberButtons.forEach((btn) => btn.addEventListener("click", () => {
    if (firstInput && !a) { a = btn.textContent; display.innerText = a }
    else if (firstInput && a) { a = a + btn.textContent; display.innerText = a }
    else if (secondInput && !b) { b = btn.textContent; display.innerText = b }
    else if (secondInput && b) { b = b + btn.textContent; display.innerText = b }

}))

const signButtons = document.querySelectorAll(".keys .signBtn")
signButtons.forEach((btn) => btn.addEventListener("click", () => {
    if (a && !b) { sign = btn.id; firstInput = false; secondInput = true }


}))

const operateBtn = document.querySelector(".operateBtn")
operateBtn.addEventListener("click", () => {
    if (a && b && sign) {
        a = Number(a); b = Number(b)
        result = operations[sign](a, b)
        if (typeof result === "number") { result = Math.round(result * 10000) / 10000 }
        display.innerText = result
        a = result; b = null; sign = null

    }
})

const eraseBtn = document.querySelector(".eraseBtn")
eraseBtn.addEventListener("click", () => {
    if (!b) {
        a = String(a)
        if (a.length === 1 || a === 0) { a = 0; display.innerText = a }
        else { a = a.slice(0, -1); display.innerText = a }
    }
    else {
        b = String(b)
        if (b.length === 1 || b === 0) { b = 0; display.innerText = b }
        else { b = b.slice(0, -1); display.innerText = b }
    }
})