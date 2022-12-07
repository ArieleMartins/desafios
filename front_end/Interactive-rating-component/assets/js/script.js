const form = document.querySelector("form")
const btnSubmit = document.querySelector(".submit")
const modal = document.querySelector(".container")
const radios = document.querySelectorAll('input')



form.addEventListener('submit', (e)=>{
    e.preventDefault()
})

btnSubmit.addEventListener("click", showThank)

function showThank(){
    var valueRating 
    modal.innerHTML = ''
    radios.forEach(radio =>{
        if(radio.checked){
            valueRating = radio.previousElementSibling.textContent
        }
    })

    addElementModal(valueRating)

}

function addElementModal(valueRating){
    modal.innerHTML = `
    <div class="container-img">
            <figure>
                <img src="assets/images/illustration-thank-you.svg" alt="ilustration trank you">
            </figure>
        </div>
        <div class="container-selected">
            <span>You selected ${valueRating} out of 5</span>
        </div>
        <div class="container-thank">
            <h1>Thank you!</h1>
            <p>We appreciate you taking thetime to give a rating. If you ever need more support, dont't hesitate to get in touch!</p>
        </div>
    `
}