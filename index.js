
const cantidad = document.getElementById('inputCantidad');
const categoria = document.getElementById('inputState');
const totalAPagar = document.getElementById('inputTotalAPagar');
const resumenButton = document.getElementById('resumenButton');



resumenButton.addEventListener('click', () => {          // Agregar un evento al botón "Resumen"
const cantidad = parseInt(inputCantidad.value);          // Obtener la cantidad y la categoría seleccionada
const categoria = inputState.value;
 

  
let costo = 200;                                         // Precio base de las entradas
    if (categoria === 'Estudiante') {
    costo *= 0.2;                                         // Aplico descuento uso un codigo abreviado 
    } else if (categoria === 'Trainee') {
    costo *= 0.5; 
    } else if (categoria === 'Junior') {
    costo *= 0.85; 
    }

  
    const totalAPagar = costo * cantidad;                  // Calculo el costo total de la compra
    inputTotalAPagar.value = `Total a Pagar: $${totalAPagar}`;// Muestro el costo total en el campo de texto
});

document.getElementById("borrarButton").addEventListener("click", function() {

    inputCantidad.value = '';
    inputState.value = '';
    inputTotalAPagar.value = '';

    inputNombre2.value = '';
    inputApellido2.value = '';
    inputEmail1.value = '';
    
  });