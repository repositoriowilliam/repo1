// Função para obter os valores dos campos de entrada
function obterValores() {
	const campos = document.querySelectorAll('.link-input');
	const valores = [];
	campos.forEach((campo) => {
		const valor = campo.value.trim() || '';
		valores.push(`${campo.id}:${valor}`);
	});
	return valores.join(';');
}

// Função para salvar os valores no arquivo de texto
function salvarNoArquivo() {
	const valores = obterValores();
	const blob = new Blob([valores], { type: 'text/plain' });

	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = 'configuracao.txt';

	// Clique automático no link para baixar o arquivo
	document.body.appendChild(link);
	document.body.removeChild(link);
	link.click();
}

// Evento de clique do botão "Salvar"
const salvarButton = document.getElementById('saveButton');
salvarButton.addEventListener('click', salvarNoArquivo);
