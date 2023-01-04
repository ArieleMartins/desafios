const url = 'https://api.brchallenges.com/api/blizzard/games'

export async function api(){
    const acessApi = await fetch(url)
    const values = await acessApi.json()
    const list = document.querySelector('.list-exclusive-games')

    console.log(values)

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
}