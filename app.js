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

/* for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    row.addEventListener("click", selectRow()) 
} */
/* function selectRow() {
    console.log("row selected") */



function calc() {
    feina.textContent = parseSum(inicial.value) + parseSum(afagit.value)
    subtotal.textContent = parseSum(feina.textContent) + parseSum(z.value) - parseFloat(visa.value)
    final.textContent = parseSum(subtotal.textContent) - parseSum(extret.value) - parseFloat(compres.value)- parseFloat(extres.value)
    descuadre.textContent = parseSum(real.value) - parseSum(final.textContent)


    /* console.log(parseFloat(inicial.value) + parseFloat(afagit.value))
    feina.textContent = parseFloat(inicial.value) + parseFloat(afagit.value)
    subtotal.textContent = parseFloat(feina.textContent) + parseFloat(z.value) - parseFloat(visa.value)
    final.textContent = parseFloat(subtotal.textContent) - parseFloat(extret.value) - parseFloat(compres.value)- parseFloat(extres.value)
    descuadre.textContent = parseFloat(real.value) - parseFloat(final.textContent)  */
}
function parseSum(string) {
    let sum = 0
    if (string == "") {
        sum = 0 
        return parseFloat(sum)
    }
    let numArr = string.split("+")
    console.log(numArr) 
    for (let n = 0; n < numArr.length; n++) {
        console.log(parseFloat(numArr[n]))
        sum += numArr[n];
        console.log(sum) 

    }
    return parseFloat(sum).toFixed(2)
}


function writeOnRow(n) {
   input.textContent +=n
}

function test() {
    input.textContent +=1
}

/* let string0 = ""
let string1 = "24+66.5+44.55" 
let string2 = "50.5"
console.log(parseSum(string0))
console.log(parseSum(string1))
console.log(parseSum(string2)) */