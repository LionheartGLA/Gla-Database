const chars = [
    { name: "Scratchmen Apoo", image: "Img/Medals/Apoo.png", class: ["Atirador", "Suporte", "Supernova", "Fruta do Diabo"] },
    { name: "Baby 5", image: "Img/Medals/Baby5.png", class: ["DPS", "Atirador", "Cortante", "Fruta do Diabo", "Mulher"] },
    { name: "Bartolomeo", image: "Img/Medals/Bartolomeo.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Bastille", image: "Img/Medals/Bastille.png", class: ["Cortante", "Tanque", "Marinheiro"] },
    { name: "Bellamy", image: "Img/Medals/Bellamy.png", class: ["Lutador", "DPS", "Fruta do Diabo"] },
    { name: "Jewelry Bonney", image: "Img/Medals/Bonney.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Supernova", "Mulher", "Realeza"] },
    { name: "Brook", image: "Img/Medals/Brook.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Capone Gang Bege", image: "Img/Medals/Capone.png", class: ["Atirador", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Carrot", image: "Img/Medals/Carrot.png", class: ["Cortante", "Especialista", "DPS", "Mulher"] },
    { name: "Tony Tony Chopper", image: "Img/Medals/Chopper.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Crocodile", image: "Img/Medals/Crocodile.png", class: ["Especialista", "Tanque", "Fruta do Diabo", "Shichibukai"] },
    { name: "Dalmatian", image: "Img/Medals/Dalmatian.png", class: ["Cortante", "Bruiser", "Marinheiro", "Fruta do Diabo"] },
    { name: "X Drake", image: "Img/Medals/Drake.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Supernova", "Marinheiro"] },
    { name: "Franky", image: "Img/Medals/Franky.png", class: ["Atirador", "Bruiser", "Chapéu de Palha"] },
    { name: "Basil Hawkins", image: "Img/Medals/Hawkins.png", class: ["Especialista", "Bruiser", "Fruta do Diabo", "Supernova"] },
    { name: "Hina", image: "Img/Medals/Hina.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Marinheiro", "Mulher"] },
    { name: "Vinsmoke Ichiji", image: "Img/Medals/Ichiji.png", class: ["Bruiser", "Lutador", "Realeza"] },
    { name: "Jesus Burgess", image: "Img/Medals/Jesus.png", class: ["Lutador", "Tanque"] },
    { name: "Eustass Kid", image: "Img/Medals/Kid.png", class: ["Atirador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Killer", image: "Img/Medals/Killer.png", class: ["Cortante", "DPS", "Supernova"] },
    { name: "Koala", image: "Img/Medals/Koala.png", class: ["Lutador", "DPS", "Mulher"] },
    { name: "Leo e Mansherry", image: "Img/Medals/Leo.png", class: ["Especialista", "Suporte", "Realeza", "Fruta do Diabo", "Mulher"] },
    { name: "Monkey D. Luffy", image: "Img/Medals/Luffy.png", class: ["Bruiser", "Lutador", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Gecko Moria", image: "Img/Medals/Moria.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Shichibukai"] },
    { name: "Nami", image: "Img/Medals/Nami.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Mulher"] },
    { name: "Vinsmoke Niji", image: "Img/Medals/Niji.png", class: ["Atirador", "DPS", "Realeza"] },
    { name: "Perona", image: "Img/Medals/Perona.png", class: ["Especialista", "Suporte", "Fruta do Diabo", "Mulher"] },
    { name: "Rebecca", image: "Img/Medals/Rebecca.png", class: ["Cortante", "Tanque", "Realeza", "Mulher"] },
    { name: "Vinsmoke Reiju", image: "Img/Medals/Reiju.png", class: ["Suporte", "Especialista", "Realeza", "Mulher"] },
    { name: "Nico Robin", image: "Img/Medals/Robin.png", class: ["Especialista", "DPS", "Fruta do Diabo", "Chapéu de Palha", "Mulher"] },
    { name: "Ryuma", image: "Img/Medals/Ryuma.png", class: ["Cortante", "DPS"] },
    { name: "Vinsmoke Sanji", image: "Img/Medals/Sanji.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
    { name: "Smoker", image: "Img/Medals/Smoker.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Marinheiro"] },
    { name: "Urouge", image: "Img/Medals/Urouge.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Trafalgar Law", image: "Img/Medals/Law.png", class: ["Cortante", "Especialista", "DPS", "Fruta do Diabo", "Supernova"] },
    { name: "Usopp", image: "Img/Medals/Usopp.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { name: "Van Augur", image: "Img/Medals/Van_augur.png", class: ["Atirador", "DPS"] },
    { name: "Vinsmoke Yonji", image: "Img/Medals/Yonji.png", class: ["Lutador", "Tanque", "Realeza"] },
    { name: "Roronoa Zoro", image: "Img/Medals/Zoro.png", class: ["Cortante", "Bruiser", "Chapéu de Palha"] },
    { name: "Satori", image: "Img/Medals/Satori.png", class: ["Enel"] },
    { name: "Gedatsu", image: "Img/Medals/Gedatsu.png", class: ["Enel"] },
    { name: "Ohm", image: "Img/Medals/Ohm.png", class: ["Enel"] },
    { name: "Shura", image: "Img/Medals/Shura.png", class: ["Enel"] },
]

const dimaButtons = {
    "Supernova": document.getElementById("barbanegra"),
    "Atirador": document.getElementById("doflamingo"),
    "Mulher": document.getElementById("hancock"),
    "Suporte": document.getElementById("ivankov"),
    "Tanque": document.getElementById("jinbe"),
    "Marinheiro": document.getElementById("kizaru"),
    "Realeza": document.getElementById("kuma"),
    "Cortante": document.getElementById("mihawk"),
    "Chapéu de Palha": document.getElementById("shanks"),
    "Enel": document.getElementById("enel"),
};

const filterButtons = {
    "Tanque": document.getElementById("tanque"),
    "Bruiser": document.getElementById("bruiser"),
    "DPS": document.getElementById("dps"),
    "Suporte": document.getElementById("suporte"),
    "Lutador": document.getElementById("lutador"),
    "Atirador": document.getElementById("atirador"),
    "Cortante": document.getElementById("cortante"),
    "Especialista": document.getElementById("especialista"),
    "Marinheiro": document.getElementById("marinheiro"),
    "Chapéu de Palha": document.getElementById("mugiwara"),
    "Mulher": document.getElementById("mulher"),
    "Realeza": document.getElementById("realeza"),
    "Supernova": document.getElementById("supernova"),
};

let activeFilters = new Set();
let hoveredFilter = null;

const searchBar = document.querySelector('.search-bar-filter');

document.querySelector('.search-bar-filter').addEventListener('input', () => {
    filterChars();
});


function addCharToList() {
    const charListDiv = document.querySelector(".chars");
    chars.forEach(character => {
        const charDiv = document.createElement("div");
        charDiv.classList.add("char");

        const charImg = document.createElement("div");
        charImg.classList.add('char-img');
        charImg.style.backgroundImage = `url('${character.image}')`;

        const textElement = document.createElement("p");
        textElement.innerText = character.name;
        textElement.classList.add("title");

        charDiv.append(charImg, textElement);
        charListDiv.appendChild(charDiv);

        charDiv.addEventListener('click', () => {
            handleCharClick(chars.find(char => char.name === character.name), charDiv);
        })
    });
}

function handleCharClick(char, charDiv) {
    if (charDiv.classList.contains('selected')) {
        char.class.forEach(c => {
            if (dimaButtons[c]) {
                const titleElement = dimaButtons[c].querySelector('.count');
                titleElement.innerText = parseFloat(titleElement.innerText) - 1;
            }
            charDiv.classList.remove('selected');
        });
    } else {
        char.class.forEach(c => {
            if (dimaButtons[c]) {
                const titleElement = dimaButtons[c].querySelector('.count');
                titleElement.innerText = parseFloat(titleElement.innerText) + 1;
            }
            charDiv.classList.add('selected');
        });
    }
}

function toggleFilter(filter) {
    activeFilters.has(filter) ? activeFilters.delete(filter) : activeFilters.add(filter);
}

function filterChars() {
    console.log('aaa')
    const allChars = document.querySelectorAll('.char');
    const searchTerm = searchBar.value.toLowerCase();

    allChars.forEach(char => {
        const charName = char.querySelector('p').innerText.toLowerCase();
        const charData = chars.find(character => character.name.toLowerCase() === charName);

        const showChar = Array.from(activeFilters).every(filter => charData.class.includes(filter)) && 
                         charName.includes(searchTerm);

        char.style.display = showChar ? 'flex' : 'none';
        char.classList.toggle('hovered', hoveredFilter && charData.class.includes(hoveredFilter));
    });
}

function handleDimaButtonClick(filter, button) {
    toggleFilter(filter);
    filterChars();
    button.classList.toggle('selected', activeFilters.has(filter));
}

function handleFilterButtonClick(filter, button) {
    toggleFilter(filter);
    filterChars();
    button.classList.toggle('selected', activeFilters.has(filter));
}

Object.entries(dimaButtons).forEach(([filter, button]) => {
    button.addEventListener("click", () => handleDimaButtonClick(filter, button));
});

Object.entries(filterButtons).forEach(([filter, button]) => {
    button.addEventListener("click", () => handleFilterButtonClick(filter, button));
});

document.querySelector('.select-none').addEventListener('click', () => {
    document.querySelectorAll('.char.selected').forEach(charDiv => {
        const char = chars.find(char => char.name === charDiv.querySelector("p").innerText);
        char.class.forEach(c => {
            if (dimaButtons[c]) {
                const titleElement = dimaButtons[c].querySelector('.count');
                titleElement.innerText = parseFloat(titleElement.innerText) - 1;
            }
            charDiv.classList.remove('selected');
        });
    })
})

window.addEventListener("load", addCharToList);
document.querySelector('.rot-bt').addEventListener('click', () => window.location.replace('index.html'));