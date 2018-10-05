var Btnbusca = document.querySelector("#busca-paciente");

Btnbusca.addEventListener("click",function(){

    var xhr = new XMLHttpRequest()  ;
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    var erroajax = document.querySelector("#erro-ajax");
    console.log(erroajax);
    xhr.addEventListener("load",function(){
        if (xhr.status == 200){
            erroajax.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(paciente => {
            AdicionaPaciente(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.statusText);
            
            erroajax.classList.remove("invisivel");
        }
        
    });
    

});

