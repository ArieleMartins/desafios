const url = 'https://api.brchallenges.com/api/blizzard/games'

export async function api(){
    const acessApi = await fetch(url)
    const values = await acessApi.json()
    const list = document.querySelector('.list-exclusive-games')

    console.log(values)

    values.forEach(value => {
        list.innerHTML += `
        <div>
            <div class="container-image-game">
                <img src='${value.image}' alt='' class="game-image"/>
                <img src='' alt=''/>
                <div class="bg-hover">
                </div>
            </div>
            <div>
                <span></span>
                <span></span>
            </div>
        </div>
        `
    });
}