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
    console.log(parseFloat(inicial.value) + parseFloat(afagit.value))
    feina.textContent = parseFloat(inicial.value) + parseFloat(afagit.value)
    subtotal.textContent = parseFloat(feina.textContent) + parseFloat(z.value) - parseFloat(visa.value)
    final.textContent = parseFloat(subtotal.textContent) - parseFloat(extret.value) - parseFloat(compres.value)- parseFloat(extres.value)
    descuadre.textContent = parseFloat(real.value) - parseFloat(final.textContent) 
    
}