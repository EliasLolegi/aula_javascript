// Aula05 - Final  
//Exemplo

function botao(){
    document.getElementById("agradecimento").innerHTML = "<b>obrigado por clicar</b>"; //innerHTML introduz no HTMl
}
function redirecionar(){
    window.open("https://ofertavariada.com.br/");   // abre em uma nova aba com endereço
    //window.location.href = "https://ofertavariada.com.br/"; //abre na mesma aba 
}

function trocar(elemento){
    elemento.innerHTML = "obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
    //alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "passe o mouse"
    //document.getElementById("mousemove").innerHTML = "consegui uau!!";
}
function load(){
    alert("bem vindo");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

    //console.log(document.getElementById("agradecimento"));   // pega o documento. pelo elemento Id no HTML id=("agradecimento")

    //alert("Obrigado por clicar!");
