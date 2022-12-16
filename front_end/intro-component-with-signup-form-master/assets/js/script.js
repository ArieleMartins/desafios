const form = document.querySelector('form')
const btnSubmit = document.querySelector(".btn")
const email = document.getElementById('email')

var checkValueEmail

form.addEventListener("submit", (event) =>{
    event.preventDefault()
})

btnSubmit.addEventListener('click', checkDatas)

email.addEventListener('input', (event) =>{
    checkValueEmail = event.explicitOriginalTarget.validity.valid
})

function checkDatas(){
    const inputs =  document.querySelectorAll('input')
    const messageErro = document.querySelectorAll('.message-erro')
    var posicion = 0

    inputs.forEach(input =>{
    
        if(input.id == 'email'){
            checkEmail(input, messageErro, posicion)
        }else{
            var checkValueInput = input.value == ''

            checkValueInput ? messageErro[posicion].style.display = 'block' : messageErro[posicion].style.display = 'none'
        }

        posicion += 1
    })
}



function checkEmail(input, messageErro, posicion){
    var checkValueInput = !input.value.includes('.') || !input.value.includes('@')
    checkValueInput || !checkValueEmail  ? messageErro[posicion].style.display = 'block' : messageErro[posicion].style.display = 'none'
}