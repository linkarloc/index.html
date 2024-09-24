let statusCadastro = '';  // Variável para armazenar o status do cadastro

// Função chamada quando o usuário clicar em "NÃO VOU"
function cancelar() {
    statusCadastro = 'Ausente';  // Marca como Ausente
    salvarDados();  // Salva os dados como Ausente
    document.getElementById('formulario').reset();
}

// Função chamada quando o formulário for enviado
document.getElementById('formulario').onsubmit = function(event) {
    event.preventDefault();
    
    statusCadastro = 'Confirmado';  // Define o status como Confirmado
    salvarDados();  // Salva os dados como Confirmado
    document.getElementById('formulario').reset();
};

// Função para salvar os dados no localStorage
function salvarDados() {
    const nome = document.getElementById('nome').value || 'N/A';
    const telefone = document.getElementById('telefone').value || 'N/A';

    let dados = JSON.parse(localStorage.getItem('cadastros')) || [];

    // Adiciona o novo cadastro à lista de dados
    dados.push({
        nome: nome,
        telefone: telefone,
        status: statusCadastro
    });

    // Salva a lista atualizada no localStorage
    localStorage.setItem('cadastros', JSON.stringify(dados));
}
