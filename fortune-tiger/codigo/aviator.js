const buttonAviator = document.querySelector('.button-aviator');
const labelTop = document.querySelector('.sinal');
const jogadas = document.querySelector('.jogadas .value');
const saida = document.querySelector('.saida .value');
const valido = document.querySelector('.valido .value');

let cont = 0;

function gerarNumeroAleatorio() {
	let numeroAleatorio = Math.random();
	if (numeroAleatorio < 0.4) {
		// 40% de chance para números de 1 a 2
		numero = (Math.random() + 1).toFixed(2);
	} else if (numeroAleatorio < 0.4) {
		// 40% de chance para números de 2 a 5
		numero = (Math.random() * 3 + 2).toFixed(2);
	} else {
		// 20% de chance para números de 10 a 57
		numero = (Math.random() * 48 + 10).toFixed(2);
	}
	return numero;
}

function gerarNumeroAleatorio2a4() {
	return Math.floor(Math.random() * 3) + 2;
}

function gerarHorarioAleatorio() {
	const agora = new Date();
	const minutosAleatorios = Math.floor(Math.random() * 3) + 1;
	const horarioAleatorio = new Date(
		agora.getTime() + minutosAleatorios * 60000,
	);
	const hora = horarioAleatorio.getHours();
	let minutos = horarioAleatorio.getMinutes();
	minutos = minutos < 10 ? '0' + minutos : minutos;
	return hora + ':' + minutos;
}

function putContent() {
	cont = 1;
	buttonAviator.textContent = 'Aguarde...';
	labelTop.textContent = 'Gerando sinal';
	setInterval(function () {
		if (cont) {
			jogadas.textContent = gerarNumeroAleatorio2a4();
			saida.textContent = `${gerarNumeroAleatorio()}x`;
			valido.textContent = gerarHorarioAleatorio();
			buttonAviator.textContent = 'IDENTIFICAR SINAL';
			cont = 0;
		}
	}, 2200);
}

buttonAviator.addEventListener('click', putContent);
