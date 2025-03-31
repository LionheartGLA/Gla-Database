let tab = 'memory';

const memoryDiv = document.querySelector('.main-memory');
const quizDiv = document.querySelector('.main-quiz');

const memoryBt = document.querySelector('.memory-img');
const quizBt = document.querySelector('.quiz-img');

const quizInput = document.querySelector('.quiz-input')
const answersDiv = document.querySelector('.quiz-container');

const colors = ["blue", "purple", "pink", "orange", "green", "red"];
const numberOfSquares = 12;

var food = "closed";
var selectedFood = "Bife Wagyu";

var wb = "closed";
var selectedWb = "Marineford";
var selectedWbDate = 0;

var chest = "closed";
var chestSelectedTab = "Chests";

const answers = [
    {
        "text": "[GLA] A habilidade Liberation, do Marshall D. Teach, tem dois segundos de tempo de recarga e 18 de poder.",
        "type": "true"
    },
    {
        "text": "[GLA] A habilidade Preparation aumenta a velocidade do Luffy por 4 segundos e concede bônus de força no próximo ataque.",
        "type": "true"
    },
    {
        "text": "[GLA] Baratie e recomendado para jogadores do level 42 a 52 no minimapa do jogo.",
        "type": "true"
    },
    {
        "text": "[GLA] A habilidade Usopp Fear concede velocidade e defesa para ele.",
        "type": "true"
    },
    {
        "text": "[GLA] A rotação semanal muda toda sexta-feira.",
        "type": "true"
    },
    {
        "text": "[GLA] Baratie é o primeiro local em que você pode construir um navio nível 3.",
        "type": "true"
    },
    {
        "text": "[GLA] Bartholomew Kuma lê sua bíblia durante a animação do seu emote.",
        "type": "true"
    },
    {
        "text": "[GLA] Boa Hancock não pode petrificar o Monkey D. Luffy.",
        "type": "true"
    },
    {
        "text": "[GLA] Boa Hancock pode transformar os inimigos em pedra por 7 segundos com a habilidade Mero Mero Mellow.",
        "type": "true"
    },
    {
        "text": "[GLA] Cabaji tem a menor velocidade de movimento base do jogo.",
        "type": "true"
    },
    {
        "text": "[GLA] Camisa de Tritão é o item mais caro que o Genzo Vende e custa 10000 berry.",
        "type": "true"
    },
    {
        "text": "[GLA] Capone Gang Bege é o único personagem que pode convocar dois subordinados sem esperar o tempo de recarga.",
        "type": "true"
    },
    {
        "text": "[GLA] Capone Gang Bege não libera nenhuma habilidade no nível 100.",
        "type": "true"
    },
    {
        "text": "[GLA] Chabo é o nome da criança que a Nojiko pede para ajudar no Arlong Park.",
        "type": "true"
    },
    {
        "text": "[GLA] Chopper ganha defesa bônus durante a habilidade Walk Point.",
        "type": "true"
    },
    {
        "text": "[GLA] Cocoyasi Village é recomendado para jogadores do level 50 a 60 no minimapa do jogo.",
        "type": "true"
    },
    {
        "text": "[GLA] É obrigatório derrotar o Jango na missão do Black Cat no modo história.",
        "type": "true"
    },
    {
        "text": "[GLA] É possível criar Medalhas Dinâmicas de Bronze por 5 Moedas Piratas no Mercado Negro.",
        "type": "true"
    },
    {
        "text": "[GLA] É possível criar Medalhas Dinâmicas de Diamante por 50 Moedas Piratas no Mercado Negro.",
        "type": "true"
    },
    {
        "text": "[GLA] É possivel criar Medalhas Dinâmicas de Ouro por 20 Moedas Piratas no Mercado Negro.",
        "type": "true"
    },
    {
        "text": "[GLA] É possivel criar Medalhas Dinâmicas de Prata por 10 Moedas Piratas no Mercado Negro.",
        "type": "true"
    },
    {
        "text": "[GLA] É possível fazer missões diárias de Tritão em Cocoyasi Village",
        "type": "true"
    },
    {
        "text": "[GLA] É possível preparar algumas comidas na casa da Nojiko.",
        "type": "true"
    },
    {
        "text": "[GLA] É possível reparar os equipamentos do seu navio nas Docas.",
        "type": "true"
    },
    {
        "text": "[GLA] Em Cocoyasi Village, você pode comprar Laranja no NPC por 42 berries cada.",
        "type": "true"
    },
    {
        "text": "[GLA] Em Conomi Island você pode encontrar os seguintes inimigos: Moles, Wolves e Baby Moles.",
        "type": "true"
    },
    {
        "text": "[GLA] Em regra, a quarta habilidade do personagem é desbloqueada no nível 20.",
        "type": "true"
    },
    {
        "text": "[GLA] Em regra, a quinta habilidade do personagem é desbloqueada no nível 30.",
        "type": "true"
    },
    {
        "text": "[GLA] Em regra, a terceira habilidade do personagem é desbloqueada no nível 12.",
        "type": "true"
    },
    {
        "text": "[GLA] Em regra, emotes são desbloqueados no nível 25.",
        "type": "true"
    },
    {
        "text": "[GLA] Erros no jogo devem ser reportados usando o atalho CTRL+R.",
        "type": "true"
    },
    {
        "text": "[GLA] Existem 28 conquistas para completar no Modo história das missões especiais do East Blue.",
        "type": "true"
    },
    {
        "text": "[GLA] Existem Bronze Berry, Silver Berry, Gold Berry e Platinum Berry.",
        "type": "true"
    },
    {
        "text": "[GLA] Existem Cows, Pigs, Chickens e Sheeps em Foosha Village.",
        "type": "true"
    },
    {
        "text": "[GLA] Existem dois baús de ouro em Loguetown.",
        "type": "true"
    },
    {
        "text": "[GLA] Fuyuki é o avô do sora.",
        "type": "true"
    },
    {
        "text": "[GLA] Genzo vende Bandana de Tritão, Calça de Tritão, Anel do Mar e Turbante do Mar por 5200 berry cada.",
        "type": "true"
    },
    {
        "text": "[GLA] Golden Hull é o nome de uma Skin de Navio.",
        "type": "true"
    },
    {
        "text": "[GLA] Há 8 Henchman no Mercado Negro.",
        "type": "true"
    },
    {
        "text": "[GLA] Há um baú escondido atrás da mansão da Kaya.",
        "type": "true"
    },
    {
        "text": "[GLA] Há um mapa na casa da Nojiko.",
        "type": "true"
    },
    {
        "text": "[GLA] Há uma piscina em Shells Town, dentro da Base da Marinha.",
        "type": "true"
    },
    {
        "text": "[GLA] Há uma prisioneira chamada Tina no Arlong Park.",
        "type": "true"
    },
    {
        "text": "[GLA] Island of Rare Animals é recomendada para jogadores do level 40 a 52 no minimapa do jogo.",
        "type": "true"
    },
    {
        "text": "[GLA] Jose, discípulo de Carmen, está na biblioteca em Loguetown.",
        "type": "true"
    },
    {
        "text": "[GLA] Jutte Blow, a habilidade do Smoker, silencia somente usuários de Fruta do Diabo.",
        "type": "true"
    },
    {
        "text": "[GLA] Kumo Island é recomendada para jogadores do level 64 a 72 no minimapa do jogo.",
        "type": "true"
    },
    {
        "text": "[GLA] Kuro causa 20% a mais de dano quando ataca inimigos pelas costas.",
        "type": "true"
    },
    {
        "text": "[GLA] Loguetown é recomendada para jogadores do level 60 a 70 no minimapa do jogo.",
        "type": "true"
    },
    {
        "text": "[GLA] Marshall D. Teach ganha 25% de ataque e perde metade da armadura quando sua passiva é ativada.",
        "type": "true"
    },
    {
        "text": "[GLA] Mohji perde energia enquanto está em batalha.",
        "type": "true"
    },
    {
        "text": "[GLA] Monkey D. Luffy não pode quebrar paredes com a habilidade Gomu Gomu no Ono.",
        "type": "true"
    },
    {
        "text": "[GLA] Nami não pode usar a habilidade Fata Morgana enquanto Mirage Tempo estiver ativa.",
        "type": "true"
    },
    {
        "text": "[GLA] Não é possível subir no segundo andar da loja do Ippon-Matsu em Loguetown.",
        "type": "true"
    },
    {
        "text": "[GLA] Nico Robin pode construir pontes com a habilidade Campo de Flores.",
        "type": "true"
    },
    {
        "text": "[GLA] Nico Robin pode construir pontes com a habilidade Delphinium.",
        "type": "true"
    },
    {
        "text": "[GLA] Ninjin, um dos Piratas do Usopp, dá algumas missões em Syrup Village.",
        "type": "false"
    },
    {
        "text": "[GLA] O jogo está traduzido para os seguintes idiomas: Inglês, Português, Espanhol e Polonês.",
        "type": "true"
    },
    {
        "text": "[GLA] O jogo Grand Line Adventures foi lançado em Agosto de 2018.",
        "type": "true"
    },
    {
        "text": "[GLA] O Kit de Reparo 2.0 restaura 22.500 pontos de vida do seu navio em 20 segundos.",
        "type": "true"
    },
    {
        "text": "[GLA] O Kit de Reparo 2.0 restaura 1125 pontos de vida do seu navio por segundo.",
        "type": "true"
    },
    {
        "text": "[GLA] O Kit de Reparo 3.0 restaura 36.000 pontos de vida do seu navio em 20 segundos.",
        "type": "true"
    },
    {
        "text": "[GLA] O Kit de Reparo 3.0 restaura 1800 pontos de vida do seu navio por segundo.",
        "type": "true"
    },
    {
        "text": "[GLA] O nome de todas as habilidades do Capone Gang Bege começam com a letra C, exceto o Big Father.",
        "type": "true"
    },
    {
        "text": "[GLA] O PvP na Grand Line será opcional",
        "type": "true"
    },
    {
        "text": "[GLA] O Sangramento do Alligator selvagem também reduz a velocidade de movimento do personagem.",
        "type": "true"
    },
    {
        "text": "[GLA] O Stash VIP tem 100 espaços para itens.",
        "type": "true"
    },
    {
        "text": "[GLA] O Talismã da Aranha é um item que pode ser usado por todas as classes.",
        "type": "true"
    },
    {
        "text": "[GLA] O uso do Kit de Reparo é interrompido se você receber qualquer ataque de um inimigo.",
        "type": "true"
    },
    {
        "text": "[GLA] Orange Town é recomendada para jogadores do level 23 a 30 no minimapa do jogo.",
        "type": "true"
    },
    {
        "text": "[GLA] Para melhorar um personagem de 1 para 5 estrelas você precisa usar 840 medalhas no total.",
        "type": "true"
    },
    {
        "text": "[GLA] Pearl é o primeiro boss na missão da Armada Pirata.",
        "type": "true"
    },
    {
        "text": "[GLA] Pearl não pode usar nenhuma habilidade enquanto Iron Wall estiver ativo.",
        "type": "true"
    },
    {
        "text": "[GLA] Personagens Diamante são 7% mais fortes que personagens Ouro.",
        "type": "true"
    },
    {
        "text": "[GLA] Personagens envenenados pela Reiju recebem 50% menos cura de Suportes.",
        "type": "true"
    },
    {
        "text": "[GLA] Portgas D. Ace é um personagem Diamante.",
        "type": "true"
    },
    {
        "text": "[GLA] Quando um Alligator selvagem morre, o sangramento aplicado por ele perde o efeito.",
        "type": "true"
    },
    {
        "text": "[GLA] Reiju pode usar sua habilidade Pink Tornado para se livrar de imobilizações.",
        "type": "true"
    },
    {
        "text": "[GLA] Samui Island é recomendada para jogadores do level 20 a 28 no minimapa do jogo.",
        "type": "true"
    },
    {
        "text": "[GLA] Sanji não pode ser seduzido pelas mulheres enquanto o Diable Jamble estiver ativado.",
        "type": "true"
    },
    {
        "text": "[GLA] Sapi é o NPC que vende Atum em Loguetown.",
        "type": "true"
    },
    {
        "text": "[GLA] Sayuri, Asuya e Chieri são nomes de NPCs do Baratie.",
        "type": "true"
    },
    {
        "text": "[GLA] Skins de navio estão disponiveis somente para navios de nivel dois ou maior.",
        "type": "true"
    },
    {
        "text": "[GLA] Snowball é o nome de um coelho em Samui Island.",
        "type": "true"
    },
    {
        "text": "[GLA] Syrup Village é a ilha com o maior número de entradas de doca no East Blue.",
        "type": "true"
    },
    {
        "text": "[GLA] Tamanegi, um dos piratas do Usopp, dá algumas missões em Syrup Village.",
        "type": "true"
    },
    {
        "text": "[GLA] Trafalgar Law pode quebrar paredes com a habilidade Injection Shot.",
        "type": "true"
    },
    {
        "text": "[GLA] Urouge pode usar a Habilidade Pray para curar aliados e também remover condições de lentidão ou queimadura.",
        "type": "true"
    },
    {
        "text": "[GLA] Você não pode trocar seus equipamentos em batalha.",
        "type": "true"
    },
    {
        "text": "[GLA] Você pode comprar duas abas extras do Stash. A primeira custa 15 gemas e a segunda 30 gemas.",
        "type": "true"
    },
    {
        "text": "[GLA] Você pode construir uma Caixa de Música no Mercado Negro.",
        "type": "true"
    },
    {
        "text": "[GLA] Você pode encontrar 9 entradas para o Mercado Negro no East Blue.",
        "type": "true"
    },
    {
        "text": "[GLA] Você pode ouvir o Chouchou latindo ao falar com ele.",
        "type": "true"
    },
    {
        "text": "[GLA] Você pode usar o atalho ALT + ENTER para colocar o jogo em tela cheia.",
        "type": "true"
    },
    {
        "text": "[GLA] Você precisa alimentar um prisioneiro na Quest da Rika.",
        "type": "true"
    },
    {
        "text": "[GLA] Você precisa vencer com um time de especialistas para completar a conquista dos Black Cat.",
        "type": "true"
    },
    {
        "text": "[GLA] Você precisa vencer com um time de lutadores para completar a conquista dos Piratas do Buggy.",
        "type": "true"
    },
    {
        "text": "[GLA] Você precisa vencer com um time de chapéus de palha para completar a conquista dos Piratas do Arlong.",
        "type": "true"
    },
    {
        "text": "[GLA] Você precisa vencer com um time de usuários de Fruta do Diabo para completar a conquista da Base da Marinha.",
        "type": "true"
    },
    {
        "text": "[GLA] Você precisa vencer com uma equipe de mulheres para completar a conquista da Armada Pirata.",
        "type": "true"
    },
    {
        "text": "[GLA] Whale Shark é considerado um monstro nível 3.",
        "type": "true"
    },
    {
        "text": "A alcunha do Doc Q, shinigami ou deus da morte, vem do fato dele gostar de brincar com a vida das pessoas, assim como um shinigami.",
        "type": "true"
    },
    {
        "text": "A atual recompensa do Bepo é de 500 berry.",
        "type": "true"
    },
    {
        "text": "A cera do Mr. 3 é tão dura quanto o aço.",
        "type": "true"
    },
    {
        "text": "A comida favorita da Sugar é uva.",
        "type": "true"
    },
    {
        "text": "A comida favorita de Kuro é banana.",
        "type": "true"
    },
    {
        "text": "A comida favorita do Doflamingo é lagosta.",
        "type": "true"
    },
    {
        "text": "A comida favorita do Marco é abacaxi.",
        "type": "true"
    },
    {
        "text": "A comida favorita do Nezumi é queijo.",
        "type": "true"
    },
    {
        "text": "A cor do cabelo da mãe da Nico Robin é branco.",
        "type": "true"
    },
    {
        "text": "A dubladora do Chopper foi alterada em alguns episódios.",
        "type": "true"
    },
    {
        "text": "A espada de Shiliew é uma Meito chamada \"Raiu\".",
        "type": "true"
    },
    {
        "text": "A espada do Shiryu é uma Meito chamada \"Raiu\".",
        "type": "true"
    },
    {
        "text": "A Gura Gura no Mi é também conhecida como a mais forte das Paramecia, igual a uma Logia. Sengoku afirmou que ela é poderosa o suficiente para destruir o mundo.",
        "type": "true"
    },
    {
        "text": "A irmã do Arlong é conhecida.",
        "type": "true"
    },
    {
        "text": "A mãe do Monkey D. Luffy ainda não foi revelada.",
        "type": "true"
    },
    {
        "text": "A Ope Ope no Mi é também chamada da Fruta do Diabo Suprema, devido a sua habilidade de conceder vida eterna.",
        "type": "true"
    },
    {
        "text": "A personagem Boa Hancock possui várias referências a mitologia Grega.",
        "type": "true"
    },
    {
        "text": "A primeira recompensa da Nico Robin foi de 79,000,000 de berry, a mesma quantia de sua mãe Nico Olivia.",
        "type": "true"
    },
    {
        "text": "A primeira recompensa do Monkey D. Luffy foi de 30,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A primeira recompensa do Tony Tony Chopper foi de 50 berry.",
        "type": "true"
    },
    {
        "text": "A quarta recompensa do Monkey D. Luffy foi de 400,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa atual do Marshall D. Teach é de 2,247,600,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa da Curly Dadan é de 7,800,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa da Miss Doublefinger é de 35.000.000 berries.",
        "type": "true"
    },
    {
        "text": "A recompensa da Miss Goldenweek é de 29,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa da Miss Merry Christmas é de 14,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa da Miss Valentine é de 7,500,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa de Daz Bones é de 75,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Lao G era de 61,000,000 de berry antes de ser congelado em razãp do Doflamingo ter se tomado um Shichibukai.",
        "type": "true"
    },
    {
        "text": "A recompensa do Machvise era de 11,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "true"
    },
    {
        "text": "A recompensa do Mont Blanc Cricket é de 25,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Mr. 2 é de 32,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Mr. 3 é de 24,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Mr. 4 é de 3,200,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Mr. 5 é de 10,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Pica era de 99,000,000 de berry antes de ser con gelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "true"
    },
    {
        "text": "A recompensa do Senor Pink era de 58,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "true"
    },
    {
        "text": "A recompensa do Tamago é de 429,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Trebol era de 99,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "true"
    },
    {
        "text": "A recompensa do X-Drake é de 222,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Zoro era maior que a do Sanji.",
        "type": "true"
    },
    {
        "text": "A recompensa dos Irmãos Nyaban é de 7,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A Rumble Ball dura 3 minutos.",
        "type": "true"
    },
    {
        "text": "A segunda recompensa conhecida do Capone Gang Bege era de 300,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A segunda recompensa de Monkey D. Luffy foi de 100.000.000 de berries.",
        "type": "true"
    },
    {
        "text": "A Yubashiri (Espada de Zoro) Enferrujou.",
        "type": "true"
    },
    {
        "text": "A Yubashiri (uma das espadas do Zoro) enferrujou.",
        "type": "true"
    },
    {
        "text": "Ace realmente nasceu em Baterilla.",
        "type": "true"
    },
    {
        "text": "Aisa nasceu com um Haki da Observação avançado.",
        "type": "true"
    },
    {
        "text": "Akainu tem o mesmo dublador do Krieg.",
        "type": "true"
    },
    {
        "text": "Aladdin já foi um escravo.",
        "type": "true"
    },
    {
        "text": "Alvida é a antiga capitã dos Piratas da Alvida.",
        "type": "true"
    },
    {
        "text": "A recompensa de Kuroobi é de 9,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Bartholomew Kuma é de 296,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Capone Gang Bege é de 300.000.000 berries.",
        "type": "true"
    },
    {
        "text": "A recompensa do Chew é de 5,500,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Dellinger era de 15,000,000 de berry antes de congelada em razão do Doflamingo ter se tornado Shichibukai.",
        "type": "true"
    },
    {
        "text": "A recompensa do Demaro Black é de 26,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Diamante era de 99,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "true"
    },
    {
        "text": "A recompensa do Donquixote Doflamingo é de 340,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Fisher Tiger era de 230,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Foxy é de 24,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Gecko Moria é de 320,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Gin é de 12,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Gladius era de 31,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "true"
    },
    {
        "text": "A recompensa do Jinbe era de 250,000,000 de berry antes dele se tornar um Shichibukai.",
        "type": "true"
    },
    {
        "text": "A recompensa do Killer é de 200,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "A recompensa do Kuro é de 16,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "Akainu tem o mesmo dublador do Krieg.",
        "type": "true"
    },
    {
        "text": "Alvida é a antiga capitã dos Piratas da Alvida.",
        "type": "true"
    },
    {
        "text": "Antes dos eventos da guerra, Doc Q tinha uma impressionante recompensa de 72,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "Antes dos eventos da guerra, Jesus Burguess tinha uma recompensa de 20,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "Antes dos eventos da guerra, Laffitte tinha uma recompensa de 42,200,000 de berry.",
        "type": "true"
    },
    {
        "text": "Antes dos eventos da guerra, Van Augur tinha uma impressionante recompensa de 64,000,000 de Berry.",
        "type": "true"
    },
    {
        "text": "Aokiji tem uma Fruta do Diabo do tipo Logia.",
        "type": "true"
    },
    {
        "text": "Apesar da aparência deles, Masira e Shoujo são humanos.",
        "type": "true"
    },
    {
        "text": "Após a morte do Barba Branca, o Barba Marrom fugiu e assumiu o controle de Foodvalten.",
        "type": "true"
    },
    {
        "text": "Após os eventos em Punk Hazard, Smoker se tornou oficialmente o líder da G-5.",
        "type": "true"
    },
    {
        "text": "Após ser diagnosticado com sua doença, Gol D. Roger levou três anos para encontrar o One Piece.",
        "type": "true"
    },
    {
        "text": "Arlong é o único indivíduo conhecido que foi liberado de Impel Down.",
        "type": "true"
    },
    {
        "text": "Arlong era o capitão dos Piratas do Arlong e tinha a maior recompensa do East Blue antes de ser derrotado pelo Monkey D. Luffy.",
        "type": "true"
    },
    {
        "text": "Assim como Fujitora, Smoker deseja acabar com o sistema de Shichibukai.",
        "type": "true"
    },
    {
        "text": "Atualmente Moria é o único Shichibukai conhecido (atual ou antigo) sem uma alcunha conhecida.",
        "type": "true"
    },
    {
        "text": "Avalo Pizarro é o capitão do quarto navio, liderando a quarta frota do Teach.",
        "type": "true"
    },
    {
        "text": "Avalo Pizarro era originalmente rei de um país no North Blue.",
        "type": "true"
    },
    {
        "text": "Baby Five nasceu no North Blue.",
        "type": "true"
    },
    {
        "text": "Barba Branca nasceu na Sphinx Island no Novo Mundo.",
        "type": "true"
    },
    {
        "text": "Barba Negra acredita legitimamente que os sonhos dos homens nunca morrerão.",
        "type": "true"
    },
    {
        "text": "Barba Negra é um Almirante dos Piratas do Barba Negra e membro dos Yonkou.",
        "type": "true"
    },
    {
        "text": "Barba Negra nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Bartholomew Kuma é conhecido como o Tirano.",
        "type": "true"
    },
    {
        "text": "Bartholomew Kuma e um Shichibukai e um ex-oficial do Exercito Revolucionario.",
        "type": "true"
    },
    {
        "text": "Bartholomew Kuma já foi um Rei.",
        "type": "true"
    },
    {
        "text": "Basil Hawkins é um pirata infâme do North Blue conhecido como o Mago e capitão dos Piratas do Hawkins.",
        "type": "true"
    },
    {
        "text": "Bellamy se retirou oficialmente como um pirata e agora se dedica a pintura de bandeiras.",
        "type": "true"
    },
    {
        "text": "Bellemere encontrou a Nami e a Nojiko no Reino de Oykot, no East Blue.",
        "type": "true"
    },
    {
        "text": "Benn Beckman é o personagem mais inteligente que apareceu na saga do East Blue.",
        "type": "true"
    },
    {
        "text": "Benn Beckman é o vice-capitão dos Piratas do Ruivo.",
        "type": "true"
    },
    {
        "text": "Benn Beckman nasceu no North Blue.",
        "type": "true"
    },
    {
        "text": "Boa Hancock é a capitã das Piratas Kuja e a única mulher membro dos Shichibukai.",
        "type": "true"
    },
    {
        "text": "Boa Hancock usa Haki do Rei.",
        "type": "true"
    },
    {
        "text": "Boa Marigold e Boa Sandersonia têm Haki da Observação e do Armamento.",
        "type": "true"
    },
    {
        "text": "Brook é mais alto que o Franky depois do Timeskip.",
        "type": "true"
    },
    {
        "text": "Brook era o capitão dos Rumbar Pirates.",
        "type": "true"
    },
    {
        "text": "Buffalo nasceu no North Blue.",
        "type": "true"
    },
    {
        "text": "Buggy é capitão dos Piratas do Buggy e também colíder da Aliança do Buggy e Alvida.",
        "type": "true"
    },
    {
        "text": "Buggy era um Shichibukai.",
        "type": "true"
    },
    {
        "text": "Buggy foi o primeiro vilão a aparecer na série que era usuário de uma Fruta do Diabo. Ele foi também o primeiro usuário de uma Fruta do Diabo com quem Luffy lutou.",
        "type": "true"
    },
    {
        "text": "Buggy tem a menor recompensa conhecida entre os Shichibukai.",
        "type": "true"
    },
    {
        "text": "Cada um dos quatro principais membros da tripulação do Shanks são de diferentes oceanos.",
        "type": "true"
    },
    {
        "text": "Caesar comeu a Gasu Gasu no Mi.",
        "type": "true"
    },
    {
        "text": "Caesar liberou um gás não letal em Punk Hazard.",
        "type": "true"
    },
    {
        "text": "Capone Gang Bege é capitão do Fire Tank Pirates e também um dos doze piratas classificados como a Pior Geração.",
        "type": "true"
    },
    {
        "text": "Caribou nasceu no North Blue.",
        "type": "true"
    },
    {
        "text": "Carina era amiga da Nami no East Blue.",
        "type": "true"
    },
    {
        "text": "Caso o Governo Mundial soubesse que o Crocodile era o chefe da Baroque Works, a recompensa dele seria no mínimo dobrada para 162,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "Caso o One Piece fosse ambientado no mundo real, o Luffy seria do Brasil.",
        "type": "true"
    },
    {
        "text": "Catarina Devon caça qualquer MULHER que ela acha atraente e decapita a cabeça para adicionalas a sua coleção pessoal.",
        "type": "true"
    },
    {
        "text": "Catarina Devon é a capitã do sexto navio, liderando a sexta frota do Teach.",
        "type": "true"
    },
    {
        "text": "Chopper experimentou algodão doce pela primeira vez durante o Davy Back Fight.",
        "type": "true"
    },
    {
        "text": "Chopper foi o sexto membro a entrar na tripulação dos Chapéus de Palha.",
        "type": "true"
    },
    {
        "text": "Crocodile é o unico Shichibukai a possuir uma fruta tipo Logia.",
        "type": "true"
    },
    {
        "text": "Crocodile foi o primeiro oponente a derrotar Luffy em uma batalha.",
        "type": "true"
    },
    {
        "text": "Crocodile nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Crocus nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Daddy Masterson é um personagem non-canon.",
        "type": "true"
    },
    {
        "text": "Dalton nasceu em Drum Island.",
        "type": "true"
    },
    {
        "text": "Demaro Black nasceu no East Blue.",
        "type": "true"
    },
    {
        "text": "Demaro Black, capitão dos Falsos Chapéu de Palha, nasceu no East Blue.",
        "type": "true"
    },
    {
        "text": "Demaro Black, Manjaro, Chocolat, Drip, Turco, Cocoa, Mountblutain e Nora Gitsune são os nomes verdadeiros da falsa tripulação dos Chapéus de Palha.",
        "type": "true"
    },
    {
        "text": "Desde quando Mr. 1 era uma criança, ele sempre quis ser um herói. Todavia, os ideais dele se distorceram bastante, transformando-o em um assassino implacável.",
        "type": "true"
    },
    {
        "text": "Diamante é usuário do Haki da Observação e do Armamento.",
        "type": "true"
    },
    {
        "text": "Diamond Jozu comeu a Kira Kira no Mi, fazendo com que ele se transforme em um diamante humano com uma resistência incomparável.",
        "type": "true"
    },
    {
        "text": "Dizem que Yasopp pode atirar na antena de uma formiga de muito longe.",
        "type": "true"
    },
    {
        "text": "Doc Q é o médico dos Piratas do Barba Negra.",
        "type": "true"
    },
    {
        "text": "Doflamingo é Usuário do Haki Da Observação, Armamento e do Rei.",
        "type": "true"
    },
    {
        "text": "Doflamingo e Viola tiveram uma complexa relação amorosa.",
        "type": "true"
    },
    {
        "text": "Doflamingo era Capitão dos Piratas Donquixote.",
        "type": "true"
    },
    {
        "text": "Doflamingo era um Tenryubito.",
        "type": "true"
    },
    {
        "text": "Dorry nasceu em Elbaf.",
        "type": "true"
    },
    {
        "text": "Edward Newgate é loiro.",
        "type": "true"
    },
    {
        "text": "Eiichiro Oda é o criador do One Piece.",
        "type": "true"
    },
    {
        "text": "Em alguns fillers, os personagens foram feitos pelo próprio Oda.",
        "type": "true"
    },
    {
        "text": "Em razão dos seus crimes, Sanjuan Wolf foi preso em Impel Down. O modo que eles encontraram para mantê-lo preso foi através de uma cela gigante no level 6.",
        "type": "true"
    },
    {
        "text": "Em termos simples, Haki é a habilidade de sentir energia espiritual (Kenbunshoku), usar força vital (Busoshoku) e dominar inimigos (Haoshoku).",
        "type": "true"
    },
    {
        "text": "Emporio Ivankov nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Enel está na lua.",
        "type": "true"
    },
    {
        "text": "Enquanto a fruta do Borsalino é sobre velocidade ele é bastante lento quando se trata de falar ou agir.",
        "type": "true"
    },
    {
        "text": "Eustass Kid perdeu seu braço esquerdo.",
        "type": "true"
    },
    {
        "text": "Existem Frutas do Diabo que ainda não foram catalogadas e, portanto, desconhecidas.",
        "type": "true"
    },
    {
        "text": "Foi confirmado que Usopp despertou o Haki da Observação durante o Arco de Dressrosa.",
        "type": "true"
    },
    {
        "text": "Foxy comeu a Noro Noro no Mi.",
        "type": "true"
    },
    {
        "text": "Foxy nasceu no South Blue.",
        "type": "true"
    },
    {
        "text": "Franky é o oitavo membro a entrar no Bando dos Chapéus de Palha.",
        "type": "true"
    },
    {
        "text": "Gedatsu (um dos sacerdotes de Enel) agora gerencia um Resort de águas termais em Alabasta.",
        "type": "true"
    },
    {
        "text": "Gryphon é o nome da espada do Shanks.",
        "type": "true"
    },
    {
        "text": "Gin é um pirata e membro dos Piratas do Krieg.",
        "type": "true"
    },
    {
        "text": "Giolla criou Dellinger praticamente sozinha, fazendo com que ele pensasse que era uma menina, razão pela qual ele se tornou tão afeminado.",
        "type": "true"
    },
    {
        "text": "Gol D. Roger foi o primeiro Rei dos Piratas.",
        "type": "true"
    },
    {
        "text": "Gol D. Roger nasceu em Loguetwon.",
        "type": "true"
    },
    {
        "text": "Gum-Gum Fruit é o nome oficial da Fruta do Diabo do Luffy em Inglês.",
        "type": "true"
    },
    {
        "text": "Há seis Níveis em Impel Down.",
        "type": "true"
    },
    {
        "text": "Há um Tritão na Família Donquixote.",
        "type": "true"
    },
    {
        "text": "Haki é um misterioso poder que se encontra dentro de todos os seres vivos do mundo.",
        "type": "true"
    },
    {
        "text": "Hancock é a imperatriz do Amazon Lily, motivo pelo qual ela é chamada de Imperatriz Pirata.",
        "type": "true"
    },
    {
        "text": "Hancock é a primeira personagem mulher da série capaz de usar todas as três formas de Haki.",
        "type": "true"
    },
    {
        "text": "Hatchan é um ex-oficial dos Piratas do Arlong e membro dos Piratas do Sol antes disso.",
        "type": "true"
    },
    {
        "text": "Hody Jones é o Capitão dos Novos Piratas Homens-Peixe.",
        "type": "true"
    },
    {
        "text": "Hody Jones e seus companheiros não possuem recompensa.",
        "type": "true"
    },
    {
        "text": "Houve um Crossover entre One Piece e Dragon Ball Z no anime.",
        "type": "true"
    },
    {
        "text": "Impel Down tem 6 níveis.",
        "type": "true"
    },
    {
        "text": "Issho é um Almirante da Marinha.",
        "type": "true"
    },
    {
        "text": "Issho nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Issho comeu a Zushi Zushi no Mi, que o permite manipular a gravidade.",
        "type": "true"
    },
    {
        "text": "Issho decidiu se cegar porque havia muitas coisas que ele não queria ver.",
        "type": "true"
    },
    {
        "text": "Izou nasceu em Wano.",
        "type": "true"
    },
    {
        "text": "Jango é um Marinheiro e ex-imediato do Capitão Kuro.",
        "type": "true"
    },
    {
        "text": "Jesus Burgess é o Timoneiro dos Piratas do Barba Negra.",
        "type": "true"
    },
    {
        "text": "Jinbe é o Timoneiro dos Piratas do Chapéu de Palha.",
        "type": "true"
    },
    {
        "text": "Jinbe é oficialmente o décimo membro dos Piratas do Chapéu de Palha.",
        "type": "true"
    },
    {
        "text": "Jinbe é um membro dos Piratas do Chapéu de Palha e ex-Shichibukai.",
        "type": "true"
    },
    {
        "text": "Joy Boy foi mencionado no Ryugu Poneglyph lido por Nico Robin enquanto ela estava na Floresta do Mar.",
        "type": "true"
    },
    {
        "text": "Joy Boy tentou levantar a Noah com a ajuda de Poseidon, mas ele quebrou sua promessa com a ilha dos Tritões.",
        "type": "true"
    },
    {
        "text": "Kalgara foi revelado como um usuário de Haki da Observação.",
        "type": "true"
    },
    {
        "text": "Kenbushoku no Haki garante ao usuário o sexto sentido do mundo ao seu redor e habilidades precognitivas limitadas.",
        "type": "true"
    },
    {
        "text": "Kid e Killer são amigos de infância. Juntos, formaram os Piratas do Kid.",
        "type": "true"
    },
    {
        "text": "Killer é um pirata do South Blue e membro do Kid Pirates",
        "type": "true"
    },
    {
        "text": "Kinemon comeu a Fuku Fuku no Mi.",
        "type": "true"
    },
    {
        "text": "Kinemon é usuário de Haki da Observação e do Armamento.",
        "type": "true"
    },
    {
        "text": "Kinemon pode se comunicar através de peidos, fazendo eles soarem como a linguagem humana.",
        "type": "true"
    },
    {
        "text": "Kizaru comeu a Pika Pika no Mi.",
        "type": "true"
    },
    {
        "text": "Koala é uma Humana que pode usar o Karate Tritão.",
        "type": "true"
    },
    {
        "text": "Koala é uma Oficial do Exército Revolucionário.",
        "type": "true"
    },
    {
        "text": "Koala era um membro dos Piratas do Sol.",
        "type": "true"
    },
    {
        "text": "Koala está lutando no Exército Revolucionário para mudar o mundo de uma forma que os Trtões e as Sereias sejam tratados como pessoas normais.",
        "type": "true"
    },
    {
        "text": "Kuma é conhecido como Tirano.",
        "type": "true"
    },
    {
        "text": "Kureha nasceu em Drum Island.",
        "type": "true"
    },
    {
        "text": "Kuro, também conhecido pelo seu apelido Klahadore, é o capitão dos Piratas Black Cat.",
        "type": "true"
    },
    {
        "text": "Kuroobi é um oficial dos Piratas do Arlong e ex-membro dos Piratas do Sol.",
        "type": "true"
    },
    {
        "text": "Kuzan nasceu no South Blue.",
        "type": "true"
    },
    {
        "text": "Laboon é Macho.",
        "type": "true"
    },
    {
        "text": "Laffitte cresceu no West Blue, onde se tornou xerife.",
        "type": "true"
    },
    {
        "text": "Laffitte nasceu no West Blue.",
        "type": "true"
    },
    {
        "text": "Lucky Roo é foi um dos primeiros membros a entrar na tripulação do Shanks após ele formar os Piratas do Ruivo.",
        "type": "true"
    },
    {
        "text": "Lucky Roo é um membro dos Piratas do Ruivo.",
        "type": "true"
    },
    {
        "text": "Lucky Roo foi quem originalmente conseguiu a Gomu Gomu no Mi de um navio pirata inimigo.",
        "type": "true"
    },
    {
        "text": "Lucky Roo foi um dos primeiros membros a entrar na tripulação do Shanks após ele formar os Piratas do Ruivo.",
        "type": "true"
    },
    {
        "text": "Lucky Roo nasceu no South Blue.",
        "type": "true"
    },
    {
        "text": "Lucky Roo pode parecer gordo e lento, mas na verdade ele é um lutador muito ágil e rapido.",
        "type": "true"
    },
    {
        "text": "Luffy realmente nasceu em Foosha.",
        "type": "true"
    },
    {
        "text": "Luffy tem uma fruta do diabo do tipo Paramecia.",
        "type": "true"
    },
    {
        "text": "Machvise comeu a Ton Ton no Mi.",
        "type": "true"
    },
    {
        "text": "Magellan nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Marco comeu a Tori Tori no Mi, tipo Fênix, uma Zoan Mítica.",
        "type": "true"
    },
    {
        "text": "Marco nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Masira e Shoujo têm uma recompensa de 23,000,000 e 36,000,000 de berry, respectivamente.",
        "type": "true"
    },
    {
        "text": "Masira nasceu no North Blue.",
        "type": "true"
    },
    {
        "text": "Mihawk tornou-se famoso antes da Grande Era dos Piratas sequer começar.",
        "type": "true"
    },
    {
        "text": "Miss Doublefinger nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Miss Goldenweek fez dupla com o Mr.3 em razão das habilidades dela de pintar as criações de cera, tornando-as mais realistas.",
        "type": "true"
    },
    {
        "text": "Miss Goldenweek não comeu uma fruta do diabo.",
        "type": "true"
    },
    {
        "text": "Miss Goldenweek nasceu no North Blue.",
        "type": "true"
    },
    {
        "text": "Miss Valentine nasceu no West Blue",
        "type": "true"
    },
    {
        "text": "Mohji é um pirata e o imediato dos Piratas do Buggy,bem como um membro da Aliança do Buggy e Alvida.",
        "type": "true"
    },
    {
        "text": "Momoo agora é oficialmente considerado um animal de estimação dos Piratas do Caribou.",
        "type": "true"
    },
    {
        "text": "Momoo desenvolveu um trauma a respeito do Luffy e do Sanji, sofrendo um ataque de pânico só de vê-los.",
        "type": "true"
    },
    {
        "text": "Momoo é macho.",
        "type": "true"
    },
    {
        "text": "Monet e Sugar são irmãs.",
        "type": "true"
    },
    {
        "text": "Monkey D. Garp nasceu no East Blue.",
        "type": "true"
    },
    {
        "text": "Monkey D. Luffy nasceu em Foosha Village.",
        "type": "true"
    },
    {
        "text": "Mr. 2 tem o mesmo dublador do Franky e do Jango.",
        "type": "true"
    },
    {
        "text": "Mr. 1 comeu a Supa Supa no Mi.",
        "type": "true"
    },
    {
        "text": "Mr. 3 agora é reconhecido como um executivo dos Piratas do Buggy.",
        "type": "true"
    },
    {
        "text": "Mr. 4 nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Mr. 5 nasceu no South Blue.",
        "type": "true"
    },
    {
        "text": "Mr. 5 pode comer coisas explosivas e sua comida favorita é pólvora.",
        "type": "true"
    },
    {
        "text": "Mr. 9 nasceu no West Blue.",
        "type": "true"
    },
    {
        "text": "Neptune é um personagem do One Piece.",
        "type": "true"
    },
    {
        "text": "Nico Robin é conhecida como a Criança Demônio.",
        "type": "true"
    },
    {
        "text": "Nico Robin é referida como “Luz da Revolução” pelo Exército Revolucionário.",
        "type": "true"
    },
    {
        "text": "Nico Robin também é conhecida como Miss Allsunday.",
        "type": "true"
    },
    {
        "text": "O aniversário da Miss Merry Christmas é no natal, por razões óbvias.",
        "type": "true"
    },
    {
        "text": "O aniversário da Miss Valentine é no Valentines Day, por razões óbvias.",
        "type": "true"
    },
    {
        "text": "O cabelo do Trebol é preto.",
        "type": "true"
    },
    {
        "text": "O Canhão do Mr. 4 comeu uma Fruta do Diabo e tornou-se um cachorro.",
        "type": "true"
    },
    {
        "text": "O dragão contra qual Luffy e os outros lutaram em Punk Hazard foi criado artificialmente por Vegapunk em um labortório em Punk Hazard.",
        "type": "true"
    },
    {
        "text": "O navio que a Hancock e as piratas Kuja navegam é chamado de Perfume Snake.",
        "type": "true"
    },
    {
        "text": "O nome da espada do Shanks é Gryphon.",
        "type": "true"
    },
    {
        "text": "O nome do navio do Mr. 2 era Swanda Express.",
        "type": "true"
    },
    {
        "text": "O nome do Navio que Mr. 5 e Miss Valentine usavam em suas operações era Pop Rock Candy.",
        "type": "true"
    },
    {
        "text": "O nome do navio que o Mr. 1 e a Miss Doublefinger usavam em suas operaçòes era Kill Sasssoon.",
        "type": "true"
    },
    {
        "text": "O nome do navio que os Piratas Donquixote usaram nos dias deles no North Blue era Numancia Flamingo.",
        "type": "true"
    },
    {
        "text": "O nome dos navios do Masira e do Shoujo é Victory Hunter e Utan Sonar, respectivamente.",
        "type": "true"
    },
    {
        "text": "O nome verdadeiro da Miss Goldenweek é Marianne.",
        "type": "true"
    },
    {
        "text": "O nome verdadeiro da Miss Merrychristmas é Drophy.",
        "type": "true"
    },
    {
        "text": "O nome verdadeiro do Barba Marrom é Chadros Higelyges.",
        "type": "true"
    },
    {
        "text": "O nome verdadeiro do Hatchan é Hatchan.",
        "type": "true"
    },
    {
        "text": "O nome verdadeiro do Mr. 4 é Babe, provavelmente em referência ao famoso jogador de basebol Babe Ruth.",
        "type": "true"
    },
    {
        "text": "O nome verdadeiro do Mr. 5 é Gem.",
        "type": "true"
    },
    {
        "text": "O primeiro beijo conhecido de Sanji foi com a Pudding.",
        "type": "true"
    },
    {
        "text": "O principal navio do Exército Revolucionário é chamado de Viento GRANMA.",
        "type": "true"
    },
    {
        "text": "O Red Hawk do Luffy é uma homenagem ao Hiken do Ace.",
        "type": "true"
    },
    {
        "text": "O sonho de Crocodile era se tornar o Rei dos Piratas.",
        "type": "true"
    },
    {
        "text": "O verdadeiro nome da Miss Doublefinger é Zala.",
        "type": "true"
    },
    {
        "text": "O verdadeiro nome da Miss Valentine é Mikita.",
        "type": "true"
    },
    {
        "text": "O verdadeiro nome do Mr. 1 é Daz Bones.",
        "type": "true"
    },
    {
        "text": "O verdadeiro nome do Mr. 2 é Bon Clay Bentham.",
        "type": "true"
    },
    {
        "text": "O verdadeiro nome do Mr. 3 é Galdinho.",
        "type": "true"
    },
    {
        "text": "Oars é um gigante.",
        "type": "true"
    },
    {
        "text": "Objetos podem comer Frutas do Diablo.",
        "type": "true"
    },
    {
        "text": "Os Unluckies nasceram na Grand Line.",
        "type": "true"
    },
    {
        "text": "Os Yeti Cool Brothers são parte de uma subespécie desconhecida de gigantes.",
        "type": "true"
    },
    {
        "text": "Otohime era conhecida pela alcunha \"Encarnação do Amor\" devido a sua incrível bondade e busca pela paz entre diferentes espécies.",
        "type": "true"
    },
    {
        "text": "Otohime tinha um Haki da Observação muito desenvolvido, o que a permitia entender profundamente a emoção dos outros.",
        "type": "true"
    },
    {
        "text": "Pagaya é pai da Conis.",
        "type": "true"
    },
    {
        "text": "Pappag é uma estrela do mar que é mascote da Camie e também professor. Ele é o criador de uma linha de moda",
        "type": "true"
    },
    {
        "text": "Pearl é o comandante da segunda unidade dos Piratas do Krieg.",
        "type": "true"
    },
    {
        "text": "Pekoms comeu a Kame Kame no Mi, que o permite se transformar em uma tartaruga, dando a ele um casco duro como diamante.",
        "type": "true"
    },
    {
        "text": "Pekoms tem uma Fruta do Diabo do tipo Zoan.",
        "type": "true"
    },
    {
        "text": "Pekoms tem uma impressionante recompensa de 330,000,000 de berry.",
        "type": "true"
    },
    {
        "text": "Pell nasceu em Alabasta.",
        "type": "true"
    },
    {
        "text": "Pica tem uma Fruta do Diabo do tipo Paramecia.",
        "type": "true"
    },
    {
        "text": "Por causa de seus crimes Sanjuan Wolf foi aprisionado em uma grande cela no nível 6 de Impel Down.",
        "type": "true"
    },
    {
        "text": "Portgas D. Ace é filho da Rouge.",
        "type": "true"
    },
    {
        "text": "Portgas D. Ace é filho do Gold Roger.",
        "type": "true"
    },
    {
        "text": "Portgas D. Ace era o comandante da segunda divisão dos Piratas do Barba Branca.",
        "type": "true"
    },
    {
        "text": "Portgas D. Ace era o segundo comandante da divisão dos Piratas do Barba Branca.",
        "type": "true"
    },
    {
        "text": "Portgas D. Ace era um usuário de Haki do Rei.",
        "type": "true"
    },
    {
        "text": "Portgas D. Ace nasceu em Baterilla.",
        "type": "true"
    },
    {
        "text": "Poseidon é uma das armas antigas.",
        "type": "true"
    },
    {
        "text": "Rebecca pode usar o Kenbunshoku no Haki.",
        "type": "true"
    },
    {
        "text": "Rob Lucci enfrentou Sabo depois do Timeskip.",
        "type": "true"
    },
    {
        "text": "Rob Lucci nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Robin foi o sétimo membro a entrar na tripulação dos Chapéu de Palha.",
        "type": "true"
    },
    {
        "text": "Rosinante comeu a Nagi Nagi no Mi.",
        "type": "true"
    },
    {
        "text": "Sabo comeu a Mera Mera no Mi.",
        "type": "true"
    },
    {
        "text": "Sadi nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Salome é uma serpente fêmea.",
        "type": "true"
    },
    {
        "text": "Sanji em sua infância tem a mesma dubladora que o Chopper.",
        "type": "true"
    },
    {
        "text": "Sanji nasceu no North Blue.",
        "type": "true"
    },
    {
        "text": "Sanjuan Wolf é o capitão do sétimo navio, liderando a sétima frota do Teach.",
        "type": "true"
    },
    {
        "text": "Sanjuan Wolf nasceu em West Blue.",
        "type": "true"
    },
    {
        "text": "Sanjuan Wolf tem uma fruta do diabo que o permite aumentar o próprio tamanho.",
        "type": "true"
    },
    {
        "text": "Scratchmen Apoo é da Tribo Longarm , um infâme pirata com tema de música e capitão dos Piratas On Air.",
        "type": "true"
    },
    {
        "text": "Scratchmen Apoo é um infâme pirata com tema de música, membro da tribo Braço-Longo e capitão dos Piratas On Air.",
        "type": "true"
    },
    {
        "text": "Sengoku nasceu no South Blue.",
        "type": "true"
    },
    {
        "text": "Shakky ajudou a abrigar as Gorgon Sisters depois que elas escaparam dos Nobres Mundiais junto com Gloriosa e Rayleigh.",
        "type": "true"
    },
    {
        "text": "Shanks é um membro dos Yonkou que governa o Novo Mundo e capitão dos Piratas do Ruivo.",
        "type": "true"
    },
    {
        "text": "Shanks nasceu no West Blue.",
        "type": "true"
    },
    {
        "text": "Shanks tem uma cicatriz no olho esquerdo.",
        "type": "true"
    },
    {
        "text": "Shiliew é o capitão da segunda frota do Teach.",
        "type": "true"
    },
    {
        "text": "Shiryu é o capitão da segunda frota do Teach.",
        "type": "true"
    },
    {
        "text": "Shiryu nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Silvers Rayleigh tem uma esposa no Arquipélago Sabaody.",
        "type": "true"
    },
    {
        "text": "Smoker comeu a Moku Moku no Mi.",
        "type": "true"
    },
    {
        "text": "Smoker é usuário do Haki do Armamento e da Observação.",
        "type": "true"
    },
    {
        "text": "Sogeking na verdade é o Usopp.",
        "type": "true"
    },
    {
        "text": "Stussy nasceu na Grand Line.",
        "type": "true"
    },
    {
        "text": "Sugar ficou permanentemente traumatizada com o rosto do Usopp, tornando-se um trauma incurável.",
        "type": "true"
    },
    {
        "text": "Tamago comeu a Tama Tama no Mi, que o permite ciclar entre diferentes formas.",
        "type": "true"
    },
    {
        "text": "Tamago é membro da tribo dos Pernas Longas.",
        "type": "true"
    },
    {
        "text": "Tamago perdeu o olho esquerdo para Pedro.",
        "type": "true"
    },
    {
        "text": "Tashigi nasceu no East Blue.",
        "type": "true"
    },
    {
        "text": "Teach foi o responsável por cicatrizar o olho de Shanks com sua arma de garras.",
        "type": "true"
    },
    {
        "text": "Ton Ton no Mi é uma versão superior da Kilo Kilo no Mi.",
        "type": "true"
    },
    {
        "text": "Trafalgar Law comeu a Ope Ope no Mi.",
        "type": "true"
    },
    {
        "text": "Trafalgar Law é o capitão e doutor dos Heart Pirates.",
        "type": "true"
    },
    {
        "text": "Trafalgar Law nomeou sua tripulação por causa do Corazón, como homenagem ao seu nome e porque ele mudou seu coração para melhor.",
        "type": "true"
    },
    {
        "text": "Trafalgar Law perdeu um braço no Arco de Dressrosa.",
        "type": "true"
    },
    {
        "text": "Tralfagar Law é conhecido por ser o Cirurgião da Morte.",
        "type": "true"
    },
    {
        "text": "Trebol é usuário do Haki da Observação e do Armamento.",
        "type": "true"
    },
    {
        "text": "Trebol foi o primeiro a encontrar a Ito Ito no Mi quando era um criminoso.",
        "type": "true"
    },
    {
        "text": "Tsuru comeu a Woshu Woshu no Mi.",
        "type": "true"
    },
    {
        "text": "Tsuru nasceu no North Blue.",
        "type": "true"
    },
    {
        "text": "Urouge é também conhecido como Mad Monk. Ele é um pirata de uma ilha do céu e capitão dos Piratas Fallen Monk.",
        "type": "true"
    },
    {
        "text": "Usopp foi o terceiro membro a entrar na tripluação dos Chapéu de Palha.",
        "type": "true"
    },
    {
        "text": "Van Augur nasceu no East Blue.",
        "type": "true"
    },
    {
        "text": "Van Augur, o Supersônico, é um Sniper dos Piratas do Barba Negra e um excelente atirador.",
        "type": "true"
    },
    {
        "text": "Vasco Shot é o capitão da oitavo navio, liderando a oitava frota do Teach.",
        "type": "true"
    },
    {
        "text": "Vergo conhece o Doflamingo desde quando ele era uma criança.",
        "type": "true"
    },
    {
        "text": "Vergo foi o primeiro Corazón.",
        "type": "true"
    },
    {
        "text": "Wapol é o primeiro rei mostrado na série.",
        "type": "true"
    },
    {
        "text": "Yasopp nasceu no East Blue, em Syrup Village.",
        "type": "true"
    },
    {
        "text": "Zeff perdeu sua perna direita para salvar Sanji.",
        "type": "true"
    },
    {
        "text": "Zephyr é o único Almirante que não comeu uma Fruta do Diabo.",
        "type": "true"
    },
    {
        "text": "Zephyr é um personagem non-canon.",
        "type": "true"
    },
    {
        "text": "Zeus é um personagem de One Pece.",
        "type": "true"
    },
    {
        "text": "Zoro empunhou mais de 8 espadas diferentes no anime.",
        "type": "true"
    },
    {
        "text": "[GLA] A habilidade Liberation, do Marshall D. Teach, tem dois segundos de tempo de recarga e 10 de poder",
        "type": "false"
    },
    {
        "text": "[GLA] A habilidade da Robin, Spider Net, pode ser destruída por alguns ataques.",
        "type": "false"
    },
    {
        "text": "[GLA] A habilidade de nível 100 do Arlong, Shark on Tank, imobiliza o inimigo.",
        "type": "false"
    },
    {
        "text": "[GLA] A habilidade Motivation aumenta a velocidade do Luffy por 4 segundos e concede bônus de força no próximo ataque.",
        "type": "false"
    },
    {
        "text": "[GLA] A rotação semanal muda todo sábado.",
        "type": "false"
    },
    {
        "text": "[GLA] Alvida, Don Krieg, Gin e Pearl são os únicos boss de missão especial que não aparecem nos spawns das ilhas.",
        "type": "false"
    },
    {
        "text": "[GLA] Alvida Pirates é a única Missão Especial do modo história sem uma versão no modo Difícil.",
        "type": "false"
    },
    {
        "text": "[GLA] Anel da cruz é um item recomendado para o nível 50.",
        "type": "false"
    },
    {
        "text": "[GLA] Atualmente existem somente 10 personagens Bronze disponíveis.",
        "type": "false"
    },
    {
        "text": "[GLA] Atualmente Pearl é o único personagem com três classes-Tanque,Especialista e Lutador.",
        "type": "false"
    },
    {
        "text": "[GLA] Atum e a melhor comida que você pode comprar de um NPC em termos de cura por segundo para um personagem level 70.",
        "type": "false"
    },
    {
        "text": "[GLA] Backflips e habilidades de evasão concedem imunidade a dano e imobilizações.",
        "type": "false"
    },
    {
        "text": "[GLA] Baratie e recomendado para jogadores do level 42 a 50 no minimapa do jogo.",
        "type": "false"
    },
    {
        "text": "[GLA] Basil Hawkins pode usar sua passiva chamada The Magician para trocar de lugar com seus fantoches.",
        "type": "false"
    },
    {
        "text": "[GLA] Bastão do Rei Macaco é um item que pode ser usado apenas por lutadores.",
        "type": "false"
    },
    {
        "text": "[GLA] Buchi pode usar a habilidade Take the Lead para chamar Sham para lutar ao lado dele.",
        "type": "false"
    },
    {
        "text": "[GLA] Calça de Tritão é o item mais caro que o Genzo vende e custa 10000 berry.",
        "type": "false"
    },
    {
        "text": "[GLA] Capone Gang Bege e seus aliados ficam imunes dentro do Big Father.",
        "type": "false"
    },
    {
        "text": "[GLA] Carne de Porco Gourmet é a comida mais demorada para cozinhar do Baratie. Demora 8 minutos.",
        "type": "false"
    },
    {
        "text": "[GLA] Cerveja Forte é a melhor comida que você pode comprar de um NPC em termos de cura por segundo para um personagem level 70.",
        "type": "false"
    },
    {
        "text": "[GLA] Cocoyasi Village é recomendado para jogadores do level 48 a 60 no minimapa do jogo.",
        "type": "false"
    },
    {
        "text": "[GLA] Daddy MCShooty é um inimigo em Loguetown.",
        "type": "false"
    },
    {
        "text": "[GLA] Dracule Mihawk desacelera seus próprios aliados com a habilidade Taka no Me.",
        "type": "false"
    },
    {
        "text": "[GLA] É possível cozinhar alguns alimentos na casa da Nojiko.",
        "type": "false"
    },
    {
        "text": "[GLA] É possível criar Medalhas Dinâmicas de Diamante por 40 Moedas Piratas no Mercado Negro.",
        "type": "false"
    },
    {
        "text": "[GLA] É possível criar Medalhas Dinâmicas de Ouro por 15 Moedas Piratas no Mercado Negro.",
        "type": "false"
    },
    {
        "text": "[GLA] É possível criar Medalhas Dinâmicas de Prata por 8 Moedas Piratas no Mercado Negro.",
        "type": "false"
    },
    {
        "text": "[GLA] É possível criar Poção Média de EXP, Poção Grande de EXP e Poção Pequena de EXP no Mercado Negro.",
        "type": "false"
    },
    {
        "text": "[GLA] É possível criar Poção Pequena de EXP no Mercado Negro.",
        "type": "false"
    },
    {
        "text": "[GLA] É preciso completar com um time de especialistas para ganhar a conquista do Arlong.",
        "type": "false"
    },
    {
        "text": "[GLA] Em regra, a quarta habilidade do personagem é desbloqueada no nível 18.",
        "type": "false"
    },
    {
        "text": "[GLA] Em regra, a quinta habilidade do personagem é desbloqueada no nível 25.",
        "type": "false"
    },
    {
        "text": "[GLA] Em regra, a terceira habilidade do personagem é desbloqueada no nível 10.",
        "type": "false"
    },
    {
        "text": "[GLA] Em regra, emotes são desbloqueados no nível 40.",
        "type": "false"
    },
    {
        "text": "[GLA] Enquanto está em chamas, Pearl tem as seguintes habilidades - Fire Pearl Shot, Fire Presente, Fire Pearl Close e Fire Pearl Daítokuten.",
        "type": "false"
    },
    {
        "text": "[GLA] Erros no jogo devem ser reportados no servidor do Discord.",
        "type": "false"
    },
    {
        "text": "[GLA] Espada Dadao é um item recomendado para o nível 10.",
        "type": "false"
    },
    {
        "text": "[GLA] Existem 30 conquistas para completar no modo história das missões especiais.",
        "type": "false"
    },
    {
        "text": "[GLA] Existem Bronze Berry. Silver Berry, Gold Berry e Diamond Berry.",
        "type": "false"
    },
    {
        "text": "[GLA] Fire Pearl é o nome da passiva do Pearl.",
        "type": "false"
    },
    {
        "text": "[GLA] Gear Third é a habilidade mais forte do jogo em termos de poder.",
        "type": "false"
    },
    {
        "text": "[GLA] Genzo vende Bandana de Tritão, Calça de Tritão, Anel do Mar e Turbante do Mar por 5000 berry cada.",
        "type": "false"
    },
    {
        "text": "[GLA] Há uma Prisioneira chamada Tita no Arlong Park.",
        "type": "false"
    },
    {
        "text": "[GLA] Helmeppo está localizado no mesmo prédio que seu pai Morgan.",
        "type": "false"
    },
    {
        "text": "[GLA] Henry Needle, Henry Blazer, Henry Stripe e Henry Ford são nomes de algumas habilidades do Niji.",
        "type": "false"
    },
    {
        "text": "[GLA] Hideka é a avó do Sora",
        "type": "false"
    },
    {
        "text": "[GLA] Island of Rare Animals é recomendada para jogadores do level 38 a 50 no minimapa do jogo.",
        "type": "false"
    },
    {
        "text": "[GLA] Jango é o único boss de Missão Especial que também é um NPC.",
        "type": "false"
    },
    {
        "text": "[GLA] Jinbe é o único personagem Diamante com a classe Tanque.",
        "type": "false"
    },
    {
        "text": "[GLA] Kiribachi é um item que pode ser usado por todas as classes, exceto especialista.",
        "type": "false"
    },
    {
        "text": "[GLA] Kumo Island é a única ilha sem uma instância do Black Market por perto.",
        "type": "false"
    },
    {
        "text": "[GLA] Kumo Island é recomendado para jogadores do level 64 a 70 no minimapa do game.",
        "type": "false"
    },
    {
        "text": "[GLA] Kuro causa 25% a mais de dano quando ataca inimigos pelas costas.",
        "type": "false"
    },
    {
        "text": "[GLA] Lâmina Escondida é um item que pode ser usado por todas as classes.",
        "type": "false"
    },
    {
        "text": "[GLA] Leo, discípulo de Carmen, está na biblioteca de Loguetown.",
        "type": "false"
    },
    {
        "text": "[GLA] Loguetown é recomendada para jogadores do level 56 a 70 no minimapa do jogo.",
        "type": "false"
    },
    {
        "text": "[GLA] Luffy recebe menos dano dos ataques do Vinsmoke Niji porque seu corpo tem propriedades de borracha.",
        "type": "false"
    },
    {
        "text": "[GLA] Marshall D. Teach ganha 30% de ataque e perde metade da armadura quando sua passiva é ativada.",
        "type": "false"
    },
    {
        "text": "[GLA] Meito: Shigure é um item que pode ser usado somente por cortantes.",
        "type": "false"
    },
    {
        "text": "[GLA] Mellorine é o nome da passiva do Sanji.",
        "type": "false"
    },
    {
        "text": "[GLA] Mes é a habilidade mais forte do jogo em termos de poder.",
        "type": "false"
    },
    {
        "text": "[GLA] Monkey D. Luffy pode quebrar paredes com a habilidade Gomu Gomu no Ono.",
        "type": "false"
    },
    {
        "text": "[GLA] Monkey D. Luffy têm as seguintes classes: Bruiser, Lutador e Tanque.",
        "type": "false"
    },
    {
        "text": "[GLA] Morgan é o único boss de Missão Especial que também é um NPC.",
        "type": "false"
    },
    {
        "text": "[GLA] Muggy Dama é a habilidade que o Buggy libera no nível 100.",
        "type": "false"
    },
    {
        "text": "[GLA] Nami pode criar somente 3 nuvens simultaneamente.",
        "type": "false"
    },
    {
        "text": "[GLA] Não é possivel entrar na mansão da Kaya.",
        "type": "false"
    },
    {
        "text": "[GLA] Não há um Marine Announcer em Conomi Island.",
        "type": "false"
    },
    {
        "text": "[GLA] Nefertari Vivi pode fazer uma dança sexy para motivar seus aliados, aumentando o ataque e a defesa deles por 15 segundos.",
        "type": "false"
    },
    {
        "text": "[GLA] Nico Robin não pode construir pontes com a habilidade Delphinium.",
        "type": "false"
    },
    {
        "text": "[GLA] Ninjin, um dos Piratas do Usopp, dá uma missão em Syrup Village.",
        "type": "true"
    },
    {
        "text": "[GLA] No tutorial do jogo, o NPC que passa instruções para você é o Woop Slap, o prefeito de Foosha Village.",
        "type": "false"
    },
    {
        "text": "[GLA] NPC Sora em Samui Island é uma menina.",
        "type": "false"
    },
    {
        "text": "[GLA] O Barba Negra tem as seguintes classes: Especialista, Bruiser e Atirador. A ultima é porque ele tem um revólver.",
        "type": "false"
    },
    {
        "text": "[GLA] O Kit de Reparo 1.0 restaura 400 pontos de vida do seu navio por segundo.",
        "type": "false"
    },
    {
        "text": "[GLA] O Kit de Reparo 1.0 restaura 600 pontos de vida do seu navio por segundo.",
        "type": "false"
    },
    {
        "text": "[GLA] O Kit de Reparo 2.0 restaura 22.000 pontos de vida do seu navio em 20 segundos.",
        "type": "false"
    },
    {
        "text": "[GLA] O Kit de Reparo 2.0 restaura 700 pontos de vida do seu navio por segundo.",
        "type": "false"
    },
    {
        "text": "[GLA] O Kit de Reparo 3.0 restaura 30.000 pontos de vida do seu navio em 20 segundos.",
        "type": "false"
    },
    {
        "text": "[GLA] O Kit de Reparo 3.0 restaura 1000 pontos de vida do seu navio por segundo.",
        "type": "false"
    },
    {
        "text": "[GLA] O level necessário para fazer a Quest do Capitão Morgan é 17.",
        "type": "false"
    },
    {
        "text": "[GLA] O NPC Magra pede por 4 Orelhas e Lobo na missão dele em Foosha Village.",
        "type": "false"
    },
    {
        "text": "[GLA] O sangramento do Killer pode acumular até 4 vezes usando mais Bloody Cuts ou Kira Nokogiri.",
        "type": "false"
    },
    {
        "text": "[GLA] Orange Town é recomendada para jogadores do level 20 a 30 no minimapa do jogo.",
        "type": "false"
    },
    {
        "text": "[GLA] Os Kits de Reparo 1.0, 2.0 e 3.0 são vendidos na loja do Mercado Negro pelos respectivos valores 30, 90 e 180 berry.",
        "type": "false"
    },
    {
        "text": "[GLA] Para iniciar a Quest do Ripper em Shells Town, você precisa primeiro completar a Quest do Helmeppo.",
        "type": "false"
    },
    {
        "text": "[GLA] O Pearl é o primeiro inimigo em Pirata Armada.",
        "type": "false"
    },
    {
        "text": "[GLA] Picareta de Mineração é um item para cortantes e tanques.",
        "type": "false"
    },
    {
        "text": "[GLA] Piiman, um dos piratas do Usopp, dá algumas missões em Syrup Village.",
        "type": "false"
    },
    {
        "text": "[GLA] Pufferfish e Sharks são considerados monstros nível 3.",
        "type": "false"
    },
    {
        "text": "[GLA] Quando Bonney usa sua habilidade Unbridled Power, ela transforma todos a sua em bebês e fica invulnerável por 9 segundos.",
        "type": "false"
    },
    {
        "text": "[GLA] Quando Sanji cura uma mulher, ele fica motivado e recebe bônus de velocidade e ataque por 10 segundos.",
        "type": "false"
    },
    {
        "text": "[GLA] Sabo é o nome da criança que a Nojiko pede para ajudar no Arlong Park.",
        "type": "false"
    },
    {
        "text": "[GLA] Sanji pode se curar com a habildade Master Cook.",
        "type": "false"
    },
    {
        "text": "[GLA] Sanzen Sekai é a habilidade mais forte do jogo em termos de poder.",
        "type": "false"
    },
    {
        "text": "[GLA] Sapi é o NPC que vende Atum em Cocoyasi Village.",
        "type": "false"
    },
    {
        "text": "[GLA] Sayuri, Asuya e Cherry são nomes de NPCs do Baratie.",
        "type": "false"
    },
    {
        "text": "[GLA] Shanks imobiliza inimigos em volta dele com a habilidade Busoshoku Haki Waves.",
        "type": "false"
    },
    {
        "text": "[GLA] Shanks mata inimigos fracos instantaneamente com a habilidade Kenbushoku Haki.",
        "type": "false"
    },
    {
        "text": "[GLA] Slime é um inimigo exclusivo de Loguetown.",
        "type": "false"
    },
    {
        "text": "[GLA] Snowflakes é o nome do animal de estimação do Sora.",
        "type": "false"
    },
    {
        "text": "[GLA] Spider e Giant Spider são os únicos inimigos em Kumo Island.",
        "type": "false"
    },
    {
        "text": "[GLA] Syrup Village é a única ilha com duas entradas de doca no East Blue.",
        "type": "false"
    },
    {
        "text": "[GLA] Todos os chapéu de Palha possuem uma Skin do Strong World.",
        "type": "false"
    },
    {
        "text": "[GLA] Trafalgar Law não pode quebrar paredes com a habilidade Injection Shot.",
        "type": "false"
    },
    {
        "text": "[GLA] Trafalgar Law não pode usar nenhuma habilidade quando está fora da Room.",
        "type": "false"
    },
    {
        "text": "[GLA] Um personagem Diamante precisa de mais medalhas para ter suas estrelas melhoradas do que um personagem Ouro.",
        "type": "false"
    },
    {
        "text": "[GLA] Você pode comprar duas abas extras do Stash. A primeira custa 15 gemas e a segunda 20 gemas.",
        "type": "false"
    },
    {
        "text": "[GLA] Você não pode trocar sua página de equipamentos em uma Zona Segura.",
        "type": "false"
    },
    {
        "text": "[GLA] Você pode começar uma missão diária de derrotar Slimes na Samui Island.",
        "type": "false"
    },
    {
        "text": "[GLA] Você pode conseguir o item Colar do Saru em qualquer Missão Difícil do East Blue.",
        "type": "false"
    },
    {
        "text": "[GLA] Você pode construir uma Caixa de Música por 200 moedas piratas no Mercado Negro.",
        "type": "false"
    },
    {
        "text": "[GLA] Você pode encontrar 8 entradas para o Mercado Negro no East Blue.",
        "type": "false"
    },
    {
        "text": "[GLA] Você pode usar a mesa de construção nas docas para transforma 5 Poções Médias de Experiência em 1 Poção Grande de Experiência.",
        "type": "false"
    },
    {
        "text": "[GLA] Você pode usar a mesa de construção nas docas para transformar 10 Poções Médias de Experiência em 1 Poção Grande de Experiência.",
        "type": "false"
    },
    {
        "text": "[GLA] Você pode usar a mesa de construção nas docas para transformar 10 Poções Pequenas de Experiência em 2 Poção Média de Experiência.",
        "type": "false"
    },
    {
        "text": "[GLA] Você precisa alimentar um prisioneiro na Quest da Ririka.",
        "type": "false"
    },
    {
        "text": "[GLA] Você precisa derrotar 50 cobras na missão do Coby.",
        "type": "false"
    },
    {
        "text": "[GLA] Você precisa vencer com um time de atiradores para completar a conquista dos Piratas do Buggy.",
        "type": "false"
    },
    {
        "text": "[GLA] Você precisa vencer com um time de especialistas para completar a conquista dos Piratas da Alvida.",
        "type": "false"
    },
    {
        "text": "[GLA] Você precisa vencer com um time de especialistas para completar a conquista dos Piratas do Arlong.",
        "type": "false"
    },
    {
        "text": "[GLA] Você precisa vencer com um time de mulheres para completar a conquista dos Black Cat.",
        "type": "false"
    },
    {
        "text": "[GLA] Você precisa vencer com um time de tanques para completar a conquista da Base da Marinha.",
        "type": "false"
    },
    {
        "text": "[GLA] Você precisa vencer com uma equipe de homens para completar a conquista da Armada Pirata.",
        "type": "false"
    },
    {
        "text": "[GLA] Você só pode trocar seus equipamentos em uma Zona Segura.",
        "type": "false"
    },
    {
        "text": "[GLA] Uchimizu é uma habilidade que pode ser usada por Jinbe, Chew e Arlong.",
        "type": "false"
    },
    {
        "text": "A alcunha do Laffitte, shinigami ou deus da morte, vem do fato dele gosta de brincar com a vida das pessoas, assim como um shinigami.",
        "type": "false"
    },
    {
        "text": "A atual recompensa da Boa Hancock é 79,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A atual recompensa de Marshall D. Teach é de 2.247.600 de berries.",
        "type": "false"
    },
    {
        "text": "A atual recompensa da Nami é de 66,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A barreira do Bartolomeo quebrou somente uma vez durante o anime.",
        "type": "false"
    },
    {
        "text": "A comida favorita da Sugar é laranja.",
        "type": "false"
    },
    {
        "text": "A comida favorita do Marco é uva.",
        "type": "false"
    },
    {
        "text": "A comida favorita do Teach é torta de maçã.",
        "type": "false"
    },
    {
        "text": "A cor do cabelo da Miss Valentine é verde.",
        "type": "false"
    },
    {
        "text": "A espada de Shilliew é uma Meito chamada \"Rain\".",
        "type": "false"
    },
    {
        "text": "A mãe do Usopp nasceu no South Blue.",
        "type": "false"
    },
    {
        "text": "A maior recompensa conhecida é de 1,500,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A maior recompensa conhecida é de 2,257,600,000.",
        "type": "false"
    },
    {
        "text": "A primeira recompensa da Nico Robin foi de 78,000,000 de berry, a meesma quantia de sua mãe Nico Olivia.",
        "type": "false"
    },
    {
        "text": "A recompensa da Baby Five é de 17,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa da Baby Five é de 23,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa da Boa Hancock é de 79.000.000 de berries.",
        "type": "false"
    },
    {
        "text": "A recompensa da Jewelry Bonney é de 140,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa da Miss Valentine é de 7,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa da Olivia era de 79,000,000 de berry, o mesmo que sua filha Nami recebeu depois...",
        "type": "false"
    },
    {
        "text": "A recompensa do Lao G era de 60,000,000 de bery antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "false"
    },
    {
        "text": "A recompensa do Machvise era de 10,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "false"
    },
    {
        "text": "A recompensa do Mont Blanc Cricket é desconhecida.",
        "type": "false"
    },
    {
        "text": "A recompensa do Mr. 2 é de 30,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Mr. 4 é de 3,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Mr. 5 é de 9,000,00 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Mr.3 é de 23,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Pica era de 100,000,000 de berry antes de ser con gelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "false"
    },
    {
        "text": "A recompensa do Senor Pink era de 56,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "false"
    },
    {
        "text": "A recompensa do Tamago é de 429,500,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Trebol era de 100,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "false"
    },
    {
        "text": "A recompensa do Urouge é de 100,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do X-Drake é de 220,200,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Zeff é de 47,600,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Zoro é maior que a do Sanji.",
        "type": "false"
    },
    {
        "text": "A recompensa dos Shichibukai pode aumentar.",
        "type": "false"
    },
    {
        "text": "A Sniper Island está localizada na Grand Line.",
        "type": "false"
    },
    {
        "text": "A terceira recompensa do Monkey D. Luffy foi de 400,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "Ace comeu a Mira Mira no Mi.",
        "type": "false"
    },
    {
        "text": "Aisa nasceu com um Haki do Armamento avançado.",
        "type": "false"
    },
    {
        "text": "Akainu nasceu na Grand Line.",
        "type": "false"
    },
    {
        "text": "Akira Toriyama é o criador de One Piece.",
        "type": "false"
    },
    {
        "text": "Alvida é a antiga capitã dos Piratas do Buggy.",
        "type": "false"
    },
    {
        "text": "A recompensa de Hathan é de 7.000.000.",
        "type": "false"
    },
    {
        "text": "A recompensa de um pirata reflete a força dele.",
        "type": "false"
    },
    {
        "text": "A recompensa do Buffalo é de 13,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Buffalo é de 15,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Daz Bones é de 70,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Dellinger era de 12,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "false"
    },
    {
        "text": "A recompensa do Demaro Black é de 26,300,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Diamante era de 100,000,000 de berry antes de ser congelada em razão do Doflamingo ter se tornado um Shichibukai.",
        "type": "false"
    },
    {
        "text": "A recompensa do Fisher Tiger era de 200,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Foxy é de 25,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Gin é de 10,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Hatchan é de 7,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Jinbe é de 439,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Jinbe era de 200,000,000 de berry antes dele se tomar um Shichibukai.",
        "type": "false"
    },
    {
        "text": "A recompensa do Kuro é de 6,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "A recompensa do Kuroobi é de 8,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "Akainu nasceu na Grand Line.",
        "type": "false"
    },
    {
        "text": "Akira Toriyama é o criador de One Piece.",
        "type": "false"
    },
    {
        "text": "Alvida é a antiga capitã dos Piratas do Buggy.",
        "type": "false"
    },
    {
        "text": "Antes dos eventos da guerra, Doc Q tinha uma impressionanterecompensa de 72,500,000 de berry.",
        "type": "false"
    },
    {
        "text": "Antes dos eventos da guerra, Jesus Burgess tinha uma recompensa de 200,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "Antes dos eventos da guerra, Laffitte tinha uma recompensa de 42,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "Antes dos eventos da guerra, Van Augur tinha uma impressionante recompensa de 60,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "Aokiji comeu a Yuki Yuki no Mi.",
        "type": "false"
    },
    {
        "text": "Após os eventos em Punk Hazard, Smoker se tornou oficialmente o Líder da G-4.",
        "type": "false"
    },
    {
        "text": "Após ser diagnosticado com sua doença, Gol D. Roger levou dois anos para encontrar o One Piece.",
        "type": "false"
    },
    {
        "text": "Arlong era capitão dos Piratas do Sol e tinha a maior recompensa do East Blue antes de ser derrotado pelo Monkey D. Luffy.",
        "type": "false"
    },
    {
        "text": "Arlong já foi um escravo.",
        "type": "false"
    },
    {
        "text": "Assim como Kuzan, Smoker deseja acabar com o sistema de Shichibukai.",
        "type": "false"
    },
    {
        "text": "Atualmente o cabelo do Arlong é Roxo.",
        "type": "false"
    },
    {
        "text": "Atualmente o Monkey D. Luffy tem a maior recompensa conhecida.",
        "type": "false"
    },
    {
        "text": "Avalo Pizarro é o capitão do terceiro navio, liderando a terceira frota do Teach.",
        "type": "false"
    },
    {
        "text": "Avalo Pizarro era originalmente rei de um país no West Blue.",
        "type": "false"
    },
    {
        "text": "Baby 5 comeu a Boku Boku no Mi.",
        "type": "false"
    },
    {
        "text": "Baby Five nasceu na Grand Line.",
        "type": "false"
    },
    {
        "text": "Bacura é um usuário da Fruta do Diabo do tipo Zoan.",
        "type": "false"
    },
    {
        "text": "Barba Branca comeu a Goro Goro no Mi.",
        "type": "false"
    },
    {
        "text": "Barba Branca foi o responsável por cicatrizar o olho e Shanks com sua arma de garras.",
        "type": "false"
    },
    {
        "text": "Barba Branca nasceu na Sphinx Island no North Blue.",
        "type": "false"
    },
    {
        "text": "Barba Negra é um Almirante dos Piratas do Barba Negra e membro dos Shichibukai.",
        "type": "false"
    },
    {
        "text": "Barba Negra nasceu no North Blue.",
        "type": "false"
    },
    {
        "text": "Bartholomew Kuma era conhecido como um Pacifista.",
        "type": "false"
    },
    {
        "text": "Bartholomew Kuma tinha a Fruta do Diabo do Espelho.",
        "type": "false"
    },
    {
        "text": "Bartolomeo tem a Fruta do Diabo Nikyu Nikyu no Mi.",
        "type": "false"
    },
    {
        "text": "Basil Hawkins é um pirata infâme do North Blue conhecido como o Mago e capitão dos Piratas do Mago.",
        "type": "false"
    },
    {
        "text": "Bellemere encontrou a Nami e a Nojiko no Reino de Oykot, no West Blue.",
        "type": "false"
    },
    {
        "text": "Benn Beckman é o vice-capitão dos Piratas do Shanks.",
        "type": "false"
    },
    {
        "text": "Benn Beckman não é o personagem mais inteligente que apareceu na saga do East Blue.",
        "type": "false"
    },
    {
        "text": "Benn Beckman não tem uma recompensa.",
        "type": "false"
    },
    {
        "text": "Benn Beckman nasceu no East Blue.",
        "type": "false"
    },
    {
        "text": "Bepo não é um Mink.",
        "type": "false"
    },
    {
        "text": "Boa Hancock é a capitã das Piratas Kuja e a segunda mulher membro dos Shichibukai.",
        "type": "false"
    },
    {
        "text": "Boa Hancock nasceu no North Blue.",
        "type": "false"
    },
    {
        "text": "Boa Hancock tem a mesma dubladora da Reiju.",
        "type": "false"
    },
    {
        "text": "Boa Marigold e Boa Sandersonia tem somente Haki do armamento.",
        "type": "false"
    },
    {
        "text": "Boodle é o prefeito de Syrup Village.",
        "type": "false"
    },
    {
        "text": "Brook está morto há 50 anos.",
        "type": "false"
    },
    {
        "text": "Brook foi o último membro a entrar na tripulação dos Chapéu de Palha.",
        "type": "false"
    },
    {
        "text": "Buffalo nasceu na Grand Line.",
        "type": "false"
    },
    {
        "text": "Buggy é capitão do Clown Pirates e também colíder da Aliança do Buggy e Alvida.",
        "type": "false"
    },
    {
        "text": "Buggy e Shanks estão na mesma tripulação.",
        "type": "false"
    },
    {
        "text": "Busoshoku no Haki garante ao usuário um sexto sentido do mundo ao seu redor e habilidades precognitivas limitadas.",
        "type": "false"
    },
    {
        "text": "Cada um dos principais membros da tripulação do Shanks são do mesmo oceano.",
        "type": "false"
    },
    {
        "text": "Caesar comeu a Shiro Shiro no Mi.",
        "type": "false"
    },
    {
        "text": "Capone Gang Bege é capitão do Castle Tank Pirates e também um dos doze piratas classificados como a Pior Geração.",
        "type": "false"
    },
    {
        "text": "Caribou nasceu no West Blue.",
        "type": "false"
    },
    {
        "text": "Catarina Devon caça qualquer homem que ela acha atraente e decapita a cabeça deles para adicioná-las na sua coleção pessoal.",
        "type": "false"
    },
    {
        "text": "Catarina Devon é a capitã do quinto navio, liderando a quinta frota do Teach.",
        "type": "false"
    },
    {
        "text": "Catarina Devon nasceu na Grand Line.",
        "type": "false"
    },
    {
        "text": "Charlotte Linlin é uma das filhas da Big Mom.",
        "type": "false"
    },
    {
        "text": "Charlotte Shujan é um dos filhos da Big Mom.",
        "type": "false"
    },
    {
        "text": "Chess nasceu no West Blue.",
        "type": "false"
    },
    {
        "text": "Chopper é um Guaxinim que comeu a Fruta Human-Human.",
        "type": "false"
    },
    {
        "text": "Como um dos principais membrs do Exército Revolucionário, Koala tem uma recompensa de 320,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "Crocodile estava atrás da Uranus, uma das armas antigas.",
        "type": "false"
    },
    {
        "text": "Crocodile foi o segundo oponente a derrotar Luffy em uma batalha.",
        "type": "false"
    },
    {
        "text": "Crocodile nasceu no North Blue.",
        "type": "false"
    },
    {
        "text": "Damaro Black, Manjaro, Chocolat, Drip, Turco, Cocoa, MountMOUNTAIN e Nora Gitsune são os nomes verdadeiros da falsa tripulação dos Chapéus de Palha.",
        "type": "false"
    },
    {
        "text": "Demaro Black, capitão dos Falsos Chapéu de Palha, nasceu no West Blue.",
        "type": "false"
    },
    {
        "text": "Dentre a Tripulação dos Chapéu de Palha, Luffy é o membro favorito de Eiichiro Oda.",
        "type": "false"
    },
    {
        "text": "Depois do Timeskip o Franky é o mais alto dos Piratas do Chapéu de Pala.",
        "type": "false"
    },
    {
        "text": "Diamante foi o primeiro a encontrar Ito Ito no Mi quando era um criminoso.",
        "type": "false"
    },
    {
        "text": "Diamond Jozu comeu a Mira Mira no Mi, fazendo com que ele se transforme em um diamante humano com uma resistência incomparável.",
        "type": "false"
    },
    {
        "text": "Diamond Jozu nasceu na Grand Line.",
        "type": "false"
    },
    {
        "text": "Doc Q carrega uma grande lança como arma.",
        "type": "false"
    },
    {
        "text": "Doc Q é o médico dos Piratas do Barba Branca.",
        "type": "false"
    },
    {
        "text": "Doflamingo e Baby Five tiveram uma complexa relação amorosa.",
        "type": "false"
    },
    {
        "text": "Doflamingo é usuário de Haki do Armamento e do Rei apenas.",
        "type": "false"
    },
    {
        "text": "Doflamingo foi o primeiro personagem a desperta sua Fruta do Diabo.",
        "type": "false"
    },
    {
        "text": "Doflamingo matou Gekko Moria.",
        "type": "false"
    },
    {
        "text": "Donquixote Doflamingo é o capitão dos Piratas Donquixote.",
        "type": "false"
    },
    {
        "text": "Dororo é um personagem de One Piece.",
        "type": "false"
    },
    {
        "text": "Doutor Hiriluk nasceu em Drum Island.",
        "type": "false"
    },
    {
        "text": "Dracule Mihawk é um membro dos Piratas do Ruivo.",
        "type": "false"
    },
    {
        "text": "Dracule Mihawk é um Shichibukai e membro dos Piratas do Ruivo.",
        "type": "false"
    },
    {
        "text": "Dracule Mihawk teve apenas um dublador durante todo o anime.",
        "type": "false"
    },
    {
        "text": "Duval é irmão do Sanji.",
        "type": "false"
    },
    {
        "text": "Em termos simples, Haki é a habilidade de sentir energia espiritual (Busoshoku), usar força vital (Haoshoku) e dominar inimigos (Kenbunshoku).",
        "type": "false"
    },
    {
        "text": "Emporio Ivankov nasceu no West Blue.",
        "type": "false"
    },
    {
        "text": "Enel comeu a Gura Gura no Mi.",
        "type": "false"
    },
    {
        "text": "Enel e seus sacerdotes conquistaram a Lua.",
        "type": "false"
    },
    {
        "text": "Enel está em Marte.",
        "type": "false"
    },
    {
        "text": "Eric é um Pirata non-canon que foi mostrado no anime.",
        "type": "false"
    },
    {
        "text": "Erik e um personagem non-canon de One Piece.",
        "type": "false"
    },
    {
        "text": "Eustass Kid perdeu seu braço direito.",
        "type": "false"
    },
    {
        "text": "Existem três tipos de Haki disponíveis para todo mundo.",
        "type": "false"
    },
    {
        "text": "Foi confirmado que Usopp despertou o Haki da Observação durante o Arco de Punk Hazard.",
        "type": "false"
    },
    {
        "text": "Foxy comeu a Soro Soro no Mi.",
        "type": "false"
    },
    {
        "text": "Foxy nasceu no East Blue.",
        "type": "false"
    },
    {
        "text": "Franky destruiu o projeto da Uranus.",
        "type": "false"
    },
    {
        "text": "Franky é um robô.",
        "type": "false"
    },
    {
        "text": "Franky era o antigo líder da Família Franky e atual Capitão dos Piratas Ciborgues.",
        "type": "false"
    },
    {
        "text": "Franky era originalmente líder da Família Franky e agora é capitão dos Cyborg Pirates.",
        "type": "false"
    },
    {
        "text": "Franky foi o primeiro ciborgue a aparecer na série.",
        "type": "false"
    },
    {
        "text": "Franky foi o sétimo membro a entrar na tripulação dos Chapéu de Palha.",
        "type": "false"
    },
    {
        "text": "Frost é um personagem do One Piece.",
        "type": "false"
    },
    {
        "text": "Funkfreed é o nome do Elefante do Spandam.",
        "type": "false"
    },
    {
        "text": "Genzo nasceu no North Blue.",
        "type": "false"
    },
    {
        "text": "Genzo também é um Médico.",
        "type": "false"
    },
    {
        "text": "Gin é capitão dos Piratas do Gin.",
        "type": "false"
    },
    {
        "text": "Gin tem o mesmo dublador do Kuro.",
        "type": "false"
    },
    {
        "text": "Gin tem uma recompensa de 10,000,000.",
        "type": "false"
    },
    {
        "text": "Gol D. Roger usava um chapéu similar ao do Luffy.",
        "type": "false"
    },
    {
        "text": "Golden Lion Shiki é um personagem non-canon.",
        "type": "false"
    },
    {
        "text": "Gura Gura no Mi é uma Fruta do Diabo do tipo Logia.",
        "type": "false"
    },
    {
        "text": "Hancock é a Imperatriz do Amazon Lily, motivo pelo qual ela é chamada de Imperatriz Shichibukai.",
        "type": "false"
    },
    {
        "text": "Haoshoku no Haki concede ao usuario um sextro sentido do mundo ao seu redor e habilidades precognitivas limitadas.",
        "type": "false"
    },
    {
        "text": "Haoshoku no Haki garante ao usuário um sexto sentido do mundo ao seu redor e habilidades precognitivas limitadas.",
        "type": "false"
    },
    {
        "text": "Hatchan é um ex-oficial dos Piratas do Sol e membro dos Piratas do Arlong antes de disso.",
        "type": "false"
    },
    {
        "text": "Hatchan tem 8 braços.",
        "type": "false"
    },
    {
        "text": "Hody Jones é o Capitão dos Piratas Homens-Peixe.",
        "type": "false"
    },
    {
        "text": "Impel Down tem 7 níveis.",
        "type": "false"
    },
    {
        "text": "Inazuma nasceu no North Blue.",
        "type": "false"
    },
    {
        "text": "Ishoo nasceu no South Blue.",
        "type": "false"
    },
    {
        "text": "Issho comeu a Fuji Fuji no Mi, que o permite manipular a gravidade.",
        "type": "false"
    },
    {
        "text": "Issho nasceu no South Blue.",
        "type": "false"
    },
    {
        "text": "Jango é um Marinheiro e ex-capitâo dos Piratas Black Cack.",
        "type": "false"
    },
    {
        "text": "Jesus Burgess é navegador dos Piratas do Barba Negra.",
        "type": "false"
    },
    {
        "text": "Jinbe é o Navegador dos Piratas do Chapéu de Palha.",
        "type": "false"
    },
    {
        "text": "Jinbe foi o nono membro a entrar na tripulação dos Chapéus de Palha.",
        "type": "false"
    },
    {
        "text": "Johnny e Yosaku nasceram no West Blue.",
        "type": "false"
    },
    {
        "text": "Kalgara foi revelado como um usuário de Haki do Armamento.",
        "type": "false"
    },
    {
        "text": "Kanjuro comeu a Draw Draw no Mi, que o permite trazer a vida tudo o que ele desenha.",
        "type": "false"
    },
    {
        "text": "Katakuri pode ver 5 minutos no futuro.",
        "type": "false"
    },
    {
        "text": "Kid e Killer são amigos de infância. Juntos, formaram os Piratas do Killer.",
        "type": "false"
    },
    {
        "text": "Kid e Killer são irmãos. Juntos, formaram os Piratas do Kid.",
        "type": "false"
    },
    {
        "text": "Killer é um Pirata do North Blue e membro do Kid Pirates.",
        "type": "false"
    },
    {
        "text": "Killer perdeu um braço no Timeskip.",
        "type": "false"
    },
    {
        "text": "Kinemon comeu a Tuku Tuku no Mi.",
        "type": "false"
    },
    {
        "text": "Kinemon é usuário de Haki do Armamento apenas.",
        "type": "false"
    },
    {
        "text": "Kizaru nasceu na Grand Line.",
        "type": "false"
    },
    {
        "text": "Kuro, também conhecido pelo seu apelido Klahadore, é o capitão dos Piratas Neko.",
        "type": "false"
    },
    {
        "text": "Kuro, Capitão dos Piratas Black Cat, era também conhecido por seu apelido de Klahadore.",
        "type": "false"
    },
    {
        "text": "Kuroobi é um oficial dos Piratas do Sol e ex-membros dos Piratas do Arlong.",
        "type": "false"
    },
    {
        "text": "Kuzan decidiu se cegar porque havia muitas coisas que ele não queria ver.",
        "type": "false"
    },
    {
        "text": "Lucky Roo nasceu no North Blue.",
        "type": "false"
    },
    {
        "text": "Luffy derrotou Sabo em um duelo durante a infância.",
        "type": "false"
    },
    {
        "text": "Luffy ganhou sua cicatriz por causa de um tigre em Foosha Village.",
        "type": "false"
    },
    {
        "text": "Luffy tem uma fruta do Diabo do tipo Logia que tornou seu corpo de borracha.",
        "type": "false"
    },
    {
        "text": "Machvise comeu a Hon Hon no Mi.",
        "type": "false"
    },
    {
        "text": "Madame Shyarly é a irmã do Hatchan.",
        "type": "false"
    },
    {
        "text": "Madame Shyarly é uma das irmãs do Arlong.",
        "type": "false"
    },
    {
        "text": "Magellan comeu a Moku Moku no Mi.",
        "type": "false"
    },
    {
        "text": "Marco comeu a Pori Pori no Mi, tipo Fênix, uma Zoan Mítica.",
        "type": "false"
    },
    {
        "text": "Marco era o comandante da Segunda Divisão e mão direita do Barba Branca.",
        "type": "false"
    },
    {
        "text": "Masashi Kishimoto é o criador do One Piece.",
        "type": "false"
    },
    {
        "text": "Masira e Shoujo são irmãos.",
        "type": "false"
    },
    {
        "text": "Masira e Shoujo têm uma recompensa de 23,000,000 e 26,000,000 de berry, respectivamente.",
        "type": "false"
    },
    {
        "text": "Masira e Shoujo têm uma recompensa de 36,000,000 e 23,000,000 de berry, respectivamente.",
        "type": "false"
    },
    {
        "text": "Mihawk não é o único com uma recompensa desconhecida entre os Shichibukai.",
        "type": "false"
    },
    {
        "text": "Miss Doublefinger nasceu no South Blue.",
        "type": "false"
    },
    {
        "text": "Miss Goldenweek fez dupla com o Mr. 2 em razão das habilidades dela de pintar as criações de cera, tornando-as mais realistas.",
        "type": "false"
    },
    {
        "text": "Miss Goldenweek fez dupla com o Mr.2 em razão das habilidades dela de pintar as criações de cera, tornando-as mais realistas.",
        "type": "false"
    },
    {
        "text": "Miss Goldenweek nasceu no west Blue.",
        "type": "false"
    },
    {
        "text": "Miss Valentine nasceu na Grand Line.",
        "type": "false"
    },
    {
        "text": "Mohji é um pirata e capitão dos Piratas Leões.",
        "type": "false"
    },
    {
        "text": "Momoo agora é oficialmente considerado um animal de estimação dos Piratas do Arlong.",
        "type": "false"
    },
    {
        "text": "Momoo desenvolveu um trauma a respeito do Luffy e do Zoro, sofrendo um ataque de pânico só de vê-los.",
        "type": "false"
    },
    {
        "text": "Momoo é fêmea.",
        "type": "false"
    },
    {
        "text": "Monet comeu a Hie Hie no Mi.",
        "type": "false"
    },
    {
        "text": "Monet tinha uma Fruta do Diabo do tipo Paramercia.",
        "type": "false"
    },
    {
        "text": "Monkey D. Garp é o verdadeiro pai de Luffy.",
        "type": "false"
    },
    {
        "text": "Monkey D. Garp nasceu no South Blue.",
        "type": "false"
    },
    {
        "text": "Monkey D. Luffy foi a primeira pessoa a escapar de Impel Down.",
        "type": "false"
    },
    {
        "text": "Monkey D. Luffy foi a única pessoa a escapar de Impel Down na história.",
        "type": "false"
    },
    {
        "text": "Monkey D. Luffy nasceu em Nanko Village,",
        "type": "false"
    },
    {
        "text": "Mr. 3 queria trair o Crocodile desde o início do arco.",
        "type": "false"
    },
    {
        "text": "Mr. 4 nasceu no East Blue.",
        "type": "false"
    },
    {
        "text": "Mr. 5 nasceu no West Blue.",
        "type": "false"
    },
    {
        "text": "Nami conseguiu o Clima-Tact em Drum Island.",
        "type": "false"
    },
    {
        "text": "Nami foi o terceiro membro a entrar na tripulação dos Chapéu de Palha.",
        "type": "false"
    },
    {
        "text": "Nanashaku Jitte é um item de nível 70 que pode ser usado por todas as classes.",
        "type": "false"
    },
    {
        "text": "Nefertati Vivi é um membro dos Piratas do Chapéu de Palha.",
        "type": "false"
    },
    {
        "text": "Nico Robin é referida como Demônio da Revolução pelo Exérito Revolucionário.",
        "type": "false"
    },
    {
        "text": "O anime One Piece é o maior já feito.",
        "type": "false"
    },
    {
        "text": "O cabelo do Charlotte Cracker é verde.",
        "type": "false"
    },
    {
        "text": "O dragão contra qual Luffy e os outros lutaram em Punk Hazard foi criado artificialmente por Caesar em um laboratório em Punk Hazard.",
        "type": "false"
    },
    {
        "text": "O Exército Revolucionário foi fundado após o nascimento do Luffy.",
        "type": "false"
    },
    {
        "text": "O gênero de Surume é feminino.",
        "type": "false"
    },
    {
        "text": "O navio que a Hancock e as Piratas Kuja navegam é chamado de Aroma Snake.",
        "type": "false"
    },
    {
        "text": "O nome da espada do Shanks é Python.",
        "type": "false"
    },
    {
        "text": "O nome do navio que o Mr. 1 e a Miss Doublefinger usavam em suas operações era Kill Season.",
        "type": "false"
    },
    {
        "text": "O nome do navio que o Mr.5 e a Miss Valentine usavam em suas operações era Bomb Rock Candy.",
        "type": "false"
    },
    {
        "text": "O nome do navio que os Piratas Donquixote usaram nos dias deles no North Blue era Flamingo Family.",
        "type": "false"
    },
    {
        "text": "O nome dos navios do Masira e do Shoujo é Utan Sonar e Victory Hunter, respectivamente.",
        "type": "false"
    },
    {
        "text": "O nome verdadeiro da Baby Five é Babi.",
        "type": "false"
    },
    {
        "text": "O nome verdadeiro da Miss Goldenweek é Drophy.",
        "type": "false"
    },
    {
        "text": "O nome verdadeiro da Miss MerryChristmas é Marianne.",
        "type": "false"
    },
    {
        "text": "O nome verdadeiro do Hatchan é Hatchi.",
        "type": "false"
    },
    {
        "text": "O nome verdadeiro do Mr. 4 é Derek, provavelmente em referência ao famoso jogador de basebol Derek Jeter.",
        "type": "false"
    },
    {
        "text": "O nome verdadeiro do Mr. 5 é Rem.",
        "type": "false"
    },
    {
        "text": "O nome verdadeiro de Trebol é John Trebol.",
        "type": "false"
    },
    {
        "text": "O primeiro beijo conhecido do Sanji foi com a Violet.",
        "type": "false"
    },
    {
        "text": "O principal navio do Exército Revolucionário é chamado de Viento GRANMAR.",
        "type": "false"
    },
    {
        "text": "O projeto da Pluton ainda não foi descoberto.",
        "type": "false"
    },
    {
        "text": "O verdadeiro nome da Miss Doublefinger é Paula.",
        "type": "false"
    },
    {
        "text": "O verdadeiro nome do Mr. 3 é Baldino.",
        "type": "false"
    },
    {
        "text": "O Yonkou Shanks é conhecido por ser o Capitão dos Piratas do Shanks.",
        "type": "false"
    },
    {
        "text": "Oars é um meio-gigante.",
        "type": "false"
    },
    {
        "text": "Os Smiles eram feitos pelo Donquixote Doflamingo.",
        "type": "false"
    },
    {
        "text": "Os Yeti Cool Brothers são parte de uma subespécie de humanos.",
        "type": "false"
    },
    {
        "text": "Otohime era conhecida pela alcunha \"Reencarnação do amor\" devido a sua incrível bondade e busca pela paz entre diferentes espécies.",
        "type": "false"
    },
    {
        "text": "Otohime tinha um Haki da Observação e do Armamento muito desenvolvido, o que a permitia entender profundamente a emoção dos outros.",
        "type": "false"
    },
    {
        "text": "Pagaya é uma estrela do mar que é mascote de Camie e Também professor. Ele é o criador de uma linha de moda.",
        "type": "false"
    },
    {
        "text": "Pandaman é da tripulação do Law.",
        "type": "false"
    },
    {
        "text": "Pandaman está na tripulação do Trafalgar Law.",
        "type": "false"
    },
    {
        "text": "Pappag é um caçador de recompensas que apareceu no Arquipélago Sabaody.",
        "type": "false"
    },
    {
        "text": "Pearl é o comandante da segunda unidade dos Piratas da Armada Pirata",
        "type": "false"
    },
    {
        "text": "Pekoms comeu a Tame Tame no Mi, que o permite se transformar em uma tartaruga, dando a ele um casco duro como diamante.",
        "type": "false"
    },
    {
        "text": "Pekoms tem uma impressionante recompensa de 300,000,000 de berry.",
        "type": "false"
    },
    {
        "text": "Perona tem o mesmo dublador da Koala.",
        "type": "false"
    },
    {
        "text": "Pica é usuário do Haki do Armamento apenas.",
        "type": "false"
    },
    {
        "text": "Portgas D. Ace era o segundo comandante da divisão dos Spades Pirates.",
        "type": "false"
    },
    {
        "text": "Potgas D. Ace era o comandante da segunda divisão dos Spade Pirates.",
        "type": "false"
    },
    {
        "text": "Punk Hazard pode ser encontrado com um Log Pose.",
        "type": "false"
    },
    {
        "text": "Python é o nome da espada do Shanks.",
        "type": "false"
    },
    {
        "text": "Recompensa do X-Drake é de 220.200.207 berries.",
        "type": "false"
    },
    {
        "text": "Rob Lucci nasceu no West Blue.",
        "type": "false"
    },
    {
        "text": "Rosinante comeu a Shiu Shiu no Mi.",
        "type": "false"
    },
    {
        "text": "Rosinante foi o primeiro Corazón",
        "type": "false"
    },
    {
        "text": "Ryuma tinha a sombra de um lendário samurai de Wano.",
        "type": "false"
    },
    {
        "text": "Sandai Kitetsu (uma das espadas do zoro) enferrujou.",
        "type": "false"
    },
    {
        "text": "Sanji foi o quinto membro a entrar na tripulação dos Chapéu de Palha.",
        "type": "false"
    },
    {
        "text": "Sanji nasceu no South Blue.",
        "type": "false"
    },
    {
        "text": "Sanjuan Wolf é o capitão do quinto navio, liderando a quinta frota do Teach.",
        "type": "false"
    },
    {
        "text": "Scratchmen Apoo é da tribo Longarm, um infâme pirata com tema de música e capitâo dos Piratas On Music.",
        "type": "false"
    },
    {
        "text": "Sendai Kitetsu (uma das espadas do Zoro) enferrujou.",
        "type": "false"
    },
    {
        "text": "Sengoku comeu a Bito Bito no Mi, uma fruta Zoan Mítica.",
        "type": "false"
    },
    {
        "text": "Sengoku nasceu no North Blue.",
        "type": "false"
    },
    {
        "text": "Shanks é membro dos Yonko que governam o novo mundo e é o capitão dos piratas do Shanks.",
        "type": "false"
    },
    {
        "text": "Shanks é um membro dos Yonko que governa o Novo Mundo e capitão dos Piratas do Shanks.",
        "type": "false"
    },
    {
        "text": "Shanks foi o primeiro dono do Chapéu de Palha.",
        "type": "false"
    },
    {
        "text": "Shanks nasceu no East Blue.",
        "type": "false"
    },
    {
        "text": "Shanks tem uma cicatriz no olho direito.",
        "type": "false"
    },
    {
        "text": "Shiliew é o capitão da terceira frota do Teach.",
        "type": "false"
    },
    {
        "text": "Shiryu é o capitão da terceira frota do Teach.",
        "type": "false"
    },
    {
        "text": "Shojo é um membro dos Rumbar Pirates.",
        "type": "false"
    },
    {
        "text": "Smoker comeu a Doku Doku no Mi.",
        "type": "false"
    },
    {
        "text": "Smoker é conhecido como Caçador Cinza.",
        "type": "false"
    },
    {
        "text": "Smoker é usuário do Haki do Armamento apenas.",
        "type": "false"
    },
    {
        "text": "Smoker nasceu no East Blue.",
        "type": "false"
    },
    {
        "text": "Squard nasceu em North Blue.",
        "type": "false"
    },
    {
        "text": "Stussy nasceu no West Blue.",
        "type": "false"
    },
    {
        "text": "Sugar ficou permanentemente traumatizada com o rosto do Zoro, tornando-se um trauma incurável.",
        "type": "false"
    },
    {
        "text": "Tamago comeu a Cuma Cuma no Mi, que o permite ciclar em diferentes formas.",
        "type": "false"
    },
    {
        "text": "Tamago perdeu o olho direito para Pedro.",
        "type": "false"
    },
    {
        "text": "Todos os quatro principais membros da tripulação do Shanks são do mesmo oceano.",
        "type": "false"
    },
    {
        "text": "Trafalgar Law comeu a Pika Pika no Mi.",
        "type": "false"
    },
    {
        "text": "Trafalgar Law é conhecido como o Cirurgião Mortal.",
        "type": "false"
    },
    {
        "text": "Trafalgar Law é membro dos Piratas do Chapéu de Palha.",
        "type": "false"
    },
    {
        "text": "Trafalgar Law já foi um escravo.",
        "type": "false"
    },
    {
        "text": "Trafalgar Law perdeu um braço durante o Timeskip.",
        "type": "false"
    },
    {
        "text": "Trebol tinha Fruta do Diabo do tipo Logia.",
        "type": "false"
    },
    {
        "text": "Tsuru comeu a Washe Washe no Mi.",
        "type": "false"
    },
    {
        "text": "Tsuru nasceu no East Blue.",
        "type": "false"
    },
    {
        "text": "Urouge é também conhecido como Mad Monk. Ele é um pirata de uma ilha do céu e capitãp dos Piratas Mad Monk.",
        "type": "false"
    },
    {
        "text": "Van Augur nasceu no West Blue.",
        "type": "false"
    },
    {
        "text": "Vasco Shot é o capitão do sétimo navio, liderando a sétima frota do Teach.",
        "type": "false"
    },
    {
        "text": "Vergo pode cobrir quase seu corpo inteiro com Haki.",
        "type": "false"
    },
    {
        "text": "Vista nasceu na Grand Line.",
        "type": "false"
    },
    {
        "text": "Wapol nasceu no North Blue",
        "type": "false"
    },
    {
        "text": "Woop Slap é o prefeito de Orange Town.",
        "type": "false"
    },
    {
        "text": "Zeff perdeu sua perna esquerda para salvar Sanji.",
        "type": "false"
    },
    {
        "text": "Zoro empunhou menos de 8 espadas diferentes no anime.",
        "type": "false"
    },
    {
        "text": "Arlong era o capitão dos Piratas do Sol e tinha a maior recompensa do East Blue antes de ser derrotado pelo Monkey D. Luffy.",
        "type": "false"
    },
];

