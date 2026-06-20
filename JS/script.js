// Seleciona o formulário pelo ID
const formulario = document.getElementById("form-contato");

// Quando o usuário clicar em enviar
formulario.addEventListener("submit", function(event){

    // Impede o formulário de atualizar a página
    event.preventDefault();

    // Captura os valores digitados
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    // Verifica se algum campo está vazio
    if(nome == "" || email == "" || mensagem == ""){
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Verifica se o email possui formato válido
    if(!email.includes("@")){
        alert("Digite um email válido!");
        return;
    }

    // Mensagem de sucesso
    alert("Mensagem enviada com sucesso!");

    // Limpa o formulário
    formulario.reset();

});