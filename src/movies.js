const myFunction1 = async () => {
	try {
		console.log('---myFunction1---');
		const response = await fetch('http://localhost:3011/movies/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		console.log('--fetch:myFunction1--');
		const data = await response.json();
		console.log(data);
		let html = '';
		data.forEach(element => {
			html += htmlNewsegment(element)
			let container = document.querySelector('.movies')
			container.innerHTML = html;
		});
		document.querySelectorAll('.form__input-group').forEach(el => {
			el.style.display = 'none'
		})
	}
	catch (err) {
		console.log(err);
	}
}

const myFunction2 = async () => {
	let id = prompt('ID: ');
	try {
		console.log('---myFunction2---');
		const response = await fetch('http://localhost:3011/movies/' + id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data);
		let html = '';
		html += htmlNewsegment(data)
		let container = document.querySelector('.movies')
		container.innerHTML = html;
		document.querySelectorAll('.form__input-group').forEach(el => {
			el.style.display = 'none'
		})
	}
	catch (err) {
		console.log(err);
	}
}

const myFunction3 = async () => {
	let key = prompt('Clave: ');
	let value = prompt('Valor: ');
	try {
		console.log('---myFunction3---');
		const response = await fetch('http://localhost:3011/movies/search', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				key: key,
				value: value
			})
		});
		const data = await response.json();
		console.log(data);

		let html = '';
		data.forEach(element => {
			html += htmlNewsegment(element)
			let container = document.querySelector('.movies')
			container.innerHTML = html;
		});
		document.querySelectorAll('.form__input-group').forEach(el => {
			el.style.display = 'none'
		})


	}
	catch (err) {
		console.log(err);
	}
}



function htmlNewsegment(movie) {
	//template

	return `<div class="movie">
	<h2>${movie.title}</h2>
<p>${movie.genres}</p>
<p>${movie.year}</p>
<p>${movie.director}</p>
</div>`;

}