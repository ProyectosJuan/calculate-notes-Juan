const username = document.getElementById("name");
const data1 = document.getElementById("note1");
const data2 = document.getElementById("note2");
const data3 = document.getElementById("note3");
const btnCalculate = document.getElementById("btn-calculate");
const btnPredictNote = document.getElementById("predictNote");
const result = document.getElementById("result");

btnCalculate.addEventListener("click", calculateNote)

function calculateNote() {
    let def
    let user = username.value
    let datauser1 = Number(data1.value)
    let datauser2 = Number(data2.value)
    let datauser3 = Number(data3.value)
    let response = (datauser1 * 0.3) + (datauser2 * 0.3) + (datauser3 * 0.4)
    if (response < 3.5) {
        def = ("Perdió el trimestre")
        result.style.color="red"
    }
    else if (response >= 3.5 && response < 4.5) {
        def = ("Pasó el trimestre")
        result.style.color="orange"
    }
    else if (response >= 4.5 && response <= 5.0){
        def = ("Ganó el trimestre")
        result.style.color="green"
    }
    result.textContent = `sr(a) ${user} su total es ${response}. ${def}`
}

btnPredictNote.addEventListener("click", predictNote)

function predictNote() {
    let dataPredict1 = Number(note1.value)
    let dataPredict2 = Number(note2.value)
    let notaMinima = (3.5 -(dataPredict1 * 0.3) - (dataPredict2 * 0.3))/0.4;
    note3.value = `${notaMinima}`
}
