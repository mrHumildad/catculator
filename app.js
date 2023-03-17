//links to elements
let inicial = document.getElementById("1")
let afagit = document.getElementById("2")
let feina = document.getElementById("3")
let z = document.getElementById("4")
let visa = document.getElementById("5")
let subtotal = document.getElementById("6")
let extret = document.getElementById("7")
let compres = document.getElementById("8")
let extres = document.getElementById("9")
let final = document.getElementById("10")
let real = document.getElementById("11")
let descuadre = document.getElementById("12")
let rows = document.getElementsByClassName("row")
let inputRaws = document.getElementsByClassName("input")

///select a row to insert text
let selectedRow = 0
let input = inicial
inicial.addEventListener("click", () => {selectedRow = 0; input = inicial})
afagit.addEventListener("click", () => {selectedRow= 1; input = afagit})
z.addEventListener("click", () => {selectedRow= 1; input = z})
visa.addEventListener("click", () => {selectedRow= 1; input = visa})
extret.addEventListener("click", () => {selectedRow= 1; input = extret})
compres.addEventListener("click", () => {selectedRow= 1; input = compres})
extres.addEventListener("click", () => {selectedRow= 1; input = extres})
real.addEventListener("click", () => {selectedRow= 1; input = real})


function calc() {
    feina.textContent = (parseSum(inicial.textContent) + parseSum(afagit.textContent)).toFixed(2)
    subtotal.textContent = (parseSum(feina.textContent) + parseSum(z.textContent) - parseFloat(visa.textContent)).toFixed(2)
    final.textContent = (parseSum(subtotal.textContent) - parseSum(extret.textContent) - parseFloat(compres.textContent)- parseFloat(extres.textContent)).toFixed(2)
    descuadre.textContent = (parseSum(real.textContent) - parseSum(final.textContent)).toFixed(2)
}
function writeOnRow(n) {
   input.textContent +=n
}

function deleteLast() {
    console.log(input.textContent.typeOf)
    input.textContent = input.textContent.slice(0, -1)
}
function test() {
    input.textContent +=1
}

let string0 = ""
let string2 = "24+66.5+44.55" 
let string1 = "5+0.5"
function parseSum(str) {
    let sum = 0
    if (str == "" || str == undefined) {
        sum= 0
    }
    else if (str.indexOf("+") == -1) {
        sum = parseFloat(str)
    }
    else {
        let numArr = str.split("+")
        console.log(numArr) 
        for (let n = 0; n < numArr.length; n++) {
            const number = parseFloat(numArr[n]);
            sum += number
            
        }  
    }
    console.log(typeof sum)
    return sum
}