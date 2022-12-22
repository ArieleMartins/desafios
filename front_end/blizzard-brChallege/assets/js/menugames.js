const menuGames = document.getElementById('menuGames')

var activeMenuGames = false

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

menuGames.addEventListener('click', showGames)

function showGames(){
    const header = document.querySelector(".header")

    const ulGames = document.querySelector('.list')
    activeMenuGames = !activeMenuGames

    if(activeMenuGames){
        header.classList.add('active')
        header.classList.remove('disabled')
        menuGames.children[0].classList.add('open-menu')
        listGames.forEach(game =>{
            ulGames.innerHTML += `
                <li>
                    <img src="assets/images/banner-hero/icons/icon-games/${game.image}" alt="${game.name}"/>
                    <span>${game.name}</span>
                </li>
            `
        })
    }else{
        ulGames.innerHTML = ''
        menuGames.children[0].classList.remove('open-menu')
        header.classList.remove('active')
        header.classList.add('disabled')
    }
    
}
