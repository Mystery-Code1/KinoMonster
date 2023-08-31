window.onload = function() {

	const window_width = window.innerWidth;
	const window_height = window.innerHeight;



	function offset(elem) {
		const rect = elem.getBoundingClientRect();
			let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	} 
	

	var mainNavBar = document.querySelectorAll(".navigation")
	var header = document.querySelectorAll(".header")

	if (mainNavBar.length > 0) {

		const elem_height_y = offset(mainNavBar[0]).top;

		window.onscroll = function() {
			let scroll_position = window.scrollY;

			if (scroll_position > elem_height_y) {
				mainNavBar[0].classList.add("_fixed_navigation")
				header[0].style.marginBottom = "1.5rem"
			} else {
				mainNavBar[0].classList.remove("_fixed_navigation")
				header[0].style.marginBottom = "0rem"
			}
			// console.log(String(mainNavBar.length) + " Высота нав. бара: " + String(elem_height_y) + " Позиция скролла: " + String(scroll_position))
		}
	} 
}