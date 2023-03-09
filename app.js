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
function calc() {
    let inputIds = [1, 2, 4, 5, 7, 8, 9, 11]
    for (let i = 0; i < inputIds.length; i++) {
        const element = inputIds[i];
        if (element.value == "") {
            element.value = 0 
        }

    }
    console.log(parseFloat(inicial.value) + parseFloat(afagit.value))
    feina.textContent = parseFloat(inicial.value) + parseFloat(afagit.value)
    subtotal.textContent = parseFloat(feina.textContent) + parseFloat(z.value) - parseFloat(visa.value)
    final.textContent = parseFloat(subtotal.textContent) - parseFloat(extret.value) - parseFloat(compres.value)- parseFloat(extres.value)
    descuadre.textContent = parseFloat(real.value) - parseFloat(final.textContent) 
}
let string0 = ""
let string1 = "24+66,5" 
let string2 = "50,5"

function parseSum(string) {
    let sum = parseFloat(0)
    if (string == "") {
        sum = 0 
        return parseFloat(sum)
    }
    let numArr = string.split("+")
    console.log(numArr) 
    for (let n = 0; n < numArr.length; n++) {
        console.log(numArr[n])
        sum += parseFloat(numArr[n]);
        console.log(sum) 

    }
    return sum    
}
console.log(parseSum(string0))
console.log(parseSum(string1))
console.log(parseSum(string2))