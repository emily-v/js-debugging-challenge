function readyFunction(){
	var checkInt = setInterval(function() {
		var perc = parseFloat(document.getElementById('myProgressBar').getAttribute('aria-valuenow'));
		perc += (100-perc);
		if (perc > 99.99) {
			clearInterval(checkInt);
			document.getElementById('theAlert').style.display = "initial";
		}
		document.getElementById('myProgressBar').style.width = perc+'%';
	}, 750);
}