window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1) || "memory";
    tab = hash;
    setTab(tab);
});

function updateScale(div) {
    const vpWidth = window.innerWidth;
    const vpHeight = window.innerHeight;

    let scaleY = vpHeight / 668;
    let scaleX = vpWidth / 668;

    let scale = Math.min(scaleX, scaleY);

    if (window.innerWidth <= 768) {
        div.style.transform = `scale(1)`;
    } else {
        div.style.transform = `scale(${scale})`;
    }
}

updateScale(memoryDiv);

if (window.innerWidth <= 768) {
    var canHover = false;
} else if (window.innerWidth > 768) {
    var canHover = true;
}

window.addEventListener('resize', () => {
    updateScale(memoryDiv);
    if (window.innerWidth > 768) {
        canHover = true;
    } else {
        canHover = false;
    }
});

function renderAnswers(filteredAnswers) {
    answersDiv.innerHTML = '';
    filteredAnswers.forEach(answer => {
        const div = document.createElement('div');
        div.textContent = answer.text;
        div.classList.add(answer.type);
        answersDiv.appendChild(div);
    })
}

function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function filterAnswers() {
    const input = normalizeString(quizInput.value.toLowerCase());
    const filteredAnswers = answers.filter(answer =>
        normalizeString(answer.text.toLowerCase()).includes(input)
    );
    renderAnswers(filteredAnswers);
}

