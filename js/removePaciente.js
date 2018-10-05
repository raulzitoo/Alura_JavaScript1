var tabela = document.querySelector("#tabela-pacientes");
console.log(tabela);

tabela.addEventListener("dblclick",function(event){
    var paciente = event.target;
    var paiDoAlvo = paciente.parentNode; 
    paiDoAlvo.classList.add("fadeOut");

    setTimeout(function(){
        paiDoAlvo.remove();
    },500);
    
})