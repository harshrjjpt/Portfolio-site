/* SCROLL FEATURE */

var navmenu = document.querySelectorAll('#nav li a');
var interval;
console.log(navmenu);

for(var i = 0; i<navmenu.length; i++) {
	navmenu[i].addEventListener('click', function(event) {
		event.preventDefault();
		var targetSectionID = this.textContent.trim().toLowerCase();
		var targetSection = document.getElementById(targetSectionID);
        
        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 5);
    });
}

function scrollVertically(targetSection) {
	var x = 0;
	var targetSectionCoordinate = targetSection.getBoundingClientRect();
	    if(x >= targetSectionCoordinate.y) {
				clearInterval(interval);
				return;
			}
			x+=10;
			window.scrollBy(0,10);
		}




