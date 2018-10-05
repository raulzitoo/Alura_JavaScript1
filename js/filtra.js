var filtro = document.querySelector("#filtrar-tabela");

var tabela = document.querySelector("#tabela-pacientes");

filtro.addEventListener("input",function(){

   var pacientes = document.querySelectorAll(".paciente");
   console.log(filtro.value) ;
   if (filtro.value.length > 0){

        pacientes.forEach(paciente => {
            var TdNome = paciente.querySelector(".info-nome");
            var Nome = TdNome.textContent;
            console.log(Nome);
            var expressao = new RegExp(filtro.value,"i");
            if (!expressao.test(Nome) ){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
            
        });
/*
        pacientes.forEach(paciente,function(){
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

        });
*/
    }else{
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
            
        });
        console.log("Filtro Vazio!")
    }
});