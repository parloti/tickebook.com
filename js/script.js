var toggle = document.getElementsByClassName('navbar-toggle')[0],
	collapse = document.getElementsByClassName('navbar-collapse')[0],
	dropdowns = document.getElementsByClassName('dropdown');
;

// Toggle if navbar menu is open or closed
function toggleMenu() {
	collapse.classList.toggle('collapse');
	collapse.classList.toggle('in');
}

// Close all dropdown menus
function closeMenus() {
	for (var j = 0; j < dropdowns.length; j++) {
		dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
		dropdowns[j].classList.remove('open');
	}
}

// Add click handling to dropdowns
for (var i = 0; i < dropdowns.length; i++) {
	dropdowns[i].addEventListener('click', function () {
		if (document.body.clientWidth < 768) {
			var open = this.classList.contains('open');
			closeMenus();
			if (!open) {
				this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
				this.classList.toggle('open');
			}
		}
	});
}

// Close dropdowns when screen becomes big enough to switch to open by hover
function closeMenusOnResize() {
	if (document.body.clientWidth >= 768) {
		closeMenus();
		collapse.classList.add('collapse');
		collapse.classList.remove('in');
	}
}

// Event listeners
window.addEventListener('resize', closeMenusOnResize, false);
toggle.addEventListener('click', toggleMenu, false);

document.addEventListener("DOMContentLoaded", addLi);
document.addEventListener("DOMContentLoaded", addOffer);
function addLi() {
	var size = document.querySelectorAll(".mewtwo-tabs_list li").length;
	if (size === 2) {
		var desktop = '<br id="break" class="break"><li id="first" class="mewtwo-tabs-tabs_list__item mewtwo-tabs-tabs_list__item--count3 mewtwo-tabs-tabs_list__item--hotels"><span><a href="https://www.safeescapeholidays.com/holidaypackages" target="_blank">HOLIDAYS PACKAGES</a></span></li><li class="mewtwo-tabs-tabs_list__item mewtwo-tabs-tabs_list__item--count4 mewtwo-tabs-tabs_list__item--hotels" ><span><a href="https://www.safeescapeholidays.com/contact-us" target="_blank">CONTACT US</a></span></li>';
		var br = document.createElement("br");
		br.id = "break";
		br.className = "break";
		document.querySelector(".mewtwo-tabs_list").appendChild(br);
		
		var li = document.createElement("li");
		li.id = "first";
		li.className = "mewtwo-tabs-tabs_list__item mewtwo-tabs-tabs_list__item--count3 mewtwo-tabs-tabs_list__item--hotels";
		document.querySelector(".mewtwo-tabs_list").appendChild(li);
		
		var span = document.createElement("span");
		li.appendChild(span);
		
		var a = document.createElement("a");
		a.href = "https://www.safeescapeholidays.com/holidaypackages";
		a.target = "_blank";
		a.textContent = "HOLIDAYS PACKAGES"
		span.appendChild(a);
		
		
		var li2 = document.createElement("li");
		li2.className = "mewtwo-tabs-tabs_list__item mewtwo-tabs-tabs_list__item--count4 mewtwo-tabs-tabs_list__item--hotels";
		document.querySelector(".mewtwo-tabs_list").appendChild(li2);
		
		var span2 = document.createElement("span");
		li2.appendChild(span2);
		
		var a2 = document.createElement("a");
		a2.href = "https://www.safeescapeholidays.com/contact-us";
		a2.target = "_blank";
		a2.textContent = "CONTACT US"
		span2.appendChild(a2);
	}
	else if (!size || size < 2) {
		setTimeout(addLi, 100);
	}
}
function addOffer() {
	var size1 = document.querySelectorAll("li.xxxxx li").length;
	var size2 = document.querySelectorAll("li.xxxxx script").length;
	var size3 = document.querySelectorAll("li.xxxxx .ducklett-popup_wrapper").length;
	
	if (size1 === size2 && size1 === size3) {
		document.querySelectorAll("li.xxxxx li").forEach(function (element, index) {
			console.log(element, index);
			console.log();
			document.querySelector("ul li.xxxxx").parentNode.appendChild(element);
			document.querySelector("ul li.xxxxx").parentNode.appendChild(document.querySelector("ul li.xxxxx .ducklett-popup_wrapper"));
			document.querySelector("ul li.xxxxx").parentNode.appendChild(document.querySelector("ul li.xxxxx script"));
			document.querySelector("ul li.xxxxx").parentNode.removeChild(document.querySelector("ul li.xxxxx"));
		})
	}
	else {
		setTimeout(addOffer, 100);
	}
}