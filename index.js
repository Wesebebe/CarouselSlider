//select html elements
const carouselContainer = document.querySelector(".carouselContainer");  
const slides = document.querySelectorAll('.slides');  
const next = document.querySelector('#next');  
const prev = document.querySelector('#prev');  
let counter = 1 ;  
const size = slides[0].clientWidth;  