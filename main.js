// ================= BIKE ENGINE SOUND =================
const bikeSound = new Audio('audio/r1.mp3');
const sound = document.getElementById('btn-sound');

sound.addEventListener('click',()=> {
    bikeSound.play()
})

// ================= SHOW MENU =================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// ================= MENU SHOW =================
// Validate if constant exits
if(navToggle) {
    navToggle.addEventListener('click',function(){
        navMenu.classList.add('show-menu');
    })
}
// ================= MENU HIDDEN =================
// Validate if cosntant exits
if(navClose) {
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

// ================= Remove Menu Mobile =================
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav__link, we remove the show menu
    navMenu.classList.remove('show-menu');
}
navLink.forEach(function(e){
    e.addEventListener('click',linkAction)
})

// ================= CHANGE BACKGROUND HEADER =================
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater then 50 veiwport height, add the scrool-header class to the header tag
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    }
    else{ 
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll',scrollHeader);

// ================= Popular Swipper =================
let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
        slidesPerView: 3,
        },
        1024: {
        spaceBetween: 48,
        },
    },
});
// ================= SHOW SCROLL UP =================
function scrollup() {
    const scrollup = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height add the show-scroll class to the a tag with the scroll
    if(this.scrollY >=350) { 
        scrollup.classList.add('show-scroll');
    }
    else {
        scrollup.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollup)

// ================= SCROLL SECTIONS ACTIVE LINK =================
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ================= SCROLL REVEAL ANIMATION =================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home__title, .popular__container, .f__img')
sr.reveal('.home__subtitle', {delay: 500})
sr.reveal('.home__elec', {delay: 600})
sr.reveal('.home__img', {delay: 800})
sr.reveal('.home__bike-data', {delay: 900, interval: 100, origin:'bottom'})
sr.reveal('.home__button', {delay: 1000, origin:'bottom'})
sr.reveal('.about__group', {origin:'left'})
sr.reveal('.about__data', {origin:'right'})
sr.reveal('.features__card',{interval: 300})
sr.reveal('.footer__content',{interval: 100})