const chars = [
    { name: "Aokiji", image: "Img/Medals/Aokiji.png", class: ["Cortante", "Especialista", "Tanque", "Marinheiro", "Fruta do Diabo"] },
    { name: "Bartolomew Kuma", image: "Img/Medals/Kuma.png", class: ["Especialista", "Tanque", "Realeza", "Shichibukai", "Fruta do Diabo"] },
    { name: "Boa Hancock", image: "Img/Medals/Hancock.png", class: ["Lutador", "DPS", "Fruta do Diabo", "Shichibukai", "Realeza"] },
    { name: "Borsalino Kizaru", image: "Img/Medals/Kizaru.png", class: ["Atirador", "Especialista", "DPS", "Marinheiro", "Fruta do Diabo"] },
    { name: "Brook Timeskip", image: "Img/Medals/Brook_ts.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Chopper Timeskip", image: "Img/Medals/Chopper_ts.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Donquixote Doflamingo", image: "Img/Medals/Doflamingo.png", class: ["Atirador", "Especialista", "DPS", "Shichibukai", "Fruta do Diabo", "Realeza"] },
    { name: "Dracule Mihawk", image: "Img/Medals/Mihawk.png", class: ["Cortante", "DPS", "Shichibukai"] },
    { name: "Emporio Ivankov", image: "Img/Medals/Ivankov.png", class: ["Lutador", "Suporte", "Fruta do Diabo"] },
    { name: "Enel", image: "Img/Medals/Enel.png", class: ["DPS", "Atirador", "Especialista", "Fruta do Diabo"] },
    { name: "Franky Timeskip", image: "Img/Medals/Franky_ts.png", class: ["Atirador", "Tanque", "Chapéu de Palha"] },
    { name: "Jinbe", image: "Img/Medals/Jinbe.png", class: ["Lutador", "Tanque", "Tritão", "Shichibukai"] },
    { name: "Marshall D. Teach", image: "Img/Medals/Barbanegra.png", class: ["Especialista", "Bruiser", "Fruta do Diabo"] },
    { name: "Marco", image: "Img/Medals/Marco.png", class: ["Especialista", "Suporte", "Lutador", "Fruta do Diabo"] },
    { name: "Luffy Timeskip", image: "Img/Medals/Luffy_ts.png", class: ["Lutador", "DPS", "Supernova", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Nami Timeskip", image: "Img/Medals/Nami_ts.png", class: ["Especialista", "DPS", "Chapéu de Palha"] },
    { name: "Portgas D. Ace", image: "Img/Medals/Ace.png", class: ["Atirador", "Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Robin Timeskip", image: "Img/Medals/Robin_ts.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Fruta do Diabo"] },
    { name: "Zoro Timeskip", image: "Img/Medals/Zoro_ts.png", class: ["Cortante", "DPS", "Supernova", "Chapéu de Palha"] },
    { name: "Sabo", image: "Img/Medals/Sabo.png", class: ["Lutador", "DPS", "Especialista", "Fruta do Diabo"] },
    { name: "Akainu", image: "Img/Medals/Akainu.png", class: ["DPS", "Lutador", "Marinheiro", "Especialista", "Fruta do Diabo"] },
    { name: "Shanks", image: "Img/Medals/Shanks.png", class: ["Cortante", "Bruiser"] },
    { name: "Usopp Timeskip", image: "Img/Medals/Usopp_ts.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { name: "Uta", image: "Img/Medals/Uta.png", class: ["DPS", "Especialista", "Fruta do Diabo"] },
    { name: "Sanji Timeskip", image: "Img/Medals/Sanji_ts.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
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
    { name: "Tashigi", image: "Img/Medals/Tashigi.png", class: ["Cortante", "DPS", "Marinheiro"] },
    { name: "Buggy", image: "Img/Medals/Buggy.png", class: ["Atirador", "DPS", "Fruta do Diabo"] },
    { name: "Satori", image: "Img/Medals/Satori.png", class: ["Enel"] },
    { name: "Gedatsu", image: "Img/Medals/Gedatsu.png", class: ["Enel"] },
    { name: "Ohm", image: "Img/Medals/Ohm.png", class: ["Enel"] },
    { name: "Shura", image: "Img/Medals/Shura.png", class: ["Enel"] },
]

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

let selectionActive = "none";

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
            switch (selectionActive) {
                case "none":
                    break;
                case "tank":
                    if (character.class.includes("Tanque")) {
                        document.querySelector("#tank-img").style.backgroundImage = `url('${character.image}')`;
                        document.querySelector("#tank").classList.remove("selected");
                        selectionActive = "none";
                    }
                    break;
                case "dpsa":
                    if (character.class.includes("DPS") || character.class.includes("Bruiser")) {
                        document.querySelector("#dpsa-img").style.backgroundImage = `url('${character.image}')`;
                        document.querySelector("#dpsa").classList.remove("selected");
                        selectionActive = "none";
                    }
                    break;
                case "dpsb":
                    if (character.class.includes("DPS") || character.class.includes("Bruiser")) {
                        document.querySelector("#dpsb-img").style.backgroundImage = `url('${character.image}')`;
                        document.querySelector("#dpsb").classList.remove("selected");
                        selectionActive = "none";
                    }
                    break;
                case "dpsc":
                    if (character.class.includes("DPS") || character.class.includes("Bruiser")) {
                        document.querySelector("#dpsc-img").style.backgroundImage = `url('${character.image}')`;
                        document.querySelector("#dpsc").classList.remove("selected");
                        selectionActive = "none";
                    }
                    break;
                case "dpsd":
                    if (character.class.includes("DPS") || character.class.includes("Bruiser")) {
                        document.querySelector("#dpsd-img").style.backgroundImage = `url('${character.image}')`;
                        document.querySelector("#dpsd").classList.remove("selected");
                        selectionActive = "none";
                    }
                    break;
                case "sup":
                    if (character.class.includes("Suporte")) {
                        document.querySelector("#sup-img").style.backgroundImage = `url('${character.image}')`;
                        document.querySelector("#sup").classList.remove("selected");
                        selectionActive = "none";
                    }
                    break;



                default:
                    break;
            }
        })
    });
}

