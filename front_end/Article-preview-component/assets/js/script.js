const btnShare = document.querySelector(".btnShare")
var active = false

btnShare.addEventListener('click', checkWidthDisplay)

function checkWidthDisplay(){
    var width = window.innerWidth
    if(width <= 900){
        showModal(true)
    }else{
        showModal(false)
    }
}

function showModal(boolean){
    active = !active

    console.log(active)

    const containerShare = document.querySelector('.container-share')
    if(active){
        containerShare.style.display = 'flex'
        btnShare.classList.add("active")
        btnShare.classList.remove('disabled')
        if(boolean){
            containerShare.classList.add('mobile')
        }else{
            containerShare.classList.add('desktop')
        }
    }else{
        btnShare.classList.remove("active")
        btnShare.classList.add('disabled')
        containerShare.classList.remove('mobile')
        containerShare.classList.remove('desktop')
        containerShare.style.display = 'none'
    }
    
}