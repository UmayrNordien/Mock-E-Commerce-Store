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



//////////////////////////////////////



// // Link a card
// let wrapper = document.querySelector('.card-wrapper');
// // Fetch data from the api
// async function fetchData() {
//     const data = await fetch('https://randomuser.me/api?results=100');
//     const results = await data.json();
//     return results.results;
// }
// // Read data 
// async function readData() {
//     let results = await fetchData();
//     /*
//         forEach( function )
//     */
//     results.forEach((record)=>{
//         wrapper.innerHTML += `
//         <div class="card">
//             <img src="${record.picture.large}" class="card-img-top" alt="$      {record.name.first}">
//             <div class="card-body">
//                 <h5 class="card-title">${record.name.title} ${record.name.first} ${record.name.last}</h5>
//                 <p class="card-text">Gender: ${record.gender} and am ${record.dob.age} years old</p>
//             </div>
//         </div>
//         `
//     })
// }

// readData();
