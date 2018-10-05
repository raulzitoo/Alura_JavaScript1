var adiciona = document.querySelector('#adicionar-paciente');

adiciona.addEventListener("click",function (event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);
    var erros = validaPaciente(paciente);
    var mensagemDeErro = document.querySelector("#MensagemDeErro");
    mensagemDeErro.innerHTML = "";
    if (erros.length > 0){
        ExibeMensagemDeErro(erros,mensagemDeErro);
        return;
    }
    
    AdicionaPaciente(paciente)
    form.reset();
});

function AdicionaPaciente(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}




function montaTr(paciente){

    var novoPaciente = document.createElement("tr");

    novoPaciente.appendChild(MontaTd(paciente.nome));
    novoPaciente.appendChild(MontaTd(paciente.peso));
    novoPaciente.appendChild( MontaTd(paciente.altura));
    novoPaciente.appendChild( MontaTd(paciente.gordura));
    novoPaciente.appendChild(MontaTd(paciente.imc));

    return novoPaciente;
}

function MontaTd(valor){
    var novaTd = document.createElement("td");
    novaTd.textContent = valor;

    return novaTd;

}

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc:calculaImc(form.peso.value,form.altura.value)
    };
    console.log(paciente.imc);
    return paciente;
}

function validaPaciente(paciente){
    var erros = [];
    

    if (paciente.nome.length == 0) erros.push("O nome não pode ser branco.");

    if (paciente.gordura.length ==0) erros.push("A gordura não pode ser branco");

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser branco");
    }else{
        if(!validaPeso(paciente.peso)) erros.push("Peso Invalido");
    }

    if (paciente.altura.length ==0){
         erros.push("A altura não pode ser branco");
    }else{
        if(!validaAltura(paciente.altura)) erros.push("Altura Invalida");
    }

    return erros;
}

function ExibeMensagemDeErro(erros,mensagemDeErro){
    erros.forEach(erro => {    
        var novamensagem = document.createElement("li");
        novamensagem.textContent = erro;
        mensagemDeErro.appendChild(novamensagem);
    });
}