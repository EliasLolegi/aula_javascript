//aula 02  exemplos

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva",cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);


var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);

alert(fruta.cor);

var lista = ["maçã","pera","laranja"];
lista.push("uva");
console.log(lista);
console.log(lista.toString());  //transforma lista para string 
console.log(lista.join(" - "))

console.log(lista[0]);
console.log(lista.toString()[0]);  //transforma lista para string 



lista.push("uva"); // push = empurrar
lista.pop(); // pop = remove o ultimo elemento
console.log(lista.reverse()); //mostra lista ao contrario
console.log(lista.length); //mostra quantidade de elementos na lista


var lista = ["maçã","pera","laranja"];   
console.log(lista);
lista.push("uva"); // push = empurrar
console.log(lista);

//a ordem que o console.log é chamado influencia na exibição
//note que itens adicionados após o console não se é exibido 
//a menos que sejam chamados novamente

console.log(lista[1])
alert(lista[1])





