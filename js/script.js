const valorReais = document.getElementById("valorReais");
valorReais.onblur = function() {
    reset();

    if (valorReais.value === "") {
        return;
    }
    const valor = parseInt(valorReais.value)*100;
    const dez = valor / 10;
    const vinteCinco = valor / 25;
    const cinquenta= valor / 50;
    const cinco = valor / 5;
    // for (let i = 0; i < valor ; i+=5) {
    //     if (i % 5 === 0) {
    //         cinco ++;
    //     }
    //     if (i % 10 === 0) {
    //         dez ++;
    //     }
    //     if (i % 25 === 0) {
    //         vinCin ++;
    //     }
    //     if (i % 50 === 0) {
    //         cinq ++;
    //     }
    // }
    document.getElementById("song").play();
    document.getElementById("dezCents").innerHTML += `: ${dez} moedas.`;
    document.getElementById("vinteCincoCents").innerHTML += `: ${vinteCinco} moedas.`;
    document.getElementById("cinqCents").innerHTML += `: ${cinquenta} moedas.`;
    document.getElementById("cincoCents").innerHTML += `: ${cinco} moedas.`;
    document.getElementById("umCents").innerHTML += `: ${valor} moedas.`;
}
const reset = function() {
    document.getElementById("dezCents").innerHTML = "10 centavos";
    document.getElementById("vinteCincoCents").innerHTML = "25 centavos";
    document.getElementById("cinqCents").innerHTML = "50 centavos";
    document.getElementById("cincoCents").innerHTML = "5 centavos";
    document.getElementById("umCents").innerHTML = "1 centavo";
}
const somenteNumeros = function () {
    const numeros = /[0-9]/g;
    if (numeros.test(String.fromCharCode(window.event.keyCode))) {
        return window.event.key;
    }
    else {
        window.event.preventDefault();
    }
}
valorReais.addEventListener("keypress", somenteNumeros);