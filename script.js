//about animation onScroll//
window.addEventListener("scroll", function(){
    var content = document.querySelector("#about");
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /1; 
    if (contentPosition < screenPosition) {
        content.classList.add("active")
    }else {
        content.classList.remove("active");
    }
});

//skills animation onScroll//
window.addEventListener("scroll", function(){
    var content = document.querySelector("#skills");
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /1.1; 
    if (contentPosition < screenPosition) {
        content.classList.add("active")
    }else {
        content.classList.remove("active");
    }
});

//project animation onScroll//
window.addEventListener("scroll", function(){
    var content = document.querySelector("#project");
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight /1.1; 
    if (contentPosition < screenPosition) {
        content.classList.add("active")
    }else {
        content.classList.remove("active");
    }
});

//BackToTop onScroll//
var toTop = document.querySelector(".to-top");
window.addEventListener("scroll", function() {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active");
	}
	else {
		toTop.classList.remove("active");
	}
});














