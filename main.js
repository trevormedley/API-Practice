const button = document.querySelector('button');
const nameContainer = document.querySelector('#nameContainer');

function logger() {
    console.log('Button Clicked');
}

button.addEventListener('click', () => {
    axios
        .get('https://swapi.dev/api/planets/2/')
        .then(function (res) {
            let residentsArray = res.data.residents;
            for (let i = 0; i < residentsArray.length; i++) {
                index = residentsArray[i];
                axios
                    .get(index)
                    .then(function (res) {
                        let name = res.data.name;
                        let nameCard = document.createElement('h3')
                        nameCard.textContent = name;
                        nameContainer.appendChild(nameCard);
                    })
            }
        }) 
});