import { showMenu } from "./menu.js"
import { selectGame } from "./main.js"
import { api } from "./api.js"

const menuGames = document.getElementById('menuGames')
const menuEsports = document.getElementById('menuEsports')
const list = document.querySelector(".list-games")

menuGames.addEventListener('click', () =>{ showMenu(false) })
menuEsports.addEventListener('click', () =>{ showMenu(true) })

window.addEventListener('load', addGamesListMain)

function addGamesListMain(){
    
    var listGames = [
        {
            image : 'assets/images/banner-hero/icons/icon-games/Diablo IV.svg',
            alt: 'Logo Diablo IV'
        },
        {
            image : 'assets/images/banner-hero/icons/icon-games/Hearthstone.svg',
            alt: 'Logo Hearthstone'
        },
        {
            image : 'assets/images/banner-hero/icons/icon-games/WorldOfWarcraft.svg',
            alt: 'Logo World of Warcraft'
        },
        {
            image : 'assets/images/banner-hero/icons/icon-games/DiabloImmortal.svg',
            alt: 'Logo Diablo Immortal'
        },
        {
            image : 'assets/images/banner-hero/icons/icon-games/StarCraft.svg',
            alt: 'Logo StarCraft'
        },
    ]
    
    listGames.forEach(game =>{
        createElementAddList( game)
    })

    list.children[0].classList.add("active-game")
}

function createElementAddList( game){
    var li = document.createElement('li')
    var button = document.createElement('button')
    var img = document.createElement('img')
    list.append(li)
    li.append(button)
    button.append(img)
    img.setAttribute('alt', game.alt)
    img.setAttribute('src', game.image)
    button.addEventListener('click', (element) => selectGame(element))
}

api()

checkSystemAddButton()

function checkSystemAddButton(){
    const btn = document.querySelector('.btn-download')
    const system = window.navigator.userAgent

    if(system.includes("Linux")){
        btn.innerHTML = `
            <img src="assets/images/banner-hero/icons/LINUX.svg" />
            <span> Baixar para o Linux</span>
        `
    }else if(system.includes('Windows')){
        btn.innerHTML = `
            <img src="assets/images/banner-hero/icons/WINDOWS.svg" />
            <span> Baixar para o Windows</span>
        `
    }else{
        btn.innerHTML = `
            <img src="assets/images/banner-hero/icons/MAC.svg" />
            <span> Baixar para o MacOS</span>
        `
    }
}