quizInput.addEventListener('input', filterAnswers);

document.querySelector('.erase-bt').addEventListener('click', () => {
    quizInput.value = '';
    filterAnswers();
})


renderAnswers(answers);

const background = document.querySelector('.bg-img');

function setTab(tabName) {
    if (tabName === 'memory') {
        memoryDiv.style.display = 'flex';
        quizDiv.style.display = 'none';
        memoryBt.classList.add('selected');
        quizBt.classList.remove('selected');
        background.style.backgroundImage = "url('Img/background.png')";
    } else if (tabName === 'quiz') {
        quizDiv.style.display = 'flex';
        memoryDiv.style.display = 'none';
        quizBt.classList.add('selected');
        memoryBt.classList.remove('selected');
        background.style.backgroundImage = "none";
    }
    const newUrl = `#${tabName}`;
    history.pushState(null, '', newUrl);
}

window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1) || "memory";
    tab = hash;
    setTab(tab);
});

function createColorButtons(squareIndex) {
    return colors.map(color => {
        return `<img class="color ${color}${squareIndex}" src="Img/${color}.png" alt="${color}">`;
    }).join('');
}

function createSquares() {
    const squaresContainer = document.getElementById('squares-container');
    for (let i = 1; i <= numberOfSquares; i++) {
        const squareHTML = `
            <div class="square sq${i}">
                <div class="color-bt">
                    ${createColorButtons(i)}
                </div>
            </div>
        `;
        squaresContainer.innerHTML += squareHTML;
    }
}

