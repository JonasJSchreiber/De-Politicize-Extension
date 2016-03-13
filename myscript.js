window.addEventListener ("load", myMain, false);

function getArray() {
	var array = ['donald', 'trump', 'rubio', 'cruz', 'hillary', 'clinton', 'bernie', 'primary', 'primaries', 'democrat', 'republican', 'delegate', 'democratic', 'election', 'caucus', 'candidate', 'politics']
	return array;
}

function replaceElements() {
	var array = getArray();
	var regex = "";
	var replacement = "...";
	for	(index = 0; index < array.length; index++) {
		regex += array[index] + "|";
	}
	regex = regex.substring(0, regex.length - 1);
	var matcher = new RegExp(regex, 'ig');
	document.body.innerHTML = document.body.innerHTML.replace(matcher, replacement);
}

function myMain (evt) {
	setInterval(replaceElements, 3000);
}