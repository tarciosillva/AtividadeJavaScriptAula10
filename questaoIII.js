function rest(){
    var nome = document.getElementById('nome').value;
    var preco = document.getElementById('preco').value;

    var preco = Math.floor(preco*2);

    document.getElementById('promocao').innerHTML = "Promocao de  " + nome;
    document.getElementById('calculo').innerHTML = "valor a pagar R$:" + preco.toFixed(2);
}

var mostrar = document.getElementById('promo');
mostrar.addEventListener('click', rest);