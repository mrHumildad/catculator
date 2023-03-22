//links to elements
let title = document.getElementById("title")
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
rows[0].classList.add("selected")
//selectRow(0)

rows[0].addEventListener("click", () => {selectRow(0); input = inicial})
rows[1].addEventListener("click", () => {selectRow(1); input = afagit})
rows[3].addEventListener("click", () => {selectRow(3); input = z})
rows[4].addEventListener("click", () => {selectRow(4); input = visa})
rows[6].addEventListener("click", () => {selectRow(6); input = extret})
rows[7].addEventListener("click", () => {selectRow(7); input = compres})
rows[8].addEventListener("click", () => {selectRow(8); input = extres})
rows[10].addEventListener("click", () => {selectRow(10); input = real})
titlEffect(2)
function selectRow(row) {
  //let sel = input.parentElement()
  console.log(input.parentNode)
  input.parentNode.classList.remove("selected")
    //sel.classList.remove("selected")
    
   /*  for (let r = 0; r < rows.length; r++) {
        rows[r].classList.remove("selected");
    } */
    rows[row].classList.add("selected")
}
function calc() {
    let spans = document.getElementsByClassName("added")
    for (let s = 0; s < spans.length; s++) {
        spans[s].remove();
    }
    feina.textContent = (parseSum(inicial) + parseSum(afagit)).toFixed(2)
    subtotal.textContent = (parseFloat(feina.textContent) + parseSum(z) - parseSum(visa)).toFixed(2)
    final.textContent = (parseFloat(subtotal.textContent) - parseSum(extret) - parseSum(compres)- parseSum(extres)).toFixed(2)
    descuadre.textContent = (parseSum(real) - parseFloat(final.textContent)).toFixed(2)
}
function writeOnRow(n) {
   input.textContent +=n
   titlEffect()
}
function deleteLast() {
    input.textContent = input.textContent.slice(0, -1)
}
function nextField() {
    console.log(input.id)
    console.log(input.dataset.next)
   
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
        resultSpan = document.createElement("span")
        resultSpan.classList.add("added")
        console.log(resultText)
        resultSpan.appendChild(resultText)
        field.classList.add("light")
        field.appendChild(resultSpan)
    console.log(typeof sum)
    }
    return sum
}

//fun effect for pad keys

function titlEffect(n) {
    titleText = "caTculator v.1.02"
    if (n==2) {
        whiteChar = "T"
        bfText = "ca"
        afText = "culator v.1.02"
        rndIndex = 2
    }
    else {
        rndIndex = getRndInteger(0, 9, n)
        bfText = titleText.slice(0,rndIndex)
        whiteChar = title.textContent[rndIndex]
        afText = titleText.slice((rndIndex +1))
    }
    title.innerHTML = bfText + '<span class="white">'+ whiteChar + "</span>" +afText
    return rndIndex
}
function getRndInteger(min, max, excluded) {
    var num = Math.floor(Math.random() * (max - min) ) + min;
    return (num === excluded) ? generateRandom(min, max) : num;
}

