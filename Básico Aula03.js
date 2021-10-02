//Aula03

//exemplos
var d = new Date(); // cria variavel Data

alert(d.getMonth()+1); // pega a data e mes
alert(d.getHours()); // pega as horas
alert(d.getMinutes()); // pega os minutos
alert(d.getSeconds()); // pega os segundos


var count = 0
for(count=0; count <= 5; count++){
    alert(count);
}
var count = 0;
while (count <5){
    console.log(count);
    count++;
    alert(count)
    //count = count + 1;
}
var idade = prompt("Qual a sua idade ?");
//var idade = 18;
if (idade >= 18){
alert("maior de idade");
}else{
alert("menor de idade");
};

