menu = document.querySelector('#mobile-menu');
menuLinks = document.querySelector('.nav_bar_menu');

menu.addEventListener('click',function() {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
})