document.querySelector("#tank").addEventListener('click', () => {
    selectionActive = "none";
    document.querySelectorAll(".class-icon").forEach(
        icon => icon.classList.remove("selected")
    )
    if (selectionActive !== "none") {
        selectionActive = "none";
        selectionActive = "none";
    } else {
        document.querySelector("#tank").classList.add("selected");
        selectionActive = "tank";
    }
});

document.querySelector("#dpsa").addEventListener('click', () => {
    selectionActive = "none";
    document.querySelectorAll(".class-icon").forEach(
        icon => icon.classList.remove("selected")
    )
    if (selectionActive !== "none") {
        selectionActive = "none";
    } else {
        document.querySelector("#dpsa").classList.add("selected");
        selectionActive = "dpsa";
    }
});

document.querySelector("#dpsb").addEventListener('click', () => {
    selectionActive = "none";
    document.querySelectorAll(".class-icon").forEach(
        icon => icon.classList.remove("selected")
    )
    if (selectionActive !== "none") {
        selectionActive = "none";
        selectionActive = "none";
    } else {
        document.querySelector("#dpsb").classList.add("selected");
        selectionActive = "dpsb";
    }
});

document.querySelector("#dpsc").addEventListener('click', () => {
    selectionActive = "none";
    document.querySelectorAll(".class-icon").forEach(
        icon => icon.classList.remove("selected")
    )
    if (selectionActive !== "none") {
        selectionActive = "none";
        selectionActive = "none";
    } else {
        document.querySelector("#dpsc").classList.add("selected");
        selectionActive = "dpsc";
    }
});

document.querySelector("#dpsd").addEventListener('click', () => {
    selectionActive = "none";
    document.querySelectorAll(".class-icon").forEach(
        icon => icon.classList.remove("selected")
    )
    if (selectionActive !== "none") {
        selectionActive = "none";
        selectionActive = "none";
    } else {
        document.querySelector("#dpsd").classList.add("selected");
        selectionActive = "dpsd";
    }
});

document.querySelector("#sup").addEventListener('click', () => {
    selectionActive = "none";
    document.querySelectorAll(".class-icon").forEach(
        icon => icon.classList.remove("selected")
    )
    if (selectionActive !== "none") {
        selectionActive = "none";
        selectionActive = "none";
    } else {
        document.querySelector("#sup").classList.add("selected");
        selectionActive = "sup";
    }
});

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

function handleFilterButtonClick(filter, button) {
    toggleFilter(filter);
    filterChars();
    button.classList.toggle('selected', activeFilters.has(filter));
}

Object.entries(filterButtons).forEach(([filter, button]) => {
    button.addEventListener("click", () => handleFilterButtonClick(filter, button));
});

window.addEventListener("load", addCharToList);
document.querySelector('.rot-bt').addEventListener('click', () => window.location.replace('index.html'));