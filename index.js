
let pokemon = {};

const input = document.querySelector('header input');

const button = document.querySelector('header button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('https://pokeapi.co/api/v2/pokemon/' + input.value.toLowerCase())
        .then(data => data.json())
        .then(data => {
            console.log(
                pokemon = data);
            console.log(
                pName = pokemon.name.toUpperCase());
            console.log(
                pImgSrc = pokemon.sprites.front_default);
            const statsTextT = `<tr><td>stat</td><td>value</td></tr>`;
            let statsText = '';
            let nextS = '';
            document.querySelector('.stats tbody').innerHTML = '';
            for (const stat of pokemon.stats) {
                console.log(stat.stat.name, stat.base_stat);
                nextS = statsTextT.replace('stat', stat.stat.name).replace('value', stat.base_stat)
                document.querySelector('.stats tbody').innerHTML += nextS;
            }
            document.querySelector('.abilities').innerHTML = '';
            for (const ability of pokemon.abilities) {

                document.querySelector('.abilities').innerHTML += '<li>' + ability.ability.name + '</li>';
            }
            document.querySelector('.name').innerHTML = pokemon.name.toUpperCase();
            document.querySelector('img').src = pImgSrc
        });
    document.querySelector('.stats').innerHTML = statsText

});