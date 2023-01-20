const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add(){
    const today = new Date().toLocaleDateString('pt-br')

    if (nlwSetup.dayExists(today) == true){
        alert('Dia já incluso 😀')
        return;
    }
    
    nlwSetup.addDay(today)
    alert('Dia adicionado ☀️')
}

function save(){
    localStorage.setItem("NLWSetup", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup")) || {}

nlwSetup.setData(data)
nlwSetup.load()