//local reviews data
const reviews = [
		{
			id:1,
			name : "Natasha Romanaff",
			job:"Assasin",
			img:"https://c4.wallpaperflare.com/wallpaper/964/895/582/black-widow-4k-scarlett-johansson-natasha-romanoff-wallpaper-preview.jpg",
			text: "I'm a fictional character primarily portrayed by Scarlett Johansson in the Marvel Cinematic Universe(MCU) media franchise-- based on the Marvel Comics Character of the same name",
		},
		{
			id:2,
			name:"Wanda Maximoff",
			job:"Tantrik Spell",
			img:"Wanda.jpg",
			text:"I am Wanda Maximoff. I manipulates people's perceptions, makes them hallucinate. You break the rules and become a hero, I do it and I become the enemy. ",
		},

		{
			id:3,
			name:"Thor",
			job:"Urumula Dora",
			img:"Thor2.jpg",
			text:"Thor is a 2011 American superhero film based on the Marvel Comics Character of the same name. Produced by Marvel Studios and distributed by paramount pictures.",

		},
		{
			id:4,
			name:"Ajay",
			job : "Software Developer",
			img : "Ajay.jpg",
			text :"Ajay was born in Siddipet,He completed his formal education in Siddipet and Intermediate in Hyderabad and Graduation in Vardhaman College Of Engineering. Started his journey has a web Developer!!",
		}

	];

//select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener('DOMContentLoaded',function(){

	const item = reviews[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
});

//show person based on item

function showPerson(person){
	const item = reviews[person];
	img.src = item.img;
	author.textContent = item.name;
	info.textContent = item.text;
	job.textContent = item.job;


}

//show next person
nextBtn.addEventListener('click',function () {
	// body...
	currentItem++;
	if(currentItem>reviews.length -1){
		currentItem = 0;
	}
	showPerson(currentItem);
});

//show prev person

prevBtn.addEventListener('click',function(){
	currentItem--;
	if(currentItem<0){
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
});

//random person
randomBtn.addEventListener('click',function () {
	// body...
	console.log('Hello');

	currentItem = Math.floor(Math.random()*reviews.length);
	showPerson(currentItem);
});
