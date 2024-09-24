// Importar e inicializar o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBnzbjcW_HSRtS01r33fjuLLppux23vRYA",
  authDomain: "meusite-d0996.firebaseapp.com",
  projectId: "meusite-d0996",
  storageBucket: "meusite-d0996.appspot.com",
  messagingSenderId: "276591811559",
  appId: "1:276591811559:web:5ea0b5de3cc2137315fb42",
  measurementId: "G-6Q1B9QGZ9Z"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Função para salvar os dados no Firebase
function salvarDados(nome, telefone, status) {
    set(ref(database, 'usuarios/' + nome), {
        telefone: telefone,
        status: status
    }).then(() => {
        alert('Dados salvos com sucesso!');
    }).catch((error) => {
        alert('Falha ao salvar dados: ' + error);
    });
}

// Lidar com o formulário de confirmação
document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    salvarDados(nome, telefone, 'Confirmado');
});

// Função para lidar com o botão "NÃO VOU"
function cancelar() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    salvarDados(nome, telefone, 'NÃO VOU');
}
