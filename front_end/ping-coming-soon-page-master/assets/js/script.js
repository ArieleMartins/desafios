const form =  document.querySelector('form')
const btnSubmit = document.getElementById('submit')
const email = document.getElementById('email')

var checkValueEmail

form.addEventListener('submit', (event)=>{ event.preventDefault() })

email.addEventListener('input', (event) =>{
    checkValueEmail = event.explicitOriginalTarget.validity.valid
})

btnSubmit.addEventListener('click', submitEmail)

function submitEmail(){
    const messageErro = document.querySelector('.message-erro')
    if(!checkValueEmail || !email.value.includes('.')){
        messageErro.style.display = 'block'
        email.style.border = '1px solid var(--light-red)'
    }else{
        messageErro.style.display = 'none'
        email.style.border = '1px solid var(--pale-blue)'
    }
}


