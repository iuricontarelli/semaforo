// Seleciona o elemento da imagem
const img = document.getElementById("img");

// Seleciona o container dos botões
const buttons = document.getElementById("buttons");

// Índice da cor atual
let colorIndex = 0;

// ID do intervalo para controle da mudança automática
let intervalId = null;

// Função para lidar com os eventos de clique nos botões (recebe um EVENT no click do mouse)
const trafficLight = (event) => {
	// Para a mudança automática, se estiver ocorrendo
	stopAutomatic();
	// Liga a luz correspondente ao botão clicado
	turnOn[event.target.id]();
	console.log(event.target.id); // Vermelho, amarelo, verde e automático
};

// Função para determinar o próximo índice de cor
// colorIndex menor que 2? se sim = ++colorIndex se nao = colorIndex recebe 0 (voltando o loop red, yellow e green)
const nextIndex = () => (colorIndex = colorIndex < 2 ? ++colorIndex : 0); // Se o índice for menor que 2, ele é incrementado; caso contrário, é definido como 0, permitindo que as cores percorram o ciclo.
// Mesma coisa do que está em cima
// if (colorIndex < 2) {
// 	colorIndex++;
// } else {
// 	colorIndex = 0;
// }

// Função para mudar a cor
const changeColor = () => {
	// Lista de cores
	const colors = ["red", "yellow", "green"];
	// Obtém a próxima cor da lista
	const color = colors[colorIndex];
	// Liga a luz correspondente à próxima cor
	turnOn[color]();
	// Determina o próximo índice de cor
	nextIndex();
};

// Função para parar a mudança automática
const stopAutomatic = () => {
	// Limpa o intervalo se estiver definido
	clearInterval(intervalId);
};

// Objeto contendo funções para ligar as luzes de cada cor
const turnOn = {
	red: () => (img.src = "./img/vermelho.png"),
	yellow: () => (img.src = "./img/amarelo.png"),
	green: () => (img.src = "./img/verde.png"),
	automatic: () => (intervalId = setInterval(changeColor, 1000)), // Define o intervalo para mudança automática
};

// Adiciona um ouvinte de evento de clique aos botões
buttons.addEventListener("click", trafficLight);
