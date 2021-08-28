// grab everything we need
const scrollLine = document.querySelector('.scroll-line');

// define all function w'll need
function fillScrollLine(){
    const window_height = window.innerHeight;
    const full_height   = document.body.clientHeight;
    const scrolled = window.scrollY;
    let percent_scrolled = (scrolled / (full_height - window_height)) * 100;

    scrollLine.style.width = `${percent_scrolled}%`;
}

// add event listeners 
window.addEventListener('scroll', fillScrollLine);
window.addEventListener('scroll', debounce(function(){

}, 20));

function debounce(func, wait=15, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};