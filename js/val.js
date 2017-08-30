function verifica_cpf(valor) {
    valor = valor.toString();
    valor = valor.replace(/[^0-9]/g, '');

    if ( valor.length === 11 ) {
        return 'CPF';
    }   
    else {
        return false;
    }
}
function calc_digitos_posicoes(digitos, posicoes=10, soma_digitos=0){
    digitos = digitos.toString();
    for ( var i = 0; i < digitos.length; i++  ) {
        soma_digitos = soma_digitos + ( digitos[i] * posicoes );
        posicoes--;
     }
    soma_digitos = soma_digitos % 11;
 
    if ( soma_digitos < 2 ) {
        soma_digitos = 0;
    } else {
        soma_digitos = 11 - soma_digitos;
    }
    var cpf = digitos + soma_digitos;
    return cpf;
}
function valida_cpf(valor){
    valor = valor.toString();
    valor = valor.replace(/[^0-9]/g, '');
    var digitos = valor.substr(0, 9);
    var novo_cpf = calc_digitos_posicoes(digitos);
    var novo_cpf = calc_digitos_posicoes(novo_cpf, 11);
    if (novo_cpf === valor){
        // CPF válido
        return true;
    } else {
        // CPF inválido
        return false;
    }
    
}