

$(document).ready(function() {
    setInterval ('cursorAnimation()', 800);
});

// This is a animation fucntion
function cursorAnimation() {
	$('#cursor').animate({
	    opacity: 0
	}, 'fast', 'swing').animate({
	    opacity: 1
	}, 'fast', 'swing');
}


function myFunction() {
    document.getElementById("demo").innerHTML += "P: (361)815-6729";
	document.getElementById("demo").innerHTML += "<br>";
    document.getElementById("demo").innerHTML += "E: RudyMedina18@yahoo.com";
	document.getElementById("demo").innerHTML += "<br>";
}
