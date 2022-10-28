let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

const slides = document.querySelectorAll('.slide');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;


const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    } 
    else{
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}
const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    } 
    else{
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

next.addEventListener('click', e => {
    nextSlide();
})

prev.addEventListener('click', e => {
    prevSlide();
})


setInterval(() => {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    //24 hour clock to 12 hour clock
    if(h>12){  
        h = h-12;
        ampm.innerHTML = "PM";
    }
    else{
        ampm.innerHTML = "AM";
    }

    //add zero before single digit
    h = (h<10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;


    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

}, 1000)


