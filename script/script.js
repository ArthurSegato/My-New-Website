let open = false;
function toggleMenu() {
	let btn = document.getElementById('menu-btn');
	btn.classList.toggle("change");
	if (open == false) {
		document.getElementById("sideNav").style.width = "100%";
		open = true;
	}else{
		document.getElementById("sideNav").style.width = "0%";
		open = false;
	}
}
let links = document.getElementsByTagName("a");
Array.prototype.forEach.call(links, function(elem, index) {
    let elemAttr = elem.getAttribute("href");
    if (elemAttr && elemAttr.includes("#")) {
        elem.addEventListener("click", function(ev) {
            ev.preventDefault();
            document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    }
});