import { showMenu } from "./menu.js"
import { listEsports, listGames, listGameFooter } from "./menu.js"

const modal = document.querySelector('.container-modal')

var menuGameActive = false
var menuEsportsActive = false
var list = ''

export function modalLogin(show){
    if(show){
        modal.style.display = 'flex'

        modal.classList.add('menulogin')
        modal.classList.contains('mobile') ? modal.classList.remove('mobile') : modal

        modal.children[0].children[1].innerHTML = `
        <div class="container-logo-battle">
                <img src="assets/images/logo-battle-net.png" alt="logo battle.net" />
        </div>
        <form action="">
            <div class="container-inputs">
                <input type="text" placeholder="E-mail ou Telefone" aria-label="Email ou Telefone" />
                <input type="password" placeholder="Senha" aria-label="Senha" />
            </div>
                <div class="container-btn-conecte">
                    <button>Conectar-se</button>
                </div>
        </form>
        <div class="container-links">
            <span>ou conecte-se com</span>
            <ul>
                <li><a href="#"><img src="assets/images/banner-hero/icons/google.svg" alt="logo google"></a></li>
                <li><a href="#"><img src="assets/images/banner-hero/icons/apple.svg" alt="logo apple"></a></li>
                <li><a href="#"><img src="assets/images/banner-hero/icons/facebook.svg" alt="logo facebook"></a></li>
            </ul>
        </div>
        <div class="container-links-conta">
            <span ><a href="#" class="color-blue">Crie um conta</a> Battler.net de graça</span>    
            <a href="#" class="color-blue">Não consegue logar</a>
        </div>
        
        `
    }else{
        modal.style.display = 'none'
    }   
    
}

export function showMenuMobile(){
    const widthDisplay = window.innerWidth
    modal.children[0].children[1].innerHTML = ''
    modal.style.display = "flex"
    modal.classList.add('mobile')
    modal.classList.contains('menulogin') ? modal.classList.remove('menulogin') : modal

    if(widthDisplay <= 1119 && widthDisplay >= 726 ){
        modal.children[0].children[1].append(createAddElements(false))
    }else if(widthDisplay <= 725){
        modal.children[0].children[1].append(createAddElements(true))

        createMenuEvent(true)
    }

    createMenuEvent(false)
   
}

function createMenuEvent(createBtn){
    if(createBtn){
        const btnCreateMobile = document.getElementById('create-mobile')
        const btnLoginMobile = document.getElementById('login-mobile')
    
        btnLoginMobile.addEventListener('click', () => {modalLogin(true)}) 
    }else{
        const menuGames = document.getElementById('menu-games-mobile')
        const menuEsports = document.getElementById('menu-esports-mobile')
        menuGames.addEventListener('click', () =>{ addEventsButtonsMenu(false, menuGames)})
        menuEsports.addEventListener('click', ()=>{addEventsButtonsMenu(true, menuEsports)})
    }
}

function addEventsButtonsMenu(active, menu){
    active  ? active = menuEsportsActive = !menuEsportsActive : active = menuGameActive = !menuGameActive

    if(active){
        menu.parentElement.style.height = '100%'
    }else{
        menu.parentElement.style.height = '50px'
    }
}


function createAddElements(showBtns){
    const div = document.createElement('div')
    const divMenus = document.createElement("div")
    divMenus.className = 'container-menus'
    div.className = 'container-list-menu-mobile'

    if(showBtns){
        div.append(createElementBtns())
    }

    divMenus.innerHTML = `
        <ul class="menu-mobile">
            <li class="menu-games-mobile">
                <span id="menu-games-mobile">Jogos <i class="fa-solid fa-chevron-down"></i></span>
                <ul>
                    ${ showListMenu(true) }
                </ul>
            </li>
            <li class="menu-esports-mobile">
                <span id="menu-esports-mobile">Esportes <i class="fa-solid fa-chevron-down"></i></span>
                <ul>
                    ${ showListMenu(false) }
                </ul>
            </li>
            <li>Loja</li>
            <li>Notícias</li>
            <li>Suporte</li>
        </ul>
        <div class="footer-mobile">
            <ul>
                ${  showListFooter() }
            </ul>
        </div>
    `

    div.append(divMenus)

    return div
}

function createElementBtns(){
    const div = document.createElement('div')
    const btnCreate = document.createElement('button')
    const btnLogin = document.createElement('button')
    div.className = 'btn-login-create-mobile'

    btnCreate.className = 'create'
    btnCreate.id = 'create-mobile'
    btnCreate.textContent = 'Criar conta'

    btnLogin.className = 'login'
    btnLogin.id = 'login-mobile'
    btnLogin.innerHTML = `
        <img src="assets/images/banner-hero/icons/perfil.svg" alt="icon perfil">
        Logar
    `
    div.append(btnCreate)
    div.append(btnLogin)

    return div
}

function showListMenu(listShow){
    list = ''
    if(listShow){
        listGames.forEach(game =>{
            list += `
            <li>
                <img src="assets/images/banner-hero/icons/icon-games/${game.image}" alt="${game.name}"/>
                <span>${game.name}</span>
            </li>
            `
        })
    }else{
        listEsports.forEach(game =>{
            list += `
            <li>
                <img src="assets/images/banner-hero/icons/icon-esports/${game.image}" alt="${game.text}"/>
                <span>${game.text}</span>
            </li>
            `
        })
    }
   

    return list
}

function showListFooter(){
    var listFooter = ''
    listGameFooter.forEach(link =>{
        listFooter += `
        <li>
            <img src="assets/images/banner-hero/icons/${link.icon}" />
            <span>${link.text}</span>
        </li>`
    })

    listFooter += `
    <li>
        <img src="assets/images/banner-hero/icons/trofeu.svg" />
        <span>Torneios da comunidade</span>
    </li>
    
    `

    return listFooter
}



