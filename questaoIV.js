function calcularValor() {
    var valorTempoUso = document.getElementById("valorTempoUso").value
    var tempo = document.getElementById("TempoUso").value

    if (tempo > 0) {
       var resto = tempo / 15
       var total = valorTempoUso * Math.ceil(resto)
       var resultado = document.getElementById("Total")
       resultado.innerHTML = "Valor total R$:" + total.toFixed(2)
       
    }
}

calcularValor()