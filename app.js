// Imediatly invoke function expression - IIFE, você não precisa ativar a função
//ela se ativa automaticamente
//declarar as variáveis dentro de uma função, para ter um escopo mais fechado

(function () {
    const form = document.querySelector('.form');
    //essa é uma maneira de matar o envio de formulário
    //dessa forma sempre usamos o 'on' antes do evento
    // form.onsubmit = function (event) {
    //     console.log('Foi enviado')
    //  event.preventDefault();
    // };
    //outra maneira é,
    //aqui , dessa maneira não precisa do on, só o nome do evento

    
    function recebeEventoForm (event) {
        event.preventDefault();
        //criou um array vazio para armazenar as pessoas
        const pessoas = [];
        //pega os elementos html, nesse caso os inputs
        let nome = form.querySelector('.name')
        let lastName = form.querySelector('.lastName')
        let weight = form.querySelector('.weight')
        let height = form.querySelector('.height')
        //empurra o objeto com os valores para o index do array,
        pessoas.push({
            nome : nome.value,
            lastName : lastName.value,
            weight : weight.value,
            height : height.value
        });
        
console.log(pessoas);
// acumula as pessoas do array no HTML
        let result = document.querySelector('#result');
        result.innerHTML += `<p class="result">Seu nome é ${nome.value} ${lastName.value},  peso  ${weight.value} e  altura ${height.value}</p>`;

    }

    form.addEventListener('submit', recebeEventoForm);
})();

