const lists = document.querySelectorAll('li')

window.addEventListener('load', checkEvent(false, ''))

function checkEvent(boolean, element){
    lists.forEach(list =>{
        if(boolean){
            if(list.classList.contains('active')){
                list.classList.remove('active')
                list.classList.add('close')
            }else if(!list.classList.contains('active') && list.attributes[0].nodeValue == element){
                list.classList.add('active')
                list.classList.remove('close')
            }
        }else{
            lists.forEach(list =>{
                list.addEventListener('click', () =>{checkEvent(true, list.attributes[0].nodeValue)})
            })
        }
    })
    
    
}