createSquares();

function setColor(square, color) {
    square.style.backgroundImage = `url(Img/${color}.png)`;
}

function resetAll() {
    document.querySelectorAll('.square').forEach(square => {
        square.style.backgroundImage = `url(Img/black.png)`;
    });
}

function handleColorButtonClick(event) {
    const colorClass = event.target.classList[1];
    const color = colorClass.replace(/\d+$/, '');
    const index = parseInt(colorClass.match(/\d+$/)[0], 10);
    const square = document.querySelector(`.sq${index}`);
    setColor(square, color);
    if (window.innerWidth < 769) {
        document.querySelectorAll('.color-bt').forEach(bt => {
            bt.style.display = 'none';
        })
    }
}

function createRankingLine(entry) {
    let tr = document.createElement('tr');
    let tdRank = document.createElement('td');
    tdRank.classList.add('td-rank');
    let tdPlayers = document.createElement('td');
    tdPlayers.classList.add('td-players');
    let tdWave = document.createElement('td');
    tdWave.classList.add('td-wave');

    tdRank.textContent = entry.rank;
    entry.players.forEach(player => {
        let playerLink = document.createElement('a');
        playerLink.textContent = player;
        tdPlayers.appendChild(playerLink);
    });

    tdWave.textContent = entry.wave;

    tr.appendChild(tdRank);
    tr.appendChild(tdPlayers);
    tr.appendChild(tdWave);
    if (selectedWb === "Marineford") {
        let tdTime = document.createElement('td');
        tdTime.classList.add('td-time');
        tdTime.textContent = entry.time;
        tr.appendChild(tdTime);
    }

    document.querySelector('.wb-rank').appendChild(tr);
}

