var games = [
    {
        image : 'diablo-bg.png',
        game: 'Diablo IV',
        logo: "diablo-logo.png",
        title: 'Retorna à <br> escuridão com o  game Diablo IV',
        subtitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
        imgTrailer: 'diablo-animation-cover.png',
        gifTrailer: 'diablo-animation.gif',
        trailer: 'https://www.youtube.com/watch?v=jFtk_7tvAVc'
    },
    {
        image : 'hearthstone-bg.png',
        game: 'Hearthstone',
        logo: 'hearthstone-logo.png',
        title: 'Novo pacote de expansão de Hearthstone',
        subtitle: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
        imgTrailer: 'hearthstone-animation-cover.png',
        gifTrailer: 'hearthstone-animation.gif',
        trailer: 'https://www.youtube.com/watch?v=SCq4WmfRPyg'
    },
    {
        image : 'wow-bg.png',
        game: 'World of Warcraft',
        logo: 'wow-logo.png',
        title: "Desbrave as Terras Sombrias em Shadowlands! ",
        subtitle: 'O que jaz além do mundo que você conhece?',
        imgTrailer: 'wow-animation-cover.png',
        gifTrailer: 'wow-animation.gif',
        trailer: 'https://www.youtube.com/watch?v=qtDfA8gU9ik'
    },
    {
        image : 'none',
        game: 'Diablo Immortal',
        logo: '',
        title:'',
        subtitle: '',
        imgTrailer: '',
        gifTrailer: '',
        trailer: ''
    },
    {
        image : 'none',
        game: 'StarCraft',
        logo: '',
        title:'',
        subtitle: '',
        imgTrailer: '',
        gifTrailer: '',
        trailer: ''
    },
]
var parent
export function selectGame(element){
    var nameGame = element.target.attributes[0].nodeValue.replace('Logo ', '')
    parent = element.target.parentElement.parentElement
    checkGameSelected(nameGame)
}

function checkGameSelected(name){
    games.forEach(game =>{
        if(game.game == name){
            gameSelected(game)
        }
    })
}

function gameSelected(game){
    const main = document.querySelector('main')
    const logo = document.querySelector(".logo")
    const title = document.querySelector('h1')
    const subtitle = document.querySelector('h4')
    const imgTrailer = document.querySelector('.img-trailer')
    const trailer = document.querySelector('.trailer')
   
    if(game.image != 'none'){
        checkLiActivesAfter()
        main.style.backgroundImage = `url(assets/images/banner-hero/games/${game.image})`
        parent.classList.add('active-game')
        title.innerHTML = game.title
        subtitle.innerHTML = game.subtitle
        trailer.addEventListener('mouseover', ()=>{
            trailer.style.backgroundImage = `url(assets/images/banner-hero/games/${game.gifTrailer})`
        })
        imgTrailer.setAttribute("src", `assets/images/banner-hero/games/${game.imgTrailer}`)
        logo.setAttribute('src', `assets/images/banner-hero/games/${game.logo}`)
    }
    
}

function checkLiActivesAfter(){
    const lis = document.querySelectorAll('.list-games li')

    lis.forEach(li =>{
        if(li.classList.contains("active-game")){
            li.classList.remove('active-game')
        }
    })
}