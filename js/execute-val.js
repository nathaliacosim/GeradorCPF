$(function(){
    $('#cpf').blur(function(){
        var cpf = $(this).val();
        if (valida_cpf(cpf)){
            alert("CPF valido!");
        } else {
            alert("CPF invalido!");
        }
        
    });
    
});