let preload = new Array();

preload[0] = "images/sao-paulo.jpg";
preload[1] = "images/sky-plane.jpg";
preload[2] = "images/tokyo.jpg";

let loadedimages = new Array();

for(let i = 0; i < preload.length; i++) {
	loadedimages[i] = new Image();
	loadedimages[i].src = preload[i];
}