window.addEventListener ("load", myMain, false);

function getArray() {
	var array = ['Donald', 'Trump', 'donald', 'trump', 'Rubio', 'Cruz', 'Hillary', 'Clinton', 'Bernie', 'Primary', 'primary', 'Primaries', 'primaries', 'Democrat', 'democrat', 'Republican', 'republican', 'Delegate', 'delegate', 'Democratic', 'democratic', 'Election', 'election', 'Caucus', 'caucus', 'Candidate', 'candidate', 'Politics', 'politics']
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
	var matcher = new RegExp(regex, 'g');
	document.body.innerHTML = document.body.innerHTML.replace(matcher, replacement);
}

function myMain (evt) {
	setInterval(replaceElements, 5000);
}