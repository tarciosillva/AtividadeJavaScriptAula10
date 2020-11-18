function reserva(){
    var nome = document.getElementById('nome').value;
    var preco = document.getElementById('preco').value;
    
    var precoI =preco;
    var entrada =Math.floor(precoI/2);
    var parcela = Math.floor(entrada/12);

    document.getElementById('resposta').innerHTML= "Promoção "  +  nome;  
    document.getElementById('entrada').innerHTML= "Entrada de R$: "+ entrada.toFixed(2); 
    document.getElementById('parcela').innerHTML= "+ 12 de R$: "  +  parcela.toFixed(2)
}
var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', reserva);
