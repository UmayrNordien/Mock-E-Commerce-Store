//NAVBAR|MENU FUNCTIONALITY 
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

//MENU CLICK EVENT
menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};

const sr = ScrollReveal ({
	distance: '15px',
	duration: 2000,
	reset: true
})

//HOME PAGE TEXT DELAY (SCROLL REVEAL)
sr.reveal('.home-text, .cta-text, .main-contact',{delay: 400, origin:'center'}) //home section, sale banner section and contact section text display delay and display transition (long) coming from the center