function populateRanking(wbRank) {
    document.querySelector('.wb-rank').innerHTML = '';
    wbRank.forEach(entry => {
        createRankingLine(entry);
    });
}

populateRanking(worldBosses.find(wb => wb.name === selectedWb).dates[selectedWbDate].ranking);

document.querySelector('#wb-date-left').addEventListener('click', () => {
    if (selectedWbDate >= 0 && selectedWbDate < (worldBosses.find(wb => wb.name === selectedWb).dates.length - 1)) {
        selectedWbDate += 1;
        populateRanking(worldBosses.find(wb => wb.name === selectedWb).dates[selectedWbDate].ranking);
        document.querySelector('.wb-date>p').innerHTML = worldBosses.find(wb => wb.name === selectedWb).dates[selectedWbDate].date;
    }
});

document.querySelector('#wb-date-right').addEventListener('click', () => {
    if (selectedWbDate > 0 && selectedWbDate <= (worldBosses.find(wb => wb.name === selectedWb).dates.length - 1)) {
        selectedWbDate -= 1;
        populateRanking(worldBosses.find(wb => wb.name === selectedWb).dates[selectedWbDate].ranking);
        document.querySelector('.wb-date>p').innerHTML = worldBosses.find(wb => wb.name === selectedWb).dates[selectedWbDate].date;
    }
});

