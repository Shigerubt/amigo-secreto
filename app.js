let amigoSecreto = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('No puedes agregar un amigo vacío');
    } else {
        amigoSecreto.push(amigo);
        document.getElementById('amigo').value = '';
        document.getElementById('listaAmigos').innerHTML = amigoSecreto.join(', ');
    }   
}

function sortearAmigo() {
    let validar = amigoSecreto.length;
    if (validar == 0) {
        alert('No hay amigos para sortear');
    } else {
        let amigoSorteado = amigoSecreto[Math.floor(Math.random() * amigoSecreto.length)];
        document.getElementById('resultado').innerHTML = amigoSorteado;        

        let index = amigoSecreto.indexOf(amigoSorteado);
        if (index > -1) {
            amigoSecreto.splice(index, 1);
        }

        document.getElementById('listaAmigos').innerHTML = amigoSecreto.join(', ');

        if (amigoSecreto.length == 0) {
            alert('Se acabaron los amigos a sortear, inicia de nuevo');
        }
    }
}