//Aula04
//exemplo

function soma(n1,n2){
    return n1 + n2;
}
var validar = 0;
function validaIdade(idade){
    if (idade >= 18){                    //se
      validar = true
    }else{
      validar = false
    }
    return validar;                     //senao
}
var idade = prompt("Qual a sua idade ?");
validaIdade(idade)
console.log(validar);
