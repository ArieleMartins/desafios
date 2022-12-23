const menuGames = document.getElementById('menuGames')
const menuEsports = document.getElementById('menuEsports')
const header = document.querySelector(".header")
const ulList = document.querySelector('.list')
const ulFooter = document.querySelector('.list-links')

var activeMenuGames = false
var activeMenuEsports = false

menuGames.addEventListener('click', showGames)
menuEsports.addEventListener('click', showEsports)

function showGames(){
    ulList.innerHTML = ""
    ulFooter.innerHTML = ""
    activeMenuGames = !activeMenuGames

    if(activeMenuEsports){
        activeMenuEsports = false
    }
   
    if(checkModalMenuActive()){
        setTimeout(()=>{
            activeMenu(false)
        }, 500)
    }else{
        activeMenu(false)
    }
    
}

function showListGames(){
    activeArrowMenu(false)

    const listGames = [
        {
            name: "Diablo® II ressurected",
            image: "Diablo 2.svg"
        },
        {
            name: "Overwatch® 2",
            image: "Overwatch2.svg"
        },
        {
            name: "World of Warcraft®",
            image: "WorldOfWarcraft.svg"
        },
        {
            name: "Hearthstone®",
            image: "Hearthstone.svg"
        },
        {
            name: "Heroes of the storm®",
            image: "HeroesOfTheStorm.svg"
        },
        {
            name: "Warcraft® III Reforged",
            image: "WarcraftIIIReforged.svg"
        },
        {
            name: "Diablo® IV",
            image: "Diablo IV.svg"
        },
        {
            name: "Diablo® Immortal",
            image: "DiabloImmortal.svg"
        },
        {
            name: "Diablo® III",
            image: "DiabloIII.svg"
        },
        {
            name: "StarCraft® II",
            image: "StarCraft.svg"
        },
        {
            name: "StarCraft® Remastered",
            image: "StarCraftRemastered.svg"
        },
        {
            name: "Arcade da Blizzard®",
            image: "ArcadeDaBlizzard.svg"
        }
    ]
    
    const listGameFooter = [
        {
            icon: "mais.svg",
            text: "Ver todos os jogos"
        },
        {
            icon: "battle.svg",
            text: "Aplicativo Battle.net"
        },
        {
            icon: "downloads.svg",
            text: "Downloads"
        },
        {
            icon: 'forum.svg',
            text: "Fóruns dos jogos"
        }
    ]

    listGames.forEach(game =>{
        ulList.innerHTML += `
            <li>
                <img src="assets/images/banner-hero/icons/icon-games/${game.image}" alt="${game.name}"/>
                <span>${game.name}</span>
            </li>
        `
    })

    listGameFooter.forEach(link =>{
        ulFooter.innerHTML += `
        <li>
            <img src="assets/images/banner-hero/icons/${link.icon}" />
            <span>${link.text}</span>
        </li>
        `
    })
}

function showEsports(){
    activeMenuEsports = !activeMenuEsports
    ulList.innerHTML = ""
    ulFooter.innerHTML = ""
    
    if(activeMenuGames){
        activeMenuGames = false
    }

    if(checkModalMenuActive()){
        setTimeout(()=>{
            activeMenu(true)
        }, 500)
    }else{
        activeMenu(true)
    }

}

function showListEsports(){
    activeArrowMenu(true)

    var listEsports = [
        {
            image: "HearthstoneMasters.svg",
            text: "Hearthstone® masters"
        },
        {
            image: "CampeonatoMundialDeArenaWoW.svg",
            text: 'Campeonato Mundial de Arena WoW®'
        },
        {
            image: "StarCraftIIWCS.svg",
            text: "StarCraft® II WCS"
        },
        {
            image: "CopaMundialDeOverwatch.svg",
            text: "Copa Mundial de Overwatch®"
        },
        {
            image: "LigaDeOverwatch.svg",
            text: "Liga de Overwatch®"
        }
    ]

    listEsports.forEach(esport =>{
        ulList.innerHTML += `
        <li>
            <img src="assets/images/banner-hero/icons/icon-esports/${esport.image}" />
            <span>${esport.text}</span>
        </li>
        `
    })

    ulFooter.innerHTML = `
    <li>
        <img src="assets/images/banner-hero/icons/trofeu.svg" />
        <span>Torneios da comunidade</span>
    </li>
    `
}


function checkModalMenuActive(){
    if(header.classList.contains("active")){
        header.classList.remove("active")
        header.classList.add("disabled")

        return true
    }

    return false
}

function activeMenu(menu){
    if(activeMenuEsports || activeMenuGames){
        
        header.classList.add('active')
        header.classList.remove('disabled')
    
        menu ? showListEsports() : showListGames()
        
    }else{
        menuGames.children[0].classList.remove('open-menu')
        header.classList.remove('active')
        header.classList.add('disabled')
    }
}

function activeArrowMenu(menu){
    if(menu){
        menuGames.children[0].classList.contains('open-menu') ? menuGames.children[0].classList.remove('open-menu') : menuGames

        menuEsports.children[0].classList.add('open-menu')
    }else{
        menuEsports.children[0].classList.contains('open-menu') ? menuEsports.children[0].classList.remove('open-menu') : menuEsports

        menuGames.children[0].classList.add('open-menu')
    }
}
