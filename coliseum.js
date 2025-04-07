const chars = [
    { id: "A1", name: "Nenhum", image: "Img/Medals/None.png", class: ["Cortante", "Lutador", "Especialista", "Atirador", "Tanque", "DPS", "Bruiser", "Suporte", "Marinheiro", "Fruta do Diabo", "Shichibukai", "Supernova", "Mulher", "Chapéu de Palha", "Realeza", "Tritão", "Enel"] },
    { id: "A2", name: "Aokiji", image: "Img/Medals/Aokiji.png", class: ["Cortante", "Especialista", "Tanque", "Marinheiro", "Fruta do Diabo"] },
    { id: "A3", name: "Bartolomew Kuma", image: "Img/Medals/Kuma.png", class: ["Especialista", "Tanque", "Realeza", "Shichibukai", "Fruta do Diabo"] },
    { id: "A4", name: "Boa Hancock", image: "Img/Medals/Hancock.png", class: ["Lutador", "DPS", "Fruta do Diabo", "Shichibukai", "Realeza"] },
    { id: "A5", name: "Borsalino Kizaru", image: "Img/Medals/Kizaru.png", class: ["Atirador", "Especialista", "DPS", "Marinheiro", "Fruta do Diabo"] },
    { id: "A6", name: "Brook Timeskip", image: "Img/Medals/Brook_ts.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { id: "A7", name: "Chopper Timeskip", image: "Img/Medals/Chopper_ts.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { id: "A8", name: "Donquixote Doflamingo", image: "Img/Medals/Doflamingo.png", class: ["Atirador", "Especialista", "DPS", "Shichibukai", "Fruta do Diabo", "Realeza"] },
    { id: "A9", name: "Dracule Mihawk", image: "Img/Medals/Mihawk.png", class: ["Cortante", "DPS", "Shichibukai"] },
    { id: "B1", name: "Emporio Ivankov", image: "Img/Medals/Ivankov.png", class: ["Lutador", "Suporte", "Fruta do Diabo"] },
    { id: "B2", name: "Enel", image: "Img/Medals/Enel.png", class: ["DPS", "Atirador", "Especialista", "Fruta do Diabo"] },
    { id: "B3", name: "Franky Timeskip", image: "Img/Medals/Franky_ts.png", class: ["Atirador", "Tanque", "Chapéu de Palha"] },
    { id: "B4", name: "Jinbe", image: "Img/Medals/Jinbe.png", class: ["Lutador", "Tanque", "Tritão", "Shichibukai"] },
    { id: "B5", name: "Marshall D Teach", image: "Img/Medals/Barbanegra.png", class: ["Especialista", "Bruiser", "Fruta do Diabo"] },
    { id: "B6", name: "Marco", image: "Img/Medals/Marco.png", class: ["Especialista", "Suporte", "Lutador", "Fruta do Diabo"] },
    { id: "B7", name: "Luffy Timeskip", image: "Img/Medals/Luffy_ts.png", class: ["Lutador", "DPS", "Supernova", "Fruta do Diabo", "Chapéu de Palha"] },
    { id: "B8", name: "Nami Timeskip", image: "Img/Medals/Nami_ts.png", class: ["Especialista", "DPS", "Chapéu de Palha"] },
    { id: "B9", name: "Portgas D Ace", image: "Img/Medals/Ace.png", class: ["Atirador", "Especialista", "DPS", "Fruta do Diabo"] },
    { id: "C1", name: "Robin Timeskip", image: "Img/Medals/Robin_ts.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Fruta do Diabo"] },
    { id: "C2", name: "Zoro Timeskip", image: "Img/Medals/Zoro_ts.png", class: ["Cortante", "DPS", "Supernova", "Chapéu de Palha"] },
    { id: "C3", name: "Akainu", image: "Img/Medals/Akainu.png", class: ["DPS", "Lutador", "Marinheiro", "Especialista", "Fruta do Diabo"] },
    { id: "C4", name: "Shanks", image: "Img/Medals/Shanks.png", class: ["Cortante", "Bruiser"] },
    { id: "C5", name: "Usopp Timeskip", image: "Img/Medals/Usopp_ts.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { id: "C6", name: "Uta", image: "Img/Medals/Uta.png", class: ["DPS", "Especialista", "Fruta do Diabo"] },
    { id: "C7", name: "Sanji Timeskip", image: "Img/Medals/Sanji_ts.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
    { id: "C8", name: "Scratchmen Apoo", image: "Img/Medals/Apoo.png", class: ["Atirador", "Suporte", "Supernova", "Fruta do Diabo"] },
    { id: "C9", name: "Baby 5", image: "Img/Medals/Baby5.png", class: ["DPS", "Atirador", "Cortante", "Fruta do Diabo", "Mulher"] },
    { id: "D1", name: "Bartolomeo", image: "Img/Medals/Bartolomeo.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { id: "D2", name: "Bastille", image: "Img/Medals/Bastille.png", class: ["Cortante", "Tanque", "Marinheiro"] },
    { id: "D3", name: "Bellamy", image: "Img/Medals/Bellamy.png", class: ["Lutador", "DPS", "Fruta do Diabo"] },
    { id: "D4", name: "Jewelry Bonney", image: "Img/Medals/Bonney.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Supernova", "Mulher", "Realeza"] },
    { id: "D5", name: "Brook", image: "Img/Medals/Brook.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { id: "D6", name: "Capone Gang Bege", image: "Img/Medals/Capone.png", class: ["Atirador", "DPS", "Supernova", "Fruta do Diabo"] },
    { id: "D7", name: "Carrot", image: "Img/Medals/Carrot.png", class: ["Cortante", "Especialista", "DPS", "Mulher"] },
    { id: "D8", name: "Tony Tony Chopper", image: "Img/Medals/Chopper.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { id: "D9", name: "Crocodile", image: "Img/Medals/Crocodile.png", class: ["Especialista", "Tanque", "Fruta do Diabo", "Shichibukai"] },
    { id: "E1", name: "Dalmatian", image: "Img/Medals/Dalmatian.png", class: ["Cortante", "Bruiser", "Marinheiro", "Fruta do Diabo"] },
    { id: "E2", name: "X Drake", image: "Img/Medals/Drake.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Supernova", "Marinheiro"] },
    { id: "E3", name: "Franky", image: "Img/Medals/Franky.png", class: ["Atirador", "Bruiser", "Chapéu de Palha"] },
    { id: "E4", name: "Basil Hawkins", image: "Img/Medals/Hawkins.png", class: ["Especialista", "Bruiser", "Fruta do Diabo", "Supernova"] },
    { id: "E5", name: "Hina", image: "Img/Medals/Hina.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Marinheiro", "Mulher"] },
    { id: "E6", name: "Vinsmoke Ichiji", image: "Img/Medals/Ichiji.png", class: ["Bruiser", "Lutador", "Realeza"] },
    { id: "E7", name: "Jesus Burgess", image: "Img/Medals/Jesus.png", class: ["Lutador", "Tanque"] },
    { id: "E8", name: "Eustass Kid", image: "Img/Medals/Kid.png", class: ["Atirador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { id: "E9", name: "Killer", image: "Img/Medals/Killer.png", class: ["Cortante", "DPS", "Supernova"] },
    { id: "F1", name: "Koala", image: "Img/Medals/Koala.png", class: ["Lutador", "DPS", "Mulher"] },
    { id: "F2", name: "Leo e Mansherry", image: "Img/Medals/Leo.png", class: ["Especialista", "Suporte", "Realeza", "Fruta do Diabo", "Mulher"] },
    { id: "F3", name: "Monkey D Luffy", image: "Img/Medals/Luffy.png", class: ["Bruiser", "Lutador", "Fruta do Diabo", "Chapéu de Palha"] },
    { id: "F4", name: "Gecko Moria", image: "Img/Medals/Moria.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Shichibukai"] },
    { id: "F5", name: "Nami", image: "Img/Medals/Nami.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Mulher"] },
    { id: "F6", name: "Vinsmoke Niji", image: "Img/Medals/Niji.png", class: ["Atirador", "DPS", "Realeza"] },
    { id: "F7", name: "Perona", image: "Img/Medals/Perona.png", class: ["Especialista", "Suporte", "Fruta do Diabo", "Mulher"] },
    { id: "F8", name: "Rebecca", image: "Img/Medals/Rebecca.png", class: ["Cortante", "Tanque", "Realeza", "Mulher"] },
    { id: "F9", name: "Vinsmoke Reiju", image: "Img/Medals/Reiju.png", class: ["Suporte", "Especialista", "Realeza", "Mulher"] },
    { id: "G1", name: "Nico Robin", image: "Img/Medals/Robin.png", class: ["Especialista", "DPS", "Fruta do Diabo", "Chapéu de Palha", "Mulher"] },
    { id: "G2", name: "Ryuma", image: "Img/Medals/Ryuma.png", class: ["Cortante", "DPS"] },
    { id: "G3", name: "Vinsmoke Sanji", image: "Img/Medals/Sanji.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
    { id: "G4", name: "Smoker", image: "Img/Medals/Smoker.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Marinheiro"] },
    { id: "G5", name: "Urouge", image: "Img/Medals/Urouge.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { id: "G6", name: "Trafalgar Law", image: "Img/Medals/Law.png", class: ["Cortante", "Especialista", "DPS", "Fruta do Diabo", "Supernova"] },
    { id: "G7", name: "Usopp", image: "Img/Medals/Usopp.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { id: "G8", name: "Van Augur", image: "Img/Medals/Van_augur.png", class: ["Atirador", "DPS"] },
    { id: "G9", name: "Vinsmoke Yonji", image: "Img/Medals/Yonji.png", class: ["Lutador", "Tanque", "Realeza"] },
    { id: "H1", name: "Roronoa Zoro", image: "Img/Medals/Zoro.png", class: ["Cortante", "Bruiser", "Chapéu de Palha"] },
    { id: "H2", name: "Tashigi", image: "Img/Medals/Tashigi.png", class: ["Cortante", "DPS", "Marinheiro"] },
    { id: "H3", name: "Buggy", image: "Img/Medals/Buggy.png", class: ["Atirador", "DPS", "Fruta do Diabo"] },
    { id: "H4", name: "Satori", image: "Img/Medals/Satori.png", class: ["Enel"] },
    { id: "H5", name: "Gedatsu", image: "Img/Medals/Gedatsu.png", class: ["Enel"] },
    { id: "H6", name: "Ohm", image: "Img/Medals/Ohm.png", class: ["Enel"] },
    { id: "H7", name: "Shura", image: "Img/Medals/Shura.png", class: ["Enel"] },
    { id: "H8", name: "Arlong", image: "Img/Medals/Arlong.png", class: ["Lutador", "Bruiser", "Tritão"] },
    { id: "H9", name: "Bepo", image: "Img/Medals/Bepo.png", class: ["Lutador", "DPS"] },
    { id: "I1", name: "Mr 2", image: "Img/Medals/Mr2.png", class: ["Lutador", "DPS", "Fruta do Diabo"] },
    { id: "I3", name: "Daddy Masterson", image: "Img/Medals/Daddy.png", class: ["Atirador", "DPS", "Marinheiro"] },
    { id: "I4", name: "Mr 1", image: "Img/Medals/Mr1.png", class: ["Cortante", "Tanque", "Fruta do Diabo"] },
    { id: "I5", name: "Miss Doublefinger", image: "Img/Medals/Doublefinger.png", class: ["Cortante", "Bruiser", "Fruta do Diabo"] },
    { id: "I6", name: "Don Krieg", image: "Img/Medals/Krieg.png", class: ["Atirador", "DPS"] },
    { id: "I7", name: "Kuro", image: "Img/Medals/Kuro.png", class: ["Cortante", "DPS"] },
    { id: "I8", name: "Mr 3", image: "Img/Medals/Mr3.png", class: ["Suporte", "Especialista", "Fruta do Diabo"] },
    { id: "I9", name: "Nefertari Vivi", image: "Img/Medals/Vivi.png", class: ["Cortante", "Suporte"] },
    { id: "J1", name: "Wapol", image: "Img/Medals/Wapol.png", class: ["Atirador", "Tanque", "Fruta do Diabo"] },
    { id: "J2", name: "Alvida", image: "Img/Medals/Alvida.png", class: ["Lutador", "Suporte"] },
    { id: "J3", name: "Buchi e Sham", image: "Img/Medals/Buchi.png", class: ["Cortante", "Bruiser"] },
    { id: "J4", name: "Cabaji", image: "Img/Medals/Cabaji.png", class: ["Cortante", "DPS"] },
    { id: "J5", name: "Chew", image: "Img/Medals/Chew.png", class: ["Atirador", "DPS", "Tritão"] },
    { id: "J6", name: "Eric", image: "Img/Medals/Eric.png", class: ["Atirador", "DPS", "Cortante", "Fruta do Diabo"] },
    { id: "J7", name: "Gin", image: "Img/Medals/Gin.png", class: ["Lutador", "Atirador", "DPS"] },
    { id: "J8", name: "Goldenweek", image: "Img/Medals/Goldenweek.png", class: ["Especialista", "Suporte"] },
    { id: "J9", name: "Hatchan", image: "Img/Medals/Hatchan.png", class: ["Cortante", "Suporte", "Tritão"] },
    { id: "K1", name: "Jango", image: "Img/Medals/Jango.png", class: ["Atirador", "Suporte"] },
    { id: "K2", name: "Kuroobi", image: "Img/Medals/Kuroobi.png", class: ["Lutador", "Tanque", "Tritão"] },
    { id: "K3", name: "Mohji", image: "Img/Medals/Mohji.png", class: ["Especialista", "Bruiser"] },
    { id: "K4", name: "Morgan", image: "Img/Medals/Morgan.png", class: ["Cortante", "Bruiser"] },
    { id: "K5", name: "Mr 4", image: "Img/Medals/Mr4.png", class: ["Bruiser", "Atirador"] },
    { id: "K6", name: "Mr 5", image: "Img/Medals/Mr5.png", class: ["Atirador", "DPS", "Fruta do Diabo"] },
    { id: "K7", name: "Pearl", image: "Img/Medals/Pearl.png", class: ["Lutador", "Especialista", "Tanque"] },
    { id: "K8", name: "Sabo", image: "Img/Medals/Sabo.png", class: ["Lutador", "Especialista", "DPS", "Fruta do Diabo"] },
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
};

let activeFilters = new Set();
let hoveredFilter = null;

let selectionActive = "none";

let charSelector = false;

const searchBar = document.querySelector('.search-bar-filter');

searchBar.addEventListener('input', () => {
    filterChars();
});

function loadSelectionsFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const chars = params.get('chars');
    if (chars) {
        const decoded = decodeURIComponent(chars);
        const selections = [];
        for (let i = 0; i < decoded.length; i += 2) {
            const chunk = decoded.slice(i, i + 2);
            selections.push(chunk);
        }
        return selections;
    }
    return Array(62).fill('A1');
}

const selections = loadSelectionsFromUrl();

function generateUrl(selections) {
    const flat = selections.map(sel => sel || 'A1').join('');
    const encoded = encodeURIComponent(flat);
    const url = `${window.location.origin}${window.location.pathname}?chars=${encoded}`;
    console.log(url)
    return url;
}

function loadChars(selections) {
    selections.forEach((selection, index) => {
        document.querySelectorAll(".coli-img").forEach((img, imgindex) => {
            if (imgindex === index) {
                img.style.backgroundImage = `url("${chars.find(char => char.id === selection).image}")`;
                document.querySelector(`.${sanitizeName(chars.find(char => char.id === selection).name)}div`).classList.add("selected");
                enemies[index].char = chars.find(char => char.id === selection);
            }
        })
    })
}

function sanitizeName(name) {
    return name.replace(/\s+/g, '');
}

function addCharToList() {
    const charListDiv = document.querySelector(".chars");

    chars.forEach(character => {
        const charDiv = document.createElement("div");
        charDiv.classList.add("char");
        charDiv.classList.add(`${sanitizeName(character.name)}div`);

        const charImg = document.createElement("div");
        charImg.classList.add('char-img');
        charImg.style.backgroundImage = `url('${character.image}')`;

        const textElement = document.createElement("p");
        textElement.innerText = character.name;
        textElement.classList.add("title");

        charDiv.append(charImg, textElement);
        charListDiv.appendChild(charDiv);

        charDiv.addEventListener('click', () => {
            if (selectionActive === "none") return;

            let prevEnemy = enemies.find((enemy) => enemy.char === character);
            if (prevEnemy) {
                prevEnemy.char = null;
                const prevImg = document.querySelector(`.${sanitizeName(prevEnemy.name)}-img`);
                if (prevImg) {
                    prevImg.style.backgroundImage = `url('Img/Medals/None.png')`;
                }
                selections[enemies.indexOf(prevEnemy)] = "A1";
            }

            enemies.forEach(enemy => {
                if (enemy.name === selectionActive) {
                    if (enemy.char) {
                        const prevCharClass = `.${sanitizeName(enemy.char.name)}div`;
                        const prevCharElement = document.querySelector(prevCharClass);
                        if (prevCharElement) {
                            prevCharElement.classList.remove("selected");
                        }
                    }

                    enemy.char = character;

                    const enemyIndex = enemies.indexOf(enemy);
                    if (enemyIndex !== -1) {
                        selections[enemyIndex] = character.id;
                    }


                    const targetImg = document.querySelector(`.${sanitizeName(selectionActive)}-img`);
                    if (targetImg) {
                        targetImg.style.backgroundImage = `url('${character.image}')`;
                    }

                    const targetBox = document.querySelector(`.${sanitizeName(selectionActive)}`);
                    if (targetBox) {
                        targetBox.classList.remove("selected");
                    }

                    selectionActive = "none";
                    document.querySelector(".char-selector-bg").style.display = "none";
                    charDiv.classList.add("selected");
                    searchBar.value = "";
                    filterChars();
                }
            });
        });
    });
}


const enemies = [
    { name: "Alvida", char: null, data: chars.find(char => char.name === "Alvida") },
    { name: "Morgan", char: null, data: chars.find(char => char.name === "Morgan") },
    { name: "Mohji", char: null, data: chars.find(char => char.name === "Mohji") },
    { name: "Cabaji", char: null, data: chars.find(char => char.name === "Cabaji") },
    { name: "Buggy", char: null, data: chars.find(char => char.name === "Buggy") },
    { name: "Jango", char: null, data: chars.find(char => char.name === "Jango") },
    { name: "Buchi", char: null, data: chars.find(char => char.id === "J3") },
    { name: "Kuro", char: null, data: chars.find(char => char.name === "Kuro") },
    { name: "Pearl", char: null, data: chars.find(char => char.name === "Pearl") },
    { name: "Gin", char: null, data: chars.find(char => char.name === "Gin") },
    { name: "Krieg", char: null, data: chars.find(char => char.id === "I6") },
    { name: "Chew", char: null, data: chars.find(char => char.name === "Chew") },
    { name: "Hatchan", char: null, data: chars.find(char => char.name === "Hatchan") },
    { name: "Kuroobi", char: null, data: chars.find(char => char.name === "Kuroobi") },
    { name: "Arlong", char: null, data: chars.find(char => char.name === "Arlong") },
    { name: "Eric", char: null, data: chars.find(char => char.name === "Eric") },
    { name: "Mr5", char: null, data: chars.find(char => char.id === "K6") },
    { name: "Mr4", char: null, data: chars.find(char => char.id === "K5") },
    { name: "Goldenweek", char: null, data: chars.find(char => char.name === "Goldenweek") },
    { name: "Mr3", char: null, data: chars.find(char => char.id === "I8") },
    { name: "Mr2", char: null, data: chars.find(char => char.id === "I1") },
    { name: "Doublefinger", char: null, data: chars.find(char => char.id === "I5") },
    { name: "Mr1", char: null, data: chars.find(char => char.id === "I4") },
    { name: "Crocodile", char: null, data: chars.find(char => char.name === "Crocodile") },
    { name: "Wapol", char: null, data: chars.find(char => char.name === "Wapol") },
    { name: "Daddy", char: null, data: chars.find(char => char.id === "I3") },
    { name: "Tashigi", char: null, data: chars.find(char => char.name === "Tashigi") },
    { name: "Smoker", char: null, data: chars.find(char => char.name === "Smoker") },
    { name: "Hina", char: null, data: chars.find(char => char.name === "Hina") },
    { name: "Drake", char: null, data: chars.find(char => char.id === "E2") },
    { name: "Bastille", char: null, data: chars.find(char => char.name === "Bastille") },
    { name: "Dalmatian", char: null, data: chars.find(char => char.name === "Dalmatian") },
    { name: "Bepo", char: null, data: chars.find(char => char.name === "Bepo") },
    { name: "Law", char: null, data: chars.find(char => char.id === "G6") },
    { name: "Hawkins", char: null, data: chars.find(char => char.id === "E4") },
    { name: "Capone", char: null, data: chars.find(char => char.id === "D6") },
    { name: "Apoo", char: null, data: chars.find(char => char.id === "C8") },
    { name: "Urouge", char: null, data: chars.find(char => char.name === "Urouge") },
    { name: "Killer", char: null, data: chars.find(char => char.name === "Killer") },
    { name: "Kid", char: null, data: chars.find(char => char.id === "E8") },
    { name: "Vivi", char: null, data: chars.find(char => char.id === "I9") },
    { name: "Rebecca", char: null, data: chars.find(char => char.name === "Rebecca") },
    { name: "Perona", char: null, data: chars.find(char => char.name === "Perona") },
    { name: "Leo", char: null, data: chars.find(char => char.id === "F2") },
    { name: "Yonji", char: null, data: chars.find(char => char.id === "G9") },
    { name: "Niji", char: null, data: chars.find(char => char.id === "F6") },
    { name: "Reiju", char: null, data: chars.find(char => char.id === "F9") },
    { name: "Ichiji", char: null, data: chars.find(char => char.id === "E6") },
    { name: "Bonney", char: null, data: chars.find(char => char.id === "D4") },
    { name: "Usopp", char: null, data: chars.find(char => char.name === "Usopp") },
    { name: "Nami", char: null, data: chars.find(char => char.name === "Nami") },
    { name: "Chopper", char: null, data: chars.find(char => char.id === "D8") },
    { name: "Brook", char: null, data: chars.find(char => char.name === "Brook") },
    { name: "Franky", char: null, data: chars.find(char => char.name === "Franky") },
    { name: "Robin", char: null, data: chars.find(char => char.id === "G1") },
    { name: "Sanji", char: null, data: chars.find(char => char.id === "G3") },
    { name: "Zoro", char: null, data: chars.find(char => char.id === "H1") },
    { name: "Luffy", char: null, data: chars.find(char => char.id === "F3") },
    { name: "Koala", char: null, data: chars.find(char => char.name === "Koala") },
    { name: "Barto", char: null, data: chars.find(char => char.name === "Bartolomeo") },
    { name: "Burgess", char: null, data: chars.find(char => char.id === "E7") },
    { name: "Sabo", char: null, data: chars.find(char => char.name === "Sabo") },
];

enemies.forEach((char) => {
    document.querySelector(`.${char.name}`).addEventListener('click', () => {
        selectionActive = "none";
        document.querySelectorAll(".group-item").forEach(icon => icon.classList.remove("selected"));
        document.querySelector(`.${char.name}`).classList.add("selected");
        selectionActive = char.name;
        document.querySelector(".char-selector-bg").style.display = 'flex';
        document.querySelector(".select-enemy").style.backgroundImage = `url("${chars.find(charf => charf.id === char.data.id).image}")`;
        document.querySelector(".select-img").style.backgroundImage = `url("${char.char ? char.char.image : "Img/Medals/None.png"}")`;
        charSelector = true;
    });
});

document.querySelectorAll('.group-nick input').forEach(input => {
    input.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

function toggleFilter(filter) {
    activeFilters.has(filter) ? activeFilters.delete(filter) : activeFilters.add(filter);
}

function filterChars() {
    const allChars = document.querySelectorAll('.char');
    const searchTerm = searchBar.value.toLowerCase();

    allChars.forEach(char => {
        const charName = char.querySelector('p').innerText.toLowerCase();
        const charData = chars.find(character => character.name.toLowerCase() === charName);

        let showChar = Array.from(activeFilters).every(filter => charData.class.includes(filter)) &&
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

document.querySelector(".select-none").addEventListener("click", () => {
    document.querySelectorAll(".coli-img").forEach(char => {
        char.style.backgroundImage = "url('Img/Medals/None.png')";
    });

    document.querySelectorAll(".char").forEach(char => {
        char.classList.remove("selected");
    });

    selections.fill("A1");

    enemies.forEach(enemy => {
        enemy.char = null;
    });
});


document.querySelector(".close-char-selector").addEventListener('click', () => {
    if (charSelector) {
        charSelector = false;
        document.querySelector(".char-selector-bg").style.display = "none";
        document.querySelector(`.${selectionActive}`).classList.remove("selected");
        selectionActive = "none";
        searchBar.value = "";
        filterChars();
    }
})

window.addEventListener("load", addCharToList);
document.querySelector('.rot-bt').addEventListener('click', () => window.location.replace('index.html'));

document.querySelector(".link-bt").addEventListener("click", () => {
    const url = generateUrl(selections);

    navigator.clipboard.writeText(url)
        .then(() => {
            const message = document.querySelector(".link-bt-cop");

            message.classList.add("show");

            setTimeout(() => {
                message.classList.remove("show");
            }, 2000);
        })
        .catch(err => {
            console.error("Clipboard copy failed:", err);
            alert("Failed to copy the link.");
        });
});

document.querySelector(".warn").addEventListener("click", () => {
    loadChars(selections)
})

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loadChars(selections);
    }, 1000);
});  