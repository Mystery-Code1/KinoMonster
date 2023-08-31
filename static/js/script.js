// window onload event
window.addEventListener('load', page_load, false);
function page_load() {
	//checking the saved (in localstorage) language settings
	if (localStorage.getItem("Lang") == "Eng") {
		change_language()
	}

	// define top offset
	function offset(elem) {
		const rect = elem.getBoundingClientRect();
			let scrollLeft = window.scrollX || document.documentElement.scrollLeft; 
			let scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	} 

	var mainNavBar = document.querySelectorAll(".navigation");
	var header = document.querySelectorAll(".header");
	
	//pin navigation to the top of the screen
	if (mainNavBar.length > 0) {

		const elemHeightY = offset(mainNavBar[0]).top;

		window.onscroll = function() {
			let scrollPosition = window.scrollY;
			//if scroll pos > header height: navigation {position: fixed}
			if (scrollPosition + 10 >= elemHeightY) {
				mainNavBar[0].classList.add("_fixed_navigation");
				header[0].style.marginBottom = "1.2rem";
			} else {
				mainNavBar[0].classList.remove("_fixed_navigation");
				header[0].style.marginBottom = "0em";
			}
			//console.log(String(mainNavBar.length) + " header height: " + String(elemHeightY) + " scroll position: " + String(scrollPosition))
		}
	}

	//setting the position of language panel
	const lang__panel = document.querySelectorAll("#lang__panel");
	if (lang__panel.length > 0) {
		const lang__panelRect = lang__panel[0].getBoundingClientRect();
		lang__panel[0].style.visibility = "visible";
		lang__panel[0].style.marginTop = `calc(100vh - ${lang__panelRect.height}px)`;
		lang__panel[0].style.marginLeft = `calc(100vw - ${lang__panelRect.width}px - 70px)`;
	}

	//change language event (button onclick)
	const change__lang_btn = document.querySelectorAll(".change__lang-btn")
	if (change__lang_btn.length > 0) {
		change__lang_btn[0].onclick = function() {
			// change localstorage item
			if (localStorage.getItem("Lang") != "Eng") {

				localStorage.setItem("Lang", "Eng")
			} else {
				localStorage.setItem("Lang", "Ru")
			}

			change_language()
		}
	}
	function change_language() {
		//get translate data from translate.json
		fetch("/static/js/translate.json").then(response => response.json()).then(function(translate_table) {
			//translate text elements
			document.querySelectorAll("[data-content]").forEach((elem) => change_text(elem))
			function change_text(elem) {
			
				for (var data_caret = 0; data_caret < translate_table["data-content"].length; data_caret++) {

					eng_label = translate_table["data-content"][data_caret][1]
					rus_label = translate_table["data-content"][data_caret][0]
					
					if (elem.innerHTML == rus_label) {
						elem.innerHTML = eng_label
						break
					}
					else if (elem.innerHTML == eng_label) {
						elem.innerHTML = rus_label
						break
					}
				}
			}

			//translate input elements
			function change_input(type, attribute) {
				const element_type = `data-content-${type}`
				document.querySelectorAll(`[${element_type}]`).forEach((elem) => change_element(elem))
				function change_element(elem) {
					for (var data_caret = 0; data_caret < translate_table[element_type].length; data_caret++) {
						
						eng_label = translate_table[element_type][data_caret][1]
						rus_label = translate_table[element_type][data_caret][0]
						if (elem.getAttribute(attribute) == rus_label) {
							elem.setAttribute(attribute, eng_label)
							break
						}
						else if (elem.getAttribute(attribute) == eng_label) {
							elem.setAttribute(attribute, rus_label)
							break
						}
					}
				}
			}
			change_input("btn", "value")
			change_input("placeholder", "placeholder")
		})
	}
}