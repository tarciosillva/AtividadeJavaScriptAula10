function rest(){
    var quilo = document.getElementById('quilo').value;
    var grama = document.getElementById('grama').value;

    var quiloI = quilo;
    var preco = Math.floor(grama*quiloI/1000);

    document.getElementById('calculo').innerHTML = "valor a pagar R$:" + preco.toFixed(2);
}

var restaurante = document.getElementById('restaurante');
restaurante.addEventListener('click', rest);