function populateWb() {
    const wbList = document.querySelector('.wb-list');
    wbList.innerHTML = '';

    worldBosses.forEach(wb => {
        const wbDiv = document.createElement('div');
        wbDiv.classList.add('wb');
        wbDiv.style.backgroundImage = `url(${wb.img})`;

        wbDiv.addEventListener('click', () => {
            selectedWb = wb.name;
            document.querySelectorAll('.wb').forEach(element => {
                element.classList.remove('selected');
            })
            wbDiv.classList.add('selected');
            selectedWbDate = 0;
            populateRanking(worldBosses.find(element => element.name === selectedWb).dates[selectedWbDate].ranking);
            document.querySelector('.wb-date>p').innerHTML = worldBosses.find(element => element.name === selectedWb).dates[selectedWbDate].date;
            if (wb.name === "Marineford") {
                document.getElementById('wave-dmg-text').innerHTML = "Wave";
                document.querySelector('.rank-time').style.display = "flex";
            } else {
                document.getElementById('wave-dmg-text').innerHTML = "Dano";
                document.querySelector('.rank-time').style.display = "none";
            }
        })

        wbList.appendChild(wbDiv);
    })

    wbList.querySelectorAll('.wb')[0].classList.add('selected');
}

populateWb();

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('color')) {
        handleColorButtonClick(event);
    }
});

