function validarFormulario() {
    const inputs = document.querySelectorAll(".input");
    const mensagensErro = document.querySelectorAll(".erro");
    let valido = true;

    inputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            mensagensErro[index].textContent = "Este campo é obrigatório!";
            mensagensErro[index].style.color = "red";
            input.style.border = "2px solid red"; // 
            valido = false;
        } else {
            mensagensErro[index].textContent = "";
            input.style.border = "2px solid green"; 
        }
    });

    if (valido) {
        alert("Formulário enviado com sucesso!");
    }else {
        alert("Preencha todos os campos!")
    }
}
