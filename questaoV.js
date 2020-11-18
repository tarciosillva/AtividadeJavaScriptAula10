function calculaPromocao() {
    var produto = document.getElementById("produto").value
    var preco = document.getElementById("preco").value

    var promocao = preco / 2;
    var valorTotal = preco * 2 + promocao

    var mensagemPromocao = document.getElementById("mensagemPromocao")
    mensagemPromocao.innerHTML = produto + "- Promoção: Leve 3 por R$: " + valorTotal.toFixed(2)
    var total = document.getElementById("total")
    total.innerHTML = "O 3º produto custa apenas R$: " + promocao.toFixed(2)
}