let amigos = [];

function agregarAmigo(){
    let ingresarAmigo = document.getElementById('amigo');
    let nombres = ingresarAmigo.value.split(',').map(nombre => nombre.trim())

    if(nombres.length === 0 || nombres[0] === ''){
        alert('Ingresa un Nombre Valido');
            return;
        
    }

    nombres.forEach(nombreAmigo => {
        if(nombreAmigo !== '' && !amigos.map(a => a.toLowerCase()).includes(nombreAmigo.toLowerCase())){
            amigos.push(nombreAmigo);

        }else if(nombreAmigo !== ''){
            alert(`"El nombre: ${nombreAmigo} ya se ingreso previamente" `);
        }
    });

    actualizarListaAmigos();
        ingresarAmigo.value = '';
        ingresarAmigo.focus();
}

function sortearAmigo(){
    if (amigos.length <2){
        alert('Ingresa por lo menos dos amigos para el sorteo.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = (`<p>Tu amigo secreto es: ${amigoSorteado}</p>`);


 
}

function actualizarListaAmigos(){
    let lista = document.getElementById('lista de amigos');
    let totalAmigos = document.getElementById('totalAmigos');
    lista.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElementById('li');
        item.textContent = (`${i + 1} ${amigos[i]}`);
        lista.appendChild(item);
    }
    totalAmigos.textContent = (`total de amigos: ${amigos.length}`);

}