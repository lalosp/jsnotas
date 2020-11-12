// Para conectarme con los botones
const btnNuevaNota = document.getElementById('btnNuevaNota');
const btnBorrar = document.getElementById('btnBorrar');
const btnGuardar = document.getElementById('btnGuardar');

// Para conectarme con los elementos de las notas
const listaNotas = document.getElementById('listaNotas');
const tituloNota = document.getElementById('tituloNota');
const areaTxt = document.getElementById('areaTxt');


function inicializar() {
	//window.localStorage.clear();
	crearNotaMuestra();
	dibujar();
	listaNotas.click();
}

function crearNotaMuestra() {
	let titulo = 'Nota muestra';
	let texto = 'Esta es una nota muestra';
	window.localStorage.setItem(titulo, texto);
}

function dibujar() {
	redibujar();
}

function redibujar() {
	for (var opcion = listaNotas.length - 1; opcion >= 0; opcion--) {
		listaNotas.remove(opcion);
	}

	for (var indice = 0; indice < window.localStorage.length; indice++) {
		var nota = document.createElement('option');
		nota.value = indice;
		nota.text = window.localStorage.key(indice);
		listaNotas.append(nota);
	}	
}

btnNuevaNota.onclick = function crearNota() {
	tituloNota.value='';
	areaTxt.value='';
	tituloNota.focus();
}

btnBorrar.onclick = function borrarNota() {
	window.localStorage.removeItem(tituloNota.value);	
	tituloNota.value = '';
	areaTxt.value = '';
	redibujar();	
}

btnGuardar.onclick = function guardarNota() {
	window.localStorage.setItem(tituloNota.value, areaTxt.value);
	redibujar();
}

listaNotas.onclick = function mostrarNota() {
	tituloNota.value = window.localStorage.key(parseInt(listaNotas.value));
	areaTxt.value = window.localStorage.getItem(tituloNota.value);
}

inicializar();
