const btnAgregar = document.querySelector(".btn");
const lista = document.querySelector(".lista");


lista.addEventListener('click', (e) => {

	if (e.target && e.target.tagName === "SPAN") {
		e.target.classList.toggle("activo");
	}
});


let contador = 4;

btnAgregar.addEventListener('click', () => {

	const elemento = ` 
		<span class="item">Elemento ${contador}
			<i class="fas fa-check-square"></i>
		</span>
	`;

	lista.innerHTML += elemento;
	contador++;
});