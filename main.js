const button = document.querySelector('button');
const nameContainer = document.querySelector('#nameContainer');
const input = document.querySelector('#input');

button.addEventListener('click', () => {
    axios
        .get(`https://swapi.dev/api/planets/${input.value}/`)
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