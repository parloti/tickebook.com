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
	var size1 = document.querySelectorAll("li.manual li").length;
	var size2 = document.querySelectorAll("li.manual script").length;
	var size3 = document.querySelectorAll("li.manual .ducklett-popup_wrapper").length;
	
	if (size1 === size2 && size1 === size3) {
		document.querySelectorAll("li.manual li").forEach(function (element, index) {
			console.log(element, index);
			console.log();
			document.querySelector("ul li.manual").parentNode.appendChild(element);
			document.querySelector("ul li.manual").parentNode.appendChild(document.querySelector("ul li.manual .ducklett-popup_wrapper"));
			document.querySelector("ul li.manual").parentNode.appendChild(document.querySelector("ul li.manual script"));
			document.querySelector("ul li.manual").parentNode.removeChild(document.querySelector("ul li.manual"));
		})
	}
	else {
		setTimeout(addOffer, 100);
	}
}
document.addEventListener("DOMContentLoaded", addLi);
document.addEventListener("DOMContentLoaded", addOffer);