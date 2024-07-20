
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
const kolekcija = document.querySelector('#kolekcija');
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


input.addEventListener('input', function (e) {
    return rezultat = input.value;
})
const randomizuj = () => {
    mestoInformacije.innerText = 'Овде ћеш добити информацију о тачности!';
    const broj2 = () => {
        return Math.floor(Math.random() * 9) + 1;
    }
    const drugiBroj = broj2();
    const broj1 = () => {
        if (drugiBroj == 1) {
            const a1 = Math.floor(Math.random() * 99) + 1;
            return a1 * drugiBroj;
        } else if (drugiBroj == 2) {
            const a1 = Math.floor(Math.random() * 49) + 1;
            return a1 * drugiBroj;
        } else if (drugiBroj == 3) {
            const a1 = Math.floor(Math.random() * 33) + 1;
            return a1 * drugiBroj;
        } else if (drugiBroj == 4) {
            const a1 = Math.floor(Math.random() * 24) + 1;
            return a1 * drugiBroj;
        } else if (drugiBroj == 5) {
            const a1 = Math.floor(Math.random() * 19) + 1;
            return a1 * drugiBroj;
        } else if (drugiBroj == 6) {
            const a1 = Math.floor(Math.random() * 16) + 1;
            return a1 * drugiBroj;
        } else if (drugiBroj == 7) {
            const a1 = Math.floor(Math.random() * 14) + 1;
            return a1 * drugiBroj;
        } else if (drugiBroj == 8) {
            const a1 = Math.floor(Math.random() * 12) + 1;
            return a1 * drugiBroj;
        } else {
            const a1 = Math.floor(Math.random() * 11) + 1;
            return a1 * drugiBroj;
        }
    }
    const prviBroj = broj1();
    mestoPrvogBroja.innerText = `${prviBroj}`;
    plus.innerText = '/';
    mestoDrugogBroja.innerText = `${drugiBroj}`;
    container.appendChild(mestoPrvogBroja);
    container.appendChild(plus);
    container.appendChild(mestoDrugogBroja);
}
provera.addEventListener('click', () => {
    const prviBroj = parseInt(mestoPrvogBroja.innerText);
    const drugiBroj = parseInt(mestoDrugogBroja.innerText);
    if (rezultat == prviBroj / drugiBroj) {
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