memoryBt.addEventListener('click', function (event) {
    setTab('memory');
});

quizBt.addEventListener('click', function (event) {
    setTab('quiz');
});

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', () => {
        if (window.innerWidth <= 769) {
            square.querySelector('.color-bt').style.display = "flex";
        }
    })
})

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', () => {
        if (canHover) {
            square.querySelector('.color-bt').style.display = 'flex';
        }
    });
    square.addEventListener('mouseleave', () => {
        if (canHover) {
            square.querySelector('.color-bt').style.display = 'none';
        }
    });
})

document.querySelector('.bt-div').addEventListener('click', resetAll);

document.querySelector('.rot-bt').addEventListener('click', () => {
    window.location.replace("rotation.html");
})

document.querySelector('.dima-bt').addEventListener('click', () => {
    window.location.replace("dima.html");
})

document.querySelector('.track-bt').addEventListener('click', () => {
    window.location.replace("tracklist.html");
})

document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        resetAll()
    }
});

document.querySelector('.food-bt').addEventListener('click', () => {
    if (food === "closed") {
        document.querySelectorAll(".container-tab").forEach(container => {
            container.style.display = "none";
        });
        wb = "closed";
        chest = "closed";
        document.querySelector('.food-container').style.display = "flex";
        food = "opened";
    } else {
        document.querySelectorAll(".container-tab").forEach(container => {
            container.style.display = "none";
        });
        wb = "closed";
        chest = "closed";
        document.querySelector('.food-container').style.display = "none";
        food = "closed";
    }
});

