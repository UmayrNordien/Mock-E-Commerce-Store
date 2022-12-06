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
	duration: 1800,
	reset: true
})

//HOME PAGE TEXT DELAY (SCROLL REVEAL)
sr.reveal('.home-text, .cta-text, .main-contact',{delay: 100, origin:'center'}) //home section, sale banner section and contact section text display delay and display transition (long) coming from the center



//////////////////////////////////////


// PRODUCT DATA: 
let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
	//t-shirts
    {
        id: 1,
        productName: "FadedCrewNeckPurpleT",
		size: "L",
		quantity: "2",
		image:"https://i.postimg.cc/P56qnJ4S/Crew-Neck-1.jpg",
		price:"R800"
    },
	//sweatshirts
	{
        id: 2,
        productName: "GraphicSweatShirt",
		size: "M",
		quantity: "3",
		image:"https://i.postimg.cc/L8tD8d7Y/Graphic-Sweat-Shirt-1.jpg",
		price:"R690"
    },
	//jackets
	{
        id: 3,
        productName: "CarharttBonesJacket",
		size: "L",
		quantity: "1",
		image:"https://i.postimg.cc/1XzWTW5C/Carhartt-Bones-1.jpg",
		price:"R2200"
    },
	//hoodies
	{
        id: 4,
        productName: "NikePurpleFlameHoodie",
		size: "M",
		quantity: "4",
		image:"https://i.postimg.cc/tgNGGMpp/Nike-Purple-Flames.jpg",
		price:"R2200"
    },
	//pants
	{
        id: 5,
        productName: "GraphicSWPants",
		size: "XL",
		quantity: "1",
		image:"https://i.postimg.cc/cCfd6Mnc/275834450-542228100497493-5314424466359396574-n.jpg",
		price:"R1200"
    },
	//other
	{
        id: 6,
        productName: "SkiMask",
		size: "M",
		quanintity: "6",
		image:"https://i.postimg.cc/DfDT3Nt3/Ski-Mask-1.jpg",
		price:"R600"
    }
];

let wrapper = document.querySelector('.item');

function displayProducts() {
	products.forEach((products) => {
		document.querySelector('#products').innerHTML +=`<div class="card mb-3" style="max-width: 540px;">
		<div class="row  g-0">
		  <div class="col-md-4">
			<img src="${products.image}" class="img-fluid rounded-start">
		  </div>
		  <div class="col-md-8">
			<div class="card-body">
			  <h5 class="card-title">${products.productName}</h5>
			  <div class="card-text">${products.image}</div>
			  <p class="card-text"><small class="text-muted">${products.price}</small></p>
			</div>
		  </div>
		</div>
	  </div>`
	})
};
displayProducts()
