var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i<pacientes.length;i++)
{
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var imcTd = paciente.querySelector(".info-imc");

    var pesovalido = validaPeso(peso);
    var alturavalida = validaAltura(altura);    
    
    
    if (pesovalido && alturavalida)
    {
        imcTd.textContent = calculaImc(peso,altura);
    } else{
        if (!pesovalido) {
            imcTd.textContent= "Peso Invalido!";
            paciente.classList.add("paciente-invalido");
        }
        if (!alturavalida){
            imcTd.textContent= "Altura Invalida!";
            paciente.classList.add("paciente-invalido");
        }
    }
    
};

function calculaImc(peso,altura){

    var imc = peso / (altura*altura);
    console.log(peso);
    console.log(altura);
    console.log(imc);
    return imc.toFixed(2);

}

function validaPeso(peso){
    if (peso <= 0 || peso >=1000 )
    {
        return false;
    }
    return true;
}

function validaAltura(altura){
    if (altura <= 0 || altura >=3 )
    {
        return false;
    }

    return true;
}




