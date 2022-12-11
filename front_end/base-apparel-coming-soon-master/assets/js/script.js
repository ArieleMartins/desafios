const addressEmail = document.getElementById("email")
const submit = document.querySelector('.submit')
const form = document.querySelector('form')

var checkEmail
var email = ''

form.addEventListener('submit', (event) =>{
    event.preventDefault()
})

addressEmail.addEventListener("input", (event)=>{
    checkEmail = event.explicitOriginalTarget.validity.valid
    email = addressEmail.value
})

submit.addEventListener("click", ()=>{
    var checkValueEmail = email != ''
    if(checkValueEmail){
        var checkPointEmail = email.includes('.')
        checkPointEmail && checkEmail ? showError(false) : showError(true)
    }else{
        showError(true)
    }
})

function showError(value){
    const messageError = document.querySelector('.message-erro')
    if(value){
        addressEmail.focus()
        form.classList.add('error')
        messageError.style.display = 'block'
    }else{
        form.classList.remove('error')
        messageError.style.display = 'none'
    }
    
}