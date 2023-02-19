const listButton = document.getElementById("list-button");
const message = document.getElementById("message");

// Crie uma lista de palavras
const words = ["Eu te amo", 
"Sou todo seu", 
"Amo muito você",
"Você é minha", 
"Sinto sua falta", 
"Você é a mulher mais linda do mundo",
"Você é uma mulher incrível", 
"Eu penso em você desde o amanhecer até quando eu me deito",
"Enquanto durar eu vou te amar intensamente", 
"Eu sei que vou te amar por toda a minha vida",
"Eu faço planos e já vejo no futuro o seu beijo sendo a calmaria que eu procuro no fim do meu dia",
"Põe tudo na mala, não esquece de nada", 
"Passa uma semana aqui comigo e eu duvido que você vai lembrar de outro alguém, outro lugar",
"Se quiser ficar pra sempre pode ficar", 
"Nós dois, pra sempre!", 
"Sempre e para sempre!",
"É que contigo tudo que vivo mesmo sendo simples vira inesquecível!",
"Eu tô querendo ter contigo uma vida", 
"Eu te amo, é inexplicável", 
"Eu te amo e pra sempre vou te amar",
"Tô preparada pra abrir mão do meu orgulho quando a gente brigar", 
"Não esquece!", 
"Linda!", 
"Minha maluca!",
"Meu amor!", 
"Amor da minha vida!", 
"O amor é só um, o resto é conversa",
"O amor não machuca, traz paz e acalma, e nunca tem pressa", 
"Saudade de você", 
"Sou maluco por você",
"Essa tempestade um dia vai acabar!", 
"Sorte do meu sorriso ter o seu como motivo",
"Eu te quero de qualquer jeito!", 
"Amo tudo em você!", 
"Você não foi a primeira, mas é a última!",
"&#x1f970; &#x1f970; &#x1f970; &#x1f970; &#x1f970",
"&#x1F60D; &#x1F60D; &#x1F60D; &#x1F60D; &#x1F60D;",
"&#x1F924; &#x1F924; &#x1F924; &#x1F924; &#x1F924;"];

  
listButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * words.length);
    message.innerHTML = words[randomIndex];
  // Se chegar ao final da lista, volta para a primeira palavra
  if (currentWord >= words.length) {
    currentWord = 0;
  }
});



const chatForm = document.getElementById("chatform");
const chatLog = document.getElementById("chatlog");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = chatForm.querySelector("input");
  const message = input.value;

  const chat = document.createElement("div");
  chat.classList.add("chat");

  const userPhoto = document.createElement("div");
  userPhoto.classList.add("user-photo");

  const chatMessage = document.createElement("p");
  chatMessage.classList.add("chat-message");
  chatMessage.textContent = message;

  chat.appendChild(userPhoto);
  chat.appendChild(chatMessage);
  chatLog.appendChild(chat);

  input.value = "";
});


  