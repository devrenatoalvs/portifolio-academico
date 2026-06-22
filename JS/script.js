const formulario = document.getElementById("form-contato");

formulario.addEventListener("submit", function(event){

      event.preventDefault();

      let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if(nome == "" || email == "" || mensagem == ""){
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if(!email.includes("@")){
        alert("Digite um email válido!");
        return;
    }

    alert("Mensagem enviada com sucesso!");

    formulario.reset();
});