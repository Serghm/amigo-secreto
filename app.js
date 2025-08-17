let amigos = [];

function agregarAmigos(){
    let ingresarAmigo = document.getElementById('amigo');
    let nombres = ingresarAmigo.value.split(',').map(nombre => nombre.trim())

    if(nombres.length === 0 || nombres[0] === ''){
        alert('Ingresa un Nombre Valido');
            return;
        
    }

    nombres.forEach(nombreAmigo => {
        if(nombreAmigo !== '' && !amigos.map(a => a.tolowerCase()).includes(nombreAmigo.tolowerCase())){
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

    

}
