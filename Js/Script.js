const form = document.getElementById('form');
const seuCep = document.getElementById('cep');
const resultadoDiv = document.getElementById('resultado');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const cep = seuCep.value;
	buscarCep(cep);
});

async function buscarCep(cep) {
	const url = `https://viacep.com.br/ws/${cep}/json/`;
	const resultado = await fetch(url);
	const endereco = await resultado.json();
	exibirResultado(endereco);
}

function exibirResultado(endereco) {
	if (endereco.erro) {
		resultadoDiv.innerHTML = 'CEP não encontrado.';
	} else {
		resultadoDiv.innerHTML = `
			<p><strong>Endereço:</strong> ${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}</p>
			<p><strong>CEP:</strong> ${endereco.cep}</p>
		`;
	}
	resultadoDiv.style.display = 'block';

	
}

