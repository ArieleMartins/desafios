const lists = document.querySelectorAll('li details')

window.addEventListener('load', addEventList)

function checkEvent(valueAtribute){

   lists.forEach(list =>{
     if(list.attributes.length > 1 && list.parentElement.attributes[0].nodeValue != valueAtribute){
            if(list.attributes[1].nodeValue == ""){
                console.log(list)
                list.removeAttribute('open')
            }
        }
    }) 
}

function addEventList(){
    lists.forEach(list =>{
        list.addEventListener('click', ()=>{checkEvent(list.parentElement.attributes[0].nodeValue)})
    })
}
