$(document).ready(function(){
	let element = document.getElementById('navbar')
	window.addEventListener('scroll', function() { 
		let positionY = window.scrollY
		if (positionY > 50) {
			//si es verdadero
			element.classList.add('bg-ligth')
			element.classList.add('navbar-ligth')
			element.classList.remove('navbar-dark')
		} else{
			//si es falso
			element.classList.remove('bg-ligth')
			element.classList.add('navbar-dark')
		}	
	})    
})
