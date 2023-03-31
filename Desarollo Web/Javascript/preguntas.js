// Seleccionamos el elemento del DOM con el ID "mousePosition"
const mousePositionElement = document.querySelector("#mousePosition");

// Creamos un event listener para el evento "mousemove" en todo el documento
document.addEventListener("mousemove", (event) => {
  // Obtenemos la posición del mouse en el eje X e Y
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Actualizamos el contenido del elemento "mousePosition" con la posición del mouse
  mousePositionElement.textContent = `Posición del mouse: (${mouseX}, ${mouseY})`;
});

// Seleccionamos los elementos del DOM que necesitamos
const firstNameInput = document.getElementById("form-fname");
const lastNameInput = document.getElementById("form-lname");
const submitButton = document.getElementById("form1-submit");
const form = document.getElementById("form1");

// Creamos un event listener para el evento "click" en el botón "submit"
submitButton.addEventListener("click", (event) => {
  // Prevenimos que el formulario se envíe
  event.preventDefault();

  // Obtenemos el valor de los campos de texto
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Creamos un elemento <p> para mostrar el nombre completo
  const fullNameElement = document.createElement("p");
  fullNameElement.textContent = `Nombre completo: ${firstName} ${lastName}`;

  // Insertamos el elemento <p> después del botón "submit"
  form.insertBefore(fullNameElement, submitButton.nextSibling);
});


// Obtener referencias a los botones y la tabla
const btnInsertRow = document.getElementById("btn-insert-r");
const btnInsertColumn = document.getElementById("btn-insert-c");
const sampleTable = document.getElementById("sampleTable");

// Agregar evento de clic al botón Insert Row
btnInsertRow.addEventListener("click", function () {
  // Crear nueva fila
  const newRow = sampleTable.insertRow();

  // Crear nuevas celdas para la fila
  const newCell1 = newRow.insertCell(0);
  const newCell2 = newRow.insertCell(1);

  // Agregar contenido a las celdas
  newCell1.innerHTML = "New row ";
  newCell2.innerHTML = "New row ";
});

// Agregar evento de clic al botón Insert Column
btnInsertColumn.addEventListener("click", function () {
  // Obtener todas las filas de la tabla
  const rows = sampleTable.getElementsByTagName("tr");

  // Iterar a través de cada fila y agregar una nueva celda
  for (let i = 0; i < rows.length; i++) {
    const newCell = rows[i].insertCell(-1);
    newCell.innerHTML = "New column ";
  }
});

// Obtener los elementos de entrada y el botón
const rowIndexInput = document.getElementById("rowIndex");
const colIndexInput = document.getElementById("colIndex");
const newValueInput = document.getElementById("newValue");
const changeBtn = document.getElementById("btn-change");

// Agregar un evento "click" al botón
changeBtn.addEventListener("click", function() {
  // Obtener los valores de índice de fila y columna, y el nuevo valor de la caja de entrada
  const rowIndex = Number(rowIndexInput.value);
  const colIndex = Number(colIndexInput.value);
  const newValue = newValueInput.value;

  // Acceder a la tabla y obtener la fila y celda correspondiente
  const table = document.getElementById("myTable");
  const row = table.rows[rowIndex];
  const cell = row.cells[colIndex];

  // Actualizar el contenido de la celda con el nuevo valor
  cell.textContent = newValue;
});



// Obtener los elementos HTML necesarios
const colorSelect = document.getElementById("colorSelect");
const btnAddColor = document.getElementById("btn-add-color");
const btnRmvColor = document.getElementById("btn-rmv-color");

// Agregar evento "click" al botón "Add color"
btnAddColor.addEventListener("click", function() {
  // Crear un nuevo elemento <option>
  const newOption = document.createElement("option");
  // Asignar un color aleatorio como su valor
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  newOption.value = "#" + randomColor;
  // Agregar el nuevo elemento a la lista de opciones
  colorSelect.appendChild(newOption);
});

// Agregar evento "click" al botón "Remove color"
btnRmvColor.addEventListener("click", function() {
  // Obtener el índice de la opción seleccionada
  const selectedIndex = colorSelect.selectedIndex;
  // Si se ha seleccionado una opción
  if (selectedIndex >= 0) {
    // Remover esa opción de la lista
    colorSelect.remove(selectedIndex);
  }
});

// Obtenemos la imagen de placeholder y le añadimos el evento mouseenter
const imagenGato = document.getElementById("imagenGato");
imagenGato.addEventListener("mouseenter", () => {
  // Generamos dos números aleatorios entre 300 y 600 para width y height
  const width = Math.floor(Math.random() * 301) + 300;
  const height = Math.floor(Math.random() * 301) + 300;

  // Creamos una nueva imagen con el tamaño aleatorio
  const nuevaImagen = new Image();
  nuevaImagen.src = "http://placekitten.com/" + width + "/" + height;

  // Reemplazamos la imagen de placeholder por la nueva imagen
  imagenGato.src = nuevaImagen.src;
});






