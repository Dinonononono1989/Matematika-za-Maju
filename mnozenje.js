const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const dugme = document.querySelector('#bSab');
const container = document.querySelector('#container');
const mestoPrvogBroja = document.querySelector('#div1');
const plus = document.querySelector('#div2');
const mestoDrugogBroja = document.querySelector('#div3');
const input = document.querySelector('#mestoUnosa');
const provera = document.querySelector('#btnProvera');
const divProvera = document.querySelector('#divProvera');
const mestoInformacije = document.querySelector('#mestoInformacije');
const kolekcija = document.querySelector('#kolekcija');const ovdeIdu = document.querySelector('#ovdeIdu');
const divMI = document.querySelector('#divMI');
const randomPokeNum = () => {
    return Math.floor(Math.random() * 151) + 1;
}
const dodeliPokemona = () => {
    const pokemon = document.createElement('div');
    const brojRandomPokea = randomPokeNum();
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${brojRandomPokea}.png`;
    pokemon.appendChild(newImg);
    kolekcija.appendChild(pokemon);
}
const broj1 = () => {
    return Math.floor(Math.random() * 9) + 1;
}
const broj2 = () => {
    return Math.floor(Math.random() * 9) + 1;
}
input.addEventListener('input', function (e) {
    return rezultat = input.value;
})
const randomizuj = () => {
    container.innerHTML = '';
    const prviBroj = broj1();
    const drugiBroj = broj2();
    mestoPrvogBroja.innerText = `${prviBroj}`;
    plus.innerText = '*';
    mestoDrugogBroja.innerText = `${drugiBroj}`;
    container.appendChild(mestoPrvogBroja);
    container.appendChild(plus);
    container.appendChild(mestoDrugogBroja);
}
provera.addEventListener('click', () => {
    const prviBroj = parseInt(mestoPrvogBroja.innerText);
    const drugiBroj = parseInt(mestoDrugogBroja.innerText);
    if (rezultat == prviBroj * drugiBroj) {
        mestoInformacije.innerText = 'Браво! Резултат је тачан! Као награду добијаш покемона!';
        dodeliPokemona();
        mestoPrvogBroja.innerHTML = '';
        mestoDrugogBroja.innerHTML = '';
        plus.innerHTML = '';
        input.value = '';
        randomizuj();
    } else {
        mestoInformacije.innerText = 'Резултат није тачан! Одузима ти се покемон! Пробај поново!'
        kolekcija.lastChild.remove();
        input.value = '';
    }
});
dugme.addEventListener('click', randomizuj);

