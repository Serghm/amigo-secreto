let amigos = [];

function agregarAmigos(){
    let ingresarAmigo = document.getElementById('amigo');
    let nombres = ingresarAmigo.value.split(',').map(nombre => nombre.trim())

    if(nombres.length === 0 || nombres[0] === ''){
        alert('Ingresa un Nombre Valido');
            return;
        
    }
}