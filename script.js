function compress(){
	var str = document.getElementById("entry-field").value;
	str = str.replace(/\/\/.*/g, '');
	str = str.replace(/\n|\t/g, '');
	str = str.replace(/\s{2,}/g, ' ');
	str = str.replace(/(\/+\*+.*?\*+\/)|(\/+\*+.*)/g, '');
	str = str.replace(/;+\s*}/g, '}');
	str = str.replace(/\s*;+\s*;/g, ';');
	str = str.replace(/\s*:+\s*/g, ':');
	document.getElementById('output-field').value = str;
}