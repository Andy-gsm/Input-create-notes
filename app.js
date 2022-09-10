let valorInput = document.getElementById('añadir')
let contenido = document.querySelector('.contenedor_value')
let rellenar = document.querySelector('.rellenar')
let eliminar = document.querySelector('.eliminar')
let msj = document.querySelector('.msj')
// creando un vizualizador de datos con input
rellenar.addEventListener('click' , valoresIncluir)
function valoresIncluir() {
    let card = valorInput.value;
    contenido.innerHTML = card 
}

// remover los datos del contenedor
eliminar.addEventListener('click' , valoresEliminar )
function valoresEliminar() {
    if(valoresIncluir !== '')  {
        contenido.textContent = '';
        valorInput = ''
    } else{
        msj.innerHTML = `
        <div class="error">
          inserta arriba una palabra</div>
     `
    }
}
