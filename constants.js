const chars = [
    { name: "Marco", type: "dima", dates: ["13-06-2025", "18-04-2025", "21-03-2025", "13-12-2024", "09-08-2024", "26-04-2024"], image: "Img/Medals/Marco.png", class: ["Especialista", "Lutador", "Suporte", "Fruta do Diabo"] },
    { name: "Uta", type: "dima", dates: ["30-05-2025", "18-04-2025", "14-03-2025", "13-12-2024", "30-08-2024", "19-04-2024"], image: "Img/Medals/Uta.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Scratchmen Apoo", type: "gold", dates: ["20-06-2025", "02-05-2025", "28-02-2025", "10-01-2025", "29-11-2024", "27-09-2024", "06-09-2024", "28-06-2024", "10-05-2024"], image: "Img/Medals/Apoo.png", class: ["Atirador", "Suporte", "Supernova", "Fruta do Diabo"] },
    { name: "Baby 5", type: "gold", dates: ["23-05-2025", "18-04-2025", "07-02-2025", "31-01-2025", "29-11-2024", "25-10-2024", "11-10-2024", "06-09-2024", "12-07-2024", "31-05-2024"], image: "Img/Medals/Baby5.png", class: ["DPS", "Atirador", "Cortante", "Fruta do Diabo", "Mulher"] },
    { name: "Bartolomeo", type: "gold", dates: ["04-07-2025", "16-05-2025", "11-04-2025", "21-02-2025", "17-01-2025", "15-11-2024", "18-10-2024", "30-08-2024", "05-07-2024", "26-04-2024", "24-05-2024"], image: "Img/Medals/Bartolomeo.png", class: ["Especialista", "DPS", "Fruta do Diabo"] },
    { name: "Bastille", type: "gold", dates: ["13-06-2025", "18-04-2025", "14-02-2025", "31-01-2025", "29-11-2024", "11-10-2024", "06-09-2024", "19-07-2024", "17-05-2024"], image: "Img/Medals/Bastille.png", class: ["Cortante", "Tanque", "Marinheiro"] },
    { name: "Bellamy", type: "gold", dates: ["27-06-2025", "20-06-2025", "02-05-2025", "14-03-2025", "31-01-2025", "13-12-2024", "15-11-2024", "13-09-2024", "14-06-2024", "17-05-2024"], image: "Img/Medals/Bellamy.png", class: ["Lutador", "DPS", "Fruta do Diabo"] },
    { name: "Jewelry Bonney", type: "gold", dates: ["30-05-2025", "11-04-2025", "21-02-2025", "10-01-2025", "13-12-2024", "27-09-2024", "06-09-2024", "12-07-2024", "31-05-2024"], image: "Img/Medals/Bonney.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Supernova", "Mulher", "Realeza"] },
    { name: "Brook", type: "gold", dates: ["20-06-2025", "23-05-2025", "04-04-2025", "28-02-2025", "03-01-2025", "15-11-2024", "04-10-2024", "16-08-2024", "14-06-2024", "10-05-2024"], image: "Img/Medals/Brook.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Capone Gang Bege", type: "gold", dates: ["30-05-2025", "28-03-2025", "07-02-2025", "17-01-2025", "13-12-2024", "13-09-2024", "28-06-2024", "07-06-2024", "26-04-2024"], image: "Img/Medals/Capone.png", class: ["Atirador", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Carrot", type: "gold", dates: ["16-05-2025", "04-04-2025", "07-03-2025", "03-01-2025", "22-11-2024", "04-10-2024", "16-08-2024", "21-06-2024", "31-05-2024", "26-04-2024"], image: "Img/Medals/Carrot.png", class: ["Cortante", "Especialista", "DPS", "Mulher"] },
    { name: "Tony Tony Chopper", type: "gold", dates: ["20-06-2025", "28-03-2025", "21-02-2025", "17-01-2025", "06-12-2024", "08-11-2024", "13-09-2024", "02-08-2024", "28-06-2024", "17-05-2024"], image: "Img/Medals/Chopper.png", class: ["Lutador", "Suporte", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Crocodile", type: "gold", dates: ["04-07-2025", "09-05-2025", "21-03-2025", "24-01-2025", "27-09-2024", "16-08-2024", "26-07-2024", "24-05-2024"], image: "Img/Medals/Crocodile.png", class: ["Especialista", "Tanque", "Fruta do Diabo", "Shichibukai"] },
    { name: "Dalmatian", type: "gold", dates: ["13-06-2025", "28-03-2025", "21-03-2025", "31-01-2025", "13-12-2024", "08-11-2024", "18-10-2024", "23-08-2024", "19-07-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Dalmatian.png", class: ["Cortante", "Bruiser", "Marinheiro", "Fruta do Diabo"] },
    { name: "X Drake", type: "gold", dates: ["20-06-2025", "02-05-2025", "28-02-2025", "24-01-2025", "15-11-2024", "25-10-2024", "02-08-2024", "26-07-2024", "03-05-2024"], image: "Img/Medals/Drake.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Supernova", "Marinheiro"] },
    { name: "Franky", type: "gold", dates: ["04-07-2025", "16-05-2025", "11-04-2025", "07-03-2025", "27-12-2024", "29-11-2024", "01-11-2024", "13-09-2024", "30-08-2024", "05-07-2024", "24-05-2024"], image: "Img/Medals/Franky.png", class: ["Atirador", "Bruiser", "Chapéu de Palha"] },
    { name: "Basil Hawkins", type: "gold", dates: ["16-05-2025", "04-04-2025", "14-02-2025", "17-01-2025", "22-11-2024", "01-11-2024", "11-10-2024", "09-08-2024", "12-07-2024", "10-05-2024"], image: "Img/Medals/Hawkins.png", class: ["Especialista", "Bruiser", "Fruta do Diabo", "Supernova"] },
    { name: "Hina", type: "gold", dates: ["09-05-2025", "07-02-2025", "31-01-2025", "06-12-2024", "01-11-2024", "04-10-2024", "30-08-2024", "21-06-2024", "24-05-2024"], image: "Img/Medals/Hina.png", class: ["Lutador", "Bruiser", "Fruta do Diabo", "Marinheiro", "Mulher"] },
    { name: "Vinsmoke Ichiji", type: "gold", dates: ["27-06-2025", "23-05-2025", "18-04-2025", "21-03-2025", "03-01-2025", "06-12-2024", "01-11-2024", "25-10-2024", "16-08-2024", "03-05-2024"], image: "Img/Medals/Ichiji.png", class: ["Bruiser", "Lutador", "Realeza"] },
    { name: "Jesus Burgess", type: "gold", dates: ["09-05-2025", "07-03-2025", "03-01-2025", "22-11-2024", "20-09-2024", "02-08-2024", "28-06-2024", "10-05-2024"], image: "Img/Medals/Jesus.png", class: ["Lutador", "Tanque"] },
    { name: "Eustass Kid", type: "gold", dates: ["06-06-2025", "28-03-2025", "14-03-2025", "17-01-2025", "15-11-2024", "20-09-2024", "30-08-2024", "12-07-2024", "07-06-2024", "15-03-2024"], image: "Img/Medals/Kid.png", class: ["Atirador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Killer", type: "gold", dates: ["13-06-2025", "04-04-2025", "21-02-2025", "27-12-2024", "20-09-2024", "09-08-2024", "21-06-2024", "03-05-2024"], image: "Img/Medals/Killer.png", class: ["Cortante", "DPS", "Supernova"] },
    { name: "Koala", type: "gold", dates: ["30-05-2025", "18-04-2025", "21-03-2025", "27-12-2024", "29-11-2024", "11-10-2024", "30-08-2024", "14-06-2024", "31-05-2024"], image: "Img/Medals/Koala.png", class: ["Lutador", "DPS", "Mulher"] },
    { name: "Trafalgar Law", type: "gold", dates: ["04-07-2025", "16-05-2025", "25-04-2025", "07-03-2025", "20-12-2024", "01-11-2024", "27-09-2024", "23-08-2024", "05-07-2024", "17-05-2024"], image: "Img/Medals/Law.png", class: ["Cortante", "Especialista", "DPS", "Supernova", "Fruta do Diabo"] },
    { name: "Leo e Mansherry", type: "gold", dates: ["30-05-2025", "25-04-2025", "28-02-2025", "20-12-2024", "11-10-2024", "02-08-2024", "05-07-2024", "14-06-2024", "19-04-2024"], image: "Img/Medals/Leo.png", class: ["Especialista", "Suporte", "Realeza", "Fruta do Diabo", "Mulher"] },
    { name: "Monkey D. Luffy", type: "gold", dates: ["04-07-2025", "09-05-2025", "11-04-2025", "28-02-2025", "10-01-2025", "29-11-2024", "27-09-2024", "23-08-2024", "28-06-2024", "03-05-2024"], image: "Img/Medals/Luffy.png", class: ["Bruiser", "Lutador", "Fruta do Diabo", "Chapéu de Palha"] },
    { name: "Gecko Moria", type: "gold", dates: ["06-06-2025", "02-05-2025", "07-03-2025", "07-02-2025", "20-12-2024", "13-10-2023"], image: "Img/Medals/Moria.png", class: ["Cortante", "Suporte", "Fruta do Diabo", "Shichibukai"] },
    { name: "Nami", type: "gold", dates: ["06-06-2025", "04-04-2025", "07-02-2025", "24-01-2025", "01-11-2024", "27-09-2024", "02-08-2024", "21-06-2024", "17-05-2024"], image: "Img/Medals/Nami.png", class: ["Especialista", "DPS", "Chapéu de Palha", "Mulher"] },
    { name: "Vinsmoke Niji", type: "gold", dates: ["06-06-2025", "11-04-2025", "21-02-2025", "31-01-2025", "06-12-2024", "18-10-2024", "02-08-2024", "19-07-2024", "24-05-2024", "26-04-2024"], image: "Img/Medals/Niji.png", class: ["Atirador", "DPS", "Realeza"] },
    { name: "Perona", type: "gold", dates: ["30-05-2025", "02-05-2025", "14-02-2025", "24-01-2025", "15-11-2024", "04-10-2024", "16-08-2024", "05-07-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Perona.png", class: ["Especialista", "Suporte", "Fruta do Diabo", "Mulher"] },
    { name: "Rebecca", type: "gold", dates: ["04-07-2025", "13-06-2025", "09-05-2025", "14-02-2025", "27-12-2024", "20-12-2024", "18-10-2024", "09-08-2024", "19-07-2024", "07-06-2024", "05-04-2024"], image: "Img/Medals/Rebecca.png", class: ["Cortante", "Tanque", "Realeza", "Mulher"] },
    { name: "Vinsmoke Reiju", type: "gold", dates: ["23-05-2025", "02-05-2025", "14-02-2025", "10-01-2025", "20-12-2024", "08-11-2024", "13-09-2024", "06-09-2024", "12-07-2024", "10-05-2024"], image: "Img/Medals/Reiju.png", class: ["Suporte", "Especialista", "Realeza", "Mulher"] },
    { name: "Nico Robin", type: "gold", dates: ["09-05-2025", "25-04-2025", "07-03-2025", "17-01-2025", "20-12-2024", "08-11-2024", "20-09-2024", "09-08-2024", "21-06-2024", "10-05-2024", "26-04-2024"], image: "Img/Medals/Robin.png", class: ["Especialista", "DPS", "Fruta do Diabo", "Chapéu de Palha", "Mulher"] },
    { name: "Ryuma", type: "gold", dates: ["06-06-2025", "28-03-2025", "03-01-2025", "08-11-2024", "18-10-2024", "26-07-2024", "21-06-2024", "14-06-2024", "12-04-2024"], image: "Img/Medals/Ryuma.png", class: ["Cortante", "DPS"] },
    { name: "Vinsmoke Sanji", type: "gold", dates: ["27-06-2025", "16-05-2025", "21-03-2025", "07-02-2025", "03-01-2025", "22-11-2024", "25-10-2024", "18-10-2024", "16-08-2024", "26-07-2024", "24-05-2024"], image: "Img/Medals/Sanji.png", class: ["Lutador", "DPS", "Chapéu de Palha", "Realeza"] },
    { name: "Smoker", type: "gold", dates: ["27-06-2025", "06-06-2025", "25-04-2025", "14-02-2025", "10-01-2025", "06-12-2024", "13-09-2024", "23-08-2024", "12-07-2024", "03-05-2024"], image: "Img/Medals/Smoker.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Marinheiro"] },
    { name: "Urouge", type: "gold", dates: ["27-06-2025", "11-04-2025", "14-03-2025", "24-01-2025", "08-11-2024", "11-10-2024", "06-09-2024", "26-07-2024", "31-05-2024"], image: "Img/Medals/Urouge.png", class: ["Lutador", "Tanque", "Fruta do Diabo", "Supernova"] },
    { name: "Usopp", type: "gold", dates: ["23-05-2025", "28-03-2025", "14-03-2025", "10-01-2025", "04-10-2024", "26-07-2024", "14-06-2024", "03-05-2024"], image: "Img/Medals/Usopp.png", class: ["Atirador", "DPS", "Chapéu de Palha"] },
    { name: "Van Augur", type: "gold", dates: ["23-05-2025", "04-04-2025", "14-03-2025", "24-01-2025", "06-12-2024", "25-10-2024", "04-10-2024", "23-08-2024", "05-07-2024", "17-05-2024"], image: "Img/Medals/Van_augur.png", class: ["Atirador", "DPS"] },
    { name: "Vinsmoke Yonji", type: "gold", dates: ["20-06-2025", "25-04-2025", "28-02-2025", "27-12-2024", "22-11-2024", "20-09-2024", "09-08-2024", "19-07-2024", "28-06-2024", "07-06-2024", "22-03-2024"], image: "Img/Medals/Yonji.png", class: ["Lutador", "Tanque", "Realeza"] },
    { name: "Roronoa Zoro", type: "gold", dates: ["27-06-2025", "13-06-2025", "25-04-2025", "21-02-2025", "27-12-2024", "22-11-2024", "25-10-2024", "20-09-2024", "23-08-2024", "19-07-2024", "31-05-2024"], image: "Img/Medals/Zoro.png", class: ["Cortante", "Bruiser", "Chapéu de Palha"] },
]

const lastDate = "04-07-2025";

function getRotationChars(rotation) {
    return rotation
        .filter(name => name.trim() !== '')
        .map(name => chars.find(char => char.name.toLowerCase().includes(name.toLowerCase())) || null);
}

const rotationOne = getRotationChars(['Monkey D. Luffy', 'Crocodile', 'Rebecca']);
const rotationTwo = getRotationChars(['Franky', 'Trafalgar Law', 'Bartolomeo']);

const specialRot = getRotationChars(['']);

const foods = [
    { name: "Bife Wagyu", img: "Img/Food/BifeWagyu.png", lvl: 110, TankHp: 28050, DpsHp: 18150, SupHp: 11550, cd: 180, ing: [{ "Bife Cru Premium": 6, "Sal": 4, "Pimenta": 3, "Azeite": 6, "Folhas Verdes": 4, "Cebola": 3, "Alho": 2, "Cogumelo": 5, "Limão": 2, "Vinho Branco": 1, "Trufa Branca": 2 }] },
    { name: "Atum Grelhado", img: "Img/Food/AtumGrelhado.png", lvl: 110, TankHp: 28050, DpsHp: 18150, SupHp: 11550, cd: 300, ing: [{ "Azeite": 2, "Limão": 2, "Alho": 2, "Atum": 5, "Pimenta": 2, "Folhas Verdes": 2, "Alface": 4, "Vinho Branco": 1, "Manteiga": 2 }] },
    { name: "Paella de Frutos do Mar", img: "Img/Food/PaellaFrutos.png", lvl: 100, TankHp: 25500, DpsHp: 16500, SupHp: 10500, cd: 180, ing: [{ "Camarão Cru": 5, "Lagosta Crua": 3, "Arroz": 2, "Folhas Verdes": 1, "Tomates": 1, "Peixe Cru": 1, "Azeite": 1, "Pimenta": 1, "Água": 3, "Sal": 1 }] },
    { name: "Ensopado de Ostra", img: "Img/Food/EnsopadoOstra.png", lvl: 100, TankHp: 25500, DpsHp: 16500, SupHp: 10500, cd: 300, ing: [{ "Ostra": 3, "Creme de Leite": 1, "Sal": 2, "Pimenta": 2, "Manteiga": 2, "Cebola": 1, "Alho": 1 }] },
    { name: "Camarões Salteados", img: "Img/Food/CamarãoSalteado.png", lvl: 90, TankHp: 22950, DpsHp: 13500, SupHp: 13500, cd: 180, ing: [{ "Camarão Cru": 4, "Manteiga": 1, "Azeite": 3, "Vinho Branco": 1, "Alho": 4, "Pimenta": 2, "Limão": 2, "Sal": 1, "Folhas Verdes": 2, "Trufa Branca": 1 }] },
    { name: "Curry de Coelho", img: "Img/Food/CurryCoelho.png", lvl: 90, TankHp: 22950, DpsHp: 13500, SupHp: 13500, cd: 300, ing: [{ "Carne Crua de Coelho": 5, "Ovos": 1, "Azeite": 2, "Sal": 2, "Pimenta": 2, "Alho": 1, "Cebola": 1, "Tomates": 2 }] },
    { name: "Espeto de Carne Gourmet", img: "Img/Food/EspetoCarneGourmet.png", lvl: 80, TankHp: 20400, DpsHp: 12000, SupHp: 8400, cd: 180, ing: [{ "Bife Cru Premium": 4, "Sal": 2, "Pimenta": 3, "Azeite": 3, "Bacon": 5, "Cebola": 4, "Folhas Verdes": 3, "Vinho Branco": 1 }] },
    { name: "Medalhão de Carne", img: "Img/Food/MedalhaoCarne.png", lvl: 80, TankHp: 20400, DpsHp: 12000, SupHp: 8400, cd: 300, ing: [{ "Bife Cru Premium": 3, "Bacon": 8, "Azeite": 3, "Folhas Verdes": 1, "Alho": 1, "Sal": 2, "Batata": 4, "Água": 4, "Limão": 2 }] },
    { name: "Salada Italiana", img: "Img/Food/SaladaItaliana.png", lvl: 70, TankHp: 17850, DpsHp: 9450, SupHp: 7349, cd: 180, ing: [{ "Alface": 5, "Trufa Branca": 5, "Folhas Verdes": 1, "Tomates": 3, "Azeite": 1, "Batata": 2, "Sal": 1 }] },
    { name: "Bife e Ovo de Frigideira", img: "Img/Food/BifeOvoFrigideira.png", lvl: 70, TankHp: 17850, DpsHp: 9450, SupHp: 7349, cd: 300, ing: [{ "Bife Cru Premium": 3, "Ovos": 2, "Pimenta": 2, "Azeite": 1, "Folhas Verdes": 1, "Sal": 4 }] },
]

const ingredients = [
    { name: "Bife Cru Premium", cost: 200, img: "Img/Food/Ingredientes/BifeCruPremium.png" },
    { name: "Lagosta Crua", cost: 370, img: "Img/Food/Ingredientes/LagostaCrua.png" },
    { name: "Camarão Cru", cost: 240, img: "Img/Food/Ingredientes/CamarãoCru.png" },
    { name: "Carne Crua de Coelho", cost: 240, img: "Img/Food/Ingredientes/CarneCruaCoelho.png" },
    { name: "Peixe Cru", cost: 50, img: "Img/Food/Ingredientes/PeixeCru.png" },
    { name: "Atum", cost: 86, img: "Img/Food/Ingredientes/Atum.png" },
    { name: "Ostra", cost: 360, img: "Img/Food/Ingredientes/Ostra.png" },
    { name: "Bacon", cost: 10, img: "Img/Food/Ingredientes/Bacon.png" },
    { name: "Ovos", cost: 10, img: "Img/Food/Ingredientes/Ovos.png" },
    { name: "Manteiga", cost: 40, img: "Img/Food/Ingredientes/Manteiga.png" },
    { name: "Folhas Verdes", cost: 15, img: "Img/Food/Ingredientes/FolhasVerdes.png" },
    { name: "Alface", cost: 20, img: "Img/Food/Ingredientes/Alface.png" },
    { name: "Tomates", cost: 10, img: "Img/Food/Ingredientes/Tomates.png" },
    { name: "Limão", cost: 10, img: "Img/Food/Ingredientes/Limao.png" },
    { name: "Água", cost: 5, img: "Img/Food/Ingredientes/Agua.png" },
    { name: "Vinho Branco", cost: 700, img: "Img/Food/Ingredientes/VinhoBranco.png" },
    { name: "Cogumelo", cost: 20, img: "Img/Food/Ingredientes/Cogumelo.png" },
    { name: "Trufa Branca", cost: 250, img: "Img/Food/Ingredientes/TrufaBranca.png" },
    { name: "Sal", cost: 10, img: "Img/Food/Ingredientes/Sal.png" },
    { name: "Pimenta", cost: 15, img: "Img/Food/Ingredientes/Pimenta.png" },
    { name: "Arroz", cost: 10, img: "Img/Food/Ingredientes/Arroz.png" },
    { name: "Alho", cost: 10, img: "Img/Food/Ingredientes/Alho.png" },
    { name: "Batata", cost: 10, img: "Img/Food/Ingredientes/Batata.png" },
    { name: "Azeite", cost: 15, img: "Img/Food/Ingredientes/Azeite.png" },
    { name: "Cebola", cost: 10, img: "Img/Food/Ingredientes/Cebola.png" },
    { name: "Creme de Leite", cost: 20, img: "Img/Food/Ingredientes/CremeLeite.png" },
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
    { name: "10x Chaves de Baú", img: "Img/Items/Chave.png" },
    { name: "Colar Antigo", img: "Img/Items/ColarAntigo.png" },
    { name: "Coroa de Ouro", img: "Img/Items/CoroaOuro.png" },
    { name: "Coxa de Carne", img: "Img/Items/CoxaCarne.png" },
    { name: "Guarda-chuva dos Sand Pirates", img: "Img/Items/GuardaChuva.png" },
    { name: "Kit de Reparo 1.0", img: "Img/Items/KitReparo1.png" },
    { name: "Kit de Reparo 2.0", img: "Img/Items/KitReparo2.png" },
    { name: "Kit de Reparo 3.0", img: "Img/Items/KitReparo3.png" },
    { name: "Kit de Reparo 4.0", img: "Img/Items/KitReparo4.png" },
    { name: "Kit de Reparo 5.0", img: "Img/Items/KitReparo5.png" },
    { name: "Lingote de Aço", img: "Img/Items/LingoteAço.png" },
    { name: "Lingote de Ferro", img: "Img/Items/LingoteFerro.png" },
    { name: "Maçã", img: "Img/Items/Maça.png" },
    { name: "Minério de Cobre", img: "Img/Items/MinerioCobre.png" },
    { name: "Minério de Ferro", img: "Img/Items/MinerioFerro.png" },
    { name: "Onigiri", img: "Img/Items/Onigiri.png" },
    { name: "Pano", img: "Img/Items/Pano.png" },
    { name: "Pano Melhorado", img: "Img/Items/PanoMelhorado.png" },
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
    { name: "Prancha de Carvalho", img: "Img/Items/PranchaCarvalho.png" },
    { name: "Pranchas de Mogno", img: "Img/Items/PranchasMogno.png" },
    { name: "Rifle", img: "Img/Items/Rifle.png" },
    { name: "Rubi em Forma de Coração", img: "Img/Items/Rubi.png" },
    { name: "Sabre Velho", img: "Img/Items/SabreVelho.png" },
    { name: "Sake", img: "Img/Items/Sake.png" },
    { name: "Talismã da Aranha", img: "Img/Items/TalismaAranha.png" },
    { name: "Tora de Carvalho", img: "Img/Items/ToraCarvalho.png" },
    { name: "Tora de Madeira", img: "Img/Items/ToraMadeira.png" },
    { name: "Peixe Cru", img: "Img/Food/Ingredientes/PeixeCru.png" },
    { name: "Berry de Ouro", img: "Img/gold.png" },
    { name: "Berry de Prata", img: "Img/silver.png" },
    { name: "Berry de Bronze", img: "Img/berry.png" },
]

const islands = [
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
                    { item: "Berry de Bronze", quantity: 15 },
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
                    { item: "Berry de Bronze", quantity: 10 },
                ],
                floor: 4,
                x: 22.6,
                y: 30.9
            },
            {
                id: 5, items: [
                    { item: "Berry de Bronze", quantity: 22 },
                ],
                floor: 1,
                x: 17.86,
                y: 48.5
            },
            {
                id: 6, items: [
                    { item: "10x Chaves de Baú", quantity: 10 },
                ],
                floor: 2,
                x: 65.85,
                y: 62.1
            },
        ],
    },
    {
        name: "Shells Town", maps: ["Img/Maps/Shells/floor0.png", "Img/Maps/Shells/floor1.png", "Img/Maps/Shells/floor2.png", "Img/Maps/Shells/floor3.png", "Img/Maps/Shells/floor4.png", "Img/Maps/Shells/floor5.png"]
        , chests: [
            {
                id: 1, items: [
                    { item: "Berry de Bronze", quantity: 50 },
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
                    { item: "Berry de Bronze", quantity: 20 },
                    { item: "Poção Pequena de EXP", quantity: 1 },
                ],
                floor: 1,
                x: 67.9,
                y: 54.1
            },
        ],
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
                    { item: "Berry de Prata", quantity: 1 },
                    { item: "Berry de Bronze", quantity: 20 },
                    { item: "Poção Pequena de EXP", quantity: 2 },
                ],
                floor: 1,
                x: 67.26,
                y: 66.18
            },
            {
                id: 3, items: [
                    { item: "Berry de Bronze", quantity: 80 },
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
    }
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
    { name: "Reta Final", description: "Informou o Quartel General da Marinha sobre o paradeiro do Smoker.", img: "Img/Achievs/Smoker.png", directions: ["", ""] },
    { name: "Água Estranha", description: "Bebeu 100 águas do Mezcal Cactus.", img: "Img/Achievs/water.png", directions: ["", ""] },
    { name: "Fruta dos Céus", description: "Bebeu água de Conasshu.", img: "Img/Achievs/fruit.png", directions: ["", ""] },
    { name: "Usopp Idiota", description: "Chamou o Usopp de idiota 5 vezes usando o Tone Dial.", img: "Img/Achievs/dial.png", directions: ["", ""] },
    { name: "Esconderijo Pirata", description: "Você encontrou um esconderijo pirata.", img: "Img/Achievs/treasure.png", directions: ["", ""] },
    { name: "Navio Fantasma", description: "Você encontrou um navio fantasma.", img: "Img/Achievs/ghostship.png", directions: ["", ""] },
    { name: "Fugitiva da Mary Geoise: Koala", description: "Escapou de Mary Geoise usando a koala.", img: "Img/Achievs/sun.png", directions: ["", ""] },
    { name: "Fugitiva da Mary Geoise: Hancock", description: "Escapou de Mary Geoise usando a Boa Hancock.", img: "Img/Achievs/sun.png", directions: ["", ""] },
]
