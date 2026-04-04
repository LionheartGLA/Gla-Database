const chars = [
    { name: "Marco", type: "dima", dates: ["13-06-2025", "18-04-2025", "21-03-2025", "13-12-2024", "09-08-2024", "26-04-2024"], image: "Img/Medals/Marco.png", class: ["Especialista", "Lutador", "Suporte", "Fruta do Diabo"] },
    { name: "Uta", type: "dima", dates: ["30-05-2025", "18-04-2025", "14-03-2025", "13-12-2024", "30-08-2024", "19-04-2024"], image: "Img/Medals/Uta.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Scratchmen Apoo", type: "gold", dates: ["18-07-2025", "20-06-2025", "02-05-2025", "28-02-2025", "10-01-2025", "29-11-2024", "27-09-2024", "06-09-2024", "28-06-2024", "10-05-2024"], image: "Img/Medals/Apoo.png", class: ["Atirador", "Suporte", "Supernova", "Fruta do Diabo"] },
    { name: "Baby 5", type: "gold", dates: ["23-05-2025", "18-04-2025", "07-02-2025", "31-01-2025", "29-11-2024", "25-10-2024", "11-10-2024", "06-09-2024", "12-07-2024", "31-05-2024"], image: "Img/Medals/Baby5.png", class: ["DPS", "Atirador", "Cortante", "Fruta do Diabo", "Mulher"] },
    { name: "Bartolomeo", type: "gold", dates: ["04-07-2025", "16-05-2025", "11-04-2025", "21-02-2025", "17-01-2025", "15-11-2024", "18-10-2024", "30-08-2024", "05-07-2024", "26-04-2024", "24-05-2024"], image: "Img/Medals/Bartolomeo.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Bastille", type: "gold", dates: ["18-07-2025", "13-06-2025", "18-04-2025", "14-02-2025", "31-01-2025", "29-11-2024", "11-10-2024", "06-09-2024", "19-07-2024", "17-05-2024"], image: "Img/Medals/Bastille.png", class: ["Cortante", "Tanque", "Marinheiro"] },
    { name: "Bellamy", type: "gold", dates: ["27-06-2025", "20-06-2025", "02-05-2025", "14-03-2025", "31-01-2025", "13-12-2024", "15-11-2024", "13-09-2024", "14-06-2024", "17-05-2024"], image: "Img/Medals/Bellamy.png", class: ["Lutador", "DPS", "Fruta do Diabo"] },
    { name: "Jewelry Bonney", type: "gold", dates: ["18-07-2025", "30-05-2025", "11-04-2025", "21-02-2025", "10-01-2025", "13-12-2024", "27-09-2024", "06-09-2024", "12-07-2024", "31-05-2024"], image: "Img/Medals/Bonney.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Supernova", "Mulher", "Realeza"] },
    { name: "Brook", type: "gold", dates: ["20-06-2025", "23-05-2025", "04-04-2025", "28-02-2025", "03-01-2025", "15-11-2024", "04-10-2024", "16-08-2024", "14-06-2024", "10-05-2024"], image: "Img/Medals/Brook.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Capone Gang Bege", type: "gold", dates: ["11-07-2025", "30-05-2025", "28-03-2025", "07-02-2025", "17-01-2025", "13-12-2024", "13-09-2024", "28-06-2024", "07-06-2024", "26-04-2024"], image: "Img/Medals/Capone.png", class: ["Atirador", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Carrot", type: "gold", dates: ["16-05-2025", "04-04-2025", "07-03-2025", "03-01-2025", "22-11-2024", "04-10-2024", "16-08-2024", "21-06-2024", "31-05-2024", "26-04-2024"], image: "Img/Medals/Carrot.png", class: ["Cortante", "Especialista", "DPS", "Mulher"] },
    { name: "Tony Tony Chopper", type: "gold", dates: ["20-06-2025", "28-03-2025", "21-02-2025", "17-01-2025", "06-12-2024", "08-11-2024", "13-09-2024", "02-08-2024", "28-06-2024", "17-05-2024"], image: "Img/Medals/Chopper.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Crocodile", type: "gold", dates: ["04-07-2025", "09-05-2025", "21-03-2025", "24-01-2025", "27-09-2024", "16-08-2024", "26-07-2024", "24-05-2024"], image: "Img/Medals/Crocodile.png", class: ["Especialista", "Tanque", "Fruta do Diabo", "Shichibukai"] },
    { name: "Dalmatian", type: "gold", dates: ["11-07-2025", "13-06-2025", "28-03-2025", "21-03-2025", "31-01-2025", "13-12-2024", "08-11-2024", "18-10-2024", "23-08-2024", "19-07-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Dalmatian.png", class: ["Cortante", "Bruiser", "Marinheiro", "Fruta do Diabo"] },
    { name: "X Drake", type: "gold", dates: ["20-06-2025", "02-05-2025", "28-02-2025", "24-01-2025", "15-11-2024", "25-10-2024", "02-08-2024", "26-07-2024", "03-05-2024"], image: "Img/Medals/Drake.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Supernova", "Marinheiro"] },
    { name: "Franky", type: "gold", dates: ["04-07-2025", "16-05-2025", "11-04-2025", "07-03-2025", "27-12-2024", "29-11-2024", "01-11-2024", "13-09-2024", "30-08-2024", "05-07-2024", "24-05-2024"], image: "Img/Medals/Franky.png", class: ["Atirador", "Bruiser", "Chapéu de Palha"] },
    { name: "Basil Hawkins", type: "gold", dates: ["16-05-2025", "04-04-2025", "14-02-2025", "17-01-2025", "22-11-2024", "01-11-2024", "11-10-2024", "09-08-2024", "12-07-2024", "10-05-2024"], image: "Img/Medals/Hawkins.png", class: ["Especialista", "Bruiser", "Fruta do Diabo", "Supernova"] },
    { name: "Hina", type: "gold", dates: ["11-07-2025", "09-05-2025", "07-02-2025", "31-01-2025", "06-12-2024", "01-11-2024", "04-10-2024", "30-08-2024", "21-06-2024", "24-05-2024"], image: "Img/Medals/Hina.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Marinheiro", "Mulher"] },
    { name: "Vinsmoke Ichiji", type: "gold", dates: ["27-06-2025", "23-05-2025", "18-04-2025", "21-03-2025", "03-01-2025", "06-12-2024", "01-11-2024", "25-10-2024", "16-08-2024", "03-05-2024"], image: "Img/Medals/Ichiji.png", class: ["Bruiser", "Lutador", "Realeza"] },
    { name: "Jesus Burgess", type: "gold", dates: ["09-05-2025", "07-03-2025", "03-01-2025", "22-11-2024", "20-09-2024", "02-08-2024", "28-06-2024", "10-05-2024"], image: "Img/Medals/Jesus.png", class: ["Lutador", "Tanque"] },
    { name: "Eustass Kid", type: "gold", dates: ["06-06-2025", "28-03-2025", "14-03-2025", "17-01-2025", "15-11-2024", "20-09-2024", "30-08-2024", "12-07-2024", "07-06-2024", "15-03-2024"], image: "Img/Medals/Kid.png", class: ["Atirador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Killer", type: "gold", dates: ["18-07-2025", "13-06-2025", "04-04-2025", "21-02-2025", "27-12-2024", "20-09-2024", "09-08-2024", "21-06-2024", "03-05-2024"], image: "Img/Medals/Killer.png", class: ["Cortante", "DPS", "Supernova"] },
    { name: "Koala", type: "gold", dates: ["30-05-2025", "18-04-2025", "21-03-2025", "27-12-2024", "29-11-2024", "11-10-2024", "30-08-2024", "14-06-2024", "31-05-2024"], image: "Img/Medals/Koala.png", class: ["Lutador", "DPS", "Mulher"] },
    { name: "Trafalgar Law", type: "gold", dates: ["04-07-2025", "16-05-2025", "25-04-2025", "07-03-2025", "20-12-2024", "01-11-2024", "27-09-2024", "23-08-2024", "05-07-2024", "17-05-2024"], image: "Img/Medals/Law.png", class: ["Cortante", "Especialista", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Leo e Mansherry", type: "gold", dates: ["30-05-2025", "25-04-2025", "28-02-2025", "20-12-2024", "11-10-2024", "02-08-2024", "05-07-2024", "14-06-2024", "19-04-2024"], image: "Img/Medals/Leo.png", class: ["Especialista", "Suporte", "Realeza", "Fruta do Diabo", "Mulher"] },
    { name: "Monkey D. Luffy", type: "gold", dates: ["04-07-2025", "09-05-2025", "11-04-2025", "28-02-2025", "10-01-2025", "29-11-2024", "27-09-2024", "23-08-2024", "28-06-2024", "03-05-2024"], image: "Img/Medals/Luffy.png", class: ["Bruiser", "Lutador", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Gecko Moria", type: "gold", dates: ["11-07-2025", "06-06-2025", "02-05-2025", "07-03-2025", "07-02-2025", "20-12-2024", "13-10-2023"], image: "Img/Medals/Moria.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Shichibukai"] },
    { name: "Nami", type: "gold", dates: ["06-06-2025", "04-04-2025", "07-02-2025", "24-01-2025", "01-11-2024", "27-09-2024", "02-08-2024", "21-06-2024", "17-05-2024"], image: "Img/Medals/Nami.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Mulher"] },
    { name: "Vinsmoke Niji", type: "gold", dates: ["18-07-2025", "06-06-2025", "11-04-2025", "21-02-2025", "31-01-2025", "06-12-2024", "18-10-2024", "02-08-2024", "19-07-2024", "24-05-2024", "26-04-2024"], image: "Img/Medals/Niji.png", class: ["Atirador", "DPS", "Realeza"] },
    { name: "Perona", type: "gold", dates: ["30-05-2025", "02-05-2025", "14-02-2025", "24-01-2025", "15-11-2024", "04-10-2024", "16-08-2024", "05-07-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Perona.png", class: ["Especialista", "Suporte", "Fruta do Diabo", "Mulher"] },
    { name: "Rebecca", type: "gold", dates: ["04-07-2025", "13-06-2025", "09-05-2025", "14-02-2025", "27-12-2024", "20-12-2024", "18-10-2024", "09-08-2024", "19-07-2024", "07-06-2024", "05-04-2024"], image: "Img/Medals/Rebecca.png", class: ["Cortante", "Tanque", "Realeza", "Mulher"] },
    { name: "Vinsmoke Reiju", type: "gold", dates: ["23-05-2025", "02-05-2025", "14-02-2025", "10-01-2025", "20-12-2024", "08-11-2024", "13-09-2024", "06-09-2024", "12-07-2024", "10-05-2024"], image: "Img/Medals/Reiju.png", class: ["Suporte", "Especialista", "Realeza", "Mulher"] },
    { name: "Nico Robin", type: "gold", dates: ["11-07-2025", "09-05-2025", "25-04-2025", "07-03-2025", "17-01-2025", "20-12-2024", "08-11-2024", "20-09-2024", "09-08-2024", "21-06-2024", "10-05-2024", "26-04-2024"], image: "Img/Medals/Robin.png", class: ["Especialista", "DPS", "Fruta do Diabo", "Chapéu de Palha", "Mulher"] },
    { name: "Ryuma", type: "gold", dates: ["18-07-2025", "06-06-2025", "28-03-2025", "03-01-2025", "08-11-2024", "18-10-2024", "26-07-2024", "21-06-2024", "14-06-2024", "12-04-2024"], image: "Img/Medals/Ryuma.png", class: ["Cortante", "DPS"] },
    { name: "Vinsmoke Sanji", type: "gold", dates: ["27-06-2025", "16-05-2025", "21-03-2025", "07-02-2025", "03-01-2025", "22-11-2024", "25-10-2024", "18-10-2024", "16-08-2024", "26-07-2024", "24-05-2024"], image: "Img/Medals/Sanji.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
    { name: "Smoker", type: "gold", dates: ["27-06-2025", "06-06-2025", "25-04-2025", "14-02-2025", "10-01-2025", "06-12-2024", "13-09-2024", "23-08-2024", "12-07-2024", "03-05-2024"], image: "Img/Medals/Smoker.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Marinheiro"] },
    { name: "Urouge", type: "gold", dates: ["27-06-2025", "11-04-2025", "14-03-2025", "24-01-2025", "08-11-2024", "11-10-2024", "06-09-2024", "26-07-2024", "31-05-2024"], image: "Img/Medals/Urouge.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Usopp", type: "gold", dates: ["11-07-2025", "23-05-2025", "28-03-2025", "14-03-2025", "10-01-2025", "04-10-2024", "26-07-2024", "14-06-2024", "03-05-2024"], image: "Img/Medals/Usopp.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { name: "Van Augur", type: "gold", dates: ["23-05-2025", "04-04-2025", "14-03-2025", "24-01-2025", "06-12-2024", "25-10-2024", "04-10-2024", "23-08-2024", "05-07-2024", "17-05-2024"], image: "Img/Medals/Van_augur.png", class: ["Atirador", "DPS"] },
    { name: "Vinsmoke Yonji", type: "gold", dates: ["20-06-2025", "25-04-2025", "28-02-2025", "27-12-2024", "22-11-2024", "20-09-2024", "09-08-2024", "19-07-2024", "28-06-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Yonji.png", class: ["Lutador", "Tanque", "Realeza"] },
    { name: "Roronoa Zoro", type: "gold", dates: ["27-06-2025", "13-06-2025", "25-04-2025", "21-02-2025", "27-12-2024", "22-11-2024", "25-10-2024", "20-09-2024", "23-08-2024", "19-07-2024", "31-05-2024"], image: "Img/Medals/Zoro.png", class: ["Cortante", "Bruiser", "Chapéu de Palha"] },
]

const lastDate = "18-07-2025";

function getRotationChars(rotation) {
    return rotation
        .filter(name => name.trim() !== '')
        .map(name => chars.find(char => char.name.toLowerCase().includes(name.toLowerCase())) || null);
}

const rotationOne = getRotationChars(['Ryuma', 'Killer', 'Jewelry Bonney']);
const rotationTwo = getRotationChars(['Vinsmoke Niji', 'Bastille', 'Scratchmen Apoo']);

const specialRot = getRotationChars(['']);

const foods = [
    { name: "Paella de Camarão", img: "Img/Food/paelladecamarao.png", lvl: 140, cd: 180, ing: [{ "Camarão Cru": 8, "Arroz": 2, "Folhas Verdes": 1, "Tomates": 1, "Azeite": 1, "Pimenta": 1, "Água": 3, "Sal": 1, "Trufa Branca": 3 }] },
    { name: "Frango Teriyaki", img: "Img/Food/frangoteriyaki.png", lvl: 140, cd: 300, ing: [{ "Galinha": 5, "Pimenta": 1, "Tomates": 3, "Sal": 2, "Azeite": 6, "Folhas Verdes": 3, "Alho": 3, "Trufa Branca": 3, "Creme de Leite": 3 }] },
    { name: "Polvo Grelhado", img: "Img/Food/polvogrelhado.png", lvl: 130, cd: 180, ing: [{ "Polvo Cru": 5, "Sal": 4, "Azeite": 2, "Cebola": 2, "Alho": 2, "Queijo": 3, "Folhas Verdes": 3, "Tomates": 6, "Creme de Leite": 3, "Trufa Branca": 1 }] },
    { name: "Carne de Cordeiro", img: "Img/Food/carnedecordeiro.png", lvl: 130, cd: 300, ing: [{ "Carne de Cordeiro Crua": 1, "Sal": 2, "Pimenta": 1, "Azeite": 3, "Folhas Verdes": 2, "Cebola": 2, "Alho": 2, "Cogumelo": 2, "Limão": 1, "Vinho Branco": 1, "Trufa Branca": 1 }] },
    { name: "Sopa de Caranguejo", img: "Img/Food/sopadecaranguejo.png", lvl: 120, cd: 180, ing: [{ "Pasta": 13, "Água": 9, "Sal": 2, "Queijo": 3, "Cebola": 3, "Carne de Caranguejo": 4, "Folhas Verdes": 3, "Tomates": 6, "Pimenta": 4, "Trufa Branca": 2 }] },
    { name: "Espetinho de Polvo", img: "Img/Food/espetinhodepolvo.png", lvl: 120, cd: 300, ing: [{ "Polvo cru": 3, "Sal": 4, "Pimenta": 1, "Azeite": 2, "Cebola": 1, "Alho": 2 }] },
    { name: "Bife Wagyu", img: "Img/Food/bifewagyu.png", lvl: 110, cd: 180, ing: [{ "Bife Cru Premium": 6, "Sal": 4, "Pimenta": 3, "Azeite": 6, "Folhas Verdes": 4, "Cebola": 3, "Alho": 2, "Cogumelo": 5, "Limão": 2, "Vinho Branco": 1, "Trufa Branca": 2 }] }, 
    { name: "Atum Grelhado", img: "Img/Food/atumgrelhado.png", lvl: 110, cd: 300, ing: [{ "Azeite": 2, "Limão": 2, "Alho": 2, "Atum": 5, "Pimenta": 2, "Folhas Verdes": 2, "Alface": 4, "Vinho Branco": 1, "Manteiga": 2 }] },
    { name: "Paella de Frutos do Mar", img: "Img/Food/paelladefrutosdomar.png", lvl: 100, cd: 180, ing: [{ "Camarão Cru": 5, "Lagosta Crua": 3, "Arroz": 2, "Folhas Verdes": 1, "Tomates": 1, "Peixe Cru": 1, "Azeite": 1, "Pimenta": 1, "Água": 3, "Sal": 1 }] },
    { name: "Ensopado de Ostra", img: "Img/Food/ensopadodeostra.png", lvl: 100, cd: 300, ing: [{ "Ostra": 3, "Creme de Leite": 1, "Sal": 2, "Pimenta": 2, "Manteiga": 2, "Cebola": 1, "Alho": 1 }] },
    { name: "Camarões Salteados", img: "Img/Food/camaroessalteados.png", lvl: 90, cd: 180, ing: [{ "Camarão Cru": 4, "Manteiga": 1, "Azeite": 3, "Vinho Branco": 1, "Alho": 4, "Pimenta": 2, "Limão": 2, "Sal": 1, "Folhas Verdes": 2, "Trufa Branca": 1 }] },
    { name: "Curry de Coelho", img: "Img/Food/currydecoelho.png", lvl: 90, cd: 300, ing: [{ "Carne Crua de Coelho": 5, "Ovos": 1, "Azeite": 2, "Sal": 2, "Pimenta": 2, "Alho": 1, "Cebola": 1, "Tomates": 2 }] },
    { name: "Espeto de Carne Gourmet", img: "Img/Food/espetodecarnegourmet.png", lvl: 80, cd: 180, ing: [{ "Bife Cru Premium": 4, "Sal": 2, "Pimenta": 3, "Azeite": 3, "Bacon": 5, "Cebola": 4, "Folhas Verdes": 3, "Vinho Branco": 1 }] },
    { name: "Medalhão de Carne", img: "Img/Food/medalhaodecarne.png", lvl: 80, cd: 300, ing: [{ "Bife Cru Premium": 3, "Bacon": 8, "Azeite": 3, "Folhas Verdes": 1, "Alho": 1, "Sal": 2, "Batata": 4, "Água": 4, "Limão": 2 }] },
    { name: "Salada Italiana", img: "Img/Food/saladaitaliana.png", lvl: 70, cd: 180, ing: [{ "Alface": 5, "Trufa Branca": 5, "Folhas Verdes": 1, "Tomates": 3, "Azeite": 1, "Batata": 2, "Sal": 1 }] },
    { name: "Bife e Ovo de Frigideira", img: "Img/Food/bifeeovodefrigideira.png", lvl: 70, cd: 300, ing: [{ "Bife Cru Premium": 3, "Ovos": 2, "Pimenta": 2, "Azeite": 1, "Folhas Verdes": 1, "Sal": 4 }] },
]

const ingredients = [
    { name: "Bife Cru Premium", cost: 200, img: "Img/Food/Ingredientes/bifecrupremium.png" },
    { name: "Lagosta Crua", cost: 370, img: "Img/Food/Ingredientes/lagostacrua.png" },
    { name: "Camarão Cru", cost: 300, img: "Img/Food/Ingredientes/camaraocru.png" },
    { name: "Carne Crua de Coelho", cost: 186, img: "Img/Food/Ingredientes/carnecruadecoelho.png" },
    { name: "Peixe Cru", cost: 50, img: "Img/Food/Ingredientes/peixecru.png" },
    { name: "Atum", cost: 86, img: "Img/Food/Ingredientes/atum.png" },
    { name: "Ostra", cost: 360, img: "Img/Food/Ingredientes/ostra.png" },
    { name: "Bacon", cost: 10, img: "Img/Food/Ingredientes/bacon.png" },
    { name: "Ovos", cost: 10, img: "Img/Food/Ingredientes/ovos.png" },
    { name: "Manteiga", cost: 40, img: "Img/Food/Ingredientes/manteiga.png" },
    { name: "Folhas Verdes", cost: 15, img: "Img/Food/Ingredientes/folhasverdes.png" },
    { name: "Alface", cost: 20, img: "Img/Food/Ingredientes/alface.png" },
    { name: "Tomates", cost: 10, img: "Img/Food/Ingredientes/tomates.png" },
    { name: "Limão", cost: 10, img: "Img/Food/Ingredientes/limao.png" },
    { name: "Água", cost: 5, img: "Img/Food/Ingredientes/agua.png" },
    { name: "Vinho Branco", cost: 700, img: "Img/Food/Ingredientes/vinhobranco.png" },
    { name: "Cogumelo", cost: 20, img: "Img/Food/Ingredientes/cogumelo.png" },
    { name: "Trufa Branca", cost: 250, img: "Img/Food/Ingredientes/trufabranca.png" },
    { name: "Sal", cost: 10, img: "Img/Food/Ingredientes/sal.png" },
    { name: "Pimenta", cost: 15, img: "Img/Food/Ingredientes/pimenta.png" },
    { name: "Arroz", cost: 10, img: "Img/Food/Ingredientes/arroz.png" },
    { name: "Alho", cost: 10, img: "Img/Food/Ingredientes/alho.png" },
    { name: "Batata", cost: 10, img: "Img/Food/Ingredientes/batata.png" },
    { name: "Azeite", cost: 15, img: "Img/Food/Ingredientes/azeite.png" },
    { name: "Cebola", cost: 10, img: "Img/Food/Ingredientes/cebola.png" },
    { name: "Creme de Leite", cost: 20, img: "Img/Food/Ingredientes/cremeLeite.png" },
    { name: "Pasta", cost: 10, img: "Img/Food/Ingredientes/pasta.png" },
    { name: "Queijo", cost: 15, img: "Img/Food/Ingredientes/queijo.png" },
    { name: "Carne de Caranguejo", cost: 400, img: "Img/Food/Ingredientes/carnedecaranguejo.png" },
    { name: "Polvo Cru", cost: 500, img: "Img/Food/Ingredientes/polvocru.png" },
    { name: "Galinha", cost: 300, img: "Img/Food/Ingredientes/galinha.png" },
    { name: "Carne de Cordeiro Crua", cost: 650, img: "Img/Food/Ingredientes/carnedecordeirocrua.png" },
]

const worldBosses = [
    {
        name: "Marineford", img: "Img/Wb/marineford.png", dates: [
            {
                date: "27/09/2024",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["Papai Curry", "Stein", "Lpz Cruel", "Don Faker", "Rx Brbb", "Salvathore"],
                        "wave": 153,
                        "time": "-83438:26:08"
                    },
                    {
                        "rank": 2,
                        "players": ["Pykezin", "Taca Maeno", "Lord Zona Norte", "Wisce", "Raingard", "Lord Joao Pedro"],
                        "wave": 75,
                        "time": "01:42:56"
                    },
                    {
                        "rank": 3,
                        "players": ["Ayver O Toxico", "Pocotojuliano", "Soyeon", "Rotevis", "Johnny D Brabo", "Mr Patolino"],
                        "wave": 60,
                        "time": "01:04:50"
                    },
                    {
                        "rank": 4,
                        "players": ["Imaim", "Menelzinho", "Lightzin", "Falconns", "O Robi", "Dark Nth"],
                        "wave": 60,
                        "time": "01:05:37"
                    },
                    {
                        "rank": 5,
                        "players": ["Lenhador Calvo", "Bettlejuice", "King Fofao", "Bosterman", "Joyboy Stark", "Sunn Mond"],
                        "wave": 60,
                        "time": "01:10:03"
                    },
                    {
                        "rank": 6,
                        "players": ["Batskillua", "Desalmed", "Embu", "Jota", "Lipezs", "Lerc"],
                        "wave": 60,
                        "time": "01:13:40"
                    },
                    {
                        "rank": 7,
                        "players": ["Xtein", "CrossD", "Tifa Lockhart", "Hayasaka", "Alucard", "Xuemba"],
                        "wave": 60,
                        "time": "01:15:34"
                    },
                    {
                        "rank": 8,
                        "players": ["Danilo Skatista", "Yano", "Shiina", "Duk Das Codorna", "Gui Leiteiro", "Raz Dwa Trzymaj"],
                        "wave": 60,
                        "time": "01:17:53"
                    },
                    {
                        "rank": 9,
                        "players": ["A B B A", "Luppzy", "Jnrzerah", "Yamato", "Phynx", "Kyav"],
                        "wave": 58,
                        "time": "01:11:51"
                    },
                    {
                        "rank": 10,
                        "players": ["Miwa San", "Smoked", "Oxyon", "Another Song", "Asura", "Artur"],
                        "wave": 53,
                        "time": "01:03:43"
                    },
                ]
            },
            {
                date: "13/09/2024",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["Batskillua", "Malvo", "Desalmed", "Embu", "Lipesz", "Lerc"],
                        "wave": 60,
                        "time": "01:11:16"
                    },
                    {
                        "rank": 2,
                        "players": ["My Sweet Namii", "Saeko Kamijo", "Luppzy", "Moita", "Nagashi", "Sidneirodrigues"],
                        "wave": 60,
                        "time": "01:11:37"
                    },
                    {
                        "rank": 3,
                        "players": ["Kamez", "Don Bronky", "Beetlejuice", "King Fofao", "O B A N A I", "Bosterman"],
                        "wave": 60,
                        "time": "01:15:52"
                    },
                    {
                        "rank": 4,
                        "players": ["Pykezin", "Taca Maeno", "Lord Zona Norte", "Wisce", "Sudden", "Raingard"],
                        "wave": 60,
                        "time": "01:16:44"
                    },
                    {
                        "rank": 5,
                        "players": ["Miwa San", "Quebra Mundos", "Tenz", "Zoroi", "The Lions", "Artur"],
                        "wave": 60,
                        "time": "01:17:71"
                    },
                    {
                        "rank": 6,
                        "players": ["Imaim", "Menelzinho", "Lightzin", "Falconns", "Don Ronin", "Mr Patolino"],
                        "wave": 45,
                        "time": "00:45:12"
                    },
                    {
                        "rank": 7,
                        "players": ["Kizaru Agiota", "Don Shuri", "Yash", "Don Vitu", "Pelota", "Ayase Chihaya"],
                        "wave": 45,
                        "time": "00:52:47"
                    },
                    {
                        "rank": 8,
                        "players": ["Kyav", "Phynx", "Jnrzerah", "Yamato", "Ycaro D Silva", "A B B A"],
                        "wave": 45,
                        "time": "00:52:51"
                    },
                    {
                        "rank": 9,
                        "players": ["Xtein", "CrossD", "Alucard", "Hayasaka", "Tifa Lockhart", "Xuemba"],
                        "wave": 45,
                        "time": "00:54:44"
                    },
                    {
                        "rank": 10,
                        "players": ["Emperor Azir", "Oru Maiito", "Usop Trezentos", "Mimi Shizumi", "Pirataqueestica", "Ayase Momo"],
                        "wave": 45,
                        "time": "00:54:50"
                    },
                ]
            },
        ]
    },
    {
        name: "Bananawani", img: "Img/Wb/bananawani.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Plesiosaur", img: "Img/Wb/plesiosaur.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Hiking Bear", img: "Img/Wb/hikingbear.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Shai-Hulud", img: "Img/Wb/shaihulud.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Byakko", img: "Img/Wb/byakko.png", dates: [
            {
                date: "04/10/2024",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["Soyeon", "Nayeon", "Ayatsu", "Pocotojuliano"],
                        "wave": 8580794,
                    },
                    {
                        "rank": 2,
                        "players": ["Vastayas", "Light", "Pocotosilverio", "Bello O Traidor"],
                        "wave": 8553450,
                    },
                    {
                        "rank": 3,
                        "players": ["Taca Maeno", "Wisce", "Raingard", "Pykezin"],
                        "wave": 8540998,
                    },
                    {
                        "rank": 4,
                        "players": ["The Lions", "Falconns", "Miwa San", "Embu"],
                        "wave": 8529768,
                    },
                    {
                        "rank": 5,
                        "players": ["Lerc", "Flokin", "Sudden", "Hakai Satsu"],
                        "wave": 8529240,
                    },
                    {
                        "rank": 6,
                        "players": ["Markrt", "Lenhador Calvo", "Reyna", "Weakling"],
                        "wave": 8495501,
                    },
                    {
                        "rank": 7,
                        "players": ["Yumi", "Yami Hikari", "Pandao", "Fardos El Mago"],
                        "wave": 8483325,
                    },
                    {
                        "rank": 8,
                        "players": ["XxhenryxX", "Guiron", "Pinheirooo", "Koyy"],
                        "wave": 8438410,
                    },
                    {
                        "rank": 9,
                        "players": ["Ayver O Toxico", "Haerin", "Dark Nth", "Celin Nikeboy"],
                        "wave": 8430951,
                    },
                    {
                        "rank": 10,
                        "players": ["Tufos", "Dantaz", "D I P I R O N O", "Dark Nightmare"],
                        "wave": 8412245,
                    },
                ]
            },
        ]
    },
    {
        name: "Mihawk", img: "Img/Wb/mihawk.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
    {
        name: "Aokiji", img: "Img/Wb/aokiji.png", dates: [
            {
                date: "A ser adicionado",
                ranking: [
                    {
                        "rank": 1,
                        "players": ["", "", "", "", "", ""],
                        "wave": 0,
                        "time": "00:00:00"
                    },
                ]
            },
        ]
    },
]

const items = [
    { name: "Algodão", img: "Img/Items/Algodao.png" },
    { name: "Algodão de Baixa Qualidade", img: "Img/Items/AlgodaoBaixaQualidade.png" },
    { name: "Atadura", img: "Img/Items/Atadura.png" },
    { name: "Banana", img: "Img/Items/Banana.png" },
    { name: "Band-aid", img: "Img/Items/Bandaid.png" },
    { name: "Band-aid Pequeno", img: "Img/Items/Bandaidpequeno.png" },
    { name: "Bandana de Bandido", img: "Img/Items/BandanaBandido.png" },
    { name: "Bolsa de Jóias", img: "Img/Items/BolsaJoias.png" },
    { name: "Boné de Recruta", img: "Img/Items/BoneRecruta.png" },
    { name: "Bracelete Dourado", img: "Img/Items/BraceleteDourado.png" },
    { name: "Calça de Recruta", img: "Img/Items/CalçaRecruta.png" },
    { name: "Cálice de Ouro", img: "Img/Items/CaliceOuro.png" },
    { name: "Camisa Black-Cat", img: "Img/Items/CamisaBlackCat.png" },
    { name: "Camisa de Recruta", img: "Img/Items/CamisaRecruta.png" },
    { name: "Casaco da Marinha", img: "Img/Items/CasacoMarinha.png" },
    { name: "Chave de Baú", img: "Img/Items/Chave.png" },
    { name: "10x Chaves de Baú", img: "Img/Items/Chave10x.png" },
    { name: "Colar Antigo", img: "Img/Items/ColarAntigo.png" },
    { name: "Coroa de Ouro", img: "Img/Items/CoroaOuro.png" },
    { name: "Coxa de Carne", img: "Img/Items/CoxaCarne.png" },
    { name: "Guarda-chuva dos Sand Pirates", img: "Img/Items/GuardaChuva.png" },
    { name: "Kit de Reparo 1.0", img: "Img/Items/KitReparo1.png" },
    { name: "Kit de Reparo 2.0", img: "Img/Items/KitReparo2.png" },
    { name: "Kit de Reparo 3.0", img: "Img/Items/KitReparo3.png" },
    { name: "Kit de Reparo 4.0", img: "Img/Items/KitReparo4.png" },
    { name: "Kit de Reparo 5.0", img: "Img/Items/KitReparo5.png" },
    { name: "Kit de Reparo 6.0", img: "Img/Items/KitReparo6.png" },
    { name: "Lingote de Aço", img: "Img/Items/LingoteAço.png" },
    { name: "Lingote de Ferro", img: "Img/Items/LingoteFerro.png" },
    { name: "Lingote de Titânio", img: "Img/Items/LingoteTitanio.png" },
    { name: "Maçã", img: "Img/Items/Maça.png" },
    { name: "Minério de Cobre", img: "Img/Items/MinerioCobre.png" },
    { name: "Minério de Ferro", img: "Img/Items/MinerioFerro.png" },
    { name: "Onigiri", img: "Img/Items/Onigiri.png" },
    { name: "Pano", img: "Img/Items/Pano.png" },
    { name: "Pano Melhorado", img: "Img/Items/PanoMelhorado.png" },
    { name: "Pano Profissional", img: "Img/Items/PanoProfissional.png" },
    { name: "Pedaço de Carne", img: "Img/Items/PedaçoCarne.png" },
    { name: "Pederneira Antiga", img: "Img/Items/PederneiraAntiga.png" },
    { name: "Pera", img: "Img/Items/Pera.png" },
    { name: "Poção Grande de EXP", img: "Img/Items/PoçaoGrandeExp.png" },
    { name: "Poção Média de EXP", img: "Img/Items/PoçaoMediaExp.png" },
    { name: "Poção Pequena de EXP", img: "Img/Items/PoçaoPequenaExp.png" },
    { name: "Poção de Stamina do EB", img: "Img/Items/PoçaoStaminaEb.png" },
    { name: "Poção de Stamina da GL", img: "Img/Items/PoçaoStaminaGl.png" },
    { name: "Pólvora", img: "Img/Items/Polvora.png" },
    { name: "Pólvora Melhorada", img: "Img/Items/PolvoraMelhorada.png" },
    { name: "Pólvora Superior", img: "Img/Items/PolvoraSuperior.png" },
    { name: "Pólvora Refinada", img: "Img/Items/PolvoraRefinada.png" },
    { name: "Prancha de Carvalho", img: "Img/Items/PranchaCarvalho.png" },
    { name: "Pranchas de Mogno", img: "Img/Items/PranchasMogno.png" },
    { name: "Pranchas de Adão", img: "Img/Items/PranchasAdao.png" },
    { name: "Rifle", img: "Img/Items/Rifle.png" },
    { name: "Rubi em Forma de Coração", img: "Img/Items/Rubi.png" },
    { name: "Sabre Velho", img: "Img/Items/SabreVelho.png" },
    { name: "Sake", img: "Img/Items/Sake.png" },
    { name: "Talismã da Aranha", img: "Img/Items/TalismaAranha.png" },
    { name: "Tora de Carvalho", img: "Img/Items/ToraCarvalho.png" },
    { name: "Tora de Madeira", img: "Img/Items/ToraMadeira.png" },
    { name: "Peixe Cru", img: "Img/Food/Ingredientes/PeixeCru.png" },
    { name: "Peixe Cru 2", img: "Img/Items/PeixeCru2.png" },
    { name: "Berry", img: "Img/berryItem.png" },
    { name: "Vaso Dourado", img: "Img/Items/VasoDourado.png" },
    { name: "Cruz Dourada", img: "Img/Items/CruzDourada.png" },
]

const islands = [
    {
        name: "East Blue", maps: ["Img/Maps/EastBlue/floor0.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Bracelete Dourado", quantity: 4 },
                    { item: "Kit de Reparo 2.0", quantity: 2 },
                ],
                floor: 0,
                x: 63.62,
                y: 28.25
            },
            {
                id: 2, items: [
                    { item: "Cálice de Ouro", quantity: 2 },
                    { item: "Poção de Stamina do EB", quantity: 2 },
                ],
                floor: 0,
                x: 9.84,
                y: 47.32
            },
            {
                id: 3, items: [
                    { item: "Cálice de Ouro", quantity: 2 },
                    { item: "Kit de Reparo 2.0", quantity: 2 },
                ],
                floor: 0,
                x: 22.65,
                y: 72.94,
            },
            {
                id: 4, items: [
                    { item: "Tora de Carvalho", quantity: 9 },
                    { item: "Minério de Ferro", quantity: 6 },
                    { item: "Algodão", quantity: 12 },
                    { item: "Kit de Reparo 3.0", quantity: 1 },
                ],
                floor: 0,
                x: 35.61,
                y: 31.43
            },
            {
                id: 5, items: [
                    { item: "Tora de Madeira", quantity: 40 },
                    { item: "Minério de Cobre", quantity: 25 },
                    { item: "Algodão de Baixa Qualidade", quantity: 80 },
                    { item: "Pólvora", quantity: 13 },
                ],
                floor: 0,
                x: 54.41,
                y: 43.74
            },
            {
                id: 6, items: [
                    { item: "Cálice de Ouro", quantity: 1 },
                    { item: "Tora de Madeira", quantity: 20 },
                    { item: "Minério de Cobre", quantity: 8 },
                    { item: "Kit de Reparo 1.0", quantity: 1 },
                ],
                floor: 0,
                x: 88.96,
                y: 8.40
            },
            {
                id: 7, items: [
                    { item: "Bracelete Dourado", quantity: 2 },
                    { item: "Algodão de Baixa Qualidade", quantity: 25 },
                    { item: "Pólvora", quantity: 4 },
                ],
                floor: 0,
                x: 76.25,
                y: 18.26
            },
            {
                id: 8, items: [
                    { item: "Pólvora Melhorada", quantity: 5 },
                    { item: "Coroa de Ouro", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 4.96,
                y: 92.03
            },
            {
                id: 9, items: [
                    { item: "Poção de Stamina do EB", quantity: 2 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 66.06,
                y: 44.21
            },
            {
                id: 10, items: [
                    { item: "Bracelete Dourado", quantity: 2 },
                    { item: "Kit de Reparo 1.0", quantity: 2 },
                    { item: "Poção Pequena de EXP", quantity: 1 },
                ],
                floor: 0,
                x: 71.77,
                y: 32
            },
            {
                id: 11, items: [
                    { item: "Berry", quantity: 20000 },
                ],
                floor: 0,
                x: 4.32,
                y: 69.10
            },
        ],
    },
    {
        name: "Foosha Village", maps: ["Img/Maps/Foosha/floor0.png", "Img/Maps/Foosha/floor1.png", "Img/Maps/Foosha/floor2.png", "Img/Maps/Foosha/floor3.png", "Img/Maps/Foosha/floor4.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Onigiri", quantity: 5 },
                ],
                floor: 2,
                x: 50.7,
                y: 57.9
            },
            {
                id: 2, items: [
                    { item: "Bandana de Bandido", quantity: 1 },
                    { item: "Poção Pequena de EXP", quantity: 1 },
                    { item: "Berry", quantity: 15 },
                ],
                floor: 3,
                x: 40.5,
                y: 51
            },
            {
                id: 3, items: [
                    { item: "Banana", quantity: 5 },
                ],
                floor: 2,
                x: 80.8,
                y: 59.1,
            },
            {
                id: 4, items: [
                    { item: "Coxa de Carne", quantity: 2 },
                    { item: "Berry", quantity: 10 },
                ],
                floor: 4,
                x: 22.6,
                y: 30.9
            },
            {
                id: 5, items: [
                    { item: "Berry", quantity: 22 },
                ],
                floor: 1,
                x: 17.86,
                y: 48.5
            },
            {
                id: 6, items: [
                    { item: "10x Chaves de Baú", quantity: 1 },
                ],
                floor: 2,
                x: 65.85,
                y: 62.1,
                w: "Este baú só pode ser pego uma vez por conta."
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 2,
                x: 53.65,
                y: 65.79
            },
            {
                id: 2,
                floor: 2,
                x: 65.53,
                y: 62.95
            },
            {
                id: 3,
                floor: 2,
                x: 63.58,
                y: 43.73
            },
            {
                id: 4,
                floor: 0,
                x: 21.34,
                y: 63.53
            },
            {
                id: 5,
                floor: 3,
                x: 40.20,
                y: 51.57
            },
            {
                id: 6,
                floor: 4,
                x: 41.98,
                y: 43.07
            },
        ]
    },
    {
        name: "Shells Town", maps: ["Img/Maps/Shells/floor0.png", "Img/Maps/Shells/floor1.png", "Img/Maps/Shells/floor2.png", "Img/Maps/Shells/floor3.png", "Img/Maps/Shells/floor4.png", "Img/Maps/Shells/floor5.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Berry", quantity: 50 },
                    { item: "Poção Pequena de EXP", quantity: 1 },
                ],
                floor: 2,
                x: 18.3,
                y: 45.4
            },
            {
                id: 2, items: [
                    { item: "Coroa de Ouro", quantity: 3 },
                ],
                floor: 5,
                x: 49.7,
                y: 51.8
            },
            {
                id: 3, items: [
                    { item: "Poção de Stamina do EB", quantity: 2 },
                ],
                floor: 3,
                x: 57.1,
                y: 37.1,
            },
            {
                id: 4, items: [
                    { item: "Colar Antigo", quantity: 1 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 5,
                x: 52,
                y: 51.8
            },
            {
                id: 5, items: [
                    { item: "Bracelete Dourado", quantity: 4 },
                    { item: "Poção Pequena de EXP", quantity: 1 },
                ],
                floor: 1,
                x: 28.1,
                y: 42.9
            },
            {
                id: 6, items: [
                    { item: "Maçã", quantity: 4 },
                    { item: "Berry", quantity: 20 },
                    { item: "Poção Pequena de EXP", quantity: 1 },
                ],
                floor: 1,
                x: 67.9,
                y: 54.1
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 0,
                x: 48.70,
                y: 68.67
            },
            {
                id: 2,
                floor: 1,
                x: 67.69,
                y: 57.92
            },
            {
                id: 3,
                floor: 5,
                x: 54.77,
                y: 51.98
            },
            {
                id: 4,
                floor: 2,
                x: 31.11,
                y: 42.72
            },
            {
                id: 5,
                floor: 3,
                x: 25.45,
                y: 53.61
            },
            {
                id: 6,
                floor: 5,
                x: 45.85,
                y: 39.21
            },
            {
                id: 7,
                floor: 3,
                x: 53.34,
                y: 42.90
            },
        ]
    },
    {
        name: "Samui Island", maps: ["Img/Maps/Samui/floor0.png", "Img/Maps/Samui/floor1.png", "Img/Maps/Samui/floor2.png", "Img/Maps/Samui/floor3.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Atadura", quantity: 3 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 2,
                x: 57.94,
                y: 36.56
            },
            {
                id: 2, items: [
                    { item: "Berry", quantity: 100 },
                    { item: "Berry", quantity: 20 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 1,
                x: 67.26,
                y: 66.18
            },
            {
                id: 3, items: [
                    { item: "Berry", quantity: 80 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 2,
                x: 47.66,
                y: 69.34,
            },
            {
                id: 4, items: [
                    { item: "Poção de Stamina do EB", quantity: 2 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 1,
                x: 22.60,
                y: 46.28
            },
        ],
    },
    {
        name: "Orange Town", maps: ["Img/Maps/Orange/floor0.png", "Img/Maps/Orange/floor1.png", "Img/Maps/Orange/floor2.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Cálice de Ouro", quantity: 1 },
                    { item: "Berry", quantity: 80 },
                    { item: "Poção Pequena de EXP", quantity: 3 },
                ],
                floor: 2,
                x: 47,
                y: 44.78,
            },
            {
                id: 2, items: [
                    { item: "Bracelete Dourado", quantity: 4 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 63.30,
                y: 53.60
            },
            {
                id: 3, items: [
                    { item: "Atadura", quantity: 2 },
                    { item: "Pedaço de Carne", quantity: 3 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 2,
                x: 42.68,
                y: 54.70,
            },
            {
                id: 4, items: [
                    { item: "Sabre Velho", quantity: 1 },
                    { item: "Pederneira Antiga", quantity: 1 },
                    { item: "Berry", quantity: 50 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 2,
                x: 49.06,
                y: 38.42
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 2,
                x: 41.17,
                y: 66.74,
                warn: "+1"
            },
            {
                id: 2,
                floor: 2,
                x: 44.74,
                y: 56.15,
            },
            {
                id: 3,
                floor: 2,
                x: 67.00,
                y: 54.55,
            },
            {
                id: 4,
                floor: 2,
                x: 67.28,
                y: 52.79,
            },
            {
                id: 5,
                floor: 2,
                x: 46.29,
                y: 44.78,
                warn: "+2"
            },
            {
                id: 6,
                floor: 2,
                x: 42.76,
                y: 37.57,
            },
            {
                id: 7,
                floor: 2,
                x: 38.82,
                y: 54.98,
            },
            {
                id: 8,
                floor: 2,
                x: 48.27,
                y: 51.01,
            },
            {
                id: 9,
                floor: 0,
                x: 40.42,
                y: 44.78,
            },
        ]
    },
    {
        name: "Syrup Village", maps: ["Img/Maps/Syrup/floor0.png", "Img/Maps/Syrup/floor1.png", "Img/Maps/Syrup/floor2.png", "Img/Maps/Syrup/floor3.png", "Img/Maps/Syrup/floor4.png", "Img/Maps/Syrup/floor5.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Cálice de Ouro", quantity: 1 },
                    { item: "Poção Pequena de EXP", quantity: 5 },
                ],
                floor: 4,
                x: 52.54,
                y: 29.66
            },
            {
                id: 2, items: [
                    { item: "Pera", quantity: 5 },
                    { item: "Poção Pequena de EXP", quantity: 5 },
                ],
                floor: 3,
                x: 59.04,
                y: 40.67
            },
            {
                id: 3, items: [
                    { item: "Cálice de Ouro", quantity: 1 },
                    { item: "Bracelete Dourado", quantity: 6 },
                    { item: "Poção Pequena de EXP", quantity: 5 },
                ],
                floor: 1,
                x: 79.42,
                y: 65.66,
            },
            {
                id: 4, items: [
                    { item: "Band-aid Pequeno", quantity: 1 },
                    { item: "Poção Pequena de EXP", quantity: 5 },
                ],
                floor: 2,
                x: 69.48,
                y: 42.32
            },
            {
                id: 5, items: [
                    { item: "Poção de Stamina do EB", quantity: 2 },
                ],
                floor: 4,
                x: 29.64,
                y: 46.16
            },
            {
                id: 6, items: [
                    { item: "Camisa Black-Cat", quantity: 1 },
                    { item: "Banana", quantity: 5 },
                    { item: "Poção Pequena de EXP", quantity: 8 },
                ],
                floor: 4,
                x: 25.16,
                y: 57.52
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 2,
                x: 71.68,
                y: 38.23
            },
            {
                id: 2,
                floor: 4,
                x: 52.97,
                y: 36.17
            },
            {
                id: 3,
                floor: 1,
                x: 80.47,
                y: 68.20
            },
            {
                id: 4,
                floor: 2,
                x: 61.59,
                y: 62.43
            },
            {
                id: 5,
                floor: 3,
                x: 47.32,
                y: 34.42
            },
            {
                id: 6,
                floor: 5,
                x: 53.89,
                y: 33.29
            },
            {
                id: 7,
                floor: 3,
                x: 15.52,
                y: 44.52
            },
            {
                id: 8,
                floor: 4,
                x: 26.01,
                y: 56.80
            },
            {
                id: 9,
                floor: 3,
                x: 80.65,
                y: 59.86
            },
        ]
    },
    {
        name: "Island of Rare Animals", maps: ["Img/Maps/Rare/floor0.png", "Img/Maps/Rare/floor1.png", "Img/Maps/Rare/floor2.png", "Img/Maps/Rare/floor3.png", "Img/Maps/Rare/floor4.png", "Img/Maps/Rare/floor5.png", "Img/Maps/Rare/floor6.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Cálice de Ouro", quantity: 1 },
                    { item: "Bracelete Dourado", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 1 },
                ],
                floor: 3,
                x: 41.36,
                y: 65.02
            },
            {
                id: 2, items: [
                    { item: "Cálice de Ouro", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 1 },
                ],
                floor: 6,
                x: 52.40,
                y: 60.38
            },
            {
                id: 3, items: [
                    { item: "Poção de Stamina do EB", quantity: 2 },
                ],
                floor: 4,
                x: 39.90,
                y: 36.20,
            },
            {
                id: 4, items: [
                    { item: "Poção Média de EXP", quantity: 1 },
                    { item: "Bracelete Dourado", quantity: 6 },
                    { item: "Cálice de Ouro", quantity: 2 },
                ],
                floor: 3,
                x: 59.62,
                y: 46.76
            },
        ],
    },
    {
        name: "Baratie", maps: ["Img/Maps/Baratie/floor0.png", "Img/Maps/Baratie/floor1.png", "Img/Maps/Baratie/floor2.png", "Img/Maps/Baratie/floor3.png", "Img/Maps/Baratie/floor4.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Berry", quantity: 50 },
                    { item: "Peixe Cru 2", quantity: 10 },
                    { item: "Poção Média de EXP", quantity: 1 },
                ],
                floor: 0,
                x: 54.17,
                y: 60.12
            },
            {
                id: 2, items: [
                    { item: "Cálice de Ouro", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 1 },
                ],
                floor: 1,
                x: 71.11,
                y: 67.96
            }
        ],
    },
    {
        name: "Cocoyasi Village", maps: ["Img/Maps/Cocoyasi/floor0.png", "Img/Maps/Cocoyasi/floor1.png", "Img/Maps/Cocoyasi/floor2.png", "Img/Maps/Cocoyasi/floor3.png", "Img/Maps/Cocoyasi/floor4.png", "Img/Maps/Cocoyasi/floor5.png", "Img/Maps/Cocoyasi/floor6.png", "Img/Maps/Cocoyasi/floor7.png", "Img/Maps/Cocoyasi/floor8.png", "Img/Maps/Cocoyasi/floor9.png", "Img/Maps/Cocoyasi/floor10.png", "Img/Maps/Cocoyasi/floor11.png", "Img/Maps/Cocoyasi/floor12.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Band-aid", quantity: 3 },
                    { item: "Poção Média de EXP", quantity: 1 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 4,
                x: 56.83,
                y: 72.46
            },
            {
                id: 2, items: [
                    { item: "Poção Média de EXP", quantity: 1 },
                ],
                floor: 11,
                x: 60.11,
                y: 55.73
            },
            {
                id: 3, items: [
                    { item: "Poção Média de EXP", quantity: 1 },
                ],
                floor: 11,
                x: 44.01,
                y: 45.95
            },
            {
                id: 4, items: [
                    { item: "Poção Média de EXP", quantity: 3 },
                    { item: "Berry", quantity: 50 },
                ],
                floor: 10,
                x: 48.30,
                y: 45.81
            },
            {
                id: 5, items: [
                    { item: "Band-aid", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 1 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 4,
                x: 14.13,
                y: 56.12
            },
            {
                id: 6, items: [
                    { item: "Bracelete Dourado", quantity: 12 },
                    { item: "Poção Média de EXP", quantity: 1 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 32.07,
                y: 70.72
            },
            {
                id: 7, items: [
                    { item: "Bolsa de Jóias", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 1 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 4,
                x: 17.63,
                y: 75
            },
            {
                id: 8, items: [
                    { item: "Poção de Stamina do EB", quantity: 2 },
                ],
                floor: 6,
                x: 76.71,
                y: 48.16
            },
            {
                id: 9, items: [
                    { item: "Chave de Baú", quantity: 1 },
                ],
                floor: 9,
                x: 69.19,
                y: 54.53,
                w: "Este baú está localizado na missão especial Arlong Pirates."
            },
            {
                id: 10, items: [
                    { item: "Bolsa de Jóias", quantity: 3 },
                    { item: "Poção Média de EXP", quantity: 2 },
                    { item: "Poção Pequena de EXP", quantity: 4 },
                ],
                floor: 4,
                x: 39.55,
                y: 41.06
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 4,
                x: 52.00,
                y: 54.45
            },
            {
                id: 2,
                floor: 4,
                x: 73.47,
                y: 74.02
            },
            {
                id: 3,
                floor: 6,
                x: 76.86,
                y: 48.57
            },
            {
                id: 4,
                floor: 4,
                x: 77.82,
                y: 40.43
            },
            {
                id: 5,
                floor: 4,
                x: 41.45,
                y: 42.83
            },
            {
                id: 6,
                floor: 8,
                x: 18.10,
                y: 70.49
            },
            {
                id: 7,
                floor: 4,
                x: 31.85,
                y: 72.72
            },
            {
                id: 8,
                floor: 4,
                x: 68.46,
                y: 58.50
            },
            {
                id: 9,
                floor: 4,
                x: 61.09,
                y: 50.18
            },
            {
                id: 10,
                floor: 4,
                x: 49.14,
                y: 53.81
            },
        ]
    },
    {
        name: "Loguetown", maps: ["Img/Maps/Loguetown/floor0.png", "Img/Maps/Loguetown/floor1.png", "Img/Maps/Loguetown/floor2.png", "Img/Maps/Loguetown/floor3.png", "Img/Maps/Loguetown/floor4.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Poção de Stamina do EB", quantity: 3 },
                ],
                floor: 3,
                x: 35.94,
                y: 55.36
            },
            {
                id: 2, items: [
                    { item: "Coroa de Ouro", quantity: 1 },
                    { item: "Bolsa de Jóias", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 35.30,
                y: 45.46,
            },
            {
                id: 3, items: [
                    { item: "Poção de Stamina do EB", quantity: 2 },
                ],
                floor: 4,
                x: 35.94,
                y: 43.04,
            },
            {
                id: 4, items: [
                    { item: "Bolsa de Jóias", quantity: 1 },
                    { item: "Bracelete Dourado", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 64.10,
                y: 42.86,
            },
            {
                id: 5, items: [
                    { item: "Boné de Recruta", quantity: 1 },
                    { item: "Camisa de Recruta", quantity: 1 },
                    { item: "Calça de Recruta", quantity: 1 },
                    { item: "Rifle", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 3,
                x: 35.26,
                y: 53.78,
            },
            {
                id: 6, items: [
                    { item: "Bracelete Dourado", quantity: 8 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 1,
                x: 35.14,
                y: 46.06,
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 0,
                x: 47.85,
                y: 54.22
            },
            {
                id: 2,
                floor: 2,
                x: 55.02,
                y: 55.64
            },
            {
                id: 3,
                floor: 2,
                x: 51.82,
                y: 42.47
            },
            {
                id: 4,
                floor: 2,
                x: 55.08,
                y: 46.20
            },
            {
                id: 5,
                floor: 0,
                x: 65.01,
                y: 44.12
            },
            {
                id: 6,
                floor: 4,
                x: 31.45,
                y: 41.25
            },
            {
                id: 7,
                floor: 3,
                x: 35.71,
                y: 54.65
            },
            {
                id: 8,
                floor: 1,
                x: 31.58,
                y: 51.67
            },
            {
                id: 9,
                floor: 1,
                x: 69.24,
                y: 46.04
            },
        ]
    },
    {
        name: "Kumo Island", maps: ["Img/Maps/Kumo/floor0.png", "Img/Maps/Kumo/floor1.png", "Img/Maps/Kumo/floor2.png", "Img/Maps/Kumo/floor3.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Bolsa de Jóias", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 2,
                x: 48.78,
                y: 43.70
            },
            {
                id: 2, items: [
                    { item: "Bolsa de Jóias", quantity: 1 },
                    { item: "Cálice de Ouro", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 2,
                x: 43.98,
                y: 60.20
            },
            {
                id: 3, items: [
                    { item: "Talismã da Aranha", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 51.04,
                y: 52.18,
            }
        ],
    },
    {
        name: "Grand Line", maps: ["Img/Maps/GrandLine/floor0.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Prancha de Carvalho", quantity: 3 },
                    { item: "Lingote de Ferro", quantity: 3 },
                    { item: "Pano", quantity: 3 },
                    { item: "Pólvora Melhorada", quantity: 11 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 3.87,
                y: 25
            },
            {
                id: 2, items: [
                    { item: "Pólvora Refinada", quantity: 44 },
                    { item: "Kit de Reparo 6.0", quantity: 2 },
                ],
                floor: 0,
                x: 95.67,
                y: 83.60
            },
            {
                id: 3, items: [
                    { item: "Lingote de Aço", quantity: 11 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 46.14,
                y: 61.65,
            },
            {
                id: 4, items: [
                    { item: "Pranchas de Mogno", quantity: 14 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 67.30,
                y: 85.15
            },
            {
                id: 5, items: [
                    { item: "Pranchas de Adão", quantity: 14 },
                    { item: "Kit de Reparo 6.0", quantity: 2 },
                ],
                floor: 0,
                x: 83.46,
                y: 80.16
            },
            {
                id: 6, items: [
                    { item: "Pranchas de Adão", quantity: 7 },
                    { item: "Pano Profissional", quantity: 5 },
                    { item: "Poção Grande de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 81.95,
                y: 47.56
            },
            {
                id: 7, items: [
                    { item: "Pano Profissional", quantity: 11 },
                    { item: "Poção Grande de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 73.66,
                y: 26.16
            },
            {
                id: 8, items: [
                    { item: "Lingote de Titânio", quantity: 11 },
                    { item: "Poção Grande de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 96.79,
                y: 23.95
            },
            {
                id: 9, items: [
                    { item: "Pano Melhorado", quantity: 11 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 53.40,
                y: 82.05
            },
            {
                id: 10, items: [
                    { item: "Pranchas de Mogno", quantity: 3 },
                    { item: "Lingote de Aço", quantity: 3 },
                    { item: "Pano Melhorado", quantity: 3 },
                    { item: "Pólvora Superior", quantity: 11 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 41.05,
                y: 39.72
            },
            {
                id: 11, items: [
                    { item: "Pólvora Melhorada", quantity: 45 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 8.54,
                y: 84.49
            },
            {
                id: 12, items: [
                    { item: "Pólvora Superior", quantity: 44 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 61.82,
                y: 23.70
            },
            {
                id: 13, items: [
                    { item: "Pano", quantity: 11 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 21.73,
                y: 59.20
            },
            {
                id: 14, items: [
                    { item: "Lingote de Ferro", quantity: 11 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 24.17,
                y: 75.84
            },
            {
                id: 15, items: [
                    { item: "Prancha de Carvalho", quantity: 14 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 28.86,
                y: 16.60
            },
            {
                id: 16, items: [
                    { item: "Pólvora Refinada", quantity: 22 },
                    { item: "Lingote de Titânio", quantity: 5 },
                    { item: "Poção Grande de EXP", quantity: 2 },
                    { item: "Kit de Reparo 6.0", quantity: 2 },
                ],
                floor: 0,
                x: 96.93,
                y: 57.34
            },
        ],
    },
    {
        name: "Gunkan Island", maps: ["Img/Maps/Gunkan/floor0.png", "Img/Maps/Gunkan/floor1.png", "Img/Maps/Gunkan/floor2.png", "Img/Maps/Gunkan/floor3.png", "Img/Maps/Gunkan/floor4.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Cálice de Ouro", quantity: 6 },
                    { item: "Bracelete Dourado", quantity: 6 },
                ],
                floor: 3,
                x: 41.07,
                y: 46.31
            },
            {
                id: 2, items: [
                    { item: "Poção Média de EXP", quantity: 3 },
                ],
                floor: 2,
                x: 57.41,
                y: 49.38
            },
            {
                id: 3, items: [
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Cálice de Ouro", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 62.31,
                y: 51.66,
            },
        ],
    },
    {
        name: "Lost Island", maps: ["Img/Maps/Lost/floor0.png", "Img/Maps/Lost/floor1.png", "Img/Maps/Lost/floor2.png", "Img/Maps/Lost/floor3.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Bolsa de Jóias", quantity: 2 },
                    { item: "Cálice de Ouro", quantity: 2 },
                    { item: "Bracelete Dourado", quantity: 5 },
                ],
                floor: 0,
                x: 45.61,
                y: 50.21
            },
            {
                id: 2, items: [
                    { item: "Poção Média de EXP", quantity: 3 },
                ],
                floor: 3,
                x: 50.87,
                y: 51.28
            },
        ],
    },
    {
        name: "Whisky Peak", maps: ["Img/Maps/WhiskyPeak/floor0.png", "Img/Maps/WhiskyPeak/floor1.png", "Img/Maps/WhiskyPeak/floor2.png", "Img/Maps/WhiskyPeak/floor3.png", "Img/Maps/WhiskyPeak/floor4.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Bolsa de Jóias", quantity: 5 },
                    { item: "Bracelete Dourado", quantity: 12 },
                    { item: "Poção Média de EXP", quantity: 4 },
                ],
                floor: 2,
                x: 52.37,
                y: 57.35
            },
            {
                id: 2, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 3,
                x: 38.57,
                y: 53.90
            },
            {
                id: 3, items: [
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 0,
                x: 42.81,
                y: 47.17,
            },
            {
                id: 4, items: [
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Berry", quantity: 200 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 2,
                x: 61.33,
                y: 47.51
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 0,
                x: 55.73,
                y: 57.30
            },
            {
                id: 2,
                floor: 1,
                x: 61.66,
                y: 57.63
            },
            {
                id: 3,
                floor: 1,
                x: 55.26,
                y: 42.56
            },
            {
                id: 4,
                floor: 3,
                x: 59.03,
                y: 42.91
            },
            {
                id: 5,
                floor: 3,
                x: 35.15,
                y: 56.52
            },
            {
                id: 6,
                floor: 1,
                x: 58.00,
                y: 48.49
            },
            {
                id: 7,
                floor: 1,
                x: 46.92,
                y: 44.97
            },
            {
                id: 8,
                floor: 1,
                x: 41.40,
                y: 42.27
            },
            {
                id: 9,
                floor: 4,
                x: 34.71,
                y: 45.43
            },
            {
                id: 10,
                floor: 1,
                x: 43.26,
                y: 46.71
            },
            {
                id: 11,
                floor: 1,
                x: 56.87,
                y: 45.64
            },
            {
                id: 12,
                floor: 1,
                x: 51.69,
                y: 58.26
            },
        ]
    },
    {
        name: "Little Garden", maps: ["Img/Maps/LittleGarden/floor0.png", "Img/Maps/LittleGarden/floor1.png", "Img/Maps/LittleGarden/floor2.png", "Img/Maps/LittleGarden/floor3.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Poção Média de EXP", quantity: 6 },
                ],
                floor: 1,
                x: 41.26,
                y: 38.87
            },
            {
                id: 2, items: [
                    { item: "Coroa de Ouro", quantity: 5 },
                    { item: "Bolsa de Jóias", quantity: 1 },
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 0,
                x: 48.77,
                y: 38.56
            },
            {
                id: 3, items: [
                    { item: "Bolsa de Jóias", quantity: 6 },
                    { item: "Poção Média de EXP", quantity: 6 },
                ],
                floor: 0,
                x: 63.73,
                y: 64.78
            },
            {
                id: 4, items: [
                    { item: "Cálice de Ouro", quantity: 11 },
                ],
                floor: 0,
                x: 34.48,
                y: 49.58
            },
            {
                id: 5, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 0,
                x: 51.04,
                y: 64.33
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 0,
                x: 56.73,
                y: 59.82
            },
            {
                id: 2,
                floor: 0,
                x: 51.39,
                y: 36.97
            },
            {
                id: 3,
                floor: 0,
                x: 65.86,
                y: 58.77
            },
            {
                id: 4,
                floor: 0,
                x: 60.92,
                y: 56.97
            },
            {
                id: 5,
                floor: 0,
                x: 45.51,
                y: 45.18
            },
            {
                id: 6,
                floor: 0,
                x: 67.71,
                y: 63.02
            },
            {
                id: 7,
                floor: 1,
                x: 40.19,
                y: 41.51
            },
            {
                id: 8,
                floor: 0,
                x: 52.01,
                y: 41.29,
                warn: "-1"
            },
            {
                id: 9,
                floor: 0,
                x: 43.36,
                y: 57.19,
            },
            {
                id: 10,
                floor: 0,
                x: 69.17,
                y: 58.23,
                warn: "-2"
            },
            {
                id: 11,
                floor: 0,
                x: 54.19,
                y: 45.76,
            },
        ]
    },
    {
        name: "Jaya", maps: ["Img/Maps/Jaya/floor0.png", "Img/Maps/Jaya/floor1.png", "Img/Maps/Jaya/floor2.png", "Img/Maps/Jaya/floor3.png", "Img/Maps/Jaya/floor4.png", "Img/Maps/Jaya/floor5.png", "Img/Maps/Jaya/floor6.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Bracelete Dourado", quantity: 1 },
                    { item: "Coroa de Ouro", quantity: 4 },
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 3,
                x: 58.16,
                y: 67.71
            },
            {
                id: 2, items: [
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Poção Média de EXP", quantity: 4 },
                ],
                floor: 6,
                x: 53.87,
                y: 53.94
            },
            {
                id: 3, items: [
                    { item: "Bolsa de Jóias", quantity: 6 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 4,
                x: 51.21,
                y: 40.57
            },
            {
                id: 4, items: [
                    { item: "Coroa de Ouro", quantity: 4 },
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 2,
                x: 45.35,
                y: 48.64
            },
            {
                id: 5, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 5,
                x: 48.78,
                y: 59.65
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 3,
                x: 54.44,
                y: 31.16
            },
            {
                id: 2,
                floor: 3,
                x: 53.37,
                y: 29.10
            },
            {
                id: 3,
                floor: 3,
                x: 47.07,
                y: 49.12
            },
            {
                id: 4,
                floor: 4,
                x: 53.50,
                y: 56.61
            },
            {
                id: 5,
                floor: 4,
                x: 47.26,
                y: 58.05
            },
            {
                id: 6,
                floor: 3,
                x: 43.43,
                y: 58.41
            },
            {
                id: 7,
                floor: 1,
                x: 51.74,
                y: 48.63
            },
            {
                id: 8,
                floor: 2,
                x: 48.18,
                y: 46.96
            },
            {
                id: 9,
                floor: 5,
                x: 42.83,
                y: 48.12
            },
            {
                id: 10,
                floor: 5,
                x: 42.47,
                y: 46.65
            },
            {
                id: 11,
                floor: 5,
                x: 45.35,
                y: 44.12
            },
            {
                id: 12,
                floor: 5,
                x: 48.69,
                y: 44.30
            },
            {
                id: 13,
                floor: 5,
                x: 51.31,
                y: 41.40
            },
            {
                id: 14,
                floor: 6,
                x: 52.42,
                y: 47.46
            },
            {
                id: 15,
                floor: 6,
                x: 58.68,
                y: 44.90
            },
            {
                id: 16,
                floor: 5,
                x: 62.65,
                y: 52.92
            },
            {
                id: 17,
                floor: 5,
                x: 48.42,
                y: 60.01
            },
            {
                id: 18,
                floor: 5,
                x: 44.89,
                y: 53.74
            },
        ]
    },
    {
        name: "G-7 Marine Base", maps: ["Img/Maps/g7/floor0.png", "Img/Maps/g7/floor1.png", "Img/Maps/g7/floor2.png", "Img/Maps/g7/floor3.png", "Img/Maps/g7/floor4.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Cálice de Ouro", quantity: 4 },
                    { item: "Coroa de Ouro", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 2,
                x: 47.16,
                y: 56.59
            },
            {
                id: 2, items: [
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 0,
                x: 53.57,
                y: 42.85
            },
            {
                id: 3, items: [
                    { item: "Casaco da Marinha", quantity: 1 },
                    { item: "Coroa de Ouro", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 4,
                x: 45.08,
                y: 52.01
            },
            {
                id: 4, items: [
                    { item: "Chave de Baú", quantity: 2 },
                    { item: "Berry", quantity: 20000 },
                ],
                floor: 1,
                x: 63.38,
                y: 44.13,
                w: "Este baú é de uma missão secreta em G-7 Marine Base e não é necessário para a conquista."
            },
        ],
    },
    {
        name: "Drum Island", maps: ["Img/Maps/Drum/floor0.png", "Img/Maps/Drum/floor1.png", "Img/Maps/Drum/floor2.png", "Img/Maps/Drum/floor3.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 0,
                x: 83.39,
                y: 41.91
            },
            {
                id: 2, items: [
                    { item: "Bracelete Dourado", quantity: 70 },
                    { item: "Poção Média de EXP", quantity: 7 },
                ],
                floor: 2,
                x: 33.01,
                y: 31.71
            },
            {
                id: 3, items: [
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Bracelete Dourado", quantity: 20 },
                    { item: "Poção Grande de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 14.04,
                y: 54.35
            },
            {
                id: 4, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 1,
                x: 21.13,
                y: 14.45
            },
            {
                id: 5, items: [
                    { item: "Bolsa de Jóias", quantity: 6 },
                    { item: "Poção Média de EXP", quantity: 4 },
                ],
                floor: 1,
                x: 68.96,
                y: 28.19
            },
            {
                id: 6, items: [
                    { item: "Poção Grande de EXP", quantity: 2 },
                    { item: "Berry", quantity: 6000 },
                ],
                floor: 3,
                x: 51.39,
                y: 52.88
            },
            {
                id: 7, items: [
                    { item: "Chave de Baú", quantity: 2 },
                ],
                floor: 0,
                x: 32.35,
                y: 67.14,
                w: "Este baú é de uma missão secreta em Drum Island e não é necessário para a conquista."
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 0,
                x: 43.50,
                y: 72.44
            },
            {
                id: 2,
                floor: 0,
                x: 41.61,
                y: 61.86
            },
            {
                id: 3,
                floor: 0,
                x: 23.40,
                y: 70.02
            },
            {
                id: 4,
                floor: 0,
                x: 11.49,
                y: 54.56
            },
            {
                id: 5,
                floor: 1,
                x: 24.95,
                y: 51.51
            },
            {
                id: 6,
                floor: 2,
                x: 15.10,
                y: 41.90
            },
            {
                id: 7,
                floor: 2,
                x: 22.31,
                y: 33.18
            },
            {
                id: 8,
                floor: 0,
                x: 38.81,
                y: 34.90
            },
            {
                id: 9,
                floor: 0,
                x: 63.49,
                y: 60.82
            },
            {
                id: 10,
                floor: 0,
                x: 82.18,
                y: 43.51
            },
            {
                id: 11,
                floor: 2,
                x: 19.90,
                y: 16.43
            },
        ]
    },
    {
        name: "Nanimonai Island", maps: ["Img/Maps/Nanimonai/floor0.png", "Img/Maps/Nanimonai/floor1.png", "Img/Maps/Nanimonai/floor2.png", "Img/Maps/Nanimonai/floor3.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Poção Média de EXP", quantity: 4 },
                ],
                floor: 3,
                x: 50.37,
                y: 42.36
            },
            {
                id: 2, items: [
                    { item: "Bolsa de Jóias", quantity: 10 },
                ],
                floor: 2,
                x: 48.86,
                y: 51.39
            },
        ],
    },
    {
        name: "Nige Hashiru", maps: ["Img/Maps/Nige/floor0.png", "Img/Maps/Nige/floor1.png", "Img/Maps/Nige/floor2.png", "Img/Maps/Nige/floor3.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Poção Média de EXP", quantity: 4 },
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 2,
                x: 49.36,
                y: 41.29
            },
            {
                id: 2, items: [
                    { item: "Sake", quantity: 8 },
                    { item: "Poção Média de EXP", quantity: 4 },
                ],
                floor: 2,
                x: 39.26,
                y: 59.53
            },
            {
                id: 3, items: [
                    { item: "Bolsa de Jóias", quantity: 25 },
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 0,
                x: 60.25,
                y: 46.74
            },
        ],
    },
    {
        name: "Alubarna", maps: ["Img/Maps/Alubarna/floor0.png", "Img/Maps/Alubarna/floor1.png", "Img/Maps/Alubarna/floor2.png", "Img/Maps/Alubarna/floor3.png", "Img/Maps/Alubarna/floor4.png", "Img/Maps/Alubarna/floor5.png", "Img/Maps/Alubarna/floor6.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 3,
                x: 69.16,
                y: 22.90
            },
            {
                id: 2, items: [
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 0,
                x: 31.49,
                y: 40.96
            },
            {
                id: 3, items: [
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Bracelete Dourado", quantity: 16 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 5,
                x: 37.84,
                y: 32.61
            },
            {
                id: 4, items: [
                    { item: "Bolsa de Jóias", quantity: 2 },
                    { item: "Cálice de Ouro", quantity: 5 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 3,
                x: 51.82,
                y: 75.69
            },
            {
                id: 5, items: [
                    { item: "Coroa de Ouro", quantity: 10 },
                ],
                floor: 1,
                x: 68.70,
                y: 47.23
            },
        ],
    },
    {
        name: "Rainbase", maps: ["Img/Maps/Rainbase/floor0.png", "Img/Maps/Rainbase/floor1.png", "Img/Maps/Rainbase/floor2.png", "Img/Maps/Rainbase/floor3.png", "Img/Maps/Rainbase/floor4.png", "Img/Maps/Rainbase/floor5.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Rubi em Forma de Coração", quantity: 1 },
                    { item: "Coroa de Ouro", quantity: 4 },
                    { item: "Guarda-chuva dos Sand Pirates", quantity: 40 },
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 3,
                x: 11.50,
                y: 12.33
            },
            {
                id: 2, items: [
                    { item: "Coroa de Ouro", quantity: 1 },
                    { item: "Bolsa de Jóias", quantity: 3 },
                    { item: "Bracelete Dourado", quantity: 5 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 1,
                x: 77.93,
                y: 46.12
            },
            {
                id: 3, items: [
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Bolsa de Jóias", quantity: 10 },
                    { item: "Poção Média de EXP", quantity: 6 },
                ],
                floor: 0,
                x: 51.38,
                y: 71.18
            },
            {
                id: 4, items: [
                    { item: "Bolsa de Jóias", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 6 },
                ],
                floor: 1,
                x: 93.02,
                y: 60.23
            },
            {
                id: 5, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 1,
                x: 62.47,
                y: 75.83
            },
            {
                id: 6, items: [
                    { item: "Poção Grande de EXP", quantity: 2 },
                ],
                floor: 1,
                x: 55.38,
                y: 26.37
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 2,
                x: 25.88,
                y: 73.44
            },
            {
                id: 2,
                floor: 1,
                x: 59.25,
                y: 75.71
            },
            {
                id: 3,
                floor: 1,
                x: 72.64,
                y: 46.15
            },
            {
                id: 4,
                floor: 1,
                x: 54.43,
                y: 44.42
            },
            {
                id: 5,
                floor: 1,
                x: 50.82,
                y: 60.60
            },
            {
                id: 6,
                floor: 2,
                x: 47.47,
                y: 67.03
            },
            {
                id: 7,
                floor: 0,
                x: 51.02,
                y: 72.31
            },
            {
                id: 8,
                floor: 2,
                x: 75.62,
                y: 65.98
            },
            {
                id: 9,
                floor: 3,
                x: 36.38,
                y: 79.16
            },
            {
                id: 10,
                floor: 3,
                x: 14.47,
                y: 10.80
            },
            {
                id: 11,
                floor: 2,
                x: 27.07,
                y: 31.54
            },
            {
                id: 12,
                floor: 1,
                x: 33.44,
                y: 19.73
            },
            {
                id: 13,
                floor: 1,
                x: 46.12,
                y: 73.00
            },
            {
                id: 14,
                floor: 1,
                x: 68.66,
                y: 89.79
            },
            {
                id: 15,
                floor: 1,
                x: 63.36,
                y: 26.35
            },
            {
                id: 16,
                floor: 2,
                x: 29.30,
                y: 45.77
            },
        ]
    },
    {
        name: "Skypiea", maps: ["Img/Maps/Skypiea/floor0.png", "Img/Maps/Skypiea/floor1.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 0,
                x: 52.70,
                y: 56.55
            },
            {
                id: 2, items: [
                    { item: "Poção Média de EXP", quantity: 5 },
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Bracelete Dourado", quantity: 10 },
                ],
                floor: 0,
                x: 54.24,
                y: 44.96
            },
            {
                id: 3, items: [
                    { item: "Poção Média de EXP", quantity: 5 },
                    { item: "Bolsa de Jóias", quantity: 2 },
                    { item: "Cálice de Ouro", quantity: 5 },
                ],
                floor: 0,
                x: 56.70,
                y: 53.54
            },
            {
                id: 4, items: [
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 1,
                x: 57.00,
                y: 47.58
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 0,
                x: 59.39,
                y: 57.58
            },
            {
                id: 2,
                floor: 0,
                x: 56.24,
                y: 52.20
            },
            {
                id: 3,
                floor: 1,
                x: 52.82,
                y: 44.18
            },
            {
                id: 4,
                floor: 0,
                x: 46.11,
                y: 44.81
            },
            {
                id: 5,
                floor: 0,
                x: 46.40,
                y: 48.35
            },
            {
                id: 6,
                floor: 0,
                x: 48.55,
                y: 50.09
            },
            {
                id: 7,
                floor: 0,
                x: 52.17,
                y: 56.02
            },
        ]
    },
    {
        name: "Water 7", maps: ["Img/Maps/Water7/floor0.png", "Img/Maps/Water7/floor1.png", "Img/Maps/Water7/floor2.png", "Img/Maps/Water7/floor3.png", "Img/Maps/Water7/floor4.png", "Img/Maps/Water7/floor5.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Poção Grande de EXP", quantity: 1 },
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Coroa de Ouro", quantity: 1 },
                    { item: "Vaso Dourado", quantity: 1 },
                ],
                floor: 0,
                x: 62.15,
                y: 52.86
            },
            {
                id: 2, items: [
                    { item: "Bolsa de Jóias", quantity: 6 },
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 4,
                x: 72.10,
                y: 60.92
            },
            {
                id: 3, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Vaso Dourado", quantity: 1 },
                ],
                floor: 0,
                x: 74.84,
                y: 47.37
            },
            {
                id: 4, items: [
                    { item: "Poção Grande de EXP", quantity: 1 },
                    { item: "Cruz Dourada", quantity: 1 },
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Coroa de Ouro", quantity: 3 },
                ],
                floor: 4,
                x: 24.77,
                y: 52.98
            },
            {
                id: 5, items: [
                    { item: "Vaso Dourado", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 7 },
                ],
                floor: 4,
                x: 61.37,
                y: 39.62
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 4,
                x: 24.67,
                y: 53.38
            },
            {
                id: 2,
                floor: 4,
                x: 48.54,
                y: 48.03
            },
            {
                id: 3,
                floor: 4,
                x: 50.03,
                y: 61.40
            },
            {
                id: 4,
                floor: 4,
                x: 57.46,
                y: 46.22
            },
            {
                id: 5,
                floor: 4,
                x: 61.03,
                y: 39.00
            },
            {
                id: 6,
                floor: 4,
                x: 63.77,
                y: 54.66
            },
            {
                id: 7,
                floor: 4,
                x: 70.36,
                y: 50.95
            },
            {
                id: 8,
                floor: 1,
                x: 55.39,
                y: 48.55
            },
            {
                id: 9,
                floor: 0,
                x: 62.75,
                y: 53.08
            },
            {
                id: 10,
                floor: 4,
                x: 44.32,
                y: 54.23
            },
            {
                id: 11,
                floor: 4,
                x: 30.91,
                y: 54.85
            },
            {
                id: 12,
                floor: 4,
                x: 71.53,
                y: 61.66
            },
            {
                id: 13,
                floor: 4,
                x: 73.82,
                y: 45.06
            },
            {
                id: 14,
                floor: 4,
                x: 70.22,
                y: 38.01
            },
            {
                id: 14,
                floor: 0,
                x: 69.70,
                y: 46.09
            },
        ]
    },
    {
        name: "Enies Lobby", maps: ["Img/Maps/EniesLobby/floor0.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Cálice de Ouro", quantity: 6 },
                    { item: "Coroa de Ouro", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 0,
                x: 48.56,
                y: 71.41
            },
            {
                id: 2, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 0,
                x: 53.40,
                y: 59.86
            },
            {
                id: 3, items: [
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Cálice de Ouro", quantity: 6 },
                    { item: "Coroa de Ouro", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 5 },
                ],
                floor: 0,
                x: 44.58,
                y: 60.85,
            }
        ],
        eggs: [
            {
                id: 1,
                floor: 0,
                x: 45.13,
                y: 79.37
            },
            {
                id: 2,
                floor: 0,
                x: 50.37,
                y: 76.86
            },
            {
                id: 3,
                floor: 0,
                x: 42.65,
                y: 63.72
            },
            {
                id: 4,
                floor: 0,
                x: 46.21,
                y: 63.36
            },
            {
                id: 5,
                floor: 0,
                x: 51.32,
                y: 64.50
            },
            {
                id: 6,
                floor: 0,
                x: 54.91,
                y: 61.47
            },
            {
                id: 7,
                floor: 0,
                x: 51.03,
                y: 59.71
            },
            {
                id: 8,
                floor: 0,
                x: 47.01,
                y: 56.36
            },
        ]
    },
    {
        name: "Amazon Lily", maps: ["Img/Maps/AmazonLily/floor0.png", "Img/Maps/AmazonLily/floor1.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Cruz Dourada", quantity: 1 },
                    { item: "Bolsa de Jóias", quantity: 3 },
                    { item: "Cálice de Ouro", quantity: 6 },
                ],
                floor: 1,
                x: 58.98,
                y: 61.23
            },
            {
                id: 2, items: [
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Cálice de Ouro", quantity: 5 },
                    { item: "Coroa de Ouro", quantity: 2 },
                    { item: "Poção Média de EXP", quantity: 6 },
                ],
                floor: 0,
                x: 57.10,
                y: 46.50
            },
            {
                id: 3, items: [
                    { item: "Poção Média de EXP", quantity: 6 },
                    { item: "Bolsa de Jóias", quantity: 3 },
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Vaso Dourado", quantity: 1 },
                ],
                floor: 0,
                x: 27.51,
                y: 33.24,
            },
            {
                id: 3, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 0,
                x: 52.46,
                y: 76.15,
            },
            {
                id: 3, items: [
                    { item: "Poção Grande de EXP", quantity: 2 },
                ],
                floor: 0,
                x: 62.98,
                y: 28.26,
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 0,
                x: 44.23,
                y: 39.56
            },
            {
                id: 2,
                floor: 1,
                x: 30.31,
                y: 36.36
            },
            {
                id: 3,
                floor: 0,
                x: 24.85,
                y: 44.54
            },
            {
                id: 4,
                floor: 0,
                x: 44.06,
                y: 53.65
            },
            {
                id: 5,
                floor: 0,
                x: 43.60,
                y: 66.79
            },
            {
                id: 6,
                floor: 1,
                x: 51.79,
                y: 63.08
            },
            {
                id: 7,
                floor: 0,
                x: 49.66,
                y: 76.84
            },
            {
                id: 8,
                floor: 0,
                x: 74.64,
                y: 50.79
            },
            {
                id: 9,
                floor: 0,
                x: 61.32,
                y: 35.75
            },
            {
                id: 10,
                floor: 0,
                x: 63.60,
                y: 75.39
            },
        ]
    },
    {
        name: "Kuraigana Island", maps: ["Img/Maps/Kuraigana/floor0.png", "Img/Maps/Kuraigana/floor1.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Cálice de Ouro", quantity: 6 },
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Poção Média de EXP", quantity: 6 },
                ],
                floor: 0,
                x: 63.20,
                y: 53.79
            },
            {
                id: 2, items: [
                    { item: "Cruz Dourada", quantity: 1 },
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Cálice de Ouro", quantity: 6 },
                ],
                floor: 1,
                x: 30.87,
                y: 45.34
            },
            {
                id: 3, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                ],
                floor: 0,
                x: 27.35,
                y: 47.88
            },
            {
                id: 4, items: [
                    { item: "Poção Grande de EXP", quantity: 3 },
                ],
                floor: 0,
                x: 60.02,
                y: 67.94
            },
            {
                id: 5, items: [
                    { item: "Poção Média de EXP", quantity: 6 },
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Vaso Dourado", quantity: 1 },
                ],
                floor: 0,
                x: 54.34,
                y: 32.58
            },
        ],
    },
    {
        name: "Sabaody", maps: ["Img/Maps/Sabaody/floor0.png", "Img/Maps/Sabaody/floor1.png", "Img/Maps/Sabaody/floor2.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Cálice de Ouro", quantity: 6 },
                    { item: "Coroa de Ouro", quantity: 4 },
                    { item: "Poção Média de EXP", quantity: 11 },
                ],
                floor: 1,
                x: 50.72,
                y: 44.06
            },
            {
                id: 2, items: [
                    { item: "Bolsa de Jóias", quantity: 4 },
                    { item: "Coroa de Ouro", quantity: 2 },
                    { item: "Vaso Dourado", quantity: 1 },
                    { item: "Poção Grande de EXP", quantity: 1 },
                ],
                floor: 1,
                x: 10.77,
                y: 54.92
            },
            {
                id: 3, items: [
                    { item: "Cruz Dourada", quantity: 1 },
                    { item: "Coroa de Ouro", quantity: 3 },
                    { item: "Bolsa de Jóias", quantity: 2 },
                ],
                floor: 1,
                x: 26.37,
                y: 33.88
            },
            {
                id: 4, items: [
                    { item: "Poção Grande de EXP", quantity: 1 },
                    { item: "Vaso Dourado", quantity: 1 },
                    { item: "Bolsa de Jóias", quantity: 4 },
                ],
                floor: 1,
                x: 77.59,
                y: 68.97
            },
            {
                id: 5, items: [
                    { item: "Poção de Stamina da GL", quantity: 1 },
                    { item: "Poção Grande de EXP", quantity: 2 },
                ],
                floor: 1,
                x: 59.33,
                y: 40.51
            },
            {
                id: 6, items: [
                    { item: "Poção Grande de EXP", quantity: 3 },
                    { item: "Coroa de Ouro", quantity: 2 },
                    { item: "Vaso Dourado", quantity: 1 },
                    { item: "Cálice de Ouro", quantity: 5 },
                ],
                floor: 1,
                x: 46.25,
                y: 58.56
            },
        ],
        eggs: [
            {
                id: 1,
                floor: 1,
                x: 48.65,
                y: 29.79
            },
            {
                id: 2,
                floor: 1,
                x: 48.77,
                y: 35.12
            },
            {
                id: 3,
                floor: 1,
                x: 37.76,
                y: 50.23
            },
            {
                id: 4,
                floor: 1,
                x: 39.21,
                y: 51.30
            },
            {
                id: 5,
                floor: 1,
                x: 36.38,
                y: 52.96
            },
            {
                id: 6,
                floor: 1,
                x: 30.40,
                y: 52.58
            },
            {
                id: 7,
                floor: 1,
                x: 31.09,
                y: 50.40
            },
            {
                id: 8,
                floor: 1,
                x: 21.50,
                y: 53.41
            },
            {
                id: 9,
                floor: 1,
                x: 16.63,
                y: 56.78
            },
            {
                id: 10,
                floor: 1,
                x: 28.46,
                y: 66.68
            },
            {
                id: 11,
                floor: 1,
                x: 29.57,
                y: 64.95
            },
            {
                id: 12,
                floor: 1,
                x: 38.86,
                y: 50.33
            },
            {
                id: 13,
                floor: 1,
                x: 29.69,
                y: 52.75
            },
            {
                id: 14,
                floor: 1,
                x: 24.04,
                y: 70.46
            },
            {
                id: 15,
                floor: 1,
                x: 17.34,
                y: 65.86
            },
            {
                id: 16,
                floor: 1,
                x: 47.99,
                y: 30.33
            },
            {
                id: 17,
                floor: 1,
                x: 49.38,
                y: 23.66
            },
        ]
    },
]

const achievements = [
    { name: "Bebê Chorão", description: "Reclamou de buffs e nerfs no Mercado Negro.", img: "Img/Achievs/cry.png", directions: ["", ""] },
    { name: "It", description: "Usou um balão com Buggy, o Palhaço, no esgoto.", img: "Img/Achievs/it.png", directions: ["", ""] },
    { name: "Mal Exemplo", description: "Arremessou um gato inocente. Nunca faça isso!", img: "Img/Achievs/cat.png", directions: ["", ""] },
    { name: "Inimigo do Planeta", description: "Desturiu 1.000 árvores.", img: "Img/Achievs/forest.png", directions: ["", ""] },
    { name: "Voo Perfeito", description: "Você fez o melhor avião de papel de todos os tempos!", img: "Img/Achievs/paper.png", directions: ["", ""] },
    { name: "Pervertido", description: "Pediu para ver a calcinha de 50 mulheres.", img: "Img/Achievs/pants.png", directions: ["", ""] },
    { name: "Babá", description: "Viu pelo menos 28 tipos de bebês diferentes usando os poderes da Bonney.", img: "Img/Achievs/baby.png", directions: ["", ""] },
    { name: "Ansioso", description: "Viu todos os Chapéu de Palha pós Timeskip no espelho do futuro.", img: "Img/Achievs/future.png", directions: ["", ""] },
    { name: "Batalha dos Séculos", description: "Assistiu à Batalha dos Séculos em Little Garden.", img: "Img/Achievs/giants.png", directions: ["", ""] },
    { name: "Coleção de Espadas", description: "Ajudou um homem a começar sua coleção de espadas.", img: "Img/Achievs/sword.png", directions: ["", ""] },
    { name: "Binks no Sake", description: "Tocou a música favorita da Laboon.", img: "Img/Achievs/brooklab.png", directions: ["", ""] },
    { name: "Reta Final", description: "Informou o Quartel General da Marinha sobre o paradeiro do Smoker.", img: "Img/Achievs/smoker.png", directions: ["", ""] },
    { name: "Água Estranha", description: "Bebeu 100 águas do Mezcal Cactus.", img: "Img/Achievs/water.png", directions: ["", ""] },
    { name: "Fruta dos Céus", description: "Bebeu água de Conasshu.", img: "Img/Achievs/fruit.png", directions: ["", ""] },
    { name: "Usopp Idiota", description: "Chamou o Usopp de idiota 5 vezes usando o Tone Dial.", img: "Img/Achievs/dial.png", directions: ["", ""] },
    { name: "Esconderijo Pirata", description: "Você encontrou um esconderijo pirata.", img: "Img/Achievs/treasure.png", directions: ["", ""] },
    { name: "Navio Fantasma", description: "Você encontrou um navio fantasma.", img: "Img/Achievs/ghostship.png", directions: ["", ""] },
    { name: "Fugitiva da Mary Geoise: Koala", description: "Escapou de Mary Geoise usando a koala.", img: "Img/Achievs/sun.png", directions: ["", ""] },
    { name: "Fugitiva da Mary Geoise: Hancock", description: "Escapou de Mary Geoise usando a Boa Hancock.", img: "Img/Achievs/sun.png", directions: ["", ""] },
    { name: "Artilheiro", description: "Marcou 30 gols.", img: "Img/Achievs/artilheiro.png", directions: ["", ""] },
    { name: "Zagueiro", description: "Roubou a bola do adversário 50 vezes.", img: "Img/Achievs/zagueiro.png", directions: ["", ""] },
    { name: "Olé", description: "Realizou 10 chapéus em adversários.", img: "Img/Achievs/ole.png", directions: ["", ""] },
    { name: "Doce Favorito", description: "Comeu algodão-doce com o Chopper.", img: "Img/Achievs/cotton.png", directions: ["", ""] },
    { name: "Deus Horus", description: "Descobriu os mistérios acerca do antigo deus Horus.", img: "Img/Achievs/horus.png", directions: ["", ""] },
    { name: "Deus Osiris", description: "Descobriu os mistérios acerca do antigo deus Osiris.", img: "Img/Achievs/osiris.png", directions: ["", ""] },
    { name: "Deusa Bastet", description: "Descobriu os mistérios acerca da antiga deusa Bastet.", img: "Img/Achievs/horus.png", directions: ["", ""] },
    { name: "Deusa Isis", description: "Descobriu os mistérios acerca da antiga deusa Isis.", img: "Img/Achievs/isis.png", directions: ["", ""] },
    { name: "Deus Sobek", description: "Descobriu os mistérios acerca do antigo deus Sobek.", img: "Img/Achievs/sobek.png", directions: ["", ""] },
    { name: "Deusa Serket", description: "Descobriu os mistérios acerca da antiga deusa Serket.", img: "Img/Achievs/serket.png", directions: ["", ""] },
    { name: "Deus Seth", description: "Descobriu os mistérios acerca do antigo deus Seth.", img: "Img/Achievs/seth.png", directions: ["", ""] },
    { name: "Deus Anubis", description: "Descobriu os mistérios acerca do antigo deus Anubis.", img: "Img/Achievs/anubis.png", directions: ["", ""] },
    { name: "Madeira!", description: "Fatalmente atingido por uma árvore que caiu.", img: "Img/Achievs/timber.png", directions: ["", ""] },
    { name: "Mico Ladrão Dourado", description: "Perdeu sua banana para um ladrãozinho esperto.", img: "Img/Achievs/mico.png", directions: ["", ""] },
    { name: "Amante de Música", description: "Tocou 5 caixas de música diferentes", img: "Img/Achievs/music.png", directions: ["", ""] },
    { name: "Naufrágio", description: "Afundou 5 vezes em um redemoinho.", img: "Img/Achievs/titanic.png", directions: ["", ""] },
    { name: "Gênio Falso", description: "Perdeu sua banana para um ladrãozinho esperto.", img: "Img/Achievs/lamp.png", directions: ["", ""] },
    { name: "Tentando Crescer", description: "Pisou em 100 cogumelos em Amazon Lily.", img: "Img/Achievs/cogumelo.png", directions: ["", ""] },
    { name: "Acidente Explosivo", description: "Morreu para sua própria bomba no evento Bomberpiece.", img: "Img/Achievs/suicide.png", directions: ["", ""] },
    { name: "Aniquilador Explosivo", description: "Eliminou todos os oponentes em uma partida de Bomberpiece.", img: "Img/Achievs/killer.png", directions: ["", ""] },
    { name: "Vitória Limpa", description: "Venceu uma partida de Bomberpiece sem derrotar nenhum oponente.", img: "Img/Achievs/nobomb.png", directions: ["", ""] },
    { name: "Encurralado", description: "Morreu para blocos que caíram na arena do Bomberpiece.", img: "Img/Achievs/noescape.png", directions: ["", ""] },
    { name: "No Limite", description: "Venceu uma partida de Bomberpiece no limite do tempo.", img: "Img/Achievs/limit.png", directions: ["", ""] },
    { name: "Ele estava pedindo por isso!", description: "Desferiu um golpe contra um Dragão Celestial.", img: "Img/Achievs/punch.png", directions: ["", ""] },
    { name: "Fugiu do Caos", description: "Escapou do Sabaody Archipelago com os Rosy Life Riders.", img: "Img/Achievs/caos.png", directions: ["", ""] },
    { name: "Justiça Feita", description: "Foi derrotado por um Almirante no Sabaody Archipelago.", img: "Img/Achievs/almirantes.png", directions: ["", ""] },
]

const updateText = `- Adicionada a aba de Mapa Interativo. Irei adicionar mais coisas ao mapa aos poucos e, por enquanto,
há apenas os baús e os ovos do evento de Páscoa, que irei adicionar conforme for descobrindo.`