document.querySelector('.wb-bt').addEventListener('click', () => {
    if (wb === "closed") {
        document.querySelectorAll(".container-tab").forEach(container => {
            container.style.display = "none";
        });
        food = "closed";
        document.querySelector('.wb-container').style.display = "flex";
        wb = "opened";
        document.querySelector('.wb-date>p').innerHTML = worldBosses.find(wb => wb.name === selectedWb).dates[selectedWbDate].date
    } else {
        document.querySelectorAll(".container-tab").forEach(container => {
            container.style.display = "none";
        });
        food = "closed";
        document.querySelector('.wb-container').style.display = "none";
        wb = "closed";
    }
});

document.querySelector('.chest-bt').addEventListener('click', () => {
    if (chest === "closed") {
        document.querySelectorAll(".container-tab").forEach(container => {
            container.style.display = "none";
        });
        food = "closed";
        wb = "closed";
        document.querySelector('.chest-container').style.display = "flex";
        chest = "opened";
        populateTabLeft();
        populateChestInfo(islands[0]);
        document.querySelectorAll('.chest-item-div')[0].classList.add('selected');
    } else {
        document.querySelectorAll(".container-tab").forEach(container => {
            container.style.display = "none";
        });
        food = "closed";
        wb = "closed";
        document.querySelector('.chest-container').style.display = "none";
        chest = "closed";
        document.querySelector('.chests-left').innerHTML = ''
    }
});

document.querySelectorAll('.close-bt').forEach(bt => {
    bt.addEventListener('click', () => {
        document.querySelectorAll(".container-tab").forEach(container => {
            container.style.display = "none";
        });
        food = "closed";
        wb = "closed";
        chest = "closed";
    })
})

function populateFood() {
    let foodList = document.querySelector('.food-list');
    foods.forEach(food => {
        let foodDiv = document.createElement('div');
        foodDiv.classList.add('food-div');

        let foodImgDiv = document.createElement('div');
        foodImgDiv.classList.add('food-img-div')
        let foodImg = document.createElement('img');
        foodImg.src = food.img;

        let foodName = document.createElement('p');
        foodName.classList.add('food-name');
        foodName.innerText = food.name;

        let foodStatDiv = document.createElement('div');
        foodStatDiv.classList.add('food-stats')
        let foodLvl = document.createElement('p');
        foodLvl.innerText = "Lv: " + food.lvl;

        let foodCd = document.createElement('p');
        foodCd.innerText = "Cd: " + food.cd;

        foodDiv.addEventListener('click', () => {
            selectedFood = food.name;
            document.querySelector('.food-info-img').src = food.img;
            document.querySelector('.food-info-name').innerText = food.name;
            document.getElementById('tank-hp').innerText = food.TankHp;
            document.getElementById('dps-hp').innerText = food.DpsHp;
            document.getElementById('sup-hp').innerText = food.SupHp;
            calcIngredients();
            document.querySelectorAll('.food-div').forEach(div => {
                div.classList.remove('selected');
            });
            foodDiv.classList.add('selected');
        })
        foodList.appendChild(foodDiv);
        foodDiv.appendChild(foodImgDiv);
        foodImgDiv.appendChild(foodImg);
        foodDiv.appendChild(foodStatDiv);
        foodStatDiv.appendChild(foodName);
        foodStatDiv.appendChild(foodLvl);
        foodStatDiv.appendChild(foodCd);
    })
}

populateFood();
document.querySelectorAll('.food-div')[0].classList.add('selected');

const inputField = document.querySelector('.ing-input>input');

inputField.addEventListener('change', () => {
    inputField.value = inputField.value.replace(/[^0-9]/g, '');
    var number = parseInt(inputField.value)
    if (number < 1) {
        inputField.value = 1;
    }

    calcIngredients();
});


const ingList = document.querySelector('.ing-list');

function secondsToHMS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(secs).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function calcIngredients() {
    ingList.innerHTML = '';
    const foodItem = foods.find(food => food.name === selectedFood);
    const multiplier = parseInt(inputField.value, 10) || 1;
    let foodCost = 0;
    document.getElementById('craft-time').innerHTML = secondsToHMS(300 * multiplier);

    if (foodItem && foodItem.ing) {
        const ingredientMap = {};
        foodItem.ing.forEach(ingredientsObject => {
            for (const ingredientName in ingredientsObject) {
                const quantity = ingredientsObject[ingredientName];
                ingredientMap[ingredientName] = quantity;
            }
        });

        ingredients.forEach(ingredient => {
            const ingredientName = ingredient.name;
            if (ingredientMap[ingredientName] !== undefined) {
                const quantity = ingredientMap[ingredientName];
                const ingredientDetails = ingredient;

                const ingDiv = document.createElement('div');
                ingDiv.classList.add('ing-div');

                const ingImgDiv = document.createElement('div');
                ingImgDiv.classList.add('ing-img');
                const ingImg = document.createElement('img');
                ingImg.src = ingredientDetails.img;
                ingImg.alt = ingredientDetails.name;

                const ingInfoDiv = document.createElement('div');
                ingInfoDiv.classList.add('ing-info');

                const ingName = document.createElement('p');
                ingName.classList.add('ing-name');
                ingName.textContent = ingredientName;

                const ingQntdCostDiv = document.createElement('div');
                ingQntdCostDiv.classList.add('ing-qntd-cost');

                const ingCost = document.createElement('p');
                const ingBerryImg = document.createElement('div');
                ingBerryImg.classList.add('ing-berry');
                ingBerryImg.style.backgroundImage = "url('Img/berry.png')";

                const currentCost = ingredientDetails.cost * (quantity * multiplier);
                ingCost.classList.add('ing-cost');
                ingCost.textContent = currentCost;

                foodCost += currentCost;

                const ingQntd = document.createElement('p');
                ingQntd.classList.add('ing-qntd');
                ingQntd.textContent = `x${quantity * multiplier}`;

                ingImgDiv.appendChild(ingImg);
                ingInfoDiv.appendChild(ingName);
                ingInfoDiv.appendChild(ingQntdCostDiv);
                ingQntdCostDiv.appendChild(ingQntd);
                ingQntdCostDiv.appendChild(ingBerryImg);
                ingQntdCostDiv.appendChild(ingCost);

                ingDiv.appendChild(ingImgDiv);
                ingDiv.appendChild(ingInfoDiv);

                ingList.appendChild(ingDiv);
            }
        });

        const bronzeNeeded = foodCost;
        const silverNeeded = Math.floor(bronzeNeeded / 100);
        const goldNeeded = Math.floor(silverNeeded / 100);

        const remainingSilver = silverNeeded % 100;
        const remainingBronze = bronzeNeeded % 100;

        document.getElementById('gold-cost').innerText = goldNeeded;
        document.getElementById('silver-cost').innerText = remainingSilver;
        document.getElementById('bronze-cost').innerText = remainingBronze;
    }
}

calcIngredients();

function populateTabLeft() {
    const container = document.querySelector('.chests-left');
    container.innerHTML = '';

    if (chestSelectedTab === "Chests") {
        document.querySelector('.achiev-list').style.display = 'none';
        document.querySelector('.chest-list').style.display = 'flex';
        islands.forEach(island => {
            const islandDiv = document.createElement('div');
            islandDiv.classList.add('chest-item-div');

            const islandName = document.createElement('p');
            islandName.innerText = island.name;

            container.appendChild(islandDiv);
            islandDiv.appendChild(islandName);

            islandDiv.addEventListener('click', () => {
                populateChestInfo(island);
                document.querySelectorAll('.chest-item-div').forEach(div => {
                    div.classList.remove('selected');
                });
                islandDiv.classList.add('selected');
            });
        });
    } else if (chestSelectedTab === "Achievs") {
        document.querySelector('.chest-list').innerHTML = '';
        document.querySelector('.chest-list').style.display = 'none';
        document.querySelector('.achiev-list').style.display = 'flex';
        achievements.forEach(achiev => {
            const achievDiv = document.createElement('div');
            achievDiv.classList.add('achiev-item-div');

            const achievImg = document.createElement('div');
            achievImg.style.backgroundImage = `url(${achiev.img})`;
            achievImg.classList.add('achiev-img');

            const achievFrame = document.createElement('img');
            achievFrame.src = `Img/achievFrame.png`;
            achievFrame.classList.add('achiev-frame');

            achievImg.appendChild(achievFrame);

            const achievInfo = document.createElement('div');
            achievInfo.classList.add('achiev-info');

            const achievName = document.createElement('p');
            achievName.innerText = achiev.name;

            const achievDesc = document.createElement('p');
            achievDesc.innerText = achiev.description;
            achievDesc.classList.add('achiev-info-desc');

            container.appendChild(achievDiv);
            achievDiv.appendChild(achievImg);
            achievDiv.appendChild(achievInfo);
            achievInfo.appendChild(achievName);
            achievInfo.appendChild(achievDesc);

            achievDiv.addEventListener('click', () => {
                populateAchievInfo(achiev);
                document.querySelectorAll('.achiev-item-div').forEach(div => {
                    div.classList.remove('selected');
                });
                achievDiv.classList.add('selected');
            });
        });
    }
}

function populateChestInfo(island) {
    const container = document.querySelector('.chest-list');
    container.innerHTML = '';

    island.chests.forEach((chest, index) => {
        const chestDiv = document.createElement('div');
        chestDiv.classList.add('chest-div');

        const chestImg = document.createElement('div');
        chestImg.classList.add('chest-img');

        chestDiv.appendChild(chestImg);

        const itemsContainer = document.createElement('div');
        itemsContainer.classList.add('items-container');
        chest.forEach(e => {
            const itemData = items.find(element => element.name === e.item);
            if (itemData) {
                const itemImg = document.createElement('div');
                itemImg.style.backgroundImage = `url(${itemData.img})`;
                itemImg.classList.add('item-img');

                if (e.quantity > 1) {
                    const itemQuantity = document.createElement('p');
                    itemQuantity.innerText = e.quantity;
                    itemQuantity.classList.add('item-qntd');
                    itemImg.appendChild(itemQuantity);
                }

                itemsContainer.appendChild(itemImg);
            }
        });
        chestDiv.appendChild(itemsContainer);
        container.appendChild(chestDiv);

        chestDiv.addEventListener('click', () => {
            const chestMap = document.querySelector('.chest-map');
            const map = maps.find(map => map.name === island.name).mapImgs[index];
            chestMap.style.backgroundImage = `url(${map})`;
            chestMap.style.display = 'flex';
        });
    });
}

document.querySelector('.map-close-bt').addEventListener('click', () => {
    const chestMap = document.querySelector('.chest-map');
    chestMap.style.display = 'none';
});

function populateAchievInfo(achiev) {
    const container = document.querySelector('.achiev-list');
    container.innerHTML = '';

    const achievName = document.createElement('p');
    achievName.innerText = achiev.name;
    achievName.classList.add('achiev-name');
    container.appendChild(achievName);

    const achievDesc = document.createElement('p');
    achievDesc.innerText = achiev.description;
    achievDesc.classList.add('achiev-desc');
    container.appendChild(achievDesc);

    achiev.directions.forEach(img => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('achiev-directions');
        container.appendChild(imgElement);
    });
}

document.getElementById('ing-input-bt-1').addEventListener('click', () => {
    inputField.value = 1;
    calcIngredients();
});

document.getElementById('ing-input-bt-2').addEventListener('click', () => {
    inputField.value = Math.max(1, Number(inputField.value) - 1);
    calcIngredients();
});

document.getElementById('ing-input-bt-3').addEventListener('click', () => {
    inputField.value = Math.min(100, Number(inputField.value) + 1);
    calcIngredients();
});

document.getElementById('ing-input-bt-4').addEventListener('click', () => {
    inputField.value = 100;
    calcIngredients();
});

document.querySelector('#chests').addEventListener('click', () => {
    if (chestSelectedTab !== "Chest") {
        chestSelectedTab = "Chests";
        document.querySelector('#achievs').classList.remove('selected');
        document.querySelector('#chests').classList.add('selected');
        populateTabLeft();
        populateChestInfo(islands[0]);
        document.querySelectorAll(".chest-item-div")[0].classList.add('selected');
    }
})

document.querySelector('#achievs').addEventListener('click', () => {
    if (chestSelectedTab !== "Achievs") {
        chestSelectedTab = "Achievs";
        document.querySelector('#achievs').classList.add('selected');
        document.querySelector('#chests').classList.remove('selected');
        populateTabLeft();
        populateAchievInfo(achievements[0]);
        document.querySelectorAll(".achiev-item-div")[0].classList.add('selected');
    }
})


function populateRotation(div, rotation) {
    const container = document.querySelector(div);
    container.style.display = 'none';
    rotation.forEach((char, index) => {
        if (char) {
            container.style.display = 'flex';
            const imgElement = document.createElement('div');
            imgElement.classList.add('rotation-img');
            imgElement.classList.add(`rot-${index}`);
            imgElement.style.backgroundImage = `url(${char.image})`;
            container.appendChild(imgElement);
        }
    });
}

populateRotation('.rotationOne', rotationOne);
populateRotation('.rotationTwo', rotationTwo);
populateRotation('.specialRot', specialRot);