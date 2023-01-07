const url = 'https://api.brchallenges.com/api/blizzard/games'

export async function api(){
    const acessApi = await fetch(url)
    const values = await acessApi.json()
    const list = document.querySelector('.list-exclusive-games')

    values.forEach(value => {
        list.innerHTML += `
        <div class="container-capa-game">
            <div class="container-image-game">
                <img src='${value.image}' alt='${value.name}' class="game-image"/>
                <div class="container-img-logo-game">
                <img src='${value.logo}' alt='Logo ${value.name}' class="logo-game"/>
                </div>
                <div class="bg-hover">
                </div>
            </div>
            <div>
                <h3 class="name-game">${value.name}</h3>
                <span class="category-game">${value.category}</span>
            </div>
        </div>
        `
    });

    list.innerHTML +=`
        <div class="container-capa-game ">
            <div class="container-image-game list-more-games">
                <div>
                    <img src="assets/images/logo.png" class="logo-more-games"/>
                </div>
                <div class="icon-more-games">
                    <a href="#">
                        <img src="assets/images/banner-hero/icons/mais-white.svg"/>
                        Ver todos jogos
                    </a>
                </div>
            </div>
        </div>
    `
}