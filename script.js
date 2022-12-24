const container = document.getElementById('listContainer');
const list = document.querySelector('.list'); 

container.addEventListener( 'click', (e) => {

	if (e.target.className == 'listContainer__btnAdd') {
		list.innerHTML += 
		`<li class="list__item">Elemento ${
			list.children.length == 0 ? 1:
			parseInt(list.lastElementChild.textContent.slice(-1)) + 1
		}<i class="fa-solid fa-xmark"></i></li>`;
	}

	if (e.target.className == 'fa-solid fa-xmark') {
		list.removeChild(e.target.parentElement);
	}
});