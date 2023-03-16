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
function copyRow(actualrow) {
    console.log("copyRow")
}

function test() {
   inicial.value +=1
}



/* let string0 = ""
let string1 = "24+66.5+44.55" 
let string2 = "50.5"
console.log(parseSum(string0))
console.log(parseSum(string1))
console.log(parseSum(string2)) */