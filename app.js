/* alert("caca")
 */
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
let inputs = document.getElementsByClassName("input")
///select a row to insert text

let input = inicial
selectRow(0)
inicial.addEventListener("click", () => {selectRow(0); input = inicial})
afagit.addEventListener("click", () => {selectRow(1); input = afagit})
z.addEventListener("click", () => {selectRow(3); input = z})
visa.addEventListener("click", () => {selectRow(4); input = visa})
extret.addEventListener("click", () => {selectRow(6); input = extret})
compres.addEventListener("click", () => {selectRow(7); input = compres})
extres.addEventListener("click", () => {selectRow(8); input = extres})
real.addEventListener("click", () => {selectRow(10); input = real})

function selectRow(row) {
    for (let r = 0; r < rows.length; r++) {
        rows[r].classList.remove("selected");
       }
       rows[row].classList.add("selected")
}
function calc() {
    feina.textContent = (parseSum(inicial) + parseSum(afagit)).toFixed(2)
    subtotal.textContent = (parseSum(feina) + parseSum(z) - parseFloat(visa)).toFixed(2)
    final.textContent = (parseSum(subtotal) - parseSum(extret) - parseFloat(compres)- parseFloat(extres)).toFixed(2)
    descuadre.textContent = (parseSum(real) - parseSum(final)).toFixed(2)
}
function writeOnRow(n) {
   input.textContent +=n
}
function deleteLast() {
    input.textContent = input.textContent.slice(0, -1)
}
function parseSum(field) {
    const str = field.textContent
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
        resultText = document.createTextNode("= " + sum)
        console.log(resultText)
        field.appendChild(resultText)
    console.log(typeof sum)
    }
    return sum
}