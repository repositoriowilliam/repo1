const button = document.querySelector('.floating-button');
const identificando = document.querySelector('.sending');
const containerResult = document.querySelector('.container-result');

function gerarNumeroAleatorio() {
	let numerosAleatorios = Math.floor(Math.random() * 6) + 6;
	document.getElementById('times-to-play').innerText = numerosAleatorios;
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
	const resultado = hora + ':' + minutos;
	document.getElementById('time-to-play').innerText = resultado;
}

const generatePatterns = () => {
	identificando.style.display = 'flex';
	containerResult.style.display = 'none';
	button.removeAttribute('pulse');
	setInterval(function () {
		containerResult.style.display = 'flex';
		identificando.style.display = 'none';
	}, 5000);
	gerarHorarioAleatorio();
	gerarNumeroAleatorio();
};

button.addEventListener('click', generatePatterns);
