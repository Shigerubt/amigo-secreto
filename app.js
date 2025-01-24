let amigoSecreto = [];


function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    amigoSecreto.push(amigo);
}

function sortearAmigo() {
    let amigoSorteado = amigoSecreto[Math.floor(Math.random() * amigoSecreto.length)];
    document.getElementById('sorteado').innerHTML = amigoSorteado;
    eliminarAmigo();
}

function eliminarAmigo() {
    amigoSecreto.pop();
}