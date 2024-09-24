// Função para carregar os dados armazenados e gerar o relatório
function gerarRelatorio() {
    let dados = JSON.parse(localStorage.getItem('cadastros')) || [];

    const relatorio = document.getElementById('relatorio').getElementsByTagName('tbody')[0];

    // Limpar a tabela antes de adicionar novos dados
    relatorio.innerHTML = '';

    // Percorre os dados e adiciona cada linha na tabela
    dados.forEach(function(cadastro) {
        const novaLinha = relatorio.insertRow();

        const celulaNome = novaLinha.insertCell(0);
        const celulaTelefone = novaLinha.insertCell(1);
        const celulaStatus = novaLinha.insertCell(2);

        celulaNome.innerHTML = cadastro.nome;
        celulaTelefone.innerHTML = cadastro.telefone;
        celulaStatus.innerHTML = cadastro.status;
    });
}

// Chama a função para gerar o relatório ao carregar a página
window.onload = gerarRelatorio;
