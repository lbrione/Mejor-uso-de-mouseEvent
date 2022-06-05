const container = document.getElementById('container');
let element_counter = 4;


container.addEventListener( 'click', (e) => {

	if ( e.target.className == 'cont__btn' ) {
		container.lastElementChild.innerHTML += 
		`<span class="cont__list-item">Elemento ${element_counter}<i class="fa-solid fa-xmark"></i></span>`;
		element_counter++;
	}	

	if ( e.target.className == 'fa-solid fa-xmark' ) {
		container.lastElementChild.removeChild( e.target.parentElement );
		element_counter--;